import { useState } from 'react';

export default function KeyStrategies() {
  const [activeSection, setActiveSection] = useState<number>(1);

  const sections = [
    { id: 1, title: 'Vision Programs', description: 'The NIS Is One Of The Main Enablers To Vision 2030, Via A Comprehensive Package Of Reforms To The National Investment System' },
    { id: 2, title: 'Vision Projects', description: 'Major giga-projects transforming Saudi Arabia' },
    { id: 3, title: 'Goals', description: 'Strategic objectives aligned with Vision 2030' },
    { id: 4, title: 'Pillar', description: 'Core pillars supporting national transformation' },
    { id: 5, title: 'Sectors', description: 'Key economic sectors driving growth' },
    { id: 6, title: 'Latest Strategic Progress', description: 'Recent achievements and milestones' }
  ];

  const sectionContent: Record<number, {
    centerText: string;
    centerSubtext: string[];
    percentage?: string;
    highlightColor: string;
  }> = {
    1: {
      centerText: 'Vision 2030',
      centerSubtext: ['Comprehensive Package', 'Of Reforms'],
      highlightColor: '#8b5cf6'
    },
    2: {
      centerText: '150+',
      centerSubtext: ['Vision Projects', 'Nationwide'],
      highlightColor: '#10b981'
    },
    3: {
      centerText: '96',
      centerSubtext: ['Strategic Goals', 'Targets'],
      highlightColor: '#3b82f6'
    },
    4: {
      centerText: '3',
      centerSubtext: ['Main Pillars', 'Framework'],
      highlightColor: '#ec4899'
    },
    5: {
      percentage: '6.3%',
      centerText: 'Financial Sector &',
      centerSubtext: ['Development Program'],
      highlightColor: '#f59e0b'
    },
    6: {
      centerText: '2024',
      centerSubtext: ['Progress Update', 'Q4 Results'],
      highlightColor: '#06b6d4'
    }
  };

  const strategies = [
    {
      title: 'National Investment Strategy',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop',
      color: 'from-purple-600/80 to-purple-900/80'
    },
    {
      title: 'National Gaming and Esports Strategy',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
      color: 'from-teal-600/80 to-cyan-900/80'
    },
    {
      title: 'National Industrial Strategy',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      color: 'from-blue-600/80 to-blue-900/80'
    },
    {
      title: 'Real Estate Sector Strategy and Other',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      color: 'from-purple-700/80 to-indigo-900/80'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
            Overview Of Key National Strategies
          </h2>
          
          {/* Three Pillars */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <span className="text-lg md:text-xl text-cyan-600 font-light">Vibrant Society</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <span className="text-lg md:text-xl text-purple-600 font-light">Thriving Economy</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <span className="text-lg md:text-xl text-blue-600 font-light">Ambitious Nation</span>
            </div>
          </div>
        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {strategies.map((strategy, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={strategy.image} 
                alt={strategy.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${strategy.color} flex items-end p-6`}>
                <h3 className="text-white text-lg md:text-xl font-light leading-tight">
                  {strategy.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Left Sidebar and Right Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Navigation Menu */}
          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-light mb-8 transition-colors duration-300" style={{ color: sectionContent[activeSection].highlightColor }}>
              {sections.find(s => s.id === activeSection)?.title}
            </h3>
            
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left py-4 px-6 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white shadow-md'
                      : 'hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-sm font-light ${
                      activeSection === section.id ? 'text-gray-400' : 'text-gray-300'
                    }`}>
                      {String(section.id).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h4 className={`text-xl md:text-2xl font-light mb-2 ${
                        activeSection === section.id ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {section.title}
                      </h4>
                      {section.description && activeSection === section.id && (
                        <p className="text-sm text-gray-600 leading-relaxed">
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
            <img src="/key-strategies.png" alt="Key Strategies" className="w-full h-auto object-contain" />
            </div>
        </div>
      </div>
    </section>
  );
}

