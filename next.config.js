/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.shareicon.net',
                hostname: 'iheartcraftythings.com',
                hostname: 'drawinghowtodraw.com',
                hostname: 'www.pngfind.com',
                hostname: 'icon-library.com',
                hostname: 'icons.veryicon.com',
            }
        ],
    }
}

module.exports = nextConfig
