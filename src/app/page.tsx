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
              <div className="bg-gradient-to-br from-deep-red/10 to-dark-red/10 rounded-3xl p-4 backdrop-blur-sm border border-deep-red/30 shadow-2xl">
                <h3 className="text-xl font-bold text-deep-red mb-4 text-center">Our Elite Companions</h3>
                
                {/* Slideshow Container */}
                <div className="relative w-full h-80 max-w-xs mx-auto rounded-2xl overflow-hidden group bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
                  {slides.map((slide, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-contain"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-deep-red/90 hover:bg-deep-red text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
                    onClick={prevSlide}
                    aria-label="Previous image"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-deep-red/90 hover:bg-deep-red text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
                    onClick={nextSlide}
                    aria-label="Next image"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>
                
                {/* Slideshow Navigation Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {slides.map((_, index) => (
                    <button 
                      key={index}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide 
                          ? 'w-6 h-2 bg-deep-red shadow-lg' 
                          : 'w-2 h-2 bg-gray-500 hover:bg-deep-red/70 hover:scale-125'
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`View image ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                {/* Card Info */}
                <div className="mt-4 text-center space-y-3">
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Browse our verified premium escorts
                  </p>
                  <div className="flex justify-center gap-2">
                    <button className="bg-deep-red hover:bg-dark-red text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                      View Gallery
                    </button>
                    <button className="border border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105">
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-bg/50 p-8 rounded-lg border border-deep-red/20 hover:border-deep-red/50 transition-colors">
              <div className="w-16 h-16 bg-deep-red rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Availability</h3>
              <p className="text-gray-300">Round-the-clock professional services available whenever you need companionship.</p>
            </div>
            <div className="bg-dark-bg/50 p-8 rounded-lg border border-deep-red/20 hover:border-deep-red/50 transition-colors">
              <div className="w-16 h-16 bg-deep-red rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Discreet & Safe</h3>
              <p className="text-gray-300">Complete privacy and safety guaranteed with verified professional companions.</p>
            </div>
            <div className="bg-dark-bg/50 p-8 rounded-lg border border-deep-red/20 hover:border-deep-red/50 transition-colors">
              <div className="w-16 h-16 bg-deep-red rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-gray-300">Elite companions providing sophisticated and professional companionship services.</p>
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