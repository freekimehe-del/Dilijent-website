import { Button } from '@/components/ui/button';
import { Settings, ShieldCheck, TrendingUp } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

const services = [
  {
    title: 'Information Technology Solutions',
    description: 'We provide innovative IT solutions that empower your business to operate smarter and faster. From advanced software development to seamless system integration, our services are designed to enhance efficiency, reduce downtime, and give you a competitive edge in today\'s technology-driven world.',
    icon: Settings,
    animationClass: 'group-hover:animate-spin',
  },
  {
    title: 'Revenue Cycle Management',
    description: 'Maximize your revenue and streamline financial operations with our comprehensive revenue cycle management solutions. We handle everything from billing and collections to reporting, helping your business improve cash flow, reduce errors, and maintain compliance—all while boosting overall profitability.',
    icon: ShieldCheck,
    animationClass: 'group-hover:animate-pulse',
  },
  {
    title: 'Digital Marketing Services',
    description: 'Grow your brand and reach your audience with our result-oriented digital marketing strategies. We specialize in SEO, social media marketing, PPC campaigns, and content marketing that not only increase visibility but also drive meaningful engagement and measurable business growth.',
    icon: TrendingUp,
    animationClass: 'group-hover:animate-bounce',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-10 md:py-16 bg-slate-900 text-white">
      <div className="container-custom">
        <FadeIn direction="down">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3 uppercase text-white tracking-tight">
              OUR CORE PROFESSIONAL <span className="text-primary">SERVICES</span>
            </h2>
            <div className="w-full h-px bg-white/20 max-w-[80px] mx-auto mb-3" />
            <p className="text-gray-400 text-sm max-w-3xl mx-auto leading-relaxed">
              Our services span IT Solutions, Revenue Cycle Management, and Digital Marketing. For each domain, we deliver comprehensive solutions using the latest technologies and tools, designed to meet your business needs today and in the future.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} duration={0.5} className="h-full">
              <div
                className="bg-white shadow-sm border border-gray-100 rounded-xl p-5 text-center border-b-4 border-transparent hover:border-primary transition-all duration-300 group h-full hover:-translate-y-1 hover:shadow-lg flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <service.icon size={28} className={`text-iconBlue group-hover:text-primary transition-colors duration-300 ${service.animationClass}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-gray-900 font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>
                <a href="#contact" aria-label={`Learn more about ${service.title}`} className="mt-auto w-full">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-semibold tracking-wide text-xs py-2 h-8 rounded-md">
                    Learn More
                  </Button>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
