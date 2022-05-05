const withPWA = require('next-pwa');
const nextTranslate = require('next-translate');

const nextConfig = {
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true
    },
    reactStrictMode: true,
    optimizeFonts: true,
    images: {
        domains: ['kaapo.fit']
    },
    ...nextTranslate(),
    i18n: {
        locales: ['ro', 'en'],
        defaultLocale: 'en',
        localeDetection: true
    }
};

module.exports = withPWA(nextConfig);
