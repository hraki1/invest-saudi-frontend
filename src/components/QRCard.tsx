import { HiPhone, HiEnvelope } from "react-icons/hi2";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";

interface QRCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  accentColor: string;
}

const QRCardItem = ({ icon, iconBgColor, title, description, phone, email, accentColor }: QRCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden h-full flex flex-col">
      {/* Geometric Pattern Background - positioned behind QR code area */}
      <div 
        className="absolute bottom-0 right-0 w-56 h-56 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M20 20v-5h-2v5h-5v2h5v5h2v-5h5v-2h-5zm0-20V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 20v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with Icon and Title */}
        <div className="flex items-start gap-4 mb-5">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-white flex-shrink-0"
            style={{ backgroundColor: iconBgColor }}
          >
            <div className="text-3xl">
              {icon}
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 bukra-bold pt-1 leading-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-700 bukra-regular mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Contact Information */}
        <div className="space-y-3 mb-6">
          {/* Phone */}
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${accentColor}15` }}
            >
              <HiPhone className="text-base" style={{ color: accentColor }} />
            </div>
            <span className="text-sm md:text-base text-gray-800 bukra-regular">{phone}</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${accentColor}15` }}
            >
              <HiEnvelope className="text-base" style={{ color: accentColor }} />
            </div>
            <span className="text-sm md:text-base text-gray-800 bukra-regular break-all">{email}</span>
          </div>
        </div>

        {/* QR Code */}
        <div className="mt-auto flex justify-end">
          <div className="w-28 h-28 md:w-32 md:h-32 bg-white border border-gray-300 rounded-lg p-2 shadow-sm relative z-20">
            {/* QR Code - Simplified representation */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              className="p-1"
            >
              <rect x="0" y="0" width="100" height="100" fill="white" />
              {/* Top-left corner square */}
              <rect x="5" y="5" width="28" height="28" fill="black" />
              <rect x="10" y="10" width="18" height="18" fill="white" />
              <rect x="13" y="13" width="12" height="12" fill="black" />
              {/* Top-right corner square */}
              <rect x="67" y="5" width="28" height="28" fill="black" />
              <rect x="72" y="10" width="18" height="18" fill="white" />
              <rect x="75" y="13" width="12" height="12" fill="black" />
              {/* Bottom-left corner square */}
              <rect x="5" y="67" width="28" height="28" fill="black" />
              <rect x="10" y="72" width="18" height="18" fill="white" />
              <rect x="13" y="75" width="12" height="12" fill="black" />
              {/* Data modules - creating a more realistic QR pattern */}
              <rect x="38" y="5" width="6" height="6" fill="black" />
              <rect x="48" y="5" width="6" height="6" fill="black" />
              <rect x="56" y="5" width="6" height="6" fill="black" />
              <rect x="35" y="12" width="6" height="6" fill="black" />
              <rect x="42" y="12" width="6" height="6" fill="black" />
              <rect x="56" y="12" width="6" height="6" fill="black" />
              <rect x="63" y="12" width="6" height="6" fill="black" />
              <rect x="38" y="19" width="6" height="6" fill="black" />
              <rect x="45" y="19" width="6" height="6" fill="black" />
              <rect x="56" y="19" width="6" height="6" fill="black" />
              {/* Middle section */}
              <rect x="35" y="38" width="6" height="6" fill="black" />
              <rect x="42" y="38" width="6" height="6" fill="black" />
              <rect x="48" y="38" width="6" height="6" fill="black" />
              <rect x="56" y="38" width="6" height="6" fill="black" />
              <rect x="63" y="38" width="6" height="6" fill="black" />
              <rect x="35" y="45" width="6" height="6" fill="black" />
              <rect x="50" y="45" width="6" height="6" fill="black" />
              <rect x="60" y="45" width="6" height="6" fill="black" />
              <rect x="42" y="52" width="6" height="6" fill="black" />
              <rect x="54" y="52" width="6" height="6" fill="black" />
              {/* Bottom section */}
              <rect x="35" y="67" width="6" height="6" fill="black" />
              <rect x="48" y="67" width="6" height="6" fill="black" />
              <rect x="58" y="67" width="6" height="6" fill="black" />
              <rect x="40" y="74" width="6" height="6" fill="black" />
              <rect x="52" y="74" width="6" height="6" fill="black" />
              <rect x="35" y="81" width="6" height="6" fill="black" />
              <rect x="48" y="81" width="6" height="6" fill="black" />
              <rect x="58" y="81" width="6" height="6" fill="black" />
              <rect x="63" y="88" width="6" height="6" fill="black" />
              <rect x="72" y="74" width="6" height="6" fill="black" />
              <rect x="79" y="81" width="6" height="6" fill="black" />
              <rect x="85" y="88" width="6" height="6" fill="black" />
              <rect x="72" y="92" width="6" height="6" fill="black" />
              <rect x="85" y="92" width="6" height="6" fill="black" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function QRCard() {
  const cards = [
    {
      icon: <HiOutlineBuildingOffice2 />,
      iconBgColor: "#00A7A2", // Teal/green
      title: "MISA One-Stop Shop",
      description: "MISA's One Stop Shop provides general business support and allows General Managers to handle commercial registration there, eliminating the need to go to the Saudi Chamber of Commerce",
      phone: "966115065777 / 8002449990",
      email: "InvestorCare@misa.gov.sa",
      accentColor: "#00A7A2", // Teal/green
    },
    {
      icon: <HiOutlineStar />,
      iconBgColor: "#017BBA", // Blue
      title: "RHQ Care",
      description: "RHQ Care services focus on simplifying business operations for companies, providing expert advice, continuous support, and solutions that save time and money",
      phone: "966115065777 / 8002449990",
      email: "RHQCare@misa.gov.sa",
      accentColor: "#017BBA", // Blue
    },
    {
      icon: <HiOutlineUserCircle />,
      iconBgColor: "#00A7A2", // Teal/green
      title: "MIZA Support",
      description: "MIZA provides key support and resources, facilitating the establishment and growth of businesses within the RHQ Program",
      phone: "966115065777 / 8002449990",
      email: "MIZA@investsaudi.sa",
      accentColor: "#00A7A2", // Teal/green
    },
    {
      icon: <HiOutlinePhone />,
      iconBgColor: "#814A98", // Purple
      title: "MISA Call Center",
      description: "The MISA Call Center offers dedicated support and expert advice for your business needs in the RHQ Program, ensuring you have the required help and information at every stage",
      phone: "966115065777 / 8002449990",
      email: "InvestorCare@Misa.Gov.Sa",
      accentColor: "#814A98", // Purple
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <QRCardItem
              key={index}
              icon={card.icon}
              iconBgColor={card.iconBgColor}
              title={card.title}
              description={card.description}
              phone={card.phone}
              email={card.email}
              accentColor={card.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

