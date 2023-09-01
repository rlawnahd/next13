/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    // async redirects() {
    //     return [
    //         {
    //             source: '/products/deleted_forever',
    //             destination: '/products',
    //             permanent: true,
    //         },
    //     ];
    // },
    async rewrites() {
        return [
            {
                source: '/products/deleted',
                destination: '/products',
            },
        ];
    },
};

module.exports = nextConfig;
