import { useTranslation } from 'react-i18next';
import { HiArrowRight } from 'react-icons/hi';

interface RegulationCard {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  dataPoints: Array<{ value: string; label: string }>;
}

export default function RegulatoryAgreement() {
  const { t } = useTranslation();

  const cards: RegulationCard[] = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L15 8H13V11H11V8H9L12 5Z" fill="white"/>
          <path d="M8 11V13H16V11H8Z" fill="white"/>
          <path d="M12 19L9 16H11V13H13V16H15L12 19Z" fill="white"/>
        </svg>
      ),
      iconBg: '#27C5C6',
      title: 'Investment and trade',
      description: 'We don\'t just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.',
      dataPoints: [
        { value: '10', label: 'BIT' },
        { value: '12', label: 'FTA' },
        { value: '17 B', label: 'FTA' }
      ]
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="12" y="18" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">%</text>
        </svg>
      ),
      iconBg: '#814A98',
      title: 'Trade and Investment Agreements',
      description: 'We don\'t just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.',
      dataPoints: [
        { value: '10', label: 'BIT' },
        { value: '12', label: 'FTA' },
        { value: '17 B', label: 'FTA' }
      ]
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8H16M8 12H16M8 16H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: '#003A5D',
      title: 'Investment Law',
      description: 'We don\'t just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.',
      dataPoints: [
        { value: '10', label: 'BIT' },
        { value: '12', label: 'FTA' },
        { value: '12', label: 'FTA' }
      ]
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="12" y="18" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">%</text>
        </svg>
      ),
      iconBg: '#814A98',
      title: 'Trade and Investment Agreements',
      description: 'We don\'t just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.',
      dataPoints: [
        { value: '10', label: 'BIT' },
        { value: '12', label: 'FTA' },
        { value: '12', label: 'FTA' }
      ]
    },
    {
      id: 5,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8H16M8 12H16M8 16H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: '#003A5D',
      title: 'Investment Law',
      description: 'We don\'t just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.',
      dataPoints: [
        { value: '10', label: 'BIT' },
        { value: '12', label: 'FTA' },
        { value: '12', label: 'FTA' }
      ]
    },
    {
      id: 6,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L15 8H13V11H11V8H9L12 5Z" fill="white"/>
          <path d="M8 11V13H16V11H8Z" fill="white"/>
          <path d="M12 19L9 16H11V13H13V16H15L12 19Z" fill="white"/>
        </svg>
      ),
      iconBg: '#27C5C6',
      title: 'Investment and trade',
      description: 'We don\'t just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.',
      dataPoints: [
        { value: '10', label: 'BIT' },
        { value: '12', label: 'FTA' },
        { value: '12', label: 'FTA' }
      ]
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="12" height="2" rx="1" fill="#814A98"/>
              <rect x="6" y="11" width="12" height="2" rx="1" fill="#814A98"/>
              <rect x="6" y="16" width="12" height="2" rx="1" fill="#814A98"/>
            </svg>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-tight">
              Regulatory and Bilateral Agreement
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-normal">
              Key insights into Saudi Arabia's economic and investment ecosystem.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-100 rounded-xl p-6 shadow-sm border border-dashed border-gray-300/60 relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: card.iconBg }}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                {card.description}
              </p>

              {/* Data Points */}
              <div className="flex flex-wrap gap-3 mb-6">
                {card.dataPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-200"
                  >
                    <span className="text-base font-bold text-slate-800">
                      {point.value}{' '}
                    </span>
                    <span className="text-xs text-slate-600">{point.label}</span>
                  </div>
                ))}
              </div>

              {/* View Details Button */}
              <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gray-200/90 text-slate-700 hover:bg-gray-300 transition-colors text-sm font-medium">
                View Details
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium">
            Explore Regulation & Agreements
            <HiArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-100 text-purple-700 border-2 border-purple-600 hover:bg-purple-200 transition-colors font-medium">
            Request Regulatory e-Advise
            <HiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

