/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://www.stamatinrealty.com",
	generateRobotsTxt: true, // (optional)
	generateIndexSitemap: false, // (optional)
	robotsTxtOptions: {
		additionalSitemaps: [
			"https://www.stamatinrealty.com",
		],
	},
};
