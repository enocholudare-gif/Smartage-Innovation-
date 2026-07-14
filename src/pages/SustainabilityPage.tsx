import React from 'react';
import {
  Trees,
  CheckCircle,
  Leaf,
  Layers,
  Recycle,
  Heart,
} from 'lucide-react';
import { PageId } from '../types';

interface SustainabilityPageProps {
  onNavigate: (page: PageId) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC]">
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#B58E3D]/10 border border-[#B58E3D]/20 text-[#B58E3D] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Responsible Timber Stewardship
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 font-display">
            Sustaining Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58E3D] to-[#8B5A2B]">Natural Ecosystems</span>
          </h1>

          <p className="text-base text-slate-500 max-w-2xl leading-relaxed font-normal">
            Smart Age Innovations Limited operates under a strict responsible sourcing mandate. We believe that wood products must provide long-term functional value without compromising local forest health.
          </p>
        </div>
      </section>

      {/* CORE PHILOSOPHY SECTIONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Responsible Sourcing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#B58E3D] uppercase tracking-wider font-mono">
              <Trees className="w-4 h-4" />
              <span>FSC & SADC Compliant Sourcing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Where Our Raw Timber Boards Come From
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We never procure raw wood materials from unverified or illegal logging zones. Our entire supply chain of melamine, MDF, raw particleboards, and structural shuttering ply is audited directly from certified industrial tree plantations.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              By working with global timber mills that practice active reforestation and sustainable harvesting, we ensure that every single board supplied to Zambian and regional carpentry businesses supports long-term ecological balance.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-5 h-5 text-[#B58E3D] shrink-0" />
                <span>100% trace-audited plywood and veneers.</span>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-5 h-5 text-[#B58E3D] shrink-0" />
                <span>Zero support for unmanaged virgin forest clearance.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden aspect-video relative shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80" 
              alt="Sustainable Forestry" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Plantation Stewardship</p>
                <h4 className="font-bold text-base">Reforested Commercial Pine & Fir</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Zero Waste Cutting & Low Emissions */}
        <div className="grid grid-cols-1 gap-12 items-center lg:pt-10">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#B58E3D] uppercase tracking-wider font-mono">
              <Leaf className="w-4 h-4" />
              <span>Waste Minimization</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Algorithmic Sheet Sizing & Waste Minimization
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Raw panel sheets are expensive and cutting them inefficiently creates massive wood scrap piles. At our Lusaka cutting yard, we utilize professional layout-optimizing models to calculate the perfect cutting line placements on every sheet.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              This results in a dramatic reduction in sawdust and wood-scrap waste, ensuring we squeeze out maximum usable furniture panels per raw board.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-start space-x-3">
                <Layers className="w-5 h-5 text-[#B58E3D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-950">E1 Core Boards</h4>
                  <p className="text-[10px] text-slate-500 leading-normal">Low formaldehyde emissions for safe office air quality.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-start space-x-3">
                <Recycle className="w-5 h-5 text-[#B58E3D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-950">95% Yield Sizing</h4>
                  <p className="text-[10px] text-slate-500 leading-normal">Precision panel layout minimises offcuts and scrap waste.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Social & Institutional Contribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:pt-10">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#B58E3D] uppercase tracking-wider font-mono">
              <Heart className="w-4 h-4" />
              <span>Educational Investment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Supplying Durable Educational Desks
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Durable classrooms require durable furniture. Poorly made school desks break in a matter of months, forcing schools to continuously purchase replacements, which strains local budgets and increases material consumption.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We design and construct our double student classroom school desks using ultra-heavy welded metal structures and scratch-proof wooden laminates. By making school desks that survive decades of student use, we support local community budgets while lowering raw resource demand.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#8B5A2B] hover:text-[#704823] transition-colors uppercase tracking-wider"
            >
              <span>Learn about school desk pricing</span>
              <span>&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden aspect-square sm:aspect-video relative shadow-xl">
              <img 
                src="https://cdn.phototourl.com/free/2026-07-14-ee919fa0-6be2-4509-b89a-f91f57326767.jpg" 
                alt="Educational Desks 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square sm:aspect-video relative shadow-xl">
              <img 
                src="https://cdn.phototourl.com/free/2026-07-14-73e16a13-dc9c-4fa1-a02e-b4207518ae42.jpg" 
                alt="Educational Desks 2" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
