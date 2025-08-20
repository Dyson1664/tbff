export const payUrls: Record<string, string> = {
  'japan-journey': import.meta.env.VITE_JAPAN_PAY_URL ?? '#',
  'paris-adventure': import.meta.env.VITE_PARIS_PAY_URL ?? '#',
  'thailand-discovery': import.meta.env.VITE_THAILAND_PAY_URL ?? '#',
  'srilanka-serenity': import.meta.env.VITE_SRILANKA_PAY_URL ?? '#',
  'philippines-paradise': import.meta.env.VITE_PHILIPPINES_PAY_URL ?? '#',
  'india-journey': import.meta.env.VITE_INDIA_PAY_URL ?? '#',
  'bhutan-happiness': import.meta.env.VITE_BHUTAN_PAY_URL ?? '#',
  'colombia-adventure': import.meta.env.VITE_COLOMBIA_PAY_URL ?? '#',
  'vietnam-explorer': import.meta.env.VITE_VIETNAM_PAY_URL ?? '#',
};

export const getPayUrl = (id: string) => payUrls[id] || '#';