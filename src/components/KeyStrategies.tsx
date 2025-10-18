import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function KeyStrategies() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<number>(1);

  const pillars = [
    { title: t('key_strategies.vibrant_society'), color: "#0DACA7", image: "/icons/tree/green.png" },
    { title: t('key_strategies.thriving_economy'), color: "#814A98", image: "/icons/tree/pink.png" },
    { title: t('key_strategies.ambitious_nation'), color: "#013B5E", image: "/icons/tree/blue.png" }
  ];

  const sections = [
    { id: 1, title: t('key_strategies.vision_programs'), description: t('key_strategies.vision_programs_desc') },
    { id: 2, title: t('key_strategies.vision_projects'), description: t('key_strategies.vision_projects_desc') },
    { id: 3, title: t('key_strategies.goals'), description: t('key_strategies.goals_desc') },
    { id: 4, title: t('key_strategies.pillar'), description: t('key_strategies.pillar_desc') },
    { id: 5, title: t('key_strategies.sectors'), description: t('key_strategies.sectors_desc') },
    { id: 6, title: t('key_strategies.latest_progress'), description: t('key_strategies.latest_progress_desc') }
  ];


  const strategies = [
    {
      title: t('key_strategies.national_investment'),
      image: './key-strategies/1.png',
      color: '#814A98',
      toColor: '#814A98'
    },
    {
      title: t('key_strategies.gaming_esports'),
      image: './key-strategies/2.png',
      color: '#009692',
      toColor: '#009692'
    },
    {
      title: t('key_strategies.industrial_strategy'),
      image: './key-strategies/3.png',
      color: '#003A5D',
      toColor: '#003A5D'
    },
    {
      title: t('key_strategies.real_estate'),
      image: './key-strategies/4.png',
      color: '#814A98',
      toColor: '#814A98'
    }
  ];

  return (
    <section className="relative py-5 md:py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-8 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
            {t('key_strategies.title')}
          </h2>
          
          {/* Three Pillars */}
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-12">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-3">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-4 h-5"
                />
                <span className="text-lg md:text-2xl" style={{ color: pillar.color }}>{pillar.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {strategies.map((strategy, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={strategy.image} 
                alt={strategy.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <img src="/pin.png" alt="" className="absolute bottom-0 right-0 w-full  z-10" />
              <div 
                className="absolute inset-0 flex items-end p-6"
                style={{
                  background: `linear-gradient(to top, ${strategy.color}, ${strategy.toColor}80, transparent , transparent )`
                }}
              >
                <h3 className="text-white px-5  text-lg md:text-2xl font-light leading-tight">
                  {strategy.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Left Sidebar and Right Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-5">
          {/* Left Side - Navigation Menu */}
          <div className="space-y-1">          
             {sections.map((section, index) => (
               <div key={section.id}>
                 {index > 0 && (
                   <div className="h-px bg-gradient-to-r from-gray-200 via-gray-200/50 to-transparent my-4"></div>
                 )}
                 <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left py-2 px-6 rounded-xl transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white shadow-md py-4'
                      : ''
                  }`}
                >
                  <div className="flex items-center font-light gap-7">
                    <span className={`text-2xl ${
                      activeSection === section.id ? 'text-[#814A98]' : 'text-gray-300'
                    }`}>
                      {String(section.id).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h4 className={`text-xl md:text-[44px] mb-2 ${
                        activeSection === section.id ? 'text-[#814A98] font-medium' : 'text-gray-700 font-light'
                      }`}>
                        {section.title}
                      </h4>
                      {section.description && activeSection === section.id && (
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {section.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Right Side - Circular Diagram */}
          <div className="relative flex items-center justify-center">
            <img src="/key-strategies.png" alt="Key Strategies" className="w-full h-full max-h-[650px] object-contain" />
            </div>
        </div>
      </div>
    </section>
  );
}

