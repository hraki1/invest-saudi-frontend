import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Invest Saudi</h3>
            <p className="text-gray-400 max-w-md">
              {t('footer.about_text')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#opportunities" className="text-gray-400 hover:text-white transition-colors">{t('nav.opportunities')}</a></li>
              <li><a href="#sectors" className="text-gray-400 hover:text-white transition-colors">{t('nav.sectors')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact_us')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@investsaudi.sa</li>
              <li>+966 11 123 4567</li>
              <li>Riyadh, Saudi Arabia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Invest Saudi. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

