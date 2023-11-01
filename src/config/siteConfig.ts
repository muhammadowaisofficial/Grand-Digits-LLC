const baseUrl = 'https://your-domain.vercel.app';
const websiteName = 'Website Name';
const siteDescription = 'This is Website Description';

export const siteConfig = {
  title: websiteName,
  name: websiteName,
  description: siteDescription,
  siteUrl: "http://domain.com",
  keywords: ["Wordpress", "Web Development", "Ecommerce"],
  category: 'Technology',
  generator: "Next.js",
  creator: "Creator Name",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  authors: [
    { name: 'Fahad', url: 'https://github.com/fahad-razzaq' },
    { name: 'Erric Miller', url: 'https://github.com/erricmiller' },
  ],
  publisher: 'Publisher Name',
  metadataBase: new URL(baseUrl),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: websiteName,
    description: siteDescription,
    url: baseUrl,
    siteName: websiteName,
    locale: 'en_US',
    images: [
      {
        url: `${baseUrl}/images/og-400x400.png`,
        width: 400,
        height: 400,
        alt: 'My custom alt',
      },
      {
        url: `${baseUrl}/images/og-600x600.png`,
        width: 600,
        height: 600,
        alt: 'My custom alt',
      },
      {
        url: `${baseUrl}/images/og-800x600.png`,
        width: 800,
        height: 600,
        alt: 'My custom alt',
      },
      {
        url: `${baseUrl}/images/og-1200x630.png`,
        width: 1200,
        height: 630,
        alt: 'My custom alt',
      },
      {
        url: `${baseUrl}/images/og-1800x1600.png`,
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
  },
  icons: {
    icon: [
      // use icon (prefer) file extension or png file extension
      // { url: '/icon16x16.png', sizes: '16x16', type: 'image/png' }, // - target size for taskbar, start menu, task manager
      // { url: '/icon32x32.png', sizes: '32x32', type: 'image/png' }, // - target size for taskbar, start menu, task manager
      // { url: '/icon44x44.png', sizes: '44x44', type: 'image/png' }, // - app icon
      // { url: '/icon50x50.png', sizes: '50x50', type: 'image/png' }, //- store logo
      // { url: '/icon72x72.png', sizes: '72x72', type: 'image/png' }, // - small tile
      // { url: '/icon96x96.png', sizes: '96x96', type: 'image/png' }, // - small tile
      // { url: '/icon128x128.png', sizes: '128x128', type: 'image/png' }, // - medium tile
      // { url: '/icon144x144.png', sizes: '144x144', type: 'image/png' }, // - medium tile
      // { url: '/icon152x152.png', sizes: '152x152', type: 'image/png' }, // - medium tile
      { url: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' }, // - medium tile
      { url: 'icons/icon-256x256.png', sizes: '256x256', type: 'image/png' }, // - medium tile
      // { url: '/icon310x310.png', sizes: '310x310', type: 'image/png' }, // - large tile
      // { url: '/icon350x150.png', sizes: '350x150', type: 'image/png' }, // - wide tile
      { url: 'icons/icon-384x384.png', sizes: '384x384', type: 'image/png' }, // - large tile
      { url: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }, // - large tile
      // { url: '/icon620x300.png', sizes: '620x300', type: 'image/png' }, // - splash screen
      // { url: '/icon1024x1024.png', sizes: '1024x1024', type: 'image/png' }, // - Extra Large
    ],
    shortcut: [
      // use icon (prefer) file extension or png file extension
      { url: 'icons/shortcut-icon192x192.png', sizes: '192x192', type: 'image/png' }, // - For Android Chrome
      { url: 'icons/shortcut-icon180x180.png', sizes: '180x180', type: 'image/png' }, // - Fro Apple Touch Icon (for iPhone 6 Plus; other device will scale it down as needed).
    ],
    apple: [
      { url: 'icons/apple-icon.png' },
      { url: 'icons/apple-icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: 'icons/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: 'icons/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: 'icons/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: 'icons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: 'icons/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: `${baseUrl}/manifest.json`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  social: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
  },
  twitter: {
    card: 'app',
    title: websiteName,
    description: siteDescription,
    siteId: '',
    creator: 'Twitter User Name',
    creatorId: 'Twitter User ID',
    images: {
      url: `${baseUrl}/images/og-1200x630.png`,
      alt: 'Next.js Logo',
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  // appLinks: {
  //   ios: {
  //     url: 'https://nextjs.org/ios-store-link',
  //     app_store_id: 'app_store_id',
  //   },
  //   android: {
  //     package: 'com.example.android/package',
  //     app_name: 'app_name_android',
  //   },
  //   web: {
  //     url: 'https://nextjs.org/web',
  //     should_fallback: true,
  //   },
  // },
};

export type SiteConfig = typeof siteConfig;
