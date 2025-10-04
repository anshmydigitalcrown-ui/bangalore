'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/images/services/017f9aa9-9e03-49c9-8e66-42a4af1b8cf1.jpg",
      alt: "Premium VIP Escort Services Bangalore - Elite Companion",
      category: "VIP Services",
      title: "Elite Companion"
    },
    {
      id: 2,
      src: "/images/services/0b5d1573-9e45-410f-8d11-c7ce4dca44ee.jpg",
      alt: "Business Event Escort Companion Bangalore - Professional Services",
      category: "Business Events",
      title: "Professional Companion"
    },
    {
      id: 3,
      src: "/images/services/0db1ca63-7b06-430e-b62b-af8a85116dc8.jpg",
      alt: "Social Gathering Escort Services Bangalore - Elegant Companions",
      category: "Social Events",
      title: "Social Gatherings"
    },
    {
      id: 4,
      src: "/images/services/135e3343-4be0-4525-ad1d-8d54eddc4ca6.jpg",
      alt: "Travel Companion Escort Services Bangalore - Luxury Travel",
      category: "Travel",
      title: "Travel Companions"
    },
    {
      id: 5,
      src: "/images/services/27f00dbd-6e40-40cf-b817-f5857d56fe2d.jpg",
      alt: "Private Party Escort Services Bangalore - Exclusive Entertainment",
      category: "Private Events",
      title: "Private Parties"
    },
    {
      id: 6,
      src: "/images/services/307c151e-f300-4791-abe6-bbc9f549443c.jpg",
      alt: "Hotel Service Escort Bangalore - Luxury Hotel Companions",
      category: "Hotel Services",
      title: "Hotel Companions"
    },
    {
      id: 7,
      src: "/images/services/38d5679b-5fda-4ece-b6ba-65244ccae33e.jpg",
      alt: "Dinner Date Escort Services Bangalore - Fine Dining Companions",
      category: "Dinner Dates",
      title: "Fine Dining"
    },
    {
      id: 8,
      src: "/images/services/5d8ab558-91fa-4acb-ba05-a48e016f918e.jpg",
      alt: "Weekend Escort Services Bangalore - Leisure Companions",
      category: "Weekend",
      title: "Weekend Getaways"
    },
    {
      id: 9,
      src: "/images/services/83f1c412-dd63-4621-8d86-4e0f6c302ea6.jpg",
      alt: "Outcall Escort Services Bangalore - Home Visit Companions",
      category: "Outcall",
      title: "Outcall Services"
    },
    {
      id: 10,
      src: "/images/services/972dc74f-18d6-4cb6-bcb7-8778fde4487c.jpg",
      alt: "High Class Escort Services Bangalore - Premium Model Companions",
      category: "Premium Models",
      title: "High Class Models"
    },
    {
      id: 11,
      src: "/images/services/afeeef32-78c0-49d2-b27e-09e2cedd539c.jpg",
      alt: "Luxury Escort Services Bangalore - Premium Elite Companions",
      category: "Luxury",
      title: "Luxury Services"
    },
    {
      id: 12,
      src: "/images/services/download (22).jpg",
      alt: "24/7 Escort Services Bangalore - Round the Clock Companions",
      category: "24/7 Service",
      title: "24/7 Availability"
    },
    // Hero slideshow images
    {
      id: 13,
      src: "/images/gallery/143e36d3-7c11-4ee3-9be3-80187803499b.jpg",
      alt: "Professional Escort Services Bangalore - Sophisticated Lady Companion",
      category: "Hero Gallery",
      title: "Sophisticated Companion"
    },
    {
      id: 14,
      src: "/images/gallery/22630993-abae-405e-b93e-f37e845fb4a4.jpg",
      alt: "Elegant Escort Services Bangalore - Beautiful Companion",
      category: "Hero Gallery",
      title: "Elegant Beauty"
    },
    {
      id: 15,
      src: "/images/gallery/543fc971-b904-4b9a-9980-f71a51558998.jpg",
      alt: "Premium Escort Services Bangalore - Luxury Companion",
      category: "Hero Gallery",
      title: "Luxury Companion"
    },
    {
      id: 16,
      src: "/images/gallery/6c256eb5-0b04-4dde-82ae-d3b7f6399f3b.jpg",
      alt: "High-Class Escort Services Bangalore - Beautiful Model Companion",
      category: "Hero Gallery",
      title: "High-Class Model"
    },
    // New Gallery Images
    {
      id: 17,
      src: "/images/gallery/6e186d35-29c8-4afd-81ec-db682700698b.jpg",
      alt: "Premium Escort Services Bangalore - Elegant Beauty",
      category: "Premium Collection",
      title: "Elegant Beauty"
    },
    {
      id: 18,
      src: "/images/gallery/823aba5e-8e3d-440f-97b4-142fe4900911.jpg",
      alt: "Luxury Escort Services Bangalore - Sophisticated Model",
      category: "Premium Collection",
      title: "Sophisticated Model"
    },
    {
      id: 19,
      src: "/images/gallery/85797e8d-009b-43ce-8e62-d0810f864001.jpg",
      alt: "High-Class Escort Services Bangalore - Professional Companion",
      category: "Premium Collection",
      title: "Professional Companion"
    },
    {
      id: 20,
      src: "/images/gallery/d0c60799-1b90-4c30-b6d8-1e4623da4f39.jpg",
      alt: "Elite Escort Services Bangalore - Luxury Model",
      category: "Premium Collection",
      title: "Luxury Model"
    },
    {
      id: 21,
      src: "/images/gallery/d55f7364-bfad-4d1a-aadd-565b5df9d3fd.jpg",
      alt: "Exclusive Escort Services Bangalore - Beautiful Companion",
      category: "Premium Collection",
      title: "Beautiful Companion"
    },
    {
      id: 22,
      src: "/images/gallery/fa985e68-66f2-4144-b386-bb77732c5099.jpg",
      alt: "Premium Escort Services Bangalore - Stunning Beauty",
      category: "Premium Collection",
      title: "Stunning Beauty"
    },
    {
      id: 23,
      src: "/images/gallery/Girl Photography.jpg",
      alt: "Professional Escort Services Bangalore - Artistic Photography",
      category: "Premium Collection",
      title: "Artistic Beauty"
    }
  ]

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))]

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

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
            <Link href="/services" className="text-white hover:text-deep-red transition-colors duration-300">Services</Link>
            <Link href="/gallery" className="text-deep-red font-semibold">Gallery</Link>
            <Link href="/#contact" className="text-white hover:text-deep-red transition-colors duration-300">Contact</Link>
          </div>
          <div className="flex gap-3">
            <Link href="/#contact" className="bg-gradient-to-r from-deep-red to-dark-red text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Now
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
            Our <span className="text-deep-red">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our exclusive collection showcasing the elegance and sophistication of our premium companionship services in Bangalore.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-deep-red border-deep-red text-white shadow-lg'
                    : 'border-deep-red text-deep-red hover:bg-deep-red hover:text-white'
                }`}
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

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group bg-gradient-to-br from-black via-gray-900 to-deep-red/10 rounded-2xl overflow-hidden border border-deep-red/30 hover:border-deep-red transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-deep-red/20 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-deep-red rounded-full flex items-center justify-center text-white hover:bg-dark-red transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience <span className="text-deep-red">Premium</span> Companionship
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to book one of our sophisticated companions? Contact us for discreet and professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-deep-red to-dark-red text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 font-semibold shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Book Now
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 font-semibold shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Chat
            </a>
            <Link
              href="/services"
              className="border-2 border-deep-red text-deep-red px-8 py-4 rounded-full hover:bg-deep-red hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              View Services
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