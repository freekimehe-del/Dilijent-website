import FadeIn from './ui/FadeIn';

import mentallyFree from '@/assets/client-mentally-free.png';
import pazex from '@/assets/client-pazex.png';
import nordix from '@/assets/client-nordix.png';
import atlantis from '@/assets/client-atlantis.png';

const logoData = [
    { src: mentallyFree, name: "Mentally Free" },
    { src: pazex, name: "Pazex" },
    { src: nordix, name: "Nordix DNA" },
    { src: atlantis, name: "Atlantis Caregiving" },
];

// Repeat logos to ensure enough content for smooth scrolling
const logos = [...logoData, ...logoData, ...logoData];

const ClientLogos = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container-custom mb-8 text-center">
                <FadeIn>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Trusted by Industry Leaders
                    </p>
                </FadeIn>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradients for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="flex w-max animate-scroll hover:pause-scroll">
                    {/* First set of logos */}
                    <div className="flex items-center gap-16 px-8">
                        {logos.map((logo, index) => (
                            <div key={`logo-1-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-16 w-auto object-contain max-w-[150px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for infinite scroll */}
                    <div className="flex items-center gap-16 px-8">
                        {logos.map((logo, index) => (
                            <div key={`logo-2-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-16 w-auto object-contain max-w-[150px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
