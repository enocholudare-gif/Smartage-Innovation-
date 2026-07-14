import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Globe2,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowUp,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'machines', label: 'Machines' },
    { id: 'wood-accessories', label: 'Accessories and Fittings' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'news', label: 'News' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-[#111111] text-slate-300 font-sans pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="inline-block cursor-pointer" onClick={() => onNavigate('home')}>
              <Logo size="md" variant="light" />
            </div>

            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono border-b border-stone-800 pb-2">
                INDUSTRIES WE SERVE
              </h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Our products support a wide range of industries, including:<br/>
                • Construction<br/>
                • Furniture Manufacturing<br/>
                • Interior Design & Fit-Out<br/>
                • Infrastructure Development<br/>
                • Agriculture<br/>
                • Mining<br/>
                • Commercial & Retail<br/>
                • Government & Public Institutions<br/>
                • Residential Development
              </p>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono border-b border-stone-800 pb-2 pt-2">
                OUR COMMITMENT
              </h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                At Smart Age Innovations Ltd, we are committed to supplying quality products that meet the highest standards of performance, durability, and reliability. Through strong partnerships with reputable manufacturers and a customer-first approach, we strive to deliver solutions that help our clients build, create, and grow with confidence.
              </p>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono border-b border-stone-800 pb-2 pt-2">
                BUILD WITH CONFIDENCE
              </h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Whether you need engineered wood panels, construction boards, treated poles, furniture solutions, or sustainable wood products, Smart Age Innovations Ltd has the products and expertise to support your next project.
                <br/><br/>
                <button onClick={() => onNavigate('products')} className="hover:text-[#B58E3D] transition-colors">Browse Products</button> • <button onClick={() => onNavigate('contact')} className="hover:text-[#B58E3D] transition-colors">Request a Quote</button> • <button onClick={() => onNavigate('contact')} className="hover:text-[#B58E3D] transition-colors">Contact Our Team</button>
              </p>
            </div>
          </div>

          {/* Sitemap Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono border-b border-stone-800 pb-2">
              Corporate Sitemap
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#B58E3D] transition-colors cursor-pointer text-left uppercase text-[10px] tracking-wider font-bold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>



          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono border-b border-stone-800 pb-2">
              Procurement Bulletins
            </h4>
            <p className="text-slate-400 text-xs">
              Subscribe to SAIL Bulletins for bulk stock arrivals, timber grading updates, and SADC customs clearances.
            </p>

            {subscribed ? (
              <div className="bg-[#B58E3D]/10 border border-[#B58E3D]/20 text-[#B58E3D] p-3 rounded-xl text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#B58E3D]" />
                <span>Subscription is active!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Corporate email..."
                    className="w-full bg-stone-900 border border-stone-800 text-xs text-white rounded-xl py-2 px-3 pr-10 focus:outline-none focus:border-[#B58E3D]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#B58E3D] hover:bg-[#D4AF37] text-white rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <p className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#B58E3D]" />
                <span>plot 3169, Mukwa Road, Light industrial Area, Buseko, Lusaka</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#B58E3D]" />
                <span>+260 978708354 | +260 950311205</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#B58E3D]" />
                <span>enquiries@sailltd.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0 border-t border-stone-800/40 mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>© {new Date().getFullYear()} SMARTAGE INNOVATIONS LIMITED (SAIL). All rights reserved.</span>
            <span className="hidden sm:block">•</span>
            <span>Built by <span className="text-[#B58E3D] font-bold">Zambia Cloud Programmers</span></span>
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">SADC Compliance</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-stone-900 border border-stone-800 hover:bg-[#B58E3D] text-white transition-all cursor-pointer ml-4"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
