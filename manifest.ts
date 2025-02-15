import type { ManifestOptions } from 'vite-plugin-pwa';

export const manifest: Partial<ManifestOptions> = {
  short_name: 'Shlink',
  name: 'Shlink',
  start_url: '/',
  display: 'standalone',
  theme_color: '#07184C',
  background_color: '#ffffff',
  icons: [
    {
      src: './icons/icon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    {
      src: './icons/icon-24x24.png',
      type: 'image/png',
      sizes: '24x24',
    },
    {
      src: './icons/icon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      src: './icons/icon-40x40.png',
      type: 'image/png',
      sizes: '40x40',
    },
    {
      src: './icons/icon-48x48.png',
      type: 'image/png',
      sizes: '48x48',
    },
    {
      src: './icons/icon-60x60.png',
      type: 'image/png',
      sizes: '60x60',
    },
    {
      src: './icons/icon-64x64.png',
      type: 'image/png',
      sizes: '64x64',
    },
    {
      src: './icons/icon-72x72.png',
      type: 'image/png',
      sizes: '72x72',
    },
    {
      src: './icons/icon-76x76.png',
      type: 'image/png',
      sizes: '76x76',
    },
    {
      src: './icons/icon-96x96.png',
      type: 'image/png',
      sizes: '96x96',
    },
    {
      src: './icons/icon-114x114.png',
      type: 'image/png',
      sizes: '114x114',
    },
    {
      src: './icons/icon-120x120.png',
      type: 'image/png',
      sizes: '120x120',
    },
    {
      src: './icons/icon-128x128.png',
      type: 'image/png',
      sizes: '128x128',
    },
    {
      src: './icons/icon-144x144.png',
      type: 'image/png',
      sizes: '144x144',
    },
    {
      src: './icons/icon-150x150.png',
      type: 'image/png',
      sizes: '150x150',
    },
    {
      src: './icons/icon-152x152.png',
      type: 'image/png',
      sizes: '152x152',
    },
    {
      src: './icons/icon-160x160.png',
      type: 'image/png',
      sizes: '160x160',
    },
    {
      src: './icons/icon-167x167.png',
      type: 'image/png',
      sizes: '167x167',
    },
    {
      src: './icons/icon-180x180.png',
      type: 'image/png',
      sizes: '180x180',
    },
    {
      src: './icons/icon-192x192.png',
      type: 'image/png',
      sizes: '192x192',
    },
    {
      src: './icons/icon-196x196.png',
      type: 'image/png',
      sizes: '196x196',
    },
    {
      src: './icons/icon-228x228.png',
      type: 'image/png',
      sizes: '228x228',
    },
    {
      src: './icons/icon-256x256.png',
      type: 'image/png',
      sizes: '256x256',
    },
    {
      src: './icons/icon-310x310.png',
      type: 'image/png',
      sizes: '310x310',
    },
    {
      src: './icons/icon-384x384.png',
      type: 'image/png',
      sizes: '384x384',
    },
    {
      src: './icons/icon-512x512.png',
      type: 'image/png',
      sizes: '512x512',
    },
    {
      src: './icons/icon-1024x1024.png',
      type: 'image/png',
      sizes: '1024x1024',
    },
  ],
};
