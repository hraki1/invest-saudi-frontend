export default function Hero() {

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2070&auto=format&fit=crop"
          alt="Saudi Arabia landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 md:mb-8 leading-snug tracking-wide">
            Unlock Investment<br />
            Opportunities In Saudi Arabia.
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 md:mb-12 font-light leading-relaxed">
            Explore sectors, services, and partners – all in one platform.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="px-7 py-3.5 rounded-4xl bg-transparent border border-white/80 text-white text-xs font-normal hover:bg-white hover:text-black transition-all duration-200 uppercase tracking-widest">
              Explore Sectors
            </button>
            <button className="px-7 py-3.5 rounded-4xl bg-transparent border border-white/80 text-white text-xs font-normal hover:bg-white hover:text-black transition-all duration-200 uppercase tracking-widest">
              E-Services
            </button>
            <button className="px-7 py-3.5 rounded-4xl bg-transparent border border-white/80 text-white text-xs font-normal hover:bg-white hover:text-black transition-all duration-200 uppercase tracking-widest">
              E-Consulting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
