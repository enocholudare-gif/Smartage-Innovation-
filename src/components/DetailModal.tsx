import React, { useState } from 'react';
import {
  X,
  Plus,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Download,
  Share2,
  Check,
} from 'lucide-react';
import { Product } from '../types';

interface DetailModalProps {
  product: Product | null;
  machine: null;
  onClose: () => void;
  onAddToQuote: (item: Product, type: 'product') => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'applications'>('specs');
  const [copied, setCopied] = useState(false);
  const [added, setAdded] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  React.useEffect(() => {
    setSelectedImage(null);
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToQuote(product, 'product');
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6 md:p-12 flex justify-center items-center font-sans">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-200 border border-slate-100">
        {/* Left Image Section */}
        <div className="md:w-1/2 bg-slate-900 relative flex flex-col justify-between p-6 text-white min-h-[300px]">
          <div className="absolute inset-0 z-0">
            <img
              src={selectedImage || (product.detailImages && product.detailImages.length > 0 ? product.detailImages[0] : product.image)}
              alt={product.name}
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          {/* Thumbnails overlay if there are multiple images */}
          {product.detailImages && product.detailImages.length > 0 && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
               {product.detailImages.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 shadow-xl transition-all cursor-pointer hover:scale-110 ${selectedImage === img || (!selectedImage && idx === 0) ? 'border-[#8B5A2B] scale-110' : 'border-white/50'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
               ))}
               {!product.detailImages.includes(product.image) && (
                  <button 
                    onClick={() => setSelectedImage(product.image)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 shadow-xl transition-all cursor-pointer hover:scale-110 ${selectedImage === product.image || (!selectedImage && product.detailImages.length === 0) ? 'border-[#8B5A2B] scale-110' : 'border-white/50'}`}
                  >
                    <img src={product.image} className="w-full h-full object-cover" />
                  </button>
               )}
            </div>
          )}

          <div className="relative z-10 flex justify-between items-center">
            <span className="px-3 py-1 rounded-full bg-[#8B5A2B] text-white text-[10px] font-bold uppercase tracking-widest font-mono shadow-md">
              {product.category}
            </span>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-750 text-slate-200 backdrop-blur-sm transition-colors cursor-pointer"
              title="Copy link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>

          <div className="relative z-10 space-y-2 pt-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight font-display">
              {product.name}
            </h2>
            <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
              {product.shortDesc}
            </p>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div className="space-y-6">
            {/* Top Close Button & Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
                MATERIAL SPECIFICATION
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 leading-relaxed">
              {product.fullDesc}
            </p>

            {/* Tabs */}
            <div className="flex space-x-3 border-b border-slate-100">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'specs'
                    ? 'border-b-2 border-[#8B5A2B] text-[#8B5A2B]'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-2 text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'features'
                    ? 'border-b-2 border-[#8B5A2B] text-[#8B5A2B]'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Key Features
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`pb-2 text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'applications'
                    ? 'border-b-2 border-[#8B5A2B] text-[#8B5A2B]'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Applications
              </button>
            </div>

            {/* Tab Contents */}
            <div className="py-2 space-y-3">
              {activeTab === 'specs' && (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {product.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-xs py-2 border-b border-slate-50"
                    >
                      <span className="text-slate-500 font-medium">{spec.label}</span>
                      <span className="font-bold text-slate-900 font-mono text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'features' && (
                <ul className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'applications' && (
                <ul className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600 leading-relaxed">
                      <ShieldCheck className="w-4 h-4 text-[#8B5A2B] shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-slate-100 space-y-2">
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#0B1220] hover:bg-[#8B5A2B] text-white'
              }`}
            >
              {added ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Added to Inquiry Basket</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Inquiry Basket</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className={`w-full py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 cursor-pointer ${
                downloaded
                  ? 'bg-emerald-50 text-emerald-750 border border-emerald-100'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-[#8B5A2B]" />
              <span>
                {downloaded ? 'Technical Datasheet PDF Downloaded!' : 'Download Technical Spec Sheet (PDF)'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
