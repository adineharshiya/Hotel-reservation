'use client'

// ========== ایمپورت‌های خارجی ==========
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// ========== ایمپورت‌های داخلی و کتابخانه‌ها ==========
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { Button } from '@/components/ui/button'
import { 
  MapPin, Calendar, Users, CheckCircle, Headphones, CalendarX2, Gift, 
  Star, BedDouble, ThumbsUp, ShieldCheck, Gem, Heart, Mail, Phone, 
  ArrowRight, Globe, MessageCircle, Menu, X
} from 'lucide-react'
// آیکون‌های جدید از react-icons
import { FaInstagram, FaTwitter } from 'react-icons/fa'

// ========== داده‌های استاتیک برای تمیزی بیشتر کد ==========
const MENU_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

const FEATURES = [
  { icon: CheckCircle, title: "Best Price Guarantee", desc: "We guarantee you the best prices online." },
  { icon: Headphones, title: "24/7 Customer Support", desc: "Our team is here to help you anytime, anywhere." },
  { icon: CalendarX2, title: "Free Cancellation", desc: "Flexible plans with free cancellation on most stays." },
  { icon: Gift, title: "Exclusive Offers", desc: "Unlock special deals and member-only discounts." }
]

const POPULAR_DESTINATIONS = [
  { name: "Santorini, Greece", img: "/pool-night.jpg", hotels: 312, price: 130 },
  { name: "Dubai, UAE", img: "/city-entrance.jpg", hotels: 621, price: 95 },
  { name: "Paris, France", img: "/event-pool.jpg", hotels: 412, price: 110 },
  { name: "Maldives", img: "/white-hotel.jpg", hotels: 278, price: 230 }
]

const WHY_BOOK_ITEMS = [
  { icon: BedDouble, title: "Wide Selection", desc: "Thousands of hotels worldwide" },
  { icon: ThumbsUp, title: "Trusted by Millions", desc: "Join millions of happy travelers" },
  { icon: ShieldCheck, title: "Secure Booking", desc: "Safe and secure payments." },
  { icon: Gem, title: "Premium Quality", desc: "Handpicked hotels for a premium experience." },
  { icon: Heart, title: "Customer Satisfaction", desc: "We're here to make your stay memorable." }
]

const TESTIMONIALS = [
  { name: "Sophia Martinez", img: "https://randomuser.me/api/portraits/women/11.jpg", text: "Excellent service and amazing stay! The booking process was so easy and the hotel was top-notch." },
  { name: "James Anderson", img: "https://randomuser.me/api/portraits/men/12.jpg", text: "Great experience from start to finish. The customer support team was very helpful and responsive." },
  { name: "Aisha Khan", img: "https://randomuser.me/api/portraits/women/13.jpg", text: "Beautiful hotel and perfect location. I will definitely book with StayVista again." }
]

