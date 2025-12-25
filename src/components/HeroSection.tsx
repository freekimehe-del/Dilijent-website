import { Button } from '@/components/ui/button';
import { Monitor, FileText } from 'lucide-react';
import heroBg from '@/assets/hero-bg-light.jpg';
import FadeIn from '@/components/ui/FadeIn';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center">
      {/* Background image with overlay */}
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Office background"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/75 to-white/95" />
      </div>

      {/* Decorative curved shape */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
        <svg
          className="absolute right-0 h-full opacity-5"
          viewBox="0 0 400 600"
          fill="none"
        >
          <path
            d="M200 0 Q400 150 300 300 Q200 450 400 600"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="350" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center py-20 md:py-32">
        <FadeIn direction="up" duration={0.8}>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold mb-6 leading-tight tracking-wide">
            <span className="text-primary">TECHNOLOGY </span>
            <span className="text-gray-900">BUILT RIGHT.</span>
            <br />
            <span className="text-gray-900">HEALTHCARE </span>
            <span className="text-primary">RCM </span>
            <span className="text-gray-900">DONE BETTER.</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} duration={0.8}>
          <p className="text-gray-600 text-xl mb-10 font-body font-medium">
            Our Expertise Stands on Two Proven Pillars.
          </p>
        </FadeIn>

        {/* Service boxes */}
        {/* Service boxes */}
        <FadeIn direction="up" delay={0.4} duration={0.8}>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto px-4">
            {/* Software Development Box */}
            <div className="flex-1 w-full md:w-auto bg-white shadow-xl rounded-lg p-6 md:p-8 border border-gray-100 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 animate-float">
                <Monitor className="text-iconBlue" size={28} />
              </div>
              <h3 className="text-gray-900 font-heading font-semibold text-lg mb-1">Software Development Services</h3>
              <p className="text-gray-600 text-sm mb-5 font-body w-fit animate-typing">Custom App | AI/ML | Cloud</p>
              <a href="#contact" aria-label="Get Quote for Software Development" className="block w-full">
                <Button variant="hero" className="w-full text-sm font-semibold font-heading hover:scale-105 hover:bg-red-600 transition-all duration-300 animate-pulse-custom">
                  Get Quote for Software Dev.
                </Button>
              </a>
            </div>

            {/* Medical Billing Box */}
            <div className="flex-1 w-full md:w-auto bg-white shadow-xl rounded-lg p-6 md:p-8 border border-gray-100 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 animate-float">
                <FileText className="text-iconBlue" size={28} />
              </div>
              <h3 className="text-gray-900 font-heading font-semibold text-lg mb-1">Medical Billing & RCM Services</h3>
              <p className="text-gray-600 text-sm mb-5 font-body w-fit animate-typing">Billing | Coding | AR | Credentialing</p>
              <a href="#contact" aria-label="Get Quote for RCM Services" className="block w-full">
                <Button variant="hero" className="w-full text-sm font-semibold font-heading hover:scale-105 hover:bg-red-600 transition-all duration-300 animate-pulse-custom">
                  Get Quote for RCM
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;