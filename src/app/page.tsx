'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    { src: '/images/hero/hero1.jpg', alt: 'Premium Escort Services Bangalore' },
    { src: '/images/hero/hero2.jpg', alt: 'Luxury Companionship Bangalore' },
    { src: '/images/hero/hero3.jpg', alt: 'Elite Escort Services' },
    { src: '/images/hero/hero4.jpg', alt: 'Professional Companions Bangalore' }
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
      <nav className="relative z-50 px-6 py-4 bg-black/10 backdrop-blur-md border-b border-deep-red/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-deep-red">LOCONTO</span> ESCORTS
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-deep-red transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-deep-red transition-colors">Services</a>
            <a href="#gallery" className="text-white hover:text-deep-red transition-colors">Gallery</a>
            <a href="#about" className="text-white hover:text-deep-red transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-deep-red transition-colors">Contact</a>
          </div>
          <button className="bg-deep-red hover:bg-dark-red text-white px-6 py-2 rounded-lg transition-colors">
            Call Now
          </button>
        </div>
      </nav>

      {/* Hero Section with Slideshow */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium <span className="text-deep-red">Escort</span><br />
              Services in <span className="text-deep-red">Bangalore</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience the finest companionship with our elite, professional, and discreet services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-deep-red hover:bg-dark-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
                Book Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-deep-red px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-deep-red scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
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
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/017f9aa9-9e03-49c9-8e66-42a4af1b8cf1.jpg"
                  alt="Premium VIP Escort Services Bangalore - Elite Companion"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  VIP
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">VIP Elite Services</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Premium VIP Service - Exclusive companionship for discerning clients seeking luxury experiences.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/0b5d1573-9e45-410f-8d11-c7ce4dca44ee.jpg"
                  alt="Business Event Escort Companion Bangalore - Professional Services"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  CELEBRITY
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Business Events</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Star-Like Companions - Professional companions for corporate events and business meetings.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/0db1ca63-7b06-430e-b62b-af8a85116dc8.jpg"
                  alt="Social Gathering Escort Services Bangalore - Elegant Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ELITE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Social Gatherings</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Professional Model Services - Elegant companions for parties, dinners, and social events.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/135e3343-4be0-4525-ad1d-8d54eddc4ca6.jpg"
                  alt="Travel Companion Escort Services Bangalore - Luxury Travel"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  VIP
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Travel Companions</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Premium VIP Service - Sophisticated travel partners for business trips and vacations.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/27f00dbd-6e40-40cf-b817-f5857d56fe2d.jpg"
                  alt="Private Party Escort Services Bangalore - Exclusive Entertainment"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  CELEBRITY
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Private Parties</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Star-Like Companions - Exclusive entertainment for private parties and intimate gatherings.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/307c151e-f300-4791-abe6-bbc9f549443c.jpg"
                  alt="Hotel Service Escort Bangalore - Luxury Hotel Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ELITE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Hotel Services</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Professional Model Services - Discreet and professional services at luxury hotels.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 7 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/38d5679b-5fda-4ece-b6ba-65244ccae33e.jpg"
                  alt="Dinner Date Escort Services Bangalore - Fine Dining Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  VIP
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Dinner Dates</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Premium VIP Service - Charming companions for fine dining and romantic evenings.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 8 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/5d8ab558-91fa-4acb-ba05-a48e016f918e.jpg"
                  alt="Weekend Escort Services Bangalore - Leisure Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  CELEBRITY
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Weekend Getaways</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Star-Like Companions - Perfect companions for weekend trips and leisure activities.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 9 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/83f1c412-dd63-4621-8d86-4e0f6c302ea6.jpg"
                  alt="Outcall Escort Services Bangalore - Home Visit Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ELITE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Outcall Services</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Professional Model Services - Professional companions available for outcall appointments.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 10 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/972dc74f-18d6-4cb6-bcb7-8778fde4487c.jpg"
                  alt="High Class Escort Services Bangalore - Premium Model Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  VIP
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">High Class Models</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Premium VIP Service - Elite model companions for the most discerning clientele.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 11 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/afeeef32-78c0-49d2-b27e-09e2cedd539c.jpg"
                  alt="Luxury Escort Services Bangalore - Premium Elite Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  CELEBRITY
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Luxury Services</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Star-Like Companions - Ultimate luxury experiences with our premium companions.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>

            {/* Service Card 12 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/services/download (22).jpg"
                  alt="24/7 Escort Services Bangalore - Round the Clock Companions"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ELITE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">24/7 Availability</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">Professional Model Services - Round-the-clock professional services available anytime.</p>
                <button className="w-full bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
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