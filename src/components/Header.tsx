import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '@/assets/dilijent-logo-v2-cropped.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'INDUSTRIES', href: '#industries' },
    { label: 'SOLUTIONS', href: '#solutions' },
    { label: 'WORK', href: '#work' },
    { label: 'COMPANY', href: '#company' },
  ];

  const headerClass = isScrolled
    ? 'bg-white shadow-md py-2'
    : 'bg-transparent py-3 md:py-4';

  const navLinkClass = isScrolled
    ? 'text-slate-900 hover:text-[#EF2B2B]'
    : 'text-white hover:text-[#EF2B2B] text-shadow-sm';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full font-sans ${headerClass}`}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        <div className="flex justify-between items-center">

          {/* Left: Logo - Always Visible */}
          <div className={`flex items-center flex-shrink-0 transition-all duration-300 ${!isScrolled ? 'bg-white/95 px-4 py-2 rounded-lg backdrop-blur-sm' : ''}`}>
            <a href="/" className="flex items-center !no-underline !border-none !outline-none hover:opacity-90 transition-opacity">
              <img
                src={logo}
                alt="Dilijent Systems"
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                style={{ border: 'none', boxShadow: 'none' }}
              />
            </a>
          </div>

          {/* Center: Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-bold tracking-wider transition-colors duration-300 ${navLinkClass}`}
                onClick={() => setActiveNav(item.label)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Contact & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+15125754630"
              className={`flex items-center gap-2 font-bold transition-colors duration-300 ${navLinkClass}`}
            >
              <Phone size={18} strokeWidth={2.5} />
              <span>+1 (512)-575-4630</span>
            </a>
            <a
              href="#contact"
              className="bg-[#EF2B2B] hover:bg-red-600 text-white text-sm font-bold py-3 px-6 rounded-full transition-transform hover:scale-105 duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4 animate-slide-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-900 font-bold text-lg hover:text-[#EF2B2B]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-gray-100 my-2"></div>
            <a href="tel:+15125754630" className="flex items-center gap-3 text-slate-700 font-bold">
              <Phone size={20} />
              <span>+1 (512)-575-4630</span>
            </a>
            <a
              href="#contact"
              className="bg-[#EF2B2B] text-white text-center font-bold py-3 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;