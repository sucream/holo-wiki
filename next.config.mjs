// import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'schedule-static.hololive.tv',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'static.miraheze.org',
        port: '',
        pathname: '/hololivewiki/**',
      }
    ],
  },
};

// export default withMDX(nextConfig);
export default nextConfig;
 
// module.exports = withMDX(nextConfig)