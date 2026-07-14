import React, { useState, useEffect } from 'react';
import { Package, Plus, CheckCircle2, ShoppingBag, Eye, HelpCircle } from 'lucide-react';

const AccessoryCarousel = ({ images, name }: { images: string[], name: string }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);
  
  return (
    <div className="w-full h-full relative">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${name} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${i === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
      ))}
    </div>
  );
};
import { PageId } from '../types';

interface WoodAccessoriesPageProps {
  onAddToQuote?: (item: any) => void;
  onNavigate?: (page: PageId) => void;
}

export const WoodAccessoriesPage: React.FC<WoodAccessoriesPageProps> = ({ onAddToQuote, onNavigate }) => {
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  const accessories = [
    {
      id: 'acc-03',
      name: 'Accessories and Fittings',
      shortDesc: 'High-quality fittings and accessories for professional woodworking and cabinetry.',
      fullDesc: 'A comprehensive selection of premium accessories and fittings essential for all your cabinetry and furniture making needs. Assuring durability and reliable performance for all modern interior projects.',
      image: 'https://cdn.phototourl.com/free/2026-07-14-33c664ff-6d30-4844-8df5-90dfd7eaa3d7.jpg',
      images: [
        'https://cdn.phototourl.com/free/2026-07-14-33c664ff-6d30-4844-8df5-90dfd7eaa3d7.jpg',
        'https://cdn.phototourl.com/free/2026-07-14-6f9c1f21-ba8a-4f1d-98e2-ded3f5ad860b.jpg',
        'https://cdn.phototourl.com/free/2026-07-14-bbd6cd4e-47f8-4a35-ac34-04d687e1d109.jpg'
      ],
      specs: [
        { label: 'Category', value: 'Fittings & Hardware' },
        { label: 'Application', value: 'Furniture Assembly' },
        { label: 'Material', value: 'Mixed Premium Materials' },
        { label: 'Durability', value: 'High' }
      ],
      features: [
        'Professional-grade quality',
        'Reliable connection and assembly',
        'Long-lasting performance',
        'Wide range of applications'
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
            Accessories and Fittings
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 font-display">
            Accessories <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58E3D] to-[#D4AF37]">and Fittings</span>
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
                    {item.images ? (
                      <AccessoryCarousel images={item.images} name={item.name} />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      />
                    )}
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
