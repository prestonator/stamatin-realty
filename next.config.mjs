/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "ap.rdcpix.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
