'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    {
      src: "/images/hero/45d4fd79-5ea9-42e2-9eb4-9fec5fa27258.jpg",
      alt: "Premium Escort in Bangalore - Elegant Companion for Social Events"
    },
    {
      src: "/images/hero/5e31996a-1aa3-4761-948a-7508193a1623.jpg",
      alt: "Professional Escort Services Bangalore - Sophisticated Lady Companion"
    },
    {
      src: "/images/hero/afeeef32-78c0-49d2-b27e-09e2cedd539c.jpg",
      alt: "Luxury Escort Bangalore - Elite Companion for Business Meetings"
    },
    {
      src: "/images/hero/download (21).jpg",
      alt: "High-Class Escort Services Bangalore - Beautiful Model Companion"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <main className="min-h-screen bg-darker-bg">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-black backdrop-blur-md border-b-2 border-deep-red shadow-lg shadow-black/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-deep-red">LOCONTO</span> ESCORTS
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-deep-red transition-colors">Home</a>
            <Link href="/services" className="text-white hover:text-deep-red transition-colors">Services</Link>
            <Link href="/gallery" className="text-white hover:text-deep-red transition-colors">Gallery</Link>
            <a href="#about" className="text-white hover:text-deep-red transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-deep-red transition-colors">Contact</a>
          </div>
          <div className="flex gap-3">
            <button className="bg-deep-red hover:bg-dark-red text-white px-6 py-2 rounded-lg transition-colors shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Now
            </button>
            <a href="https://wa.me/919999999999" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-left space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Premium <span className="text-deep-red">Escorts</span> in Bangalore
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Experience the finest companionship services in Bangalore with our elite and sophisticated escorts
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our premium escort services offer you the perfect blend of beauty, intelligence, and elegance.
                Whether you need a companion for social events, business meetings, or intimate moments,
                our professional escorts are here to fulfill your desires with complete discretion and satisfaction.
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-deep-red rounded-full"></div>
                  <span className="text-white">24/7 Available Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-deep-red rounded-full"></div>
                  <span className="text-white">Verified & Professional Escorts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-deep-red rounded-full"></div>
                  <span className="text-white">Complete Privacy & Discretion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-deep-red rounded-full"></div>
                  <span className="text-white">Luxury Experience Guaranteed</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Book Now
                </button>
                <button className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
                  View Gallery
                </button>
              </div>
            </div>

            {/* Right side - Image Slideshow */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-black via-darker-bg to-deep-red/20 border border-deep-red/30">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain bg-gradient-to-br from-black via-darker-bg to-deep-red/10"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Navigation buttons */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-deep-red/50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-deep-red/50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-deep-red scale-125 shadow-lg' : 'bg-white/30 hover:bg-deep-red/70 border border-deep-red/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-deep-red/30 to-dark-red/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-deep-red/20 to-dark-red/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-24 bg-gradient-to-b from-darker-bg to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-8">
            Our Premium <span className="text-deep-red">Services</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive range of professional companionship services designed for the most discerning clientele
          </p>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/017f9aa9-9e03-49c9-8e66-42a4af1b8cf1.jpg"
                  alt="Premium VIP Escort Services Bangalore - Elite Companion"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">VIP Elite Services</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Premium VIP Service - Exclusive companionship for discerning clients seeking luxury experiences.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/0b5d1573-9e45-410f-8d11-c7ce4dca44ee.jpg"
                  alt="Business Event Escort Companion Bangalore - Professional Services"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Business Events</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Star-Like Companions - Professional companions for corporate events and business meetings.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/0db1ca63-7b06-430e-b62b-af8a85116dc8.jpg"
                  alt="Social Gathering Escort Services Bangalore - Elegant Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Social Gatherings</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Professional Model Services - Elegant companions for parties, dinners, and social events.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/135e3343-4be0-4525-ad1d-8d54eddc4ca6.jpg"
                  alt="Travel Companion Escort Services Bangalore - Luxury Travel"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Travel Companions</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Premium VIP Service - Sophisticated travel partners for business trips and vacations.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/27f00dbd-6e40-40cf-b817-f5857d56fe2d.jpg"
                  alt="Private Party Escort Services Bangalore - Exclusive Entertainment"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Private Parties</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Star-Like Companions - Exclusive entertainment for private parties and intimate gatherings.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/307c151e-f300-4791-abe6-bbc9f549443c.jpg"
                  alt="Hotel Service Escort Bangalore - Luxury Hotel Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Hotel Services</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Professional Model Services - Discreet and professional services at luxury hotels.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 7 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/38d5679b-5fda-4ece-b6ba-65244ccae33e.jpg"
                  alt="Dinner Date Escort Services Bangalore - Fine Dining Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Dinner Dates</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Premium VIP Service - Charming companions for fine dining and romantic evenings.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 8 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/5d8ab558-91fa-4acb-ba05-a48e016f918e.jpg"
                  alt="Weekend Escort Services Bangalore - Leisure Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Weekend Getaways</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Star-Like Companions - Perfect companions for weekend trips and leisure activities.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 9 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/83f1c412-dd63-4621-8d86-4e0f6c302ea6.jpg"
                  alt="Outcall Escort Services Bangalore - Home Visit Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Outcall Services</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Professional Model Services - Professional companions available for outcall appointments.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 10 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/972dc74f-18d6-4cb6-bcb7-8778fde4487c.jpg"
                  alt="High Class Escort Services Bangalore - Premium Model Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">High Class Models</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Premium VIP Service - Elite model companions for the most discerning clientele.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 11 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/afeeef32-78c0-49d2-b27e-09e2cedd539c.jpg"
                  alt="Luxury Escort Services Bangalore - Premium Elite Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Luxury Services</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Star-Like Companions - Ultimate luxury experiences with our premium companions.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 12 */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50">
              <div className="relative w-full h-96 bg-gradient-to-br from-black via-darker-bg to-deep-red/5">
                <Image
                  src="/images/services/download (22).jpg"
                  alt="24/7 Escort Services Bangalore - Round the Clock Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">24/7 Availability</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">Professional Model Services - Round-the-clock professional services available anytime.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          
          {/* View All Services Button */}
          <div className="text-center mt-16">
            <Link 
              href="/services"
              className="inline-block bg-gradient-to-r from-deep-red to-dark-red text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-deep-red/20 border-2 border-deep-red/50 hover:border-deep-red"
            >
              View All Services
              <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore our complete range of premium escort services designed for sophisticated clientele in Bangalore
            </p>
          </div>
        </div>
      </section>

      {/* Bangalore Locations Section */}
      <section id="gallery" className="px-6 py-24 bg-gradient-to-b from-black to-darker-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-8">
            Bangalore <span className="text-deep-red">Locations</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
            We provide premium escort services across all major areas of Bangalore. Choose your preferred location for our professional companionship services.
          </p>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Location 1 - Koramangala */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Koramangala</h3>
              <p className="text-gray-300 text-sm mb-4">IT hub with vibrant nightlife and premium hotels</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 2 - Indiranagar */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Indiranagar</h3>
              <p className="text-gray-300 text-sm mb-4">Upscale residential area with luxury restaurants</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 3 - Whitefield */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Whitefield</h3>
              <p className="text-gray-300 text-sm mb-4">Tech corridor with modern infrastructure</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 4 - MG Road */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">MG Road</h3>
              <p className="text-gray-300 text-sm mb-4">Central business district with shopping and dining</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 5 - Brigade Road */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Brigade Road</h3>
              <p className="text-gray-300 text-sm mb-4">Shopping paradise with entertainment venues</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 6 - Electronic City */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Electronic City</h3>
              <p className="text-gray-300 text-sm mb-4">Major IT hub with corporate facilities</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 7 - HSR Layout */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">HSR Layout</h3>
              <p className="text-gray-300 text-sm mb-4">Planned residential area with modern amenities</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 8 - Jayanagar */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3a2 2 0 002 2h4a2 2 0 002-2v-3M7 10l5-5 5 5M7 10h10M7 10v11a1 1 0 001 1h8a1 1 0 001-1V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jayanagar</h3>
              <p className="text-gray-300 text-sm mb-4">Traditional area with cultural significance</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 9 - Hebbal */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hebbal</h3>
              <p className="text-gray-300 text-sm mb-4">Emerging area with excellent connectivity</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Location 10 - Banashankari */}
            <div className="group bg-gradient-to-br from-black via-darker-bg to-deep-red/10 rounded-2xl p-6 border border-deep-red/30 hover:border-deep-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Banashankari</h3>
              <p className="text-gray-300 text-sm mb-4">Popular residential hub with metro connectivity</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              Don&apos;t see your location? We provide services across all areas of Bangalore.
            </p>
            <button className="bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Contact for Other Locations
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Get In <span className="text-deep-red">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to experience premium companionship? Contact us for discreet and professional services.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+91 XXXXX XXXXX</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">contact@locontoescorts.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Bangalore, Karnataka</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-deep-red hover:bg-dark-red text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Contact Now
            </button>
            <a href="https://wa.me/919999999999" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-16 border-t-2 border-deep-red shadow-2xl shadow-deep-red/20">
        <div className="max-w-7xl mx-auto relative">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-white mb-4">
                <span className="text-deep-red">LOCONTO</span> ESCORTS
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Premium companionship services in Bangalore with complete discretion and professionalism. 
                Experience luxury, elegance, and sophistication with our elite escort services.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group shadow-lg">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group shadow-lg">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group shadow-lg">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group shadow-lg">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.985 11.988 11.985s11.985-5.367 11.985-11.985C24.002 5.367 18.635.001 12.017.001zm5.97 7.838c.02.205.029.413.029.621 0 6.337-4.827 13.649-13.649 13.649-2.708 0-5.233-.794-7.356-2.153.375.044.758.067 1.146.067 2.251 0 4.327-.768 5.972-2.057-2.103-.039-3.877-1.428-4.491-3.339.293.056.594.085.902.085.438 0 .864-.059 1.267-.168-2.196-.441-3.849-2.383-3.849-4.708v-.06c.648.36 1.39.576 2.178.601-1.288-.859-2.135-2.324-2.135-3.985 0-.877.237-1.698.651-2.404 2.367 2.905 5.907 4.813 9.898 5.016-.082-.351-.124-.718-.124-1.093 0-2.647 2.146-4.793 4.793-4.793 1.378 0 2.624.582 3.499 1.512 1.092-.215 2.122-.614 3.054-1.163-.359 1.123-1.123 2.065-2.117 2.661.971-.116 1.894-.374 2.754-.756-.643.962-1.459 1.808-2.395 2.485z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-deep-red"></div>
              </h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-deep-red transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Home
                </a></li>
                <li><Link href="/services" className="text-gray-300 hover:text-deep-red transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Services
                </Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-deep-red transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Gallery
                </Link></li>
                <li><a href="#contact" className="text-gray-300 hover:text-deep-red transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Contact
                </a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Our Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-deep-red"></div>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-deep-red transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  VIP Elite Services
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-deep-red transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Business Events
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-deep-red transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Travel Companions
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-deep-red transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  24/7 Availability
                </a></li>
              </ul>
            </div>
          </div>

          {/* Contact Information Bar */}
          <div className="bg-gradient-to-r from-deep-red/20 via-dark-red/20 to-deep-red/20 rounded-2xl p-6 mb-8 border-2 border-deep-red/30 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Call Us 24/7</p>
                  <p className="text-gray-300">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Email Us</p>
                  <p className="text-gray-300">contact@locontoescorts.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Bangalore, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t-2 border-deep-red/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                &copy; 2024 Loconto Escorts. All rights reserved. | 
                <a href="#" className="text-deep-red hover:text-light-red transition-colors ml-1">Privacy Policy</a> | 
                <a href="#" className="text-deep-red hover:text-light-red transition-colors ml-1">Terms of Service</a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <svg className="w-4 h-4 text-deep-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>in Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}