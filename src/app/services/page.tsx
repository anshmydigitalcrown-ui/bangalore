'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const services = [
    {
      id: 1,
      title: "VIP Elite Services",
      description: "Premium VIP Service - Exclusive companionship for discerning clients seeking luxury experiences.",
      features: ["24/7 Availability", "Multilingual Companions", "Professional Discretion", "Luxury Experience"],
      price: "Premium Rates",
      image: "/images/services/017f9aa9-9e03-49c9-8e66-42a4af1b8cf1.jpg",
      duration: "Hourly/Overnight"
    },
    {
      id: 2,
      title: "Business Events",
      description: "Star-Like Companions - Professional companions for corporate events and business meetings.",
      features: ["Corporate Events", "Business Dinners", "Conference Companions", "Networking Events"],
      price: "Event Based",
      image: "/images/services/0b5d1573-9e45-410f-8d11-c7ce4dca44ee.jpg",
      duration: "Event Duration"
    },
    {
      id: 3,
      title: "Social Gatherings",
      description: "Professional Model Services - Elegant companions for parties, dinners, and social events.",
      features: ["Fine Dining", "Restaurant Recommendations", "Cultural Conversations", "Perfect Etiquette"],
      price: "Evening Rates",
      image: "/images/services/0db1ca63-7b06-430e-b62b-af8a85116dc8.jpg",
      duration: "2-4 Hours"
    },
    {
      id: 4,
      title: "Travel Companions",
      description: "Premium VIP Service - Sophisticated travel partners for business trips and vacations.",
      features: ["Domestic Travel", "International Travel", "Cultural Tours", "Business Trips"],
      price: "Travel Package",
      image: "/images/services/135e3343-4be0-4525-ad1d-8d54eddc4ca6.jpg",
      duration: "Trip Duration"
    },
    {
      id: 5,
      title: "Private Parties",
      description: "Star-Like Companions - Exclusive entertainment for private parties and intimate gatherings.",
      features: ["Wedding Events", "Private Parties", "Film Premieres", "Art Exhibitions"],
      price: "Event Package",
      image: "/images/services/27f00dbd-6e40-40cf-b817-f5857d56fe2d.jpg",
      duration: "4-8 Hours"
    },
    {
      id: 6,
      title: "Hotel Services",
      description: "Professional Model Services - Discreet and professional services at luxury hotels.",
      features: ["5-Star Hotels", "Complete Privacy", "Professional Service", "Satisfaction Guaranteed"],
      price: "Hourly Rates",
      image: "/images/services/307c151e-f300-4791-abe6-bbc9f549443c.jpg",
      duration: "1-3 Hours"
    },
    {
      id: 7,
      title: "Dinner Dates",
      description: "Premium VIP Service - Charming companions for fine dining and romantic evenings.",
      features: ["Secure Locations", "Privacy Assured", "Flexible Timing", "Personal Comfort"],
      price: "Standard Rates",
      image: "/images/services/38d5679b-5fda-4ece-b6ba-65244ccae33e.jpg",
      duration: "2-4 Hours"
    },
    {
      id: 8,
      title: "Weekend Getaways",
      description: "Star-Like Companions - Perfect companions for weekend trips and leisure activities.",
      features: ["Club Visits", "Party Events", "Nightlife Experience", "Social Engagement"],
      price: "Night Rates",
      image: "/images/services/5d8ab558-91fa-4acb-ba05-a48e016f918e.jpg",
      duration: "4-6 Hours"
    },
    {
      id: 9,
      title: "Outcall Services",
      description: "Professional Model Services - Professional companions available for outcall appointments.",
      features: ["Luxury Malls", "Designer Shopping", "Fashion Advice", "Personal Styling"],
      price: "Daytime Rates",
      image: "/images/services/83f1c412-dd63-4621-8d86-4e0f6c302ea6.jpg",
      duration: "3-5 Hours"
    },
    {
      id: 10,
      title: "High Class Models",
      description: "Premium VIP Service - Elite model companions for the most discerning clientele.",
      features: ["Heritage Tours", "Local Attractions", "Cultural Insights", "Photography Assistance"],
      price: "Tour Package",
      image: "/images/services/972dc74f-18d6-4cb6-bcb7-8778fde4487c.jpg",
      duration: "Full Day"
    },
    {
      id: 11,
      title: "Luxury Services",
      description: "Star-Like Companions - Ultimate luxury experiences with our premium companions.",
      features: ["Professional Massage", "Spa Treatments", "Relaxation Therapy", "Wellness Focus"],
      price: "Spa Package",
      image: "/images/services/afeeef32-78c0-49d2-b27e-09e2cedd539c.jpg",
      duration: "1-2 Hours"
    },
    {
      id: 12,
      title: "24/7 Availability",
      description: "Professional Model Services - Round-the-clock professional services available anytime.",
      features: ["Resort Stays", "Spa Weekends", "Adventure Activities", "Cultural Exploration"],
      price: "Weekend Package",
      image: "/images/services/download (22).jpg",
      duration: "2-3 Days"
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="bg-black px-4 sm:px-6 py-4 border-b-2 border-deep-red shadow-lg shadow-black/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">
            <span className="text-deep-red">LOCONTO</span> ESCORTS
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-deep-red transition-colors duration-300">Home</Link>
            <Link href="/services" className="text-deep-red font-semibold">Services</Link>
            <Link href="/gallery" className="text-white hover:text-deep-red transition-colors duration-300">Gallery</Link>
            <Link href="/#contact" className="text-white hover:text-deep-red transition-colors duration-300">Contact</Link>
          </div>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex gap-3">
            <Link href="/#contact" className="bg-gradient-to-r from-deep-red to-dark-red text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Book Now
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-deep-red">Premium</span> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of elite companionship services designed to exceed your expectations. 
            From intimate dinner dates to sophisticated travel companions, we offer unmatched luxury and discretion.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-deep-red/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-l from-dark-red/20 to-transparent rounded-full blur-xl"></div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-black via-gray-900 to-deep-red/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-deep-red/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-deep-red/50"
              >
                {/* Service Image */}
                <div className="relative w-full h-96 bg-gradient-to-br from-black via-gray-900 to-deep-red/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-deep-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-deep-red font-semibold mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <span className="w-1.5 h-1.5 bg-deep-red rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="text-white font-semibold">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Pricing</p>
                      <p className="text-deep-red font-semibold">{service.price}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href="/#contact"
                      className="flex-1 bg-gradient-to-r from-deep-red to-dark-red hover:from-dark-red hover:to-deep-red text-white text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-red/50"
                    >
                      Book Now
                    </Link>
                    <button className="px-4 py-3 border-2 border-deep-red text-deep-red rounded-xl hover:bg-deep-red hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-deep-red/10 via-black to-dark-red/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Why Choose Our <span className="text-deep-red">Services</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% Discretion</h3>
              <p className="text-gray-300">Complete privacy and confidentiality guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-300">Only the finest companions and services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Available</h3>
              <p className="text-gray-300">Round-the-clock service availability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-deep-red to-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Satisfaction</h3>
              <p className="text-gray-300">Your satisfaction is our priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience <span className="text-deep-red">Luxury</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to book your preferred service and experience the finest companionship in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-deep-red to-dark-red text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 font-semibold shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Book Your Service Now
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 font-semibold shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Consultation
            </a>
            <Link
              href="/#contact"
              className="border-2 border-deep-red text-deep-red px-8 py-4 rounded-full hover:bg-deep-red hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-16 border-t-2 border-deep-red shadow-2xl shadow-deep-red/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Link href="/" className="text-3xl font-bold text-white mb-4 block">
                <span className="text-deep-red">LOCONTO</span> ESCORTS
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Premium companionship services in Bangalore with complete discretion and professionalism.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-300 hover:text-deep-red transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-deep-red transition-colors">Services</Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-deep-red transition-colors">Gallery</Link></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-deep-red transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
              <p className="text-gray-300 mb-2">Phone: +91 XXXXX XXXXX</p>
              <p className="text-gray-300 mb-2">Email: contact@locontoescorts.com</p>
              <p className="text-gray-300">Location: Bangalore, Karnataka</p>
            </div>
          </div>
          <div className="border-t-2 border-deep-red/30 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Loconto Escorts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}