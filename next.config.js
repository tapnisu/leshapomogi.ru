/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
		return [
                        {
				source: "/подборкапорно",
				destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
				permanent: true,
			},
		];
	},
}

module.exports = nextConfig
