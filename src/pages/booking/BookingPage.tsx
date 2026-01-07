import { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import Navbar from "@/components/Navbar";
import TBFFFooter from "@/components/common/TBFFFooter";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/**
 * ✅ Booking config by "country slug" in the URL.
 * Example URL: /#/booking/colombia  -> slug === "colombia"
 */
const BOOKING_CONFIG: Record<
  string,
  {
    countryName: string;
    variantId: string;
    requiresPassport: boolean;
    shopifyDomain: string;
  }
> = {
  colombia: {
    countryName: "Colombia",
    variantId: "45199567650995", // existing Colombia variant
    requiresPassport: true,
    shopifyDomain: "tbff.imaginebeyondtravel.com",
  },

  japan: {
    countryName: "Japan",
    variantId: "45208545362099", // ✅ YOUR NEW JAPAN VARIANT
    requiresPassport: false,
    shopifyDomain: "tbff.imaginebeyondtravel.com",
  },
};

function buildShopifyCartUrl(params: {
  shopifyDomain: string;
  variantId: string;
  quantity?: number;
  attributes: Record<string, string>;
}) {
  const { shopifyDomain, variantId, quantity = 1, attributes } = params;

  const baseUrl = `https://${shopifyDomain}/cart/${variantId}:${quantity}`;

  const qs = new URLSearchParams();
  Object.entries(attributes).forEach(([key, value]) => {
    qs.append(`attributes[${key}]`, value);
  });

  return `${baseUrl}?${qs.toString()}`;
}

/**
 * ✅ Base schema
 */
const baseSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  mobile: z
    .string()
    .trim()
    .min(1, "Mobile number is required")
    .max(30, "Mobile number is too long"),
  instagram: z
    .string()
    .trim()
    .max(50, "Instagram handle is too long")
    .optional()
    .or(z.literal("")),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

/**
 * ✅ Passport schema used only when requiresPassport=true
 * (DOB + Expiry are stored as YYYY-MM-DD strings)
 */
const passportSchema = z.object({
  passportFirstNameGivenName: z
    .string()
    .trim()
    .min(1, "First name / given name is required")
    .max(100, "First name is too long"),
  passportSurname: z
    .string()
    .trim()
    .min(1, "Surname is required")
    .max(100, "Surname is too long"),

  passportNumber: z
    .string()
    .trim()
    .min(1, "Passport number is required")
    .max(30, "Passport number is too long"),
  passportNationality: z
    .string()
    .trim()
    .min(1, "Nationality is required")
    .max(60, "Nationality is too long"),
  passportDateOfBirth: z
    .string()
    .trim()
    .min(1, "Date of birth is required")
    .max(30, "DOB is too long"),
  passportExpiryDate: z
    .string()
    .trim()
    .min(1, "Expiry date is required")
    .max(30, "Expiry is too long"),
});

type BaseForm = z.infer<typeof baseSchema>;
type PassportForm = z.infer<typeof passportSchema>;

type BookingFormData = BaseForm &
  Partial<PassportForm> & {
    [k: string]: any;
  };

function parseYMD(value?: string) {
  if (!value) return undefined;
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return undefined;

  const dt = new Date(y, m - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) {
    return undefined;
  }
  return dt;
}

/**
 * Date picker field (calendar popover)
 * Stores value in the form as "YYYY-MM-DD"
 *
 * ✅ This version stacks Month and Year like:
 * Month:
 * [December ▼]
 * Year:
 * [2025 ▼]
 */
function DatePickerField(props: {
  label: string;
  placeholder: string;
  name: "passportDateOfBirth" | "passportExpiryDate";
  control: any;
  fromYear: number;
  toYear: number;
}) {
  const { label, placeholder, name, control, fromYear, toYear } = props;

  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedDate = parseYMD(field.value);

        return (
          <FormItem>
            <FormLabel>{label} *</FormLabel>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <button
                    type="button"
                    className={cn(
                      "flex h-11 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <span>
                      {selectedDate ? format(selectedDate, "PPP") : placeholder}
                    </span>
                    <CalendarIcon className="h-4 w-4 opacity-60" />
                  </button>
                </FormControl>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    if (!date) return;

                    const y = date.getFullYear();
                    const m = String(date.getMonth() + 1).padStart(2, "0");
                    const d = String(date.getDate()).padStart(2, "0");
                    field.onChange(`${y}-${m}-${d}`);

                    // ✅ close popover after a day is picked
                    setOpen(false);
                  }}
                  captionLayout="dropdown"
                  fromYear={fromYear}
                  toYear={toYear}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}



export default function BookingPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ ADD THIS — scroll to top when booking page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // ✅ END ADD

  const config = slug ? BOOKING_CONFIG[slug] : undefined;

  const schema = useMemo(() => {
    if (config?.requiresPassport) {
      return baseSchema.and(passportSchema);
    }
    return baseSchema;
  }, [config?.requiresPassport]);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      instagram: "",
      termsAccepted: undefined,

      passportFirstNameGivenName: "",
      passportSurname: "",
      passportNumber: "",
      passportNationality: "",
      passportDateOfBirth: "",
      passportExpiryDate: "",
    },
    mode: "onChange",
  });

  const { isValid } = form.formState;

  if (!config) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-xl mx-auto bg-card border rounded-xl p-6">
            <h1 className="text-xl font-bold text-foreground mb-2">
              Booking link not found
            </h1>
            <p className="text-muted-foreground mb-6">
              This booking page isn’t configured yet.
            </p>
            <Button onClick={() => navigate("/")} className="w-full">
              Go to homepage
            </Button>
          </div>
        </main>
        <TBFFFooter />
      </div>
    );
  }

  const onSubmit = (data: BookingFormData) => {
    setIsSubmitting(true);

    const attributes: Record<string, string> = {
      Trip: config.countryName,
      "Full Name": data.fullName,
      Email: data.email,
      Mobile: data.mobile,
      Instagram: data.instagram?.trim() ? data.instagram.trim() : "Not provided",
      "Terms Accepted": "Yes",
    };

    if (config.requiresPassport) {
      attributes["Passport First Name / Given Name"] =
        data.passportFirstNameGivenName || "";
      attributes["Passport Surname"] = data.passportSurname || "";
      attributes["Passport Number"] = data.passportNumber || "";
      attributes["Passport Nationality"] = data.passportNationality || "";
      attributes["Passport Date of Birth"] = data.passportDateOfBirth || "";
      attributes["Passport Expiry Date"] = data.passportExpiryDate || "";
    }

    const checkoutUrl = buildShopifyCartUrl({
      shopifyDomain: config.shopifyDomain,
      variantId: config.variantId,
      quantity: 1,
      attributes,
    });

    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#F4909F] mb-2">
          Complete Your Booking – {config.countryName}
        </h1>

            <p className="text-muted-foreground">
              Fill in your details to continue to payment.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@email.com"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 234 567 8900"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram Handle (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="@yourusername"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                {config.requiresPassport && (
                  <div className="pt-4 border-t border-border">
                    <h2 className="text-base font-semibold text-foreground mb-2">
                      Passport Details
                    </h2>

                    <p className="text-sm text-muted-foreground mb-4">
                      Required for internal flights. This information is attached
                      to your booking only.
                      <br />
                      Enter middle name where it is displayed on your passport.
                    </p>

                    <div className="space-y-5">
                      <FormField
                        control={form.control}
                        name="passportFirstNameGivenName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name / Given Name and middle name IF displayed on passport *</FormLabel>
                            <FormControl>
                              <Input {...field} className="h-11" />
                            </FormControl>
                            <p className="text-xs text-muted-foreground mt-1">
                              As shown on passport
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="passportSurname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Surname *</FormLabel>
                            <FormControl>
                              <Input {...field} className="h-11" />
                            </FormControl>
                            <p className="text-xs text-muted-foreground mt-1">
                              As shown on passport
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />


                      <FormField
                        control={form.control}
                        name="passportNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Passport Number *</FormLabel>
                            <FormControl>
                              <Input {...field} className="h-11" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="passportNationality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nationality *</FormLabel>
                            <FormControl>
                              <Input {...field} className="h-11" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <DatePickerField
                        label="Date of Birth"
                        placeholder="Select date of birth"
                        name="passportDateOfBirth"
                        control={form.control}
                        fromYear={1900}
                        toYear={new Date().getFullYear()}
                      />

                      <DatePickerField
                        label="Passport Expiry Date"
                        placeholder="Select expiry date"
                        name="passportExpiryDate"
                        control={form.control}
                        fromYear={new Date().getFullYear()}
                        toYear={new Date().getFullYear() + 20}
                      />
                    </div>
                  </div>
                )}

<div className="bg-muted/40 border border-border rounded-lg p-4 text-sm text-muted-foreground">
  <strong className="text-foreground">Booking for more than one person?</strong>
  <p className="mt-1">
    Please complete this form for the lead traveler only.
    After booking, email passenger 2+ details to{" "}
    <a
      href="mailto:bookings@imaginebeyondtravel.com"
      className="text-primary font-medium underline"
    >
      bookings@imaginebeyondtravel.com
    </a>
    .
  </p>
</div>


                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                      <FormControl>
                        <Checkbox
  checked={field.value}
  onCheckedChange={field.onChange}
  className="
    border-[#fbddda] hover:border-[#fbddda]
    focus-visible:ring-2 focus-visible:ring-[#fbddda] focus-visible:ring-offset-0
    data-[state=checked]:bg-[#fbddda]
    data-[state=checked]:border-[#fbddda]
    data-[state=checked]:text-[#506345]
  "
/>

                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          I confirm that I have read and agree to the{" "}
                          <a
                            href="/#/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#000000] hover:underline font-medium"
                          >
                            Terms and Conditions
                          </a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
  type="submit"
  className="w-full h-12 text-base font-semibold mt-6 bg-[#fbddda] text-[#506345] hover:bg-[#fbddda]/90"
  disabled={!isValid || isSubmitting}
>

                  {isSubmitting ? "Redirecting..." : "Continue to Payment"}
                </Button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  You will be redirected to Shopify checkout.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <TBFFFooter />
    </div>
  );
}
