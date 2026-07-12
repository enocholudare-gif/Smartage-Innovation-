import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  ThumbsUp,
  Clock,
  ArrowRight,
  Plus,
  ShoppingCart,
  UserCheck,
  CheckCircle,
  HelpCircle,
  Phone,
  Layers,
  Wrench,
  Hammer,
  ClipboardList,
} from 'lucide-react';
import { PageId, Product, ProductCategory } from '../types';
import { companyStats, SAIL_SERVICES, productsData, testimonials, faqs } from '../data/mockData';
import woodenStationeryImage from '../assets/images/wooden_stationery_1783668516807.jpg';
import safetyPpeImage from '../assets/images/safety_ppe_1783668545473.jpg';

interface HomePageProps {
  onNavigate: (page: PageId, category?: string) => void;
  onSelectProduct: (product: Product) => void;
  onSelectMachine?: (machine: any) => void; // Kept for compatibility
  onAddToQuote: (product: Product) => void;
  onOpenCalculatorModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToQuote,
  onOpenCalculatorModal,
}) => {
  // Autoplay Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const carouselSlides = [
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-c65859ec-51f6-43c0-817c-178c85d5873b.png',
      tag: 'Raw Boards',
      title: 'Premium Raw Boards',
      subtitle: 'High-density fibreboards and particle boards for smooth and reliable manufacturing.',
      ctaText: 'View Boards',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-2e79c64c-9fa2-4056-a05e-c89aefdfb519.jpg',
      tag: 'Laminated Panels',
      title: 'Decorative Surfaces',
      subtitle: 'Double-sided laminated panels offering exceptional scratch and moisture resistance.',
      ctaText: 'Explore Surfaces',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-b27809d5-7714-4396-a7b9-722e7fbc5ebc.jpg',
      tag: 'Treated Timber',
      title: 'Transmission Poles',
      subtitle: 'Pressure-treated eucalyptus poles built for heavy electrical lines and agricultural fencing.',
      ctaText: 'View Timber',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-32e9b491-9d84-4e46-ba67-0b8edeb519eb.png',
      tag: 'Plywood',
      title: 'Structural Plywood',
      subtitle: 'Cross-laminated multi-ply sheets engineered for superior load-bearing strength.',
      ctaText: 'Browse Plywood',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-3bd47a73-ad3b-4780-bdf7-51fdd8d22404.jpg',
      tag: 'Formwork',
      title: 'Construction Shutterply',
      subtitle: 'Water-resistant phenolic film-faced plywood built for heavy-duty concrete pouring.',
      ctaText: 'View Shutterply',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-cdc3ebf7-96eb-405a-abc5-2bd1e3658c10.jpg',
      tag: 'Interiors',
      title: 'Acoustic Ceilings',
      subtitle: 'Lightweight ceiling boards providing excellent thermal and sound insulation.',
      ctaText: 'Explore Interiors',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-b04db99f-42b5-4bb9-8f30-96dbe18ce894.png',
      tag: 'Custom Joinery',
      title: 'Corporate Furniture',
      subtitle: 'Heavy-duty office desks and institutional tables crafted for long-term use.',
      ctaText: 'View Furniture',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-c5560cc3-777f-405c-bee1-7ae482d686d3.jpg',
      tag: 'Lumber',
      title: 'Structural Timber',
      subtitle: 'Kiln-dried seasoned pine wood optimized for rafters and heavy construction.',
      ctaText: 'Browse Lumber',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-93996190-4b12-446e-8919-37a949ed68b0.jpg',
      tag: 'Cabinetry',
      title: 'Melamine Boards',
      subtitle: 'Hygienic, easy-to-clean decorative boards ideal for kitchen and wardrobe fittings.',
      ctaText: 'View Melamine',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-be794c20-1abe-4c81-9996-1d0446e43c2a.jpg',
      tag: 'Wall Panels',
      title: 'Luxury Marble Sheets',
      subtitle: 'High-gloss SPC wall cladding delivering realistic stone textures and waterproofing.',
      ctaText: 'Explore Panels',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-fe00349c-6e33-4650-be62-8a241ac9233b.jpg',
      tag: 'Surfaces',
      title: 'Engineered Quartz',
      subtitle: 'Extremely hard and non-porous stone slabs for premium kitchen countertops.',
      ctaText: 'View Quartz',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-9e4660de-87bb-4993-8394-d261da6f48d2.jpg',
      tag: 'Backing Boards',
      title: 'High Density Fibreboard',
      subtitle: 'Uniform and stable panels perfect for backing sheets and acoustic wall insulation.',
      ctaText: 'View HDF',
      page: 'products' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-11c51cc2-5782-4ac1-bc92-c18615024df0.jpg',
      tag: 'Fit-Outs',
      title: 'Cabinetry Installation',
      subtitle: 'Full turnkey interior installations handled directly at your corporate premises.',
      ctaText: 'Explore Services',
      page: 'about' as PageId,
    },
    {
      image: 'https://cdn.phototourl.com/free/2026-07-10-2de0c28c-22a9-453e-a66a-08b00ee7be48.jpg',
      tag: 'Machining',
      title: 'Precision Sizing',
      subtitle: 'Professional cutting and edge-banding to seal out moisture completely.',
      ctaText: 'View Services',
      page: 'about' as PageId,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const productCategories = [
    {
      name: 'Melamine board',
      desc: 'Double-sided Melamine laminated board with a moisture-resistant particle core, perfect for modern cabinetry.',
      img: 'https://cdn.phototourl.com/free/2026-07-10-93996190-4b12-446e-8919-37a949ed68b0.jpg',
    },
    {
      name: 'Laminated MDF Boards',
      desc: 'MDF Laminated features a decorative laminate surface bonded to MDF, offering enhanced durability, scratch resistance, and moisture resistance.',
      img: 'https://cdn.phototourl.com/free/2026-07-11-19ad881e-6681-491f-8bd3-876567d385e8.jpg',
    },
    {
      name: 'PVC marble sheets',
      desc: 'High-gloss stone plastic composite (SPC) wall panels with realistic marble textures for luxury water-resistant interiors.',
      img: 'https://cdn.phototourl.com/free/2026-07-10-be794c20-1abe-4c81-9996-1d0446e43c2a.jpg',
    },
    {
      name: 'Fibre boards',
      desc: 'High-density fibreboard (HDF) and acoustic softboards designed for structural backing and premium sound insulation.',
      img: 'https://cdn.phototourl.com/free/2026-07-10-9e4660de-87bb-4993-8394-d261da6f48d2.jpg',
    },
    {
      name: 'MDF Boards',
      desc: 'Our high-quality Medium Density Fibreboard (MDF) is a versatile and durable engineered wood product, ideal for furniture, interior design, and panelling.',
      img: 'https://cdn.phototourl.com/free/2026-07-10-c65859ec-51f6-43c0-817c-178c85d5873b.png',
    },
    {
      name: 'Furniture and interior',
      desc: 'Executive desks, school double-student tables, fitted office setups, and custom residential interior cabinetry.',
      img: 'https://cdn.phototourl.com/free/2026-07-11-9479dce2-45d0-4bd8-88b8-71daa6412050.jpg',
    },
    {
      name: 'Quartz',
      desc: 'Premium engineered quartz stone slabs with flawless hardness and non-porous faces, perfect for high-end kitchen countertops.',
      img: 'https://cdn.phototourl.com/free/2026-07-10-fe00349c-6e33-4650-be62-8a241ac9233b.jpg',
    },
    {
      name: 'PlyWood',
      desc: 'Structural multi-ply hardwood plywood sheets bonded with durable structural grade adhesive, offering high screw-pullout resistance.',
      img: 'https://cdn.phototourl.com/free/2026-07-10-32e9b491-9d84-4e46-ba67-0b8edeb519eb.png',
    },
    {
      name: 'Doors',
      desc: 'Solid core pine block entry doors finished with modern moisture-proof laminated skins to prevent door warping.',
      img: 'https://cdn.phototourl.com/member/2026-07-10-f2b5e991-1826-4660-bbfa-df6be6ffecca.jpg',
    }
  ];

  // Featured Products list
  const featuredProducts = productsData.filter(p => p.isFeatured);

  // Active FAQ state
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO CAROUSEL SECTION */}
      <section className="relative h-[550px] sm:h-[620px] md:h-[680px] bg-slate-950 overflow-hidden">
        {/* Render background slides */}
        {carouselSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-80 scale-100 pointer-events-auto' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.tag}
                className="w-full h-full object-cover select-none"
              />
            </div>
          );
        })}

        {/* Dark overlay gradients for professional corporate contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent z-10" />

        {/* Aligned Corporate Copy Overlay */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-slate-900/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8B5A2B] animate-pulse"></span>
                    <span className="text-amber-500 text-[10px] sm:text-xs font-black uppercase tracking-widest font-mono">
                      {carouselSlides[currentSlide].tag}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-display [text-shadow:_0_2px_8px_rgba(0,0,0,0.85)]">
                    Premium Wood Products. Reliable Supply. Trusted Solutions.
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">
                    Smart Age Innovations Ltd is a trusted supplier of premium engineered wood products, timber solutions, treated poles, furniture, and sustainable biomass products. We connect businesses, contractors, institutions, and individuals with high-quality products sourced from leading manufacturers to meet the demands of construction, furniture production, infrastructure, agriculture, and industrial projects.
                  </p>
                </div>

                {/* Call to Actions */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate('products')}
                    className="bg-[#8B5A2B] hover:bg-[#704823] text-white text-[11px] font-bold px-7 py-4 rounded-xl uppercase tracking-widest transition-all shadow-lg hover:shadow-[#8B5A2B]/20 cursor-pointer"
                  >
                    Explore Products
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/25 text-[11px] font-bold px-7 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer backdrop-blur-xs"
                  >
                    Request A Quote
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Sector Indicator (Informing the user which supply sector is currently showing in background) */}
        <div className="absolute bottom-8 right-8 z-30 hidden md:flex items-center space-x-3 bg-slate-900/80 border border-slate-800 p-3 rounded-2xl backdrop-blur-md">
          <div className="text-right">
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">SUPPLY CATEGORY</div>
            <div className="text-xs font-bold text-white">{carouselSlides[currentSlide].tag}</div>
          </div>
          <button 
            onClick={handleNextSlide}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-[#8B5A2B] text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-8 left-4 sm:left-8 z-30 flex space-x-2">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'bg-[#8B5A2B] w-6' : 'bg-white/20 w-2.5'
              }`}
              title={`View category background ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3. WHO WE ARE SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-[#8B5A2B] uppercase tracking-widest font-mono">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight leading-tight">
                Your Trusted Partner for Quality Wood Products
              </h2>
            </div>
            
            <div className="space-y-4 max-w-3xl mx-auto text-left">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Smart Age Innovations Ltd is dedicated to supplying high-quality wood products and timber solutions that meet the needs of today's construction, furniture, infrastructure, commercial, and industrial sectors.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We work with reputable manufacturers and trusted supply partners to provide a comprehensive range of engineered wood panels, plywood, laminated boards, treated transmission and fencing poles, furniture, and biomass products. Our focus is on delivering dependable products, competitive pricing, and professional customer service that enables our clients to complete their projects with confidence.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Whether you are a contractor, developer, furniture manufacturer, retailer, government institution, or homeowner, Smart Age Innovations Ltd is committed to being your reliable supply partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="py-20 bg-slate-50 border-y border-slate-200" id="our-products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-widest font-mono">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">High-quality engineered wood products for diverse applications</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto">
              Smart Age is your direct link to premium, durable timber panel sheets, structural wood, and furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {productCategories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => {
                  const match = productsData.find(p => p.name === cat.name);
                  if (match) {
                    onSelectProduct(match);
                  } else {
                    onNavigate('products', cat.name);
                  }
                }}
                className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer group border border-slate-100/80"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-[#0B1220] p-6 text-white flex-1 flex flex-col justify-between rounded-b-[2rem]">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-display tracking-tight text-white">{cat.name}</h3>
                    <p className="text-slate-300/90 text-xs leading-relaxed line-clamp-3 min-h-[4.5rem]">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <span className="inline-block w-full border border-amber-600/55 text-amber-500 group-hover:bg-[#8B5A2B] group-hover:text-white px-8 py-2.5 rounded-xl font-bold uppercase tracking-wider text-[11px] transition-all duration-300 text-center cursor-pointer">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-12">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center space-x-2 bg-[#8B5A2B] hover:bg-[#704823] text-white text-xs sm:text-sm font-extrabold px-10 py-4 rounded-xl uppercase tracking-wider transition-all shadow-md hover:shadow-[#8B5A2B]/20 transform hover:-translate-y-0.5 cursor-pointer animate-pulse-slow"
            >
              <span>View More Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES WE RENDER SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-widest font-mono">Expert Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">Specialized Services We Render</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xs sm:text-sm">
              Beyond supplying premium timber boards, our professional carpentry and processing yard delivers precision-engineered services to complete your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {/* Service 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-[#8B5A2B] group-hover:bg-[#8B5A2B] group-hover:text-white transition-all duration-300">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">Cutting and Edging</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    We process raw boards with millimeter-accurate industrial panel saws and apply premium PVC/ABS edge-banding with moisture-proof hot-melt PUR adhesives.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>Exact sizing per your cutting list</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>Flawless chip-free cut margins</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>Complete protection against wood swelling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-[#8B5A2B] group-hover:bg-[#8B5A2B] group-hover:text-white transition-all duration-300">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">Design and Installation</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    From 3D custom furniture rendering to on-site assembly. Our professional carpentry teams install kitchens, wardrobes, and modern wall claddings.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>Custom spatial planning & layout advice</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>Perfect horizontal alignments on-site</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>Fast, stress-free turnkey execution</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-[#8B5A2B] group-hover:bg-[#8B5A2B] group-hover:text-white transition-all duration-300">
                  <Hammer className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">Custom Fabrication & Many More</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    We fabricate heavy-duty double student desks, corporate boardroom tables, custom blockboard partitions, and fire-resistant timber doors to SADC specs.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>School & university furnishing bids</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>Bespoke timber frames and doors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]"></span>
                    <span>Full regulatory and statutory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS (WITH INQUIRY CART ADDITION) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-widest font-mono">Popular Sourcing</span>
          <h2 className="text-3xl font-black text-slate-900 font-display">Featured Supply Products</h2>
          <p className="text-slate-500 max-w-md mx-auto text-xs sm:text-sm">
            Quickly request pricing for our top-demanded timber boards, classroom furniture, and protective overalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-4/3 relative overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#8B5A2B] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#8B5A2B] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {p.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {p.features.slice(0, 2).map((feat, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-50 text-[10px] text-slate-500 rounded border border-slate-100">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="border-t border-slate-50 pt-4 flex gap-2">
                  <button
                    onClick={() => onSelectProduct(p)}
                    className="flex-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-xl uppercase tracking-wider text-center transition-colors cursor-pointer"
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => onAddToQuote(p)}
                    className="px-4 bg-[#8B5A2B] hover:bg-[#704823] text-white rounded-xl transition-colors flex items-center justify-center cursor-pointer"
                    title="Add to quote basket"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR PROCESS STRATEGY */}
      <section className="bg-[#0B1220] py-20 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10 animate-fade-in">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-widest font-mono">Execution Standards</span>
            <h2 className="text-3xl font-black tracking-tight font-display text-white">How We Deliver Value</h2>
            <p className="text-slate-400 max-w-lg mx-auto text-xs sm:text-sm">
              We coordinate precise supply chains, from initial factory sourcing up to final site carpentry assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-950/60 rounded-3xl border border-slate-800 space-y-4">
              <span className="text-3xl font-black text-[#D97706] font-mono">01.</span>
              <h3 className="text-lg font-bold text-slate-100">Direct Mill Procurement</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We contract directly with leading timber mills and hardware makers in Europe and Asia. By bypassing middlemen, we guarantee pristine material grades and provide competitive prices in Zambia.
              </p>
            </div>

            <div className="p-8 bg-slate-950/60 rounded-3xl border border-slate-800 space-y-4">
              <span className="text-3xl font-black text-[#D97706] font-mono">02.</span>
              <h3 className="text-lg font-bold text-slate-100">Precision Board Processing</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Before delivery, we cut panel sheets to your exact blueprint dimensions and seal borders using heavy hot-melt PUR edge banders. This locks out humidity, preventing any swelling or board decay.
              </p>
            </div>

            <div className="p-8 bg-slate-950/60 rounded-3xl border border-slate-800 space-y-4">
              <span className="text-3xl font-black text-[#D97706] font-mono">03.</span>
              <h3 className="text-lg font-bold text-slate-100">Certified Site Assembly</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Our in-house carpenter squads handle the heavy lifting. We mount reception areas, custom wardrobes, and desks directly at your premises, adjusting fittings to achieve perfect leveling.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* 8. TESTIMONIALS */}
      <section className="py-16 bg-[#F1F5F9]/60 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-widest font-mono font-bold">Partner Feedback</span>
            <h2 className="text-3xl font-black text-slate-900 font-display">Trusted By Regional Businesses</h2>
            <p className="text-slate-500 max-w-md mx-auto text-xs sm:text-sm">
              Read how our premium board supplies and reliable school double desks have supported regional projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between space-y-6"
              >
                <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed">
                  "{test.quote}"
                </p>

                <div className="pt-4 border-t border-slate-50">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-none">{test.clientName}</h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-1">
                      {test.role}, <span className="text-[#8B5A2B]">{test.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-widest font-mono">Answers</span>
          <h2 className="text-3xl font-black text-slate-900 font-display">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Quick answers about our depots, board cutting services, and statutory tender credentials.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-950 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <Plus className={`w-4 h-4 text-[#8B5A2B] shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. STATS OVERVIEW & VALUE PROPOSITION (ZAMBIAN REGIONAL PARTNER) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-wider font-mono">
                Smart Age Innovations Limited
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight font-display leading-tight">
                Zambian Regional Partner for Quality Industrial Supplies
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Smart Age (SAIL) is a professional, certified corporate supplier of high-density melamine panels, customized bedroom walk-in closets, educational double classroom tables, heavy-duty site safety uniforms, stationery reams, and cabinetry accessories.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#8B5A2B] hover:text-[#704823] uppercase tracking-widest transition-colors"
                >
                  <span>Our Corporate Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Statistics grids */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companyStats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-3xl font-black text-[#8B5A2B] tracking-tight font-mono block">
                    {stat.value}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900">{stat.label}</h4>
                  <p className="text-[11px] text-slate-500 leading-normal font-normal">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3.5 bg-[#8B5A2B] hover:bg-[#70431F] text-white rounded-xl shadow-2xl cursor-pointer transition-all duration-300 transform scale-100 hover:scale-110 flex items-center justify-center border border-amber-600/30"
          title="Scroll back to top"
        >
          <ChevronRight className="w-5 h-5 -rotate-90 stroke-[3]" />
        </button>
      )}
    </div>
  );
};
