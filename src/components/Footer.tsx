import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/dilijent-logo-v2-cropped.png';

const Footer = () => {
  const quickLinks = [
    'Home', 'About Us', 'Blogs', 'Career', 'Privacy', 'Terms', 'Contact Us'
  ];

  const rcmServices = [
    'Revenue Cycle Management', 'Medical Billing Services', 'Medical Coding Services',
    'Medical Transcription Services', 'Medical Billing Audit', 'Account Receivable Management',
    'Home Health Agency Billing', 'Pharmacy Consulting Services', 'Design & Digital Solutions'
  ];

  const itServices = [
    'Software Development Services', 'Mobile App Development', 'Cloud Consulting Services',
    'Web Applications', 'Business Intelligence', 'Web Development',
    'E-Commerce Development', 'Robotic Automation', 'Beitech Software'
  ];

  return (
    <footer className="bg-[#0a0f1c] text-white border-t border-gray-900">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="Dilijent Systems" className="h-12 brightness-0 invert opacity-90" />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-xs">
              Dilijent Systems is a full-service IT, Revenue
              Cycle Management Services and Digital
              Solutions company that provides bespoke
              solutions combined with cutting-edge
              technology.
            </p>
            <div className="space-y-4 text-sm text-gray-400">
              <a href="tel:+15125754630" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone size={14} />
                </div>
                <span>+ 1 (512) -575-4630</span>
              </a>
              <a href="mailto:sales@dilijentsystems.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail size={14} />
                </div>
                <span>sales@dilijentsystems.com</span>
              </a>
              <div className="flex items-start gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0 mt-1">
                  <MapPin size={14} />
                </div>
                <span className="leading-relaxed">5900 Balcones Drive, STE 14634 Austin, TX 78731</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RCM Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-wide">OUR SERVICES</h4>
            <ul className="space-y-3">
              {rcmServices.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-wide opacity-0 md:opacity-100">&nbsp;</h4>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 py-6 bg-black/20">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © 2025. All rights reserved by <span className="text-white font-medium">Dilijent Systems</span></p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-xs font-semibold px-2 py-1 bg-white/10 rounded text-gray-300">Google Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
