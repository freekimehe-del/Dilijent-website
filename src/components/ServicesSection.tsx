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
    <section id="services" className="py-24 md:py-32 bg-section-alt">
      <div className="container-custom">
        <FadeIn direction="down">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 uppercase">
              OUR CORE PROFESSIONAL <span className="text-primary">SERVICES</span>
            </h2>
            <div className="w-full h-px bg-border max-w-7xl mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-5xl mx-auto leading-relaxed">
              Our services span IT Solutions, Revenue Cycle Management, and Digital Marketing. For each domain, we deliver comprehensive solutions using the latest technologies and tools, designed to meet your business needs today and in the future.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2} duration={0.5} className="h-full">
              <div
                className="bg-white shadow-lg border border-gray-100 rounded-lg p-8 text-center border-b-4 border-transparent hover:border-primary transition-all duration-300 group h-full hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                  <service.icon size={40} className={`text-iconBlue group-hover:text-primary transition-colors duration-300 ${service.animationClass}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-gray-900 font-heading font-bold text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <a href="#contact" aria-label={`Learn more about ${service.title}`} className="mt-auto">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-semibold tracking-wide">
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
