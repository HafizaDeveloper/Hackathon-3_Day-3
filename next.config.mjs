/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Sanity image domain allow kar raha hai
    },
    eslint: {
      ignoreDuringBuilds: true, // ESLint errors ignore karega during build
    },
  };
  
  export default nextConfig;
  