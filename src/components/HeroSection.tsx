import { useState, useEffect } from 'react';
import heroVideo from '@/assets/hero-video.mp4';
import heroPoster from '@/assets/hero-poster.png';
import { ArrowRight, MessageSquare } from 'lucide-react';
import RCMRequestModal from './RCMRequestModal';

const HeroSection = () => {
  const [isRCMModalOpen, setIsRCMModalOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[720px] max-h-[900px] w-full overflow-hidden flex items-center justify-center isolate bg-slate-900">
      {/* Video Background with Object Cover */}
      <video
        src={heroVideo}
        poster={heroPoster}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Gradient Overlay for Readability (Brand Compatible) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent z-10" />

      {/* Main Content - Left Aligned */}
      <div className="container px-6 md:px-10 relative z-20 w-full h-full flex flex-col justify-center">
        <div className={`max-w-4xl transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <h1 className="font-heading text-[34px] md:text-[50px] lg:text-[72px] font-bold tracking-tight mb-2 text-white leading-[1.1]">
            <span className="text-[#EF2B2B]">TECHNOLOGY</span><br />BUILT RIGHT.
          </h1>

          <h2 className="font-heading text-[24px] md:text-[38px] lg:text-[54px] font-bold tracking-tight mb-6 text-gray-200 leading-[1.1]">
            HEALTHCARE <span className="text-[#EF2B2B]">RCM</span><br />DONE BETTER.
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium mb-8 max-w-xl tracking-wide border-l-4 border-[#EF2B2B] pl-6">
            Our Expertise Stands on Two Proven Pillars.
          </p>

          <button
            onClick={() => setIsRCMModalOpen(true)}
            className="group flex items-center gap-3 bg-[#EF2B2B] hover:bg-red-600 text-white text-base md:text-lg font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:translate-x-2 shadow-lg"
          >
            Get a Quote
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Left Vertical Tab Button */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex">
        <button
          onClick={() => setIsRCMModalOpen(true)}
          className="bg-[#EF2B2B] text-white py-6 px-2 rounded-r-lg shadow-lg hover:pr-4 transition-all duration-300 writing-vertical-rl font-bold tracking-wider text-xs md:text-sm flex items-center gap-2"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          GET IN TOUCH
        </button>
      </div>

      {/* Floating CTA Circle Button (Bottom Right) */}
      <div className="fixed bottom-10 right-10 z-30 hidden md:block">
        <button
          onClick={() => setIsRCMModalOpen(true)}
          className="w-[160px] h-[160px] bg-[#EF2B2B] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform duration-300 animate-pulse-custom group"
        >
          <span className="flex flex-col items-center">
            <MessageSquare size={32} fill="currentColor" className="mb-2" />
            <span className="text-sm font-bold">Get a Quote</span>
          </span>
        </button>
      </div>

      <RCMRequestModal isOpen={isRCMModalOpen} onClose={() => setIsRCMModalOpen(false)} />
    </section>
  );
};

export default HeroSection;