/** @type {import('next').NextConfig} */

const images = require('next-images');
require('dotenv').config();

const nextConfig = {
    ...images,
    env: { GITHUB_TOKEN: process.env.GITHUB_TOKEN },
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pt',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig;
