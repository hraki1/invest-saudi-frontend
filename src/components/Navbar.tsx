import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-white">
                <div className="text-xs md:text-sm font-light tracking-wide">استثمر السعودية</div>
                <div className="text-base md:text-lg font-bold tracking-wider">INVEST SAUDI</div>
              </div>
            </div>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#home" className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide">
                Awareness
              </a>
              <a href="#about" className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide">
                Explore Saudi
              </a>
              <a href="#opportunities" className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide">
                Our Setup
              </a>
              <a href="#sectors" className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide">
                News & Events
              </a>
              <a href="#contact" className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide">
                Contact Us
              </a>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="hidden md:block text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <LanguageSwitcher />
              <div className="hidden md:block text-white text-xs">
                <div className="text-right leading-tight">
                  <div className="font-bold">2030</div>
                  <div className="text-[10px]">VISION</div>
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide"
                >
                  Awareness
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide"
                >
                  Explore Saudi
                </a>
                <a 
                  href="#opportunities" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide"
                >
                  Our Setup
                </a>
                <a 
                  href="#sectors" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide"
                >
                  News & Events
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-sm hover:text-gray-300 transition-colors uppercase tracking-wide"
                >
                  Contact Us
                </a>
                <div className="pt-2 border-t border-white/10">
                  <button className="text-white hover:text-gray-300 transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
