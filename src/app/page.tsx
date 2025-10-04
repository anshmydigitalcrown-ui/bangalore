'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-bg via-darker-bg to-dark-bg">
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">
            <span className="text-deep-red">LOCONTO</span> ESCORTS
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-white hover:text-light-red transition-colors">Home</Link>
            <Link href="#services" className="text-white hover:text-light-red transition-colors">Services</Link>
            <Link href="#gallery" className="text-white hover:text-light-red transition-colors">Gallery</Link>
            <Link href="#contact" className="text-white hover:text-light-red transition-colors">Contact</Link>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

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
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-deep-red hover:bg-dark-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  View Our Gallery
                </button>
                <button className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Contact Us Now
                </button>
              </div>
            </div>
            
            {/* Right side - Photo Slideshow */}
            <div className="relative">
              <div className="bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-deep-red mb-6 text-center tracking-wide">Our Elite Companions</h3>
                
                {/* Slideshow Container */}
                <div className="relative w-full h-[450px] max-w-sm mx-auto rounded-2xl overflow-hidden group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
                  {slides.map((slide, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                      }`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-contain transition-transform duration-1000 hover:scale-105"
                        style={{ objectPosition: 'center' }}
                      />
                      {/* Subtle vignette effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 rounded-2xl pointer-events-none"></div>
                    </div>
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-deep-red/90 backdrop-blur-sm hover:bg-deep-red text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl"
                    onClick={prevSlide}
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-deep-red/90 backdrop-blur-sm hover:bg-deep-red text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl"
                    onClick={nextSlide}
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold border border-white/20">
                    {currentSlide + 1} / {slides.length}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50">
                    <div 
                      className="h-full bg-gradient-to-r from-deep-red to-light-red transition-all duration-1000 ease-out"
                      style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Slideshow Navigation Dots */}
                <div className="flex justify-center mt-6 space-x-3">
                  {slides.map((_, index) => (
                    <button 
                      key={index}
                      className={`transition-all duration-500 rounded-full shadow-lg hover:shadow-xl ${
                        index === currentSlide 
                          ? 'w-10 h-3 bg-gradient-to-r from-deep-red to-light-red shadow-deep-red/50 scale-110' 
                          : 'w-3 h-3 bg-gray-500 hover:bg-deep-red/70 hover:scale-125 hover:shadow-lg'
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`View image ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                {/* Card Info */}
                <div className="mt-6 text-center space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    Browse our verified premium escorts
                  </p>
                  <div className="flex justify-center gap-3">
                    <button className="bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border border-deep-red/30">
                      View Gallery
                    </button>
                    <button className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:shadow-lg">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Our <span className="text-deep-red">Services</span>
          </h2>
          
          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/017f9aa9-9e03-49c9-8e66-42a4af1b8cf1.jpg"
                  alt="Premium VIP Escort Services Bangalore - Elite Companion"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">VIP Elite Services</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Premium companionship for discerning clients seeking luxury experiences.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/0b5d1573-9e45-410f-8d11-c7ce4dca44ee.jpg"
                  alt="Business Event Escort Companion Bangalore - Professional Services"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Events</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Professional companions for corporate events and business meetings.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/0db1ca63-7b06-430e-b62b-af8a85116dc8.jpg"
                  alt="Social Gathering Escort Services Bangalore - Elegant Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Social Gatherings</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Elegant companions for parties, dinners, and social events.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/135e3343-4be0-4525-ad1d-8d54eddc4ca6.jpg"
                  alt="Travel Companion Escort Services Bangalore - Luxury Travel"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Travel Companions</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Sophisticated travel partners for business trips and vacations.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/27f00dbd-6e40-40cf-b817-f5857d56fe2d.jpg"
                  alt="Private Party Escort Services Bangalore - Exclusive Entertainment"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Private Parties</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Exclusive entertainment for private parties and intimate gatherings.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/307c151e-f300-4791-abe6-bbc9f549443c.jpg"
                  alt="Hotel Service Escort Bangalore - Luxury Hotel Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hotel Services</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Discreet and professional services at luxury hotels.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 7 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/38d5679b-5fda-4ece-b6ba-65244ccae33e.jpg"
                  alt="Dinner Date Escort Services Bangalore - Fine Dining Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dinner Dates</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Charming companions for fine dining and romantic evenings.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 8 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/5d8ab558-91fa-4acb-ba05-a48e016f918e.jpg"
                  alt="Weekend Escort Services Bangalore - Leisure Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Weekend Getaways</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Perfect companions for weekend trips and leisure activities.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 9 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/83f1c412-dd63-4621-8d86-4e0f6c302ea6.jpg"
                  alt="Outcall Escort Services Bangalore - Home Visit Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Outcall Services</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Professional companions available for outcall appointments.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 10 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/972dc74f-18d6-4cb6-bcb7-8778fde4487c.jpg"
                  alt="High Class Escort Services Bangalore - Premium Model Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">High Class Models</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Elite model companions for the most discerning clientele.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 11 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/afeeef32-78c0-49d2-b27e-09e2cedd539c.jpg"
                  alt="Luxury Escort Services Bangalore - Premium Elite Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Luxury Services</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Ultimate luxury experiences with our premium companions.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Service Card 12 */}
            <div className="group bg-gradient-to-br from-deep-red/10 via-dark-red/5 to-deep-red/10 rounded-3xl p-6 backdrop-blur-sm border border-deep-red/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/images/services/download (22).jpg"
                  alt="24/7 Escort Services Bangalore - Round the Clock Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Availability</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Round-the-clock professional services available anytime.</p>
              <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Our <span className="text-deep-red">Gallery</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-deep-red/20 to-dark-red/20 rounded-lg border border-deep-red/30 flex items-center justify-center">
                <span className="text-deep-red text-lg font-semibold">Image {item}</span>
              </div>
            ))}
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
              <div className="w-16 h-16 bg-deep-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+91 XXXXX XXXXX</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">contact@example.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Bangalore, Karnataka</p>
            </div>
          </div>
          <button className="bg-deep-red hover:bg-dark-red text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors">
            Contact Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darker-bg px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-deep-red">LOCONTO</span> ESCORTS
          </div>
          <p className="text-gray-400 mb-6">Premium companionship services with complete discretion and professionalism.</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">&copy; 2024 Loconto Escorts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}