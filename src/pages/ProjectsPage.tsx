import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PageId } from '../types';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images for the manual carousel of finished products & installations
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

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC]">
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Our Workmanship Portfolio
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 font-display">
            Finished <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D97706]">Products & Installations</span>
          </h1>

          <p className="text-base text-slate-500 max-w-2xl leading-relaxed font-normal">
            Browse through our extensive gallery of completed projects. Use the arrows below to navigate through our diverse portfolio of custom fittings, joinery, and installations.
          </p>
        </div>
      </section>

      {/* Manual Carousel Section */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl aspect-[16/10] sm:aspect-video">
          {/* Main Image Viewer */}
          <div className="w-full h-full relative">
            <img 
              src={projectImages[currentIndex]} 
              alt={`Finished Installation ${currentIndex + 1}`} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
            <button
              onClick={prevSlide}
              className="p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur transition-all pointer-events-auto"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur transition-all pointer-events-auto"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Indicator Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur rounded-full text-white text-xs font-mono tracking-widest z-10">
            {currentIndex + 1} / {projectImages.length}
          </div>
        </div>
      </section>

      {/* FOOTER CALLOUT AREA */}
      <section className="bg-[#0B1220] py-20 text-white relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02]"></div>
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6 relative z-10">
          <div className="w-12 h-12 bg-[#8B5A2B]/20 border border-[#8B5A2B]/40 rounded-3xl flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-[#D97706]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">Inspired by our work?</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Whether you need a custom wardrobe fitting, an entire office layout, or specialized board materials, we are ready to supply and construct to perfection.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#8B5A2B] hover:bg-[#704823] text-white text-xs font-bold px-8 py-3.5 rounded-full uppercase tracking-widest transition-colors shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
