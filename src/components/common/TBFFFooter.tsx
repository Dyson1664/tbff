import { Link } from "react-router-dom";
import { NAVIGATION_TRIPS } from "@/data/navigation";
import ibtLogo from "@/assets/IBT.png";
import tbffLogo from "@/assets/tbff-logo-3.png";

type FooterColors = {
  bg: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
  accentAlt: string;
};

const DEFAULT_COLORS: FooterColors = {
  bg: "#fbddda", // main background
  text: "#506345",
  muted: "#cbd5cf",
  border: "#334036",
  accent: "#506345", // link hover / accent
  accentAlt: "#506345", // headings
};

interface TBFFFooterProps {
  colors?: Partial<FooterColors>;
}

const TBFFFooter = ({ colors }: TBFFFooterProps) => {
  const c: FooterColors = { ...DEFAULT_COLORS, ...colors };

  return (
    <footer
      className="tbff-footer py-16"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      <style>{`
        .tbff-footer-heading { color: ${c.accentAlt}; }
        .tbff-footer-muted { color: ${c.muted}; }
        .tbff-footer-border { border-color: ${c.border}; }

        .tbff-footer-link { color: ${c.text}; }
        .tbff-footer-link:hover { color: ${c.accent}; }

        .tbff-footer-chip { border-color: ${c.accent}; }
        .tbff-footer-chip:hover {
          background-color: ${c.accent};
          color: ${c.bg};
        }

        /* TBFF socials (brown + invert on hover) */
        .tbff-footer-social-primary {
          border-color: ${c.accent};
          color: ${c.accent};
          background-color: transparent;
        }
        .tbff-footer-social-primary:hover {
          background-color: ${c.accent};
          color: ${c.bg};
        }

        /* IBT teal text */
        .tbff-footer-ibt {
          color: #0ac1be;
        }

        /* IBT socials (teal + invert on hover, same behavior as TBFF) */
        .tbff-footer-social-ibt {
          border-color: #0ac1be;
          color: #0ac1be;
          background-color: transparent;
        }
        .tbff-footer-social-ibt:hover {
          background-color: #0ac1be;
          color: ${c.bg};
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Logos Section */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Travelbff Brand */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="text-xl font-bold tbff-footer-heading">
                    Travelbff
                  </div>
                  <div className="text-sm tracking-wider tbff-footer-heading">
                    Connecting Women Worldwide
                  </div>
                </div>

                <div className="h-24 md:h-28 flex items-center justify-center mb-4">
                  <img
                    src={tbffLogo}
                    alt="Travelbff Logo"
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                {/* TBFF Social Icons */}
                <div className="flex space-x-3 mt-auto">
                  <a
                    href="https://www.tiktok.com/@travelbff"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-8 h-8 rounded-full flex items-center justify-center tbff-footer-social-primary transition-colors border-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.56a8.16 8.16 0 004.77 1.17v-3.4a4.85 4.85 0 01-1-.64z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/travelbffofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full flex items-center justify-center tbff-footer-social-primary transition-colors border-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/travelbff/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full flex items-center justify-center tbff-footer-social-primary transition-colors border-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Imagine Beyond */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="text-xl font-bold tbff-footer-ibt">
                    Imagine Beyond
                  </div>
                  <div className="text-sm tracking-wider tbff-footer-ibt">
                    TRAVEL
                  </div>
                </div>

                <div className="h-24 md:h-28 flex items-center justify-center mb-4">
                  <img
                    src={ibtLogo}
                    alt="Imagine Beyond Travel Logo"
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                {/* IBT Socials (teal + invert on hover) */}
                <div className="flex space-x-3 mt-auto">
                  <a
                    href="https://www.tiktok.com/@imaginebeyondtrav"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2 tbff-footer-social-ibt transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.56a8.16 8.16 0 004.77 1.17v-3.4a4.85 4.85 0 01-1-.64z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61579914740539"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2 tbff-footer-social-ibt transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/imagine.beyond.travel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2 tbff-footer-social-ibt transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trips Column (✅ TBFF links from navigation.ts) */}
          <div>
            <h4 className="font-semibold mb-6 tbff-footer-heading">Trips</h4>
            <div className="space-y-3 text-sm">
              {NAVIGATION_TRIPS
                .filter((trip) => ["Japan", "Colombia"].includes(trip.location))
                .filter((trip) => trip.link !== "#")
                .map((trip) => (
                  <Link
                    key={trip.title}
                    to={trip.link}
                    className="tbff-footer-link block transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {trip.title}
                  </Link>
                ))}
            </div>
          </div>

          {/* ✅ Resources Column (Help removed; Terms moved here) */}
          <div>
            <h4 className="font-semibold mb-6 tbff-footer-heading">Resources</h4>
            <div className="space-y-3 text-sm">
              <Link
                to="/terms"
                className="tbff-footer-link block transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms & Conditions
              </Link>
              <Link
                to="/about"
                className="tbff-footer-link block transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                About Imagine Beyond Travel
              </Link>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold mb-6 tbff-footer-heading">Connect</h4>
            <p className="text-sm tbff-footer-link">
              Follow us on social media to stay updated on our latest trips and
              travel tips.
            </p>
          </div>
        </div>

        <div className="tbff-footer-border border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm tbff-footer-link">
            &copy; 2025 Imagine Beyond Travel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm tbff-footer-muted">
            <Link
              to="/terms"
              className="tbff-footer-link transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Terms & Conditions
            </Link>
            <span>•</span>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default TBFFFooter;
