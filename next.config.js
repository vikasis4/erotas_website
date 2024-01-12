/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost:3001',
                port: '',
                pathname: '/product/**',
            },
        ],
    },
}

module.exports = nextConfig
