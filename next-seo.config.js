const title = '';
const description = '';

const SEO = {
    title,
    description,
    canonical: 'https://kaapo.fit',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://kaapo.fit',
        title,
        description,
        images: [
            {
                url: 'https://kaapo.fit/static/images/brand/og.jpg',
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    },
    twitter: {
        handle: '@kaapo_fit',
        site: '@kaapo_fit',
        cardType: 'summary_large_image'
    },
    additionalMetaTags: [
        { content: 'IE=edge', name: 'viewport' },
        { content: 'initial-scale=1.0, width=device-width', name: 'viewport' },
        { content: '#F2F2F2', name: 'theme-color' },
        { content: '#D6AD60', name: 'msapplication-TileColor' },
        { content: '/favicons/browserconfig.xml', name: 'msapplication-config' },
        { content: 'nI5avwd3xfbuuea49TrY52UR66SgetR81Yb7Bnr8JZw', name: 'google-site-verification' }
    ]
};

export default SEO;
