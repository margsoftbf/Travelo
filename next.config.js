/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media-cdn.tripadvisor.com',
            },
            {
                protocol: 'https',
                hostname: 'cruise-images.tacdn.com',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        });

        return config;
    },
};
module.exports = nextConfig;