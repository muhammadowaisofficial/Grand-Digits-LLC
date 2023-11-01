import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Grand Digits",
    short_name: "Grand Digits",
    description: "Grand Digits is a We are your reliable partners who are as committed to your success as you are. This is why we offer customized solutions targeted at meeting your specific needs to ensure you enjoy the success you deserve.",

    
    "theme_color": "#ffffff",
    "background_color": "#004740",
    "display": "fullscreen",
    "orientation": "portrait",
    "id": "/",
    "start_url": "/",
    "icons": [
      {
        "src": "icons/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "icons/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "icons/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "icons/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
  };
};

export default manifest;
