import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-bg via-darker-bg to-dark-bg">
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">
            <span className="text-yellow-400">LOCONTO</span> ESCORTS
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
      <section id="home" className="relative px-6 py-20 min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-banner.jpg"
            alt="Premium Escort Services in Bangalore"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <div className="text-left">
              <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-4 tracking-wide">
                LOCONTO ESCORTS
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                NO.1 ESCORTS PROVIDER IN BENGALURU
              </h2>
              <p className="text-xl md:text-2xl text-white mb-6">
                SATISFY YOUR DESIRES WITH BENGALURU CALL GIRLS
              </p>
              <p className="text-lg text-gray-300 mb-8 italic">
                THE MOST STYLISH AND FASHIONABLE ELITE ESCORTS
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-semibold">CONTACT-US:</span>
                  <a href="tel:9632777134" className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg font-semibold">
                    9632777134
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-semibold">EMAIL-US:</span>
                  <a href="mailto:loconto.net@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg">
                    loconto.net@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  View Our Services
                </button>
                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Contact Now
                </button>
              </div>
            </div>
            
            {/* Right side - Image space (the background image covers this area) */}
            <div className="hidden lg:block"></div>
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
            <span className="text-yellow-400">LOCONTO</span> ESCORTS
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