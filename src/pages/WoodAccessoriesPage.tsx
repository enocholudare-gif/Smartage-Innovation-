import React, { useState } from 'react';
import { Package, Plus, CheckCircle2, ShoppingBag, Eye, HelpCircle } from 'lucide-react';
import { PageId } from '../types';

interface WoodAccessoriesPageProps {
  onAddToQuote?: (item: any) => void;
  onNavigate?: (page: PageId) => void;
}

export const WoodAccessoriesPage: React.FC<WoodAccessoriesPageProps> = ({ onAddToQuote, onNavigate }) => {
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  const accessories = [
    {
      id: 'acc-01',
      name: 'Melamine & PVC Edge Banding Tape',
      shortDesc: 'Flexible premium edge tape rolls for sealing exposed margins of laminated MDF boards.',
      fullDesc: 'High-density plasticized PVC and melamine edge banding tapes, pre-treated with high-quality primer on the underside to ensure absolute adhesion when applied by automated edgebanders. Ideal for kitchen cabinets, office desks, and modular wardrobes.',
      image: 'https://cdn.phototourl.com/free/2026-07-10-b0401a33-268d-4057-b219-79ce1720d251.jpg',
      specs: [
        { label: 'Widths Available', value: '19 mm / 22 mm / 35 mm / 45 mm' },
        { label: 'Thickness Options', value: '0.4 mm / 1.0 mm / 2.0 mm' },
        { label: 'Roll Length', value: '100 m / 200 m per roll' },
        { label: 'Colors', value: 'Matching our Melamine Wood-grains' }
      ],
      features: [
        'UV-resistant protective surface coatings prevent fading',
        'Impact-absorbing flexible PVC prevents corner bruises',
        'Pre-primed backs lock into hot-melt glue',
        'Can be cleanly routed and buffed without fraying'
      ]
    },
    {
      id: 'acc-02',
      name: 'High-Strength D3 PVA Wood Adhesive',
      shortDesc: 'Water-resistant, high-solid structural wood glue for durable woodworking joins and veneer bonds.',
      fullDesc: 'Industrial-strength, fast-curing polyvinyl acetate (PVA) emulsion glue formulated for high-load furniture and structural wood joints. Fully complies with D3 European water resistance specifications.',
      image: 'https://cdn.phototourl.com/free/2026-07-10-cca0d3dd-dad0-42fe-8d40-0092a9b6b22b.jpg',
      specs: [
        { label: 'Water Resistance', value: 'EN 204 D3 Certified' },
        { label: 'Pressing Time', value: '15 - 30 minutes at 20°C' },
        { label: 'Solid Content', value: '50% High-Solid Formulation' },
        { label: 'Shelf Life', value: '12 Months unopened' }
      ],
      features: [
        'Dries fully translucent for clear wood joint lines',
        'Water-resistant bonding suitable for kitchen counters',
        'High tensile strength holds tight under heavy loads',
        'Non-toxic and easily washable when still wet'
      ]
    },
    {
      id: 'acc-03',
      name: 'Selected Solid Pine Dowels & Joint Biscuits',
      shortDesc: 'Calibrated interlocking timber dowels and compressed beech biscuits for strong invisible carpentry joints.',
      fullDesc: 'Precisely machined multi-grooved solid pine dowel pins and compressed beechwood joint biscuits. These joint accessories expand slightly upon absorbing water from PVA glues, locking joint interfaces with immense structural stiffness.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
      specs: [
        { label: 'Dowel Dimensions', value: '6x30mm, 8x40mm, 10x50mm, 12x60mm' },
        { label: 'Biscuit Sizes', value: 'No. 0 / No. 10 / No. 20' },
        { label: 'Material', value: 'Kiln-Dried European Beech / selected Pine' },
        { label: 'Grooving Pattern', value: 'Spiral flute dowels for even glue spread' }
      ],
      features: [
        'Kiln-dried down to 8% moisture for zero shrinkage',
        'Chamfered ends simplify rapid joint insertion',
        'Compressed beechwood expands inside joints to seal voids',
        'Perfect for automated doweling machines and handheld joiners'
      ]
    }
  ];

  const handleAdd = (item: any) => {
    if (onAddToQuote) {
      onAddToQuote({
        id: item.id,
        name: item.name,
        category: 'Hardware',
        shortDesc: item.shortDesc,
        image: item.image,
        features: item.features,
        specifications: item.specs.map((s: any) => ({ label: s.label, value: s.value }))
      });
    }
    setAddedItemMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC] pb-24">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#B58E3D]/10 text-[#B58E3D] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Wood Accessory Components
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 font-display">
            Wood <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58E3D] to-[#D4AF37]">Accessories & Fittings</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Essential high-durability wood bindings, premium adhesives, and carpentry fasteners. Designed to complement and strengthen your board and furniture installations.
          </p>
        </div>
      </section>

      {/* Grid of Accessories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((item) => {
            const isAdded = !!addedItemMap[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-100 p-6 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Holder */}
                  <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-100 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>

                  {/* Body Info */}
                  <div className="pt-4 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-[#B58E3D] transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                        {item.shortDesc}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-1.5 text-[11px] text-slate-600">
                      {item.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Spec sheet summary */}
                    <div className="bg-slate-50 p-4 rounded-xl space-y-1 text-[10px] font-mono text-slate-500 border border-slate-100">
                      {item.specs.map((spec, sidx) => (
                        <div key={sidx} className="flex justify-between">
                          <span className="font-semibold text-slate-400">{spec.label}:</span>
                          <span className="text-slate-700 font-bold truncate max-w-[150px]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add to Basket Action */}
                <div className="pt-6">
                  <button
                    onClick={() => handleAdd(item)}
                    disabled={isAdded}
                    className={`w-full py-3 font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm ${
                      isAdded
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[#111111] hover:bg-[#B58E3D] text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Added to Sourcing List</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Quote Basket</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
