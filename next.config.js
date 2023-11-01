// await import('./src/env.mjs');

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // images: {
 	// 	domains: ['xsgames.co', 'unsplash.com'],
 	// },
};
// export default config;



const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  //runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});


// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//    scope: '/app',
//    sw: 'service-worker.js',
//   //runtimeCaching,
//   disable: process.env.NODE_ENV === 'development',
// });


 
module.exports = withPWA(config);



