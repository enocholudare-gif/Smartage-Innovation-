import React, { useState } from 'react';
import {
  Search,
  Plus,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Package,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
  Layers,
  Home,
  GraduationCap,
  SquareDot,
  ShoppingBag,
  Eye,
} from 'lucide-react';
import { productsData, projectShowcase } from '../data/mockData';
import { Product, PageId } from '../types';

interface ProductsPageProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  onNavigate?: (page: PageId, category?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = 'All',
  onSelectProduct,
  onAddToQuote,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projectImages = [
    'https://cdn.phototourl.com/free/2026-07-11-e46cd679-e425-4e65-9ad2-049dbfaaf2fa.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-68f02f87-4e71-4bf2-a483-41a338608b1f.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-5ddc9c9f-1ef4-41c5-8dff-e9fd0a446b09.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-867d9543-4c95-481a-b6ca-61e607a68391.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-803d9f85-80c2-4bde-b64b-ae97da27ec88.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-93657bd5-520e-440c-b08d-375a4536f5c9.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-1e0e0007-f011-4fc1-aa33-9d6ec25589c4.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-3df7f33c-b83e-422f-a980-a0c0c5681a5b.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-91a7b628-047a-49f9-9e5b-0228f37316be.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-ba8dc663-83a4-435e-a07b-7268bfe14b94.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-4ada55ee-fd35-4670-bdf9-9e049b61484e.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-a58a94d9-76b4-441f-89f3-d4ce61d9c5f8.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-b858f35c-d415-443a-a7b3-8f7f96b25f8d.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-29dc9c9d-cf83-4360-959d-c4d18a0f4636.jpg',
    'https://cdn.phototourl.com/free/2026-07-11-36c03055-e5a8-4516-931b-20230152e363.jpg'
  ];

  const nextProjectSlide = () => setCurrentProjectIndex((prev) => (prev + 1) % projectImages.length);
  const prevProjectSlide = () => setCurrentProjectIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);

  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filterCategories = [
    { label: 'All Sourcing', value: 'All', icon: <Package className="w-3.5 h-3.5" /> },
    { label: 'Furniture & Interiors', value: 'Furniture', icon: <Home className="w-3.5 h-3.5" /> },
    { label: 'Boards & Panels', value: 'Wood Boards & Panels', icon: <Layers className="w-3.5 h-3.5" /> },
    { label: 'Timber Doors', value: 'Doors', icon: <SquareDot className="w-3.5 h-3.5" /> },
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesCat =
      selectedCategory === 'All' || 
      product.category.toLowerCase() === selectedCategory.toLowerCase() ||
      (product.subCategory && product.subCategory.toLowerCase().includes(selectedCategory.toLowerCase()));

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.subCategory && product.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  const handleAdd = (product: Product) => {
    onAddToQuote(product);
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC] pb-24">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Verified Corporate Sourcing
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 font-display">
            Sourced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D97706]">Products Catalog</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Browse our verified inventory of high-density melamine boards, structural timber doors, protective overalls, power tools, stationery copier paper, and specialized cabinetry hardware.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        {/* Search & Filter Controls */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specs, categories, name..."
                className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B] bg-slate-50"
              />
            </div>

            {/* Total count indicator */}
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              Displaying {filteredProducts.length} Sourced Items
            </div>
          </div>

          {/* Sourcing Category Filter Row */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors flex items-center space-x-2 cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#0B1220] text-white shadow-sm'
                    : 'bg-slate-50 border border-slate-100 text-slate-600 hover:border-[#8B5A2B]'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Global Product Specifications Info */}
        <div className="bg-[#0B1220] p-6 rounded-3xl shadow-sm text-white space-y-4">
          <div className="flex items-center space-x-2">
            <Info className="w-5 h-5 text-[#8B5A2B]" />
            <h3 className="text-lg font-bold font-display tracking-wide">Standard Sizing & Specifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <span className="text-[#8B5A2B] font-bold block mb-1">Available Sizes</span>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>2750 × 1830 mm</li>
                <li>Custom sizes available on request</li>
              </ul>
            </div>
            <div>
              <span className="text-[#8B5A2B] font-bold block mb-1">Available Thicknesses</span>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>8 mm, 9 mm, 12 mm, 16 mm, 18 mm, 22 mm</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => {
            const isAdded = !!addedItemMap[p.id];

            return (
              <div
                key={p.id}
                className="bg-white rounded-3xl border border-slate-100 p-5 hover:shadow-xl transition-all flex flex-col justify-between group relative"
              >
                {/* Image Holder */}
                <div className="relative rounded-2xl overflow-hidden h-52 bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[9px] font-mono font-bold text-[#8B5A2B] rounded-full uppercase tracking-wider shadow-sm">
                    {p.subCategory || p.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="pt-4 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-[#8B5A2B] transition-colors line-clamp-1">
                      {p.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {p.shortDesc}
                    </p>
                  </div>

                  {/* Features checklist */}
                  <div className="space-y-1.5">
                    {p.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[10px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specifications list (mono-styled) */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl space-y-1 text-[10px] font-mono text-slate-500 border border-slate-100">
                    {p.specifications.slice(0, 3).map((spec, sidx) => (
                      <div key={sidx} className="flex justify-between">
                        <span className="font-semibold text-slate-400">{spec.label}:</span>
                        <span className="text-slate-700 font-bold truncate max-w-[150px]">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action panel */}
                  <div className="flex items-center space-x-2 pt-2">
                    <button
                      onClick={() => onSelectProduct(p)}
                      className="flex-1 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-150 hover:border-slate-300 font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>Specifications</span>
                    </button>

                    <button
                      onClick={() => handleAdd(p)}
                      disabled={isAdded}
                      className={`px-4 py-2.5 font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm ${
                        isAdded
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[#8B5A2B] hover:bg-[#704823] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Quote</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 space-y-4">
            <Package className="w-12 h-12 text-slate-300 mx-auto animate-pulse" />
            <h3 className="text-sm font-bold text-slate-900 uppercase">No Matches Found</h3>
            <p className="text-slate-400 text-xs max-w-md mx-auto">
              We couldn't find any products matching your search query. Try expanding your search terms or checking another category tab.
            </p>
          </div>
        )}

        {/* Finished Products Section - Manual Carousel */}
        <div className="pt-16 pb-8 space-y-8 max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#8B5A2B] tracking-widest uppercase font-mono">Portfolio</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">Finished Products & Installations</h2>
            <p className="text-slate-500 text-xs">
              Explore our expertly crafted wardrobes, kitchen fittings, and executive office furniture assembled from our premium boards.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl aspect-[16/10] sm:aspect-video mt-8">
            <div className="w-full h-full relative">
              <img 
                src={projectImages[currentProjectIndex]} 
                alt={`Finished Installation ${currentProjectIndex + 1}`} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Controls Overlay */}
            <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
              <button
                onClick={prevProjectSlide}
                className="p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur transition-all pointer-events-auto cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <button
                onClick={nextProjectSlide}
                className="p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur transition-all pointer-events-auto cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Indicator Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur rounded-full text-white text-xs font-mono tracking-widest z-10">
              {currentProjectIndex + 1} / {projectImages.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
