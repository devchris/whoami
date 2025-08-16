/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    images: {
        domains: ['devchris.net'],
    },
    // Enable standalone output for Docker deployment
    output: 'standalone',
    trailingSlash: true,
}

module.exports = nextConfig
