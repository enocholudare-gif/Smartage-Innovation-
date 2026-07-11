import React, { useState, useEffect } from 'react';
import { Search, X, Layers, ArrowRight } from 'lucide-react';
import { productsData } from '../data/mockData';
import { Product, PageId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
          (p.subCategory && p.subCategory.toLowerCase().includes(query.toLowerCase()))
      )
    : productsData.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6 md:p-20 flex justify-center font-sans">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-200 border border-slate-100">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#8B5A2B]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search custom furniture, board specs, stationery, or PPE..."
            className="w-full bg-transparent text-sm text-slate-900 focus:outline-none placeholder:text-slate-400 font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          {/* Products Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Product Sourcing Matches ({filteredProducts.length})</span>
              </span>
              <button
                onClick={() => {
                  onNavigate('products');
                  onClose();
                }}
                className="text-xs text-[#8B5A2B] hover:underline flex items-center space-x-1 cursor-pointer font-bold"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center space-x-3 cursor-pointer group"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-10 rounded-lg object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#8B5A2B] transition-colors truncate">
                      {p.name}
                    </h4>
                    <span className="text-[10px] text-slate-500 block truncate font-mono">
                      {p.category} {p.subCategory ? `• ${p.subCategory}` : ''} • {p.shortDesc}
                    </span>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="py-8 text-center text-slate-450 text-xs font-mono">
                  No matching supplies or specs found for "{query}"
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10px] text-slate-500 flex justify-between items-center px-4 font-mono">
          <span>Search by specification keywords, categories, or names</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
};