const SWIPER_CONFIG = {
  modules: [Autoplay, Pagination],
  spaceBetween: 24,
  slidesPerView: 1,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  },
  autoplay: { delay: 3000, disableOnInteraction: false },
  loop: true,
  pagination: { clickable: true }
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 relative overflow-x-hidden">
      
      {/* ========== هدر (منوی ناوبری اصلی) ========== */}
      <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6 lg:px-12 border-b border-white/10 bg-transparent text-white">
        <div className="container mx-auto flex items-center justify-between">
          {/* لوگوی سایت */}
          <div className="flex items-center gap-2 z-50">
            <div className="h-8 w-8 bg-amber-600 rounded flex items-center justify-center">
              <BedDouble className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">StayVista</span>
          </div>
          
          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {MENU_ITEMS.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`hover:text-amber-400 transition-colors relative pb-1 ${
                  pathname === item.href ? 'text-amber-400 border-b-2 border-amber-400' : 'border-b-2 border-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* بخش کاربری و تنظیمات */}
          <div className="flex items-center gap-4 text-sm">
            <div className="hidden lg:flex items-center gap-4 border-r border-white/20 pr-4">
              <span className="cursor-pointer hover:text-amber-400">USD $</span>
              <span className="cursor-pointer hover:text-amber-400">EN</span>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Link href="#" className="hover:text-amber-400 transition-colors">Log in</Link>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white h-9 px-6 rounded-full text-xs font-semibold shadow-lg shadow-amber-900/20">
                Sign up
              </Button>
            </div>

            {/* دکمه منوی همبرگری (فقط در موبایل) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 relative text-white hover:text-amber-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* ========== منوی کشویی مدرن (فقط مخصوص موبایل) ========== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            {/* دکمه بستن منو */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors p-2 z-[61]"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>

            {/* محتوای منوی موبایل */}
            <div className="flex flex-col items-center gap-6 text-white cursor-default w-full">
              <div className="flex flex-col items-center gap-6 text-2xl font-light tracking-wide w-full max-w-[200px]">
                {MENU_ITEMS.map((item) => (
                  <div key={item.name} className="flex flex-col items-center w-full">
                    <Link 
                      href={item.href} 
                      onClick={() => setIsMenuOpen(false)} 
                      className={`text-center hover:text-amber-400 transition-colors pb-2 w-full ${
                        pathname === item.href ? 'text-amber-400' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                    {/* خط نشانگر صفحه فعال */}
                    {pathname === item.href && (
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="h-[2px] bg-amber-500 rounded-full mt-[-2px]"
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="w-24 h-[1px] bg-white/20 my-2"></div>
              
              <div className="flex items-center gap-4 mt-2">
                <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-amber-400 transition-colors text-base font-medium">Log in</Link>
                <Button onClick={() => setIsMenuOpen(false)} className="bg-amber-600 hover:bg-amber-700 text-white h-10 px-8 rounded-full text-sm font-semibold shadow-xl shadow-amber-900/30">
                  Sign up
                </Button>
              </div>
              
              <div className="flex gap-6 mt-8 text-white/40">
                <Globe className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                <MessageCircle className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                <Heart className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== بخش قهرمان (Hero) ========== */}
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-lounge.webp"
            alt="Luxury Hotel Resort"
            fill
            className="object-cover brightness-75"
            priority
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-600/20 backdrop-blur-sm text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-600/30">
              Find your perfect stay
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
              Book unforgettable <br /> stays around the world
            </h1>
            <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light">
              Discover handpicked hotels and exclusive deals for an extraordinary experience.
            </p>
            
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 h-12 text-sm font-semibold shadow-xl shadow-amber-900/20 flex items-center gap-2 mx-auto">
              Explore Hotels <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ========== ویژگی‌ها و امکانات برجسته هتل ========== */}
      <section className="pt-4 pb-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-slate-800">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 max-w-[160px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== مقاصد محبوب (Popular Destinations) ========== */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-amber-600 text-xs font-bold uppercase tracking-wider block mb-1">Popular Destinations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore top destinations</h2>
            </div>
            <Link href="#" className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:text-amber-600 transition-colors">
              View all destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_DESTINATIONS.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 cursor-pointer relative"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover md:group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-[#0B132B] text-white text-[10px] font-bold px-2 py-1 rounded shadow-md">
                    ★ Top Rated
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 text-base">{item.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{item.hotels} Hotels</p>
                  <div className="mt-3 flex items-baseline gap-1 text-sm">
                    <span className="text-slate-500 font-medium">From</span>
                    <span className="text-lg font-bold text-slate-900">${item.price}</span>
                    <span className="text-xs text-slate-400">/ night</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== اتاق‌ها و اسپا (Explore Our Suites) ========== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-wider block mb-2">Exclusive Collection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore our luxury rooms & spa</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">Experience the ultimate relaxation in our beautifully designed suites and world-class spa facilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden group"
            >
              <Image src="/luxury-room.jpg" alt="Luxury Suite" fill className="object-cover md:group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold">Luxury King Suite</h3>
                <p className="text-sm text-gray-300 mb-4">Spacious rooms with breathtaking views</p>
                <Button variant="outline" className="w-fit bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-6 h-9 text-xs">View Details</Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden group"
            >
              <Image src="/indoor-spa.jpg" alt="Indoor Spa" fill className="object-cover md:group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold">Tranquil Spa & Wellness</h3>
                <p className="text-sm text-gray-300 mb-4">Rejuvenate with our signature treatments</p>
                <Button variant="outline" className="w-fit bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-6 h-9 text-xs">Book a Session</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== پیشنهاد ویژه (Limited Time Offer) ========== */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-[#0B132B] min-h-[300px] flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10 flex flex-col justify-center z-10 text-white">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-wider block mb-2">Limited Time Offer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Enjoy up to 30% off <br/>on selected hotels</h2>
            <p className="text-gray-300 mb-6 max-w-sm text-sm">Book now and make your next trip more memorable.</p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full w-fit px-6 h-10 text-sm font-medium">
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image src="/crystal-pool.webp" alt="Special Offer" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ========== دلایل انتخاب ما (Why Book With Us) ========== */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto text-center">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-wider block mb-2">Why Book With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Your comfort is our priority</h2>
          
          {/* کارت‌های مجزا */}
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {WHY_BOOK_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className="w-[calc(50%-12px)] md:w-auto md:flex-1 min-w-[160px] flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white border border-gray-200/70 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 transition-shadow duration-300 dark:bg-zinc-800 dark:border-zinc-700"
              >
                <div className="h-10 w-10 mb-4 text-slate-800 dark:text-slate-200">
                  <item.icon className="h-full w-full stroke-[1.5]" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 text-center leading-relaxed max-w-[140px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== خبرنامه (Newsletter) ========== */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl bg-white rounded-2xl p-0">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full border border-amber-600 text-amber-600 flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Subscribe to our newsletter</h3>
              <p className="text-sm text-slate-500">Get exclusive deals, travel tips, and more.</p>
            </div>
          </div>
          <div suppressHydrationWarning className="flex w-full md:w-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-3 outline-none w-full md:w-64 bg-transparent text-sm text-slate-600 placeholder:text-slate-400"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 font-medium text-sm transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ========== پاورقی (Footer) ========== */}
      <footer className="bg-[#0B132B] text-white pt-12 pb-8 px-6">
        <div className="container mx-auto">
          
          {/* --- حالت موبایل (Mobile Layout) --- */}
          <div className="flex flex-col items-center w-full md:hidden gap-8">
            
            {/* بخش بالایی (لوگو، متن و شبکه‌های اجتماعی) */}
            <div className="flex flex-col items-center text-center gap-3 pb-8 border-b border-white/30 w-full">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-amber-600 rounded flex items-center justify-center">
                  <BedDouble className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">StayVista</span>
              </div>
              <p className="text-sm text-gray-400 max-w-[200px] mx-auto">Find and book the perfect hotel for your next adventure.</p>
              
              {/* ===== شبکه‌های اجتماعی ===== */}
              <div className="flex justify-center gap-5 mt-2">
                <Link href="https://instagram.com/your-page" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-5 w-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                </Link>
                <Link href="https://twitter.com/your-page" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-5 w-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                </Link>
              </div>
            </div>

            {/* بخش پایینی (دو ستون چپ و راست) */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 w-full">
              
              {/* ستون چپ */}
              <div className="flex flex-col gap-8 items-center text-center">
                <div className="flex flex-col gap-3 items-center">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">Support</h4>
                  <ul className="flex flex-col gap-2 text-sm text-gray-400 items-center">
                    <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Booking Support</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Cancellation Options</li>
                    <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3 items-center">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">Contact Us</h4>
                  <ul className="flex flex-col gap-3 text-sm text-gray-400 items-center">
                    <li className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                      <Phone className="h-4 w-4 shrink-0" /> +1 (800) 123-4567
                    </li>
                    <li className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                      <Mail className="h-4 w-4 shrink-0" /> support@stayvista.com
                    </li>
                    <li className="flex flex-col items-center justify-center gap-1 hover:text-white transition-colors">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span className="text-center">123 Travel St., Suite 100<br />New York, NY 10001</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ستون راست */}
              <div className="flex flex-col gap-8 items-center text-center">
                <div className="flex flex-col gap-3 items-center">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">Company</h4>
                  <ul className="flex flex-col gap-2 text-sm text-gray-400 items-center">
                    <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3 items-center">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">Top Destinations</h4>
                  <ul className="flex flex-col gap-2 text-sm text-gray-400 items-center">
                    <li className="hover:text-white cursor-pointer transition-colors">Dubai</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Paris</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Maldives</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Bali</li>
                    <li className="hover:text-white cursor-pointer transition-colors">New York</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* بخش کپی‌رایت */}
            <div className="w-full border-t border-white/10 pt-6 mt-4 text-center text-sm text-gray-500">
              © 2024 StayVista. All rights reserved.
            </div>
          </div>

          {/* --- حالت دسکتاپ (Desktop Layout) --- */}
          <div className="hidden md:grid grid-cols-5 gap-8 mb-10 md:mb-12 border-b border-white/10 pb-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-amber-600 rounded flex items-center justify-center">
                  <BedDouble className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">StayVista</span>
              </div>
              <p className="text-sm text-gray-400 max-w-[200px]">Find and book the perfect hotel for your next adventure.</p>

              {/* ===== شبکه‌های اجتماعی دسکتاپ ===== */}
              <div className="flex justify-center gap-5 mt-2">
                <Link href="https://instagram.com/your-page" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-4 w-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                </Link>
                <Link href="https://twitter.com/your-page" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-4 w-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1">Company</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1">Support</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-white cursor-pointer transition-colors">Booking Support</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cancellation Options</li>
                <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1">Top Destinations</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Dubai</li>
                <li className="hover:text-white cursor-pointer transition-colors">Paris</li>
                <li className="hover:text-white cursor-pointer transition-colors">Maldives</li>
                <li className="hover:text-white cursor-pointer transition-colors">Bali</li>
                <li className="hover:text-white cursor-pointer transition-colors">New York</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1">Contact Us</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-400">
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 shrink-0" /> +1 (800) 123-4567
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 shrink-0" /> support@stayvista.com
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors">
                  <MapPin className="h-4 w-4 shrink-0 mt-1" />
                  <span>123 Travel St., Suite 100<br />New York, NY 10001</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}