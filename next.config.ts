import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // تنظیمات خروجی استاتیک برای گیت‌هاب پیجز
  output: 'export',  // <-- این خط رو اضافه کن
  
  images: {
    unoptimized: true,  // <-- این رو هم اضافه کن برای پشتیبانی از عکس‌ها
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  
  // اگه توی ساب‌پوشه هستی (مثل /Hotel-reservation)
  // basePath: '/Hotel-reservation',
};

export default nextConfig;