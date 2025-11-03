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
  qrUrl?: string;
}

const QRCardItem = ({
  icon,
  iconBgColor,
  title,
  description,
  phone,
  email,
  accentColor,
  qrUrl,
}: QRCardProps) => {
  return (
    <div className="relative rounded-3xl p-[2.5px]">
      <div
        className="rounded-2xl p-6 md:p-8 h-full bg-white border-[1px] border-[#E5E5E5] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom right, #D9F2F1, #ECE4F0 23%, #FBFBFB, #FEFEFE)",
          boxShadow: "0px 1px 2px -1px #0A0D121A",
        }}
      >
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
          {/* Left: content */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div
                className={` w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white shadow-md p-3`}
                style={{
                  background:
                    "linear-gradient(to bottom right, #FEFEFE, #FBFBFB, #F1F1F1, #E7E7E7)",
                }}
              >
                <div
                  className="text-3xl md:text-4xl"
                  style={{ color: iconBgColor }}
                >
                  {icon}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 bukra-bold leading-tight">
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-700 bukra-regular mb-6 leading-relaxed">
              {description}
            </p>

            {/* down section */}
            <div className="flex items-center justify-between">
              {/* Contacts */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <HiPhone
                      className="text-base"
                      style={{ color: accentColor }}
                    />
                  </div>
                  <span className="text-sm md:text-base text-gray-800 bukra-regular">
                    {phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <HiEnvelope
                      className="text-base"
                      style={{ color: accentColor }}
                    />
                  </div>
                  <span className="text-sm md:text-base text-gray-800 bukra-regular break-all">
                    {email}
                  </span>
                </div>
              </div>

              <div className="w-28 h-28 md:w-32 md:h-32 bg-white border border-gray-300 rounded-lg p-2 shadow-sm relative z-10 overflow-hidden">
                <img
                  src={qrUrl}
                  alt={`${title} QR`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: pattern + QR */}
          <div className="relative flex items-center justify-end">
            <div className="absolute inset-0 opacity-80 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("miza/bg-card.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom right",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function QRCard() {
  type IconKey = "building" | "star" | "user" | "phone";

  const iconMap: Record<IconKey, React.ReactNode> = {
    building: <HiOutlineBuildingOffice2 />,
    star: <HiOutlineStar />,
    user: <HiOutlineUserCircle />,
    phone: <HiOutlinePhone />,
  };

  const ayyar: Array<{
    iconKey: IconKey;
    iconBgColor: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    accentColor: string;
    qrUrl?: string;
  }> = [
    {
      iconKey: "building",
      iconBgColor: "#00A7A2", // Teal/green
      title: "MISA One-Stop Shop",
      description:
        "MISA's One Stop Shop provides general business support and allows General Managers to handle commercial registration there, eliminating the need to go to the Saudi Chamber of Commerce",
      phone: "966115065777 / 8002449990",
      email: "InvestorCare@misa.gov.sa",
      accentColor: "#00A7A2", // Teal/green
      qrUrl: "QRCodes/code-1.png",
    },
    {
      iconKey: "star",
      iconBgColor: "#017BBA", // Blue
      title: "RHQ Care",
      description:
        "RHQ Care services focus on simplifying business operations for companies, providing expert advice, continuous support, and solutions that save time and money",
      phone: "966115065777 / 8002449990",
      email: "RHQCare@misa.gov.sa",
      accentColor: "#017BBA", // Blue
      qrUrl: "QRCodes/code-2.png",
    },
    {
      iconKey: "user",
      iconBgColor: "#00A7A2", // Teal/green
      title: "MIZA Support",
      description:
        "MIZA provides key support and resources, facilitating the establishment and growth of businesses within the RHQ Program",
      phone: "966115065777 / 8002449990",
      email: "MIZA@investsaudi.sa",
      accentColor: "#00A7A2", // Teal/green
      qrUrl: "QRCodes/code-3.png",
    },
    {
      iconKey: "phone",
      iconBgColor: "#814A98", // Purple
      title: "MISA Call Center",
      description:
        "The MISA Call Center offers dedicated support and expert advice for your business needs in the RHQ Program, ensuring you have the required help and information at every stage",
      phone: "966115065777 / 8002449990",
      email: "InvestorCare@Misa.Gov.Sa",
      accentColor: "#814A98", // Purple
      qrUrl: "QRCodes/code-4.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ayyar.map((item, index) => (
            <QRCardItem
              key={index}
              icon={iconMap[item.iconKey]}
              iconBgColor={item.iconBgColor}
              title={item.title}
              description={item.description}
              phone={item.phone}
              email={item.email}
              accentColor={item.accentColor}
              qrUrl={item.qrUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
