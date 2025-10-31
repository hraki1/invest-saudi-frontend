import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const { i18n } = useTranslation();

  const toggleLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const navigationSections = [
    {
      title: "WHO WE ARE",
      links: [
        "Our Leadership",
        "Our History",
        "Solutions"
      ]
    },
    {
      title: "OUR INVESTMENTS",
      links: [
        "Our Portfolio",
        "Giga-Projects",
        "Investment Pools",
        "Governance and Investment Decisions"
      ]
    },
    {
      title: "STRATEGY & IMPACT",
      links: [
        "Our Program",
        "Invested in Better"
      ]
    },
    {
      title: "INVESTORS",
      links: [
        "Green Finance Framework",
        "Capital Markets Program",
        "Annual Reports",
        "Financial Statements",
        "Credit Ratings"
      ]
    }
  ];

  const socialMediaLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" }
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {navigationSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-sm md:text-base font-bold mb-4 bukra-bold" style={{ color: '#00A7A2' }}>
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-sm md:text-base text-gray-700 bukra-regular hover:text-gray-900 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Section - Contact, Social Media, Language, Chat */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Contact Section */}
            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 bukra-bold mb-4">
                For any enquiries, get in touch
              </h3>
              <button 
                className="px-6 py-3 rounded-lg text-white font-semibold bukra-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#00A7A2' }}
              >
                Contact Us
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {socialMediaLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors shadow-sm border border-gray-200"
                    aria-label={`${social.icon.name} social media`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Language Selection */}
            <div>
              <p className="text-sm md:text-base text-gray-700 bukra-regular mb-2">
                MISA WEBSITE OFFERED IN
              </p>
              <div className="flex items-center gap-2">
                {i18n.language === 'en' ? (
                  <>
                    <span className="text-sm md:text-base text-gray-700 bukra-regular underline">
                      English
                    </span>
                    <span className="text-sm md:text-base text-gray-700 bukra-regular">|</span>
                    <button
                      onClick={() => toggleLanguage('ar')}
                      className="text-sm md:text-base text-gray-700 bukra-regular underline hover:text-gray-900 transition-colors"
                    >
                      (Arabic) (العربية)
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => toggleLanguage('en')}
                      className="text-sm md:text-base text-gray-700 bukra-regular underline hover:text-gray-900 transition-colors"
                    >
                      English
                    </button>
                    <span className="text-sm md:text-base text-gray-700 bukra-regular">|</span>
                    <span className="text-sm md:text-base text-gray-700 bukra-regular underline">
                      (Arabic) (العربية)
                    </span>
                  </>
                )}
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </footer>
  );
}
