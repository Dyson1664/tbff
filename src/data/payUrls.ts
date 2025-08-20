export const payUrls: Record<string, string> = {
  'japan-journey': import.meta.env.VITE_TRIP1_PAY_URL ?? '#',
  'paris-adventure': import.meta.env.VITE_TRIP2_PAY_URL ?? '#',
  'thailand-discovery': import.meta.env.VITE_TRIP3_PAY_URL ?? '#',
  'srilanka-serenity': import.meta.env.VITE_TRIP2_PAY_URL ?? '#',
  'philippines-paradise': import.meta.env.VITE_TRIP2_PAY_URL ?? '#',
  'india-journey': import.meta.env.VITE_TRIP3_PAY_URL ?? '#',
  'bhutan-happiness': import.meta.env.VITE_TRIP1_PAY_URL ?? '#',
  'colombia-adventure': import.meta.env.VITE_TRIP2_PAY_URL ?? '#',
  'vietnam-explorer': import.meta.env.VITE_TRIP3_PAY_URL ?? '#',
};

export const getPayUrl = (id: string) => payUrls[id] || '#';