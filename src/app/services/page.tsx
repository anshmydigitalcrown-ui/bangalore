'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "VIP Elite Companionship",
      description: "Premium companionship services for discerning gentlemen who appreciate elegance, sophistication, and discretion.",
      features: ["24/7 Availability", "Multilingual Companions", "Professional Discretion", "Luxury Experience"],
      price: "Premium Rates",
      image: "/images/service1.jpg",
      duration: "Hourly/Overnight",
      category: "Elite"
    },
    {
      id: 2,
      title: "Business Event Companions",
      description: "Professional companions for corporate events, business dinners, and high-profile social gatherings.",
      features: ["Corporate Events", "Business Dinners", "Conference Companions", "Networking Events"],
      price: "Event Based",
      image: "/images/service2.jpg",
      duration: "Event Duration",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Travel Companions",
      description: "Sophisticated travel companions for business trips, leisure travel, and international destinations.",
      features: ["Domestic Travel", "International Travel", "Cultural Tours", "Business Trips"],
      price: "Travel Package",
      image: "/images/service3.jpg",
      duration: "Trip Duration",
      category: "Travel"
    },
    {
      id: 4,
      title: "Dinner Date Services",
      description: "Elegant dinner companions for fine dining experiences at Bangalore's premier restaurants.",
      features: ["Fine Dining", "Restaurant Recommendations", "Cultural Conversations", "Perfect Etiquette"],
      price: "Evening Rates",
      image: "/images/service4.jpg",
      duration: "2-4 Hours",
      category: "Social"
    },
    {
      id: 5,
      title: "Social Event Companions",
      description: "Charming companions for weddings, parties, premieres, and exclusive social gatherings.",
      features: ["Wedding Events", "Private Parties", "Film Premieres", "Art Exhibitions"],
      price: "Event Package",
      image: "/images/service5.jpg",
      duration: "4-8 Hours",
      category: "Social"
    },
    {
      id: 6,
      title: "Weekend Getaway",
      description: "Perfect companions for weekend retreats to luxury resorts and scenic destinations around Karnataka.",
      features: ["Resort Stays", "Spa Weekends", "Adventure Activities", "Cultural Exploration"],
      price: "Weekend Package",
      image: "/images/service6.jpg",
      duration: "2-3 Days",
      category: "Travel"
    },
    {
      id: 7,
      title: "Hotel Visits",
      description: "Discreet and professional hotel visit services with complete privacy and satisfaction guaranteed.",
      features: ["5-Star Hotels", "Complete Privacy", "Professional Service", "Satisfaction Guaranteed"],
      price: "Hourly Rates",
      image: "/images/service7.jpg",
      duration: "1-3 Hours",
      category: "Private"
    },
    {
      id: 8,
      title: "Home Visits",
      description: "Comfortable and private home visit services in secure and upscale residential areas.",
      features: ["Secure Locations", "Privacy Assured", "Flexible Timing", "Personal Comfort"],
      price: "Standard Rates",
      image: "/images/service8.jpg",
      duration: "2-4 Hours",
      category: "Private"
    },
    {
      id: 9,
      title: "Party Companions",
      description: "Vibrant and engaging companions for parties, celebrations, and nightlife experiences.",
      features: ["Club Visits", "Party Events", "Nightlife Experience", "Social Engagement"],
      price: "Night Rates",
      image: "/images/service9.jpg",
      duration: "4-6 Hours",
      category: "Nightlife"
    },
    {
      id: 10,
      title: "Shopping Companions",
      description: "Stylish shopping companions for luxury malls, designer boutiques, and exclusive shopping experiences.",
      features: ["Luxury Malls", "Designer Shopping", "Fashion Advice", "Personal Styling"],
      price: "Daytime Rates",
      image: "/images/service10.jpg",
      duration: "3-5 Hours",
      category: "Social"
    },
    {
      id: 11,
      title: "Cultural Tour Guides",
      description: "Knowledgeable companions for exploring Bangalore's rich culture, heritage sites, and local attractions.",
      features: ["Heritage Tours", "Local Attractions", "Cultural Insights", "Photography Assistance"],
      price: "Tour Package",
      image: "/images/service11.jpg",
      duration: "Full Day",
      category: "Cultural"
    },
    {
      id: 12,
      title: "Massage & Spa Services",
      description: "Relaxing massage and spa services provided by trained professionals in luxury spa environments.",
      features: ["Professional Massage", "Spa Treatments", "Relaxation Therapy", "Wellness Focus"],
      price: "Spa Package",
      image: "/images/service12.jpg",
      duration: "1-2 Hours",
      category: "Wellness"
    }
  ]

  const categories = ["All", "Elite", "Corporate", "Travel", "Social", "Private", "Nightlife", "Cultural", "Wellness"]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="bg-black px-6 py-4 border-b-2 border-deep-red shadow-lg shadow-black/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">
            <span className="text-deep-red">LOCONTO</span> ESCORTS
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-deep-red transition-colors duration-300">Home</Link>
            <Link href="/services" className="text-deep-red font-semibold">Services</Link>
            <Link href="/#gallery" className="text-white hover:text-deep-red transition-colors duration-300">Gallery</Link>
            <Link href="/#contact" className="text-white hover:text-deep-red transition-colors duration-300">Contact</Link>
          </div>
          <Link href="/#contact" className="bg-gradient-to-r from-deep-red to-dark-red text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
            Book Now
          </Link>
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-deep-red text-white hover:bg-deep-red hover:scale-105 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-deep-red/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-l from-dark-red/20 to-transparent rounded-full blur-xl"></div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden border-2 border-deep-red/30 hover:border-deep-red transition-all duration-300 group hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-deep-red/20"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-deep-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-deep-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
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
                      className="flex-1 bg-gradient-to-r from-deep-red to-dark-red text-white text-center py-3 rounded-xl hover:scale-105 transition-transform duration-300 font-semibold shadow-lg"
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
      </section>

      {/* Why Choose Us Section */}
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
              className="bg-gradient-to-r from-deep-red to-dark-red text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 font-semibold shadow-xl"
            >
              Book Your Service Now
            </Link>
            <Link
              href="/#contact"
              className="border-2 border-deep-red text-deep-red px-8 py-4 rounded-full hover:bg-deep-red hover:text-white transition-all duration-300 font-semibold"
            >
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
                <li><Link href="/#gallery" className="text-gray-300 hover:text-deep-red transition-colors">Gallery</Link></li>
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