import React, { useState } from 'react';
import {
  Sparkles,
  Building,
  Home,
  CheckCircle,
  ArrowRight,
  FolderOpen,
  Users,
  Compass,
  ArrowLeftRight,
} from 'lucide-react';
import { PageId } from '../types';

interface InteriorSolutionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const InteriorSolutionsPage: React.FC<InteriorSolutionsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'corporate' | 'hospitality' | 'institutional'>('all');

  const fitoutServices = [
    {
      id: 'fit-office',
      title: 'Office Fit-Outs & Desking',
      category: 'corporate',
      description: 'Ergonomic, modular office work bays, modern acoustic partitions, executive private office suites, and tidy cable integrations customized for high-capacity corporate workplaces.',
      image: 'https://cdn.phototourl.com/member/2026-07-10-b9109d39-b02a-4c5e-9898-94554bb2cff3.png',
      specs: ['Impact-resistant edgebanding', 'Integrated cable management ports', 'Custom desk sizes']
    },
    {
      id: 'fit-boardroom',
      title: 'Premium Boardrooms & Conference Areas',
      category: 'corporate',
      description: 'Large modular conference tables crafted with real wood oak veneers, matching media consoles, and custom wood wall paneling that exudes professional authority.',
      image: 'https://cdn.phototourl.com/member/2026-07-10-21147ca9-3213-43a4-bb20-8893afca6869.jpg',
      specs: ['High-gloss polyurethane finish', 'Hidden tech connection boxes', 'Heavy-duty steel support beams']
    },
    {
      id: 'fit-kitchen',
      title: 'Modern Kitchen Installations',
      category: 'hospitality',
      description: 'Elegant, durable residential and pantry kitchens utilizing water-resistant super-gloss melamine cabinetry panels, soft-close hardware, and scratch-resistant countertops.',
      image: 'https://cdn.phototourl.com/member/2026-07-10-01660fcd-da12-4cdd-a904-7a2c0622639f.jpg',
      specs: ['Moisture-resistant particle wood cores', 'German soft-close drawer tracks', 'Integrated storage pull-outs']
    },
    {
      id: 'fit-wardrobe',
      title: 'Bespoke Fitted Wardrobes & Closets',
      category: 'hospitality',
      description: 'High-capacity bedroom cupboards and walk-in dressing suites designed with adjustable internal shelving, sturdy hanging rails, and durable melamine sliding doors.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      specs: ['Hydraulic wardrobe lifts', 'Soft felt-lined jewelry drawers', 'Solid 18mm backing boards']
    },
    {
      id: 'fit-reception',
      title: 'Main Reception & Welcoming Desks',
      category: 'corporate',
      description: 'Striking reception desks combining gloss wood finishes and custom stone accents, engineered to create a powerful first impression for incoming corporate visitors.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
      specs: ['Concealed led strip lighting tracks', 'Secure lockable cashier drawers', 'Polished quartz counters']
    },
    {
      id: 'fit-schools',
      title: 'School & University Furnishings',
      category: 'institutional',
      description: 'Robust, classroom-tested double-student desks, lecture theatre seating, heavy-duty library study bays, and protective wood shelving that survives decades of student activity.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      specs: ['30mm steel tube welded structures', 'Tamper-proof bag hangers', 'Scribble-resistant desktop laminate']
    },
    {
      id: 'fit-hospitals',
      title: 'Hospital & Clinic Medical Cabinetry',
      category: 'institutional',
      description: 'Ultra-hygienic cabinetry and medicine storage systems for medical clinics, examination rooms, and pharmacies, emphasizing chemical resistance and ease of cleaning.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      specs: ['Antibacterial finish coatings', 'Secure lockable drug drawers', 'Non-porous solid surface counters']
    },
    {
      id: 'fit-hotels',
      title: 'Hotel Bed Headboards & Room Joinery',
      category: 'hospitality',
      description: 'Bulk production and installation of luxury hotel bedroom sets, including floor-to-ceiling headboards, integrated bedside tables, TV wall panels, and luggage racks.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      specs: ['Flame-retardant panel backers', 'Standardized rapid room install', 'High-traffic wear resistance']
    },
    {
      id: 'fit-retail',
      title: 'Retail Shop Counters & Wall Displays',
      category: 'hospitality',
      description: 'High-visibility customized display shelves, slatwalls, checkout counters, and product islands designed to maximize retail sales and withstand constant shopper interaction.',
      image: 'https://cdn.phototourl.com/member/2026-07-10-17493fcd-c2cf-4ce2-9d25-33366380257d.jpg',
      specs: ['Heavy-duty tempered glass accents', 'Modular slatwall hook boards', 'High load-bearing shelving panels']
    }
  ];

  const filteredServices = fitoutServices.filter(s => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC]">
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Bespoke Joinery & Fit-Outs
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 font-display">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D97706]">Interior Solutions</span>
          </h1>

          <p className="text-base text-slate-500 max-w-2xl leading-relaxed font-normal">
            Converting raw premium wood boards into beautifully aligned, high-durability fitted furniture for offices, hotels, hospitals, and educational institutions.
          </p>
        </div>
      </section>

      {/* BEFORE & AFTER CONSTRUCT SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1220] rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#D97706] uppercase tracking-widest font-mono">
                Workmanship Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                Precision Handcrafted Joinery Built To Endure
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We believe that premium corporate spaces are defined by the quality of their carpentry. Instead of using thin, flimsy panels that swell and sag under humidity, our interior systems are built on 18mm and 25mm heavy moisture-resistant timber boards and sealed using industrial hot-melt PUR edgebanders.
              </p>
              <ul className="space-y-3 pt-2 text-slate-300 text-xs sm:text-sm">
                <li className="flex items-center space-x-2.5">
                  <CheckCircle className="w-5 h-5 text-[#D97706] shrink-0" />
                  <span>100% moisture-sealed base panels to protect against damp floors.</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <CheckCircle className="w-5 h-5 text-[#D97706] shrink-0" />
                  <span>Millimeter-perfect fitment aligned by experienced carpenter craftsmen.</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <CheckCircle className="w-5 h-5 text-[#D97706] shrink-0" />
                  <span>Flawless soft-close fittings and heavy-duty concealed tracks.</span>
                </li>
              </ul>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center space-x-2 bg-[#8B5A2B] hover:bg-[#704823] text-white text-xs font-bold px-6 py-3 rounded-full uppercase tracking-widest transition-colors shadow"
                >
                  <span>Book Fit-Out consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Before-After Static Visual Grid */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Step 1: Digital Sizing & Cutting</div>
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80" 
                      alt="Board processing" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-amber-600 text-white text-[9px] uppercase tracking-wider font-bold rounded">Accuracy</div>
                  </div>
                  <p className="text-slate-400 text-xs">
                    We cut high-density melamine sheets with precise panel saws to guarantee clean, zero-chip edges.
                  </p>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Step 2: Expert Site Fitting</div>
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80" 
                      alt="Carpentry installation" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#8B5A2B] text-white text-[9px] uppercase tracking-wider font-bold rounded">Completed</div>
                  </div>
                  <p className="text-slate-400 text-xs">
                    Our team anchors and levels the cabinetry, achieving perfect structural alignment and closing gaps.
                  </p>
                </div>
              </div>

              {/* Slider simulation banner */}
              <div className="p-3.5 bg-slate-950/40 rounded-xl border border-slate-800 flex items-center space-x-3 text-xs text-slate-400">
                <ArrowLeftRight className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>We handle the entire pipeline: from board supply and precision cutting, straight to professional installation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE FILTER TABS & SERVICE CARDS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-widest font-mono">Fit-Out Segments</span>
          <h2 className="text-3xl font-black text-slate-900 font-display">Specialized Interior Environments</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-xs sm:text-sm">
            Select a category tab below to explore how we adapt our timber panels and installation skillsets to various commercial sectors.
          </p>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Fit-Outs', icon: <FolderOpen className="w-3.5 h-3.5" /> },
              { id: 'corporate', label: 'Offices & Boardrooms', icon: <Building className="w-3.5 h-3.5" /> },
              { id: 'hospitality', label: 'Kitchens & Hotels', icon: <Home className="w-3.5 h-3.5" /> },
              { id: 'institutional', label: 'Schools & Clinics', icon: <Users className="w-3.5 h-3.5" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#8B5A2B] text-white border-[#8B5A2B] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(srv => (
            <div 
              key={srv.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="aspect-video overflow-hidden relative bg-slate-100">
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#8B5A2B] text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {srv.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#8B5A2B] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-50 space-y-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Standards Included:</div>
                  <ul className="space-y-1">
                    {srv.specs.map((spec, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-bold text-[#8B5A2B] hover:text-[#704823] transition-colors inline-flex items-center space-x-1 uppercase tracking-wider"
                  >
                    <span>Request Fit-Out Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US BRIEF */}
      <section className="bg-[#0B1220] py-16 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8B5A2B]/20 border border-[#8B5A2B]/40 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-[#D97706]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-base">Custom Scaled Layouts</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We custom-size every modular storage, reception desk, and partition to utilize 100% of your real estate blueprint.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8B5A2B]/20 border border-[#8B5A2B]/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#D97706]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-base">Elite Melamine Surface Choice</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Choose from a vast palette of high-gloss, matt woodgrain, or concrete-textured wear-resistant surfaces.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8B5A2B]/20 border border-[#8B5A2B]/40 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-[#D97706]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-base">Turnkey Delivery SLAs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We manage everything from wood importing and panel processing, straight through to clean on-site carpenter installation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
