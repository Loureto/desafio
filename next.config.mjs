/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/sign-in',
      permanent: true
    }
  ],
  reactStrictMode: false
}

export default nextConfig
