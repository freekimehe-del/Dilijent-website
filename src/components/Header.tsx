import { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    {
      label: 'SERVICES',
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        'Software Development Services',
        'Medical Billing & RCM Services',
        'Digital Marketing Services'
      ]
    },
    { label: 'BLOG', href: '#blog' },
    { label: 'FAQS', href: '#faqs' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar - White background */}
      <div className="bg-background py-4 md:py-6 border-b border-border">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Dilijent Systems" className="h-10 md:h-14 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-body">
            <a href="tel:+15125754630" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <Phone size={20} className="text-foreground group-hover:text-primary transition-colors" />
              <span>+1 (512)-575-4630</span>
            </a>
            <a href="mailto:sales@dilijentsystems.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <Mail size={20} className="text-foreground group-hover:text-primary transition-colors" />
              <span>sales@dilijentsystems.com</span>
            </a>
            <div className="flex items-center gap-3 text-foreground group">
              <MapPin size={20} className="text-foreground group-hover:text-primary transition-colors" />
              <span>USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Light background */}
      <nav className="bg-white shadow-sm border-t border-gray-100">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-4 text-gray-900 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <ul className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className={`relative flex items-center gap-1 px-5 py-4 text-gray-900 hover:text-primary transition-colors font-heading font-semibold text-lg tracking-wide`}
                    onClick={() => setActiveNav(item.label)}
                    onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={14} />}
                    {/* Red underline for active item */}
                    {activeNav === item.label && (
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                    )}
                  </a>
                  {item.hasDropdown && (
                    <div
                      className={`absolute left-0 top-full bg-white shadow-lg min-w-[250px] transition-all duration-200 z-50 border-t-2 border-primary ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.dropdownItems?.map((dropItem) => (
                        <a
                          key={dropItem}
                          href="#services"
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-body border-b border-gray-100 last:border-0"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:block" />
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-900 hover:bg-gray-50 hover:text-primary transition-colors font-heading font-semibold border-b border-gray-100 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;