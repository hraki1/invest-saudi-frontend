import { useTranslation } from "react-i18next";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsArrowUpRight, BsPersonVcard } from "react-icons/bs";
import { PiMoneyWavyThin, PiGlobeStand } from "react-icons/pi";
import { MdOutlineRocketLaunch, MdOutlineTrendingUp } from "react-icons/md";

export default function Hero() {
  const { t } = useTranslation();
  const actions = [
    "hero.explore_sectors",
    "hero.e_services",
    "hero.e_consulting",
  ] as const;

  const stats = [
    {
      icon: MdOutlineTrendingUp,
      title: "World's Fastest Growing G20",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      icon: MdOutlineRocketLaunch,
      title: "Transformational",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      icon: PiGlobeStand,
      title: "Global Market Access",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      icon: PiMoneyWavyThin,
      title: "A Pro Investor Eco-System",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      icon: BsPersonVcard,
      title: "Unlock Government Contracts",
      description: "Economy positioned as a global logistic and trade hub",
    },
  ];

  return (
    <section
      id="home"
      className="relative h-screen flex items-end overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 ">
        <img
          src="/Hero.png"
          alt="Saudi Arabia landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black"></div>
      </div>

      {/*  main content container */}
      <div>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-12 mb-20 md:mb-20">
          <div className="max-w-2xl mb-4 md:mb-5">
            <h1 className="text-3xl bukra-bold sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 md:mb-0 leading-snug tracking-wide">
              {t("hero.title")}
            </h1>

            <p className="text-sm md:text-[22px] bukra-regular text-white/90 mb-8 md:mb-0 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* actions */}
          <div className="flex flex-col justify-between  items-center md:items-start sm:flex-row flex-wrap gap-4">
            {/* search input */}
            <div className="min-w-[300px] sm:min-w-sm relative mb-5 sm:mb-0">
              <input
                type="text"
                placeholder="i am looking for.."
                className="min-w-full sm:min-w-sm px-4 py-3 rounded-xl bg-black/30 text-white backdrop-blur-2xl border border-white/30 placeholder:text-white/70"
              />
              <HiMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2 text-white size-6" />
            </div>

            {/* buttons */}
            <div className="flex flex-col bukra-regular sm:flex-row flex-wrap gap-4">
              {actions.map((key) => (
                <button
                  key={key}
                  className="flex justify-between gap-3 items-center px-4 py-2.5 rounded-4xl bg-transparent border border-white/80 text-white"
                >
                  {t(key)}
                  <BsArrowUpRight className="size-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="hidden md:block relative z-10 bg-black/30 backdrop-blur-sm px-4 border-t border-white/10  ">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div dir="ltr"
                  key={index}
                  className="rounded-lg p-2 flex items-center md:gap-5"
                >
                  <IconComponent className="w-10 h-10 text-white" />

                  <div>
                    <h3 className="text-white">{stat.title}</h3>
                    <p className="text-white/70 text-base">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
