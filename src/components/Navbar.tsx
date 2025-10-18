import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "#home", label: "Awareness" },
    { href: "#about", label: "Explore Saudi" },
    { href: "#opportunities", label: "Our Setup" },
    { href: "#sectors", label: "News & Events" },
    { href: "#contact", label: "Contact Us" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="border-b border-white/10">
        <div className=" mx-auto px-4 sm:px-4 lg:px-5 py-3 md:py-5">
          <div className="flex items-center justify-between lg:my-2">
            {/* Logo */}
            <div className="flex items-center">
             <img src="/logo.png" alt="logo" className="h-8 md:h-[50px] w-auto object-contain" />
            </div>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8 rtl:space-x-reverse">
              {navigationLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-white text-base font-light space hover:text-gray-300 transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-2 md:gap-4">
              <button className="hidden md:block text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <LanguageSwitcher />
              <div className="hidden md:block text-white text-xs">
                <div className="text-right leading-tight">
                 <img src="/logo-vision.png" alt="Vision 2030" className="w-22  object-contain" />
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {navigationLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-base tracking-wide hover:text-gray-300 transition-colors uppercase"
                  >
                    {link.label}
                  </a>
                ))}
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
