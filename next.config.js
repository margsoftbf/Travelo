/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
        domains: ['media-cdn.tripadvisor.com'], 
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
