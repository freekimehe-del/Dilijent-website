import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-team-light.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              About <span className="text-primary">Dilijent Systems</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Dilijent Systems, we help businesses grow by combining smart technology
                with real-world execution. We're not just a service provider — we're a long-term
                partner focused on building solutions that work, scale, and deliver
                measurable results.
              </p>

              <p>
                Our expertise spans three core areas: custom software development,
                healthcare revenue cycle management (RCM), and digital marketing. From
                building secure, scalable software and cloud solutions, to optimizing
                healthcare billing and revenue workflows, to driving visibility and leads through
                data-driven digital marketing — we help organizations move forward with
                confidence.
              </p>

              <p>
                What sets us apart is our practical, results-first approach. We listen closely,
                understand your challenges, and deliver solutions designed around your goals
                — not generic templates. Whether you're a healthcare provider, startup, or
                growing enterprise, our team brings clarity, accountability, and precision to
                everything we do.
              </p>

              <p>
                At Dilijent Systems, growth isn't a promise — it's the outcome we work toward
                every day.
              </p>
            </div>

            <div className="mt-8">
              <a href="#services" aria-label="Learn more about our services" className="inline-block w-full md:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full md:w-auto min-w-[160px] font-heading font-semibold tracking-wide hover:scale-105 hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More About Us
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutImage}
              alt="RCM Services"
              className="w-full rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
