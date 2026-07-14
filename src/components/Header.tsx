import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Calculator,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import { PageId } from '../types';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, category?: string) => void;
  quoteCount: number;
  onOpenQuoteModal: () => void;
  onOpenSearchModal: () => void;
  onOpenCalculatorModal: () => void;
}

const dropdownCategories = [
  'Melamine board',
  'Laminated MDF Boards',
  'Fibre boards',
  'MDF Boards',
  'Furniture and interior',
  'Quartz',
  'PlyWood',
  'Doors'
];

const machineCategories = [
  'High-Precision Automatic Edge Bending Machine',
  'Heavy-Duty Cutting Machine'
];

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  quoteCount,
  onOpenQuoteModal,
  onOpenSearchModal,
  onOpenCalculatorModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isMachinesHovered, setIsMachinesHovered] = useState(false);
  const [mobileMachinesOpen, setMobileMachinesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
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

  const handleNavClick = (id: PageId, category?: string) => {
    onNavigate(id, category);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-45 w-full font-sans transition-all duration-300">
      {/* Top Bar - Corporate Contact & Global Quick Info */}
      <div className="bg-[#111111] text-slate-300 text-[10px] sm:text-xs py-2 px-4 border-b border-stone-800 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B5A2B]" />
              <span>PACRA Registered No. 120160004928 | SADC Certified Supplier</span>
            </span>
            <span className="text-stone-800">|</span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-[#8B5A2B]" />
              <span>SMARTAGE INNOVATIONS LTD - Wood, Boards, Timber & Accessories</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenCalculatorModal}
              className="flex items-center space-x-1.5 text-slate-300 hover:text-[#8B5A2B] transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#8B5A2B]" />
              <span className="font-semibold">Board Calculator</span>
            </button>
            <span className="text-stone-800">|</span>
            <a
              href="tel:+260978708354"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B5A2B]" />
              <span>+260 978708354</span>
            </a>
            <a
              href="mailto:enquiries@sailltd.com"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#8B5A2B]" />
              <span>enquiries@sailltd.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-100'
            : 'bg-white py-3 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left cursor-pointer focus:outline-none shrink-0"
            title="SMART AGE INNOVATIONS LIMITED - Home"
          >
            <Logo size="sm" variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-5 text-[11px] font-bold uppercase tracking-wider">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;

              if (item.id === 'products') {
                return (
                  <div
                    key={item.id}
                    className="relative py-4"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <button
                      onClick={() => handleNavClick('products')}
                      className={`transition-colors flex items-center space-x-1 cursor-pointer whitespace-nowrap ${
                        isActive || isProductsHovered
                          ? 'text-[#8B5A2B]'
                          : 'text-slate-700 hover:text-[#8B5A2B]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {(isActive || isProductsHovered) && (
                      <span className="absolute bottom-1 left-0 w-full h-0.5 bg-[#8B5A2B]" />
                    )}

                    {/* Desktop Dropdown Panel */}
                    <div
                      className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[840px] bg-white text-[#111111] shadow-2xl rounded-3xl border border-slate-100 p-6 grid grid-cols-3 gap-x-6 gap-y-3 text-[10.5px] font-bold uppercase tracking-wider transition-all duration-300 origin-top z-50 transform"
                      style={{
                        opacity: isProductsHovered ? 1 : 0,
                        transform: isProductsHovered ? 'scaleY(1) translateY(4px)' : 'scaleY(0.9) translateY(0)',
                        pointerEvents: isProductsHovered ? 'auto' : 'none',
                        display: isProductsHovered ? 'grid' : 'none'
                      }}
                    >
                      {dropdownCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            handleNavClick('products', cat);
                            setIsProductsHovered(false);
                          }}
                          className="text-left text-slate-700 hover:text-[#8B5A2B] transition-all cursor-pointer border-l-2 border-slate-200/50 hover:border-[#8B5A2B] pl-3 py-1.5 hover:bg-[#8B5A2B]/5 rounded-r-xl"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.id === 'machines') {
                return (
                  <div
                    key={item.id}
                    className="relative py-4"
                    onMouseEnter={() => setIsMachinesHovered(true)}
                    onMouseLeave={() => setIsMachinesHovered(false)}
                  >
                    <button
                      onClick={() => handleNavClick('machines')}
                      className={`transition-colors flex items-center space-x-1 cursor-pointer whitespace-nowrap ${
                        isActive || isMachinesHovered
                          ? 'text-[#8B5A2B]'
                          : 'text-slate-700 hover:text-[#8B5A2B]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {(isActive || isMachinesHovered) && (
                      <span className="absolute bottom-1 left-0 w-full h-0.5 bg-[#8B5A2B]" />
                    )}

                    {/* Desktop Dropdown Panel */}
                    <div
                      className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[280px] bg-white text-[#111111] shadow-2xl rounded-3xl border border-slate-100 p-4 flex flex-col gap-y-2 text-[10.5px] font-bold uppercase tracking-wider transition-all duration-300 origin-top z-50 transform"
                      style={{
                        opacity: isMachinesHovered ? 1 : 0,
                        transform: isMachinesHovered ? 'scaleY(1) translateY(4px)' : 'scaleY(0.9) translateY(0)',
                        pointerEvents: isMachinesHovered ? 'auto' : 'none',
                        display: isMachinesHovered ? 'flex' : 'none'
                      }}
                    >
                      {machineCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            handleNavClick('machines', cat);
                            setIsMachinesHovered(false);
                          }}
                          className="text-left text-slate-700 hover:text-[#8B5A2B] transition-all cursor-pointer border-l-2 border-slate-200/50 hover:border-[#8B5A2B] pl-3 py-2 hover:bg-[#8B5A2B]/5 rounded-r-xl"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors relative py-4 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#8B5A2B]'
                      : 'text-slate-700 hover:text-[#8B5A2B]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-0 w-full h-0.5 bg-[#8B5A2B]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Utilities */}
          <div className="hidden lg:flex items-center space-x-2 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearchModal}
              className="px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:text-[#111111] hover:border-slate-300 transition-colors flex items-center space-x-1.5 text-[10px] font-semibold cursor-pointer"
              title="Search Services, Products & Tenders"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-slate-500 uppercase tracking-wider">Search</span>
            </button>

            {/* Quote Basket Cart Trigger */}
            <button
              onClick={onOpenQuoteModal}
              className="relative px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[#111111] hover:bg-[#8B5A2B] hover:text-white hover:border-[#8B5A2B] transition-all flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider cursor-pointer group shadow-sm"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-[#8B5A2B] group-hover:text-white transition-colors" />
              <span>Basket</span>
              {quoteCount > 0 && (
                <span className="bg-[#8B5A2B] text-white group-hover:bg-white group-hover:text-[#8B5A2B] text-[9px] font-bold px-1.5 py-0.5 rounded-full transition-colors font-mono">
                  {quoteCount}
                </span>
              )}
            </button>

            {/* Quick Quote CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center space-x-0.5 px-3 py-1.5 bg-[#111111] text-white text-[10px] font-bold rounded-full uppercase tracking-wider hover:bg-[#8B5A2B] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Estimate</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="relative p-2 rounded-lg bg-slate-100 text-slate-800"
            >
              <ShoppingCart className="w-5 h-5 text-[#8B5A2B]" />
              {quoteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8B5A2B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono font-sans">
                  {quoteCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex items-center space-x-2 bg-slate-100 p-2.5 rounded-xl">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products, timber species..."
              onClick={() => {
                onOpenSearchModal();
                setMobileMenuOpen(false);
              }}
              readOnly
              className="w-full bg-transparent text-xs text-slate-800 focus:outline-none cursor-pointer"
            />
          </div>

          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;

              if (item.id === 'products') {
                return (
                  <div key={item.id} className="flex flex-col">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="pl-6 pr-2 py-1 grid grid-cols-1 gap-1 border-l-2 border-[#8B5A2B]/30 ml-3">
                        {dropdownCategories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => handleNavClick('products', cat)}
                            className="text-left py-1.5 text-[10px] font-semibold text-slate-500 hover:text-[#8B5A2B]"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.id === 'machines') {
                return (
                  <div key={item.id} className="flex flex-col">
                    <button
                      onClick={() => setMobileMachinesOpen(!mobileMachinesOpen)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileMachinesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileMachinesOpen && (
                      <div className="pl-6 pr-2 py-1 grid grid-cols-1 gap-1 border-l-2 border-[#8B5A2B]/30 ml-3">
                        {machineCategories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                                handleNavClick('machines', cat);
                                setMobileMenuOpen(false);
                            }}
                            className="text-left py-1.5 text-[10px] font-semibold text-slate-500 hover:text-[#8B5A2B]"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#8B5A2B]/10 text-[#8B5A2B]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                onOpenCalculatorModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-slate-100 text-slate-800 py-2.5 rounded-xl text-xs font-semibold"
            >
              <Calculator className="w-4 h-4 text-[#8B5A2B]" />
              <span>Timber & Panel Volume Calculator</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-[#111111] text-white py-2.5 rounded-xl text-xs font-semibold text-center uppercase tracking-widest"
            >
              Request Custom Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
