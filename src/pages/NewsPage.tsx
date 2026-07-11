import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Share2, Eye, Clock } from 'lucide-react';
import { PageId } from '../types';

interface NewsPageProps {
  onNavigate?: (page: PageId) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const newsArticles = [
    {
      id: 'news-01',
      title: 'Smartage Innovations Ltd Expands Regional Wood Sourcing Capacity',
      summary: 'With strategic depot expansions in central SADC trading channels, SAIL increases wholesale distribution of premium double-sided melamine boards and structural timber.',
      content: `SMARTAGE INNOVATIONS LTD is proud to announce a monumental upgrade to our wholesale distribution capabilities. By increasing warehouse floor areas and introducing high-torque automated panels saws at our regional depots, we are boosting SADC bulk board supply capacities by over 40%.
      
      This expansion ensures regional carpentry depots, real-estate contractors, and institutional buyers gain access to immediate volume stock without prolonged lead times. High-gloss melamine cabinetry panels, raw MDF fiberboard, and CCA pressure-treated eucalyptus poles are now in full high-volume supply.`,
      date: 'July 8, 2026',
      author: 'Corporate Relations',
      readTime: '4 min read',
      tag: 'Distribution & Trade'
    },
    {
      id: 'news-02',
      title: 'Adopting Automated European Sizing Lines at Our Central Workshop',
      summary: 'We have completed the installation of computer-controlled sliding table panel saws and automatic pre-milling edgebanders to perfect structural wood finishes.',
      content: `Our commitment to structural accuracy reaches a brand new milestone. This week, our central carpentry workshop finalized commissioning of our new automatic pre-milling edgebander alongside computerized CNC routing centers.
      
      These investments guarantee that every laminated MDF sheet or plywood panel we size and edge-bend adheres to strict zero-tolerance margin deviations. Pre-milling technology ensures panels receive glue lines completely free of microscopic chips, delivering outstanding, waterproof joints that survive hot climates.`,
      date: 'June 28, 2026',
      author: 'Operations Director',
      readTime: '5 min read',
      tag: 'Technology & Quality'
    },
    {
      id: 'news-03',
      title: 'Our Clean Energy Timber Briquette Initiative Attains Zero-Waste Goal',
      summary: 'SMARTAGE’s recycling facility transforms 100% of manufacturing sawdust and shavings into high-density compressed pellets and briquettes.',
      content: `Through aggressive adoption of circular economy guidelines, SMARTAGE has achieved a complete zero-waste cycle across all of our wooden board cutting workshops.
      
      Every single cubic meter of recycled sawdust and shaving by-products is vacuum-routed to our automated briquetting presses. There, organic wood fibers are compressed under massive pneumatic force—with absolutely zero artificial glue binders—producing highly stable briquettes and pellets with superb calorific value for industrial boilers.`,
      date: 'June 15, 2026',
      author: 'Sustainability Board',
      readTime: '3 min read',
      tag: 'Environment'
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC] pb-24">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#B58E3D]/10 text-[#B58E3D] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Corporate News Room
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 font-display">
            Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58E3D] to-[#D4AF37]">Announcements & News</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Follow the latest announcements from SMARTAGE INNOVATIONS LTD, covering regional timber trading updates, advanced woodworking machinery commissionings, and sustainable energy projects.
          </p>
        </div>
      </section>

      {/* Main content split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {selectedArticle ? (
          /* Detailed Article View */
          <div className="bg-white rounded-3xl border border-slate-150 p-6 sm:p-10 max-w-4xl mx-auto space-y-8 shadow-sm">
            <button
              onClick={() => setSelectedArticle(null)}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              ← Back to News List
            </button>

            <div className="space-y-4">
              <span className="inline-block px-2.5 py-1 bg-[#B58E3D]/10 text-[#B58E3D] text-[9px] font-mono font-bold uppercase tracking-widest rounded">
                {selectedArticle.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                {selectedArticle.title}
              </h2>
              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-slate-300" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-slate-300" />
                  <span>{selectedArticle.author}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-slate-300" />
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>
            </div>



            {/* Article Body */}
            <div className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed space-y-4 whitespace-pre-line">
              {selectedArticle.content}
            </div>
          </div>
        ) : (
          /* News Grid view */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all flex flex-col group"
              >
                {/* Header (No Image) */}
                <div className="relative bg-slate-100 p-4 pb-0">
                  <span className="inline-block px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[9px] font-mono font-bold text-[#B58E3D] rounded-full uppercase tracking-wider shadow-sm border border-slate-200">
                    {art.tag}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Date */}
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-300" />
                      <span>{art.date}</span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-[#B58E3D] transition-colors line-clamp-2">
                      {art.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(art)}
                      className="text-[#B58E3D] hover:text-[#93702A] text-xs font-bold uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono">{art.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
