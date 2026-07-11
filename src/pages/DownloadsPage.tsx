import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle,
  Clock,
  ArrowRight,
  Sparkles,
  Info,
} from 'lucide-react';
import { downloadResources } from '../data/mockData';
import { PageId } from '../types';

interface DownloadsPageProps {
  onNavigate: (page: PageId) => void;
}

export const DownloadsPage: React.FC<DownloadsPageProps> = ({ onNavigate }) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const triggerDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setDownloadSuccessId(null);
    
    // Simulate safe local downloading process
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccessId(id);
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setDownloadSuccessId(null);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC]">
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Resource Catalogues
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 font-display">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D97706]">Download Center</span>
          </h1>

          <p className="text-base text-slate-500 max-w-2xl leading-relaxed font-normal">
            Access our latest product ranges, cabinet design portfolios, statutory clearance certificates, and school desk specification blueprints instantly.
          </p>
        </div>
      </section>

      {/* DOWNLOADS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="p-4 bg-amber-50/60 border border-amber-100 rounded-2xl flex items-start space-x-3 text-xs sm:text-sm text-slate-700 max-w-2xl">
          <Info className="w-5 h-5 text-[#8B5A2B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-900">Are you compiling an official tender bid?</span>
            <p className="text-slate-600 text-xs leading-relaxed">
              We provide fully pre-packaged copies of our verified PACRA incorporation paper, ZRA Tax Clearance TPIN cards, and NAPSA registrations within our Compliance Suite below to help accelerate your evaluation process.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloadResources.map((res) => {
            const isDownloading = downloadingId === res.id;
            const isSuccess = downloadSuccessId === res.id;

            return (
              <div 
                key={res.id}
                className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group relative"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-150 flex items-center justify-center text-[#8B5A2B]">
                      <FileText className="w-5 h-5" />
                    </div>
                    
                    <div className="flex space-x-2 text-[10px] font-bold tracking-wide uppercase font-mono text-slate-400">
                      <span className="px-2 py-0.5 bg-slate-100 rounded">{res.format}</span>
                      <span className="px-2 py-0.5 bg-slate-100 rounded">{res.size}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-[#8B5A2B] transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50 space-y-3">
                  {isSuccess ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600 animate-bounce" />
                      <span>Saved successfully! Check your device.</span>
                    </div>
                  ) : isDownloading ? (
                    <div className="bg-slate-50 border border-slate-200 text-slate-700 p-3 rounded-xl text-xs flex items-center space-x-2">
                      <Clock className="w-4 h-4 shrink-0 text-amber-600 animate-spin" />
                      <span>Simulating download transfer...</span>
                    </div>
                  ) : null}

                  <button
                    onClick={() => triggerDownload(res.id, res.title)}
                    disabled={isDownloading}
                    className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isDownloading
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-[#0B1220] hover:bg-[#8B5A2B] text-white shadow-sm'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Resource</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK INQUIRY CALLOUT */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02]"></div>
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6 relative z-10 animate-fade-in">
          <div className="w-12 h-12 bg-[#8B5A2B]/20 border border-[#8B5A2B]/40 rounded-3xl flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-[#D97706]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Need a custom catalog or pricing sheet?</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
            Our estimating department is ready to compile bespoke price quotations or panel dimensions logs for bulk municipal or educational accounts.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#D97706] hover:text-white transition-colors uppercase tracking-wider"
            >
              <span>Connect with estimating team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
