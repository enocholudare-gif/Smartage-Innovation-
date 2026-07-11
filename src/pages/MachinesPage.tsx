import React from 'react';
import { Cpu, CheckCircle, Table, ArrowRight, ShieldCheck, Hammer } from 'lucide-react';
import { Product, PageId } from '../types';

interface MachinesPageProps {
  onAddToQuote?: (item: any) => void;
  onNavigate?: (page: PageId) => void;
}

export const MachinesPage: React.FC<MachinesPageProps> = ({ onAddToQuote, onNavigate }) => {
  const machines = [
    {
      id: 'mac-01',
      name: 'High-Precision Automatic Edge Bending Machine',
      shortDesc: 'Continuous heavy-duty edge-bander with pre-milling, dual gluing, fine trimming, and buffing stations.',
      fullDesc: 'Engineered for high-volume commercial panel production. This automatic edge banding machine applies wood veneer, PVC, or ABS edge banding strips on straight panel edges. Equipped with high-torque premilling motors to perfect board borders before dual-temperature glue application.',
      image: 'https://cdn.phototourl.com/free/2026-07-10-447a4edf-a34f-4931-8053-d13810925469.webp',
      specs: [
        { label: 'Feed Speed', value: '12 - 20 m/min' },
        { label: 'Panel Thickness', value: '10 - 60 mm' },
        { label: 'Edge Banding Thickness', value: '0.4 - 3.0 mm' },
        { label: 'Total Installed Power', value: '9.5 kW' }
      ],
      features: [
        'Automatic pre-milling station prevents edge chipping',
        'Dual-glue pot for rapid color changes',
        'Pneumatic pressure roller line for secure bonding',
        'High-speed end cutting and scrap scraping'
      ]
    },
    {
      id: 'mac-02',
      name: 'Heavy-Duty Sliding Table Panel Saw',
      shortDesc: 'Calibrated industrial sliding panel saw with scoring blade for chip-free cutting of laminated MDF sheets.',
      fullDesc: 'Designed to cut heavy laminated boards and wood panels to exact dimensions. Features a heavy-duty sliding carriage moving on precision ground steel guide bars, combined with an independent scoring blade motor to completely prevent underside laminate breakout.',
      image: 'https://cdn.phototourl.com/free/2026-07-10-9642c9e4-2aaf-4e0f-bcc5-8f99925533cc.jpg',
      specs: [
        { label: 'Sliding Table Length', value: '3200 mm' },
        { label: 'Max Cutting Width', value: '1250 mm' },
        { label: 'Main Saw Blade Diameter', value: '300 mm' },
        { label: 'Scoring Blade Diameter', value: '120 mm' }
      ],
      features: [
        'Double-layer heavy sliding table for high loading',
        'Separate high-speed motor for scoring blade',
        'Manual tilt scale adjustment from 0 to 45 degrees',
        'Dust-extraction hood for a clean breathing zone'
      ]
    },
    {
      id: 'mac-03',
      name: 'Computerized CNC Router Center',
      shortDesc: 'Automated 3-axis CNC nesting and routing center for complex panel carving, milling, and nesting operations.',
      fullDesc: 'An industrial CNC machining station built for high-accuracy woodworking. It can handle complete nesting, drilling, engraving, and profile-milling of raw MDF, plywood, blockboard, and solid pine wood panels with zero manual intervention.',
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
      specs: [
        { label: 'Working Table Area', value: '1300 x 2500 mm' },
        { label: 'Spindle Power', value: '9.0 kW Air-Cooled Spindle' },
        { label: 'Vacuum Pump', value: '7.5 kW Liquid-Ring' },
        { label: 'Max Travel Speed', value: '45 m/min' }
      ],
      features: [
        'High-suction vacuum grid table with multiple zone control',
        'Automatic rotary carousel tool-changer (8 tools)',
        'Heavy helical rack-and-pinion transmission systems',
        'Syntec industrial control interface'
      ]
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC] pb-24">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#B58E3D]/10 text-[#B58E3D] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Heavy Woodworking Machinery
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 font-display">
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58E3D] to-[#D4AF37]">Woodworking Machines</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            SMARTAGE INNOVATIONS LTD supplies and utilizes high-performance industrial machines engineered to deliver supreme sizing, nesting, and edge-banding accuracy for high-density timber boards and panels.
          </p>
        </div>
      </section>

      {/* Main Grid List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {machines.map((m, idx) => (
          <div
            key={m.id}
            id={m.id}
            className={`bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 hover:shadow-xl transition-all flex flex-col lg:flex-row gap-8 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image section */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-inner">
              <img
                src={m.image}
                alt={m.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              />
            </div>

            {/* Description details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#B58E3D]">
                  <Cpu className="w-5 h-5" />
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest">Model: SAIL-{idx + 10}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  {m.name}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {m.fullDesc}
                </p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {m.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#B58E3D]" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Specs Table */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <Table className="w-3.5 h-3.5" />
                  <span>Technical Specifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs font-mono">
                  {m.specs.map((sp, sidx) => (
                    <div key={sidx} className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-400 font-semibold">{sp.label}:</span>
                      <span className="text-slate-800 font-bold">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        ))}
      </div>

      {/* Trust Badge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#111111] to-[#222222] text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 border border-amber-500/20">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center space-x-2 text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Manufacturer Guarantee</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold tracking-tight">Need Custom Wood Machining or Cutting Services?</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We operate these automated machinery profiles in our own Sourcing Depots. You can also hire our custom sheet-sizing and edge banding lines on a project-by-project basis.
            </p>
          </div>
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="px-6 py-3 bg-[#B58E3D] hover:bg-[#D4AF37] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0 cursor-pointer"
          >
            Contact Sourcing Depot
          </button>
        </div>
      </section>
    </div>
  );
};
