import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // All 15 images updated on the website for the gallery carousel
  const galleryImages = [
    'https://cdn.phototourl.com/free/2026-07-10-c65859ec-51f6-43c0-817c-178c85d5873b.png',
    'https://cdn.phototourl.com/free/2026-07-10-2e79c64c-9fa2-4056-a05e-c89aefdfb519.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-d5b59393-2aff-4b4d-a024-87124722f9c6.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-b27809d5-7714-4396-a7b9-722e7fbc5ebc.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-f2860ae6-4d68-4710-80c3-e1d615e74557.png',
    'https://cdn.phototourl.com/free/2026-07-10-32e9b491-9d84-4e46-ba67-0b8edeb519eb.png',
    'https://cdn.phototourl.com/free/2026-07-10-3bd47a73-ad3b-4780-bdf7-51fdd8d22404.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-cdc3ebf7-96eb-405a-abc5-2bd1e3658c10.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-7f14805d-b6b6-4b84-b12b-77b7be2d2ca3.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-b04db99f-42b5-4bb9-8f30-96dbe18ce894.png',
    'https://cdn.phototourl.com/free/2026-07-10-93996190-4b12-446e-8919-37a949ed68b0.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-be794c20-1abe-4c81-9996-1d0446e43c2a.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-447a4edf-a34f-4931-8053-d13810925469.webp',
    'https://cdn.phototourl.com/free/2026-07-10-9642c9e4-2aaf-4e0f-bcc5-8f99925533cc.jpg',
    'https://cdn.phototourl.com/free/2026-07-10-b0401a33-268d-4057-b219-79ce1720d251.jpg'
  ];

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="font-sans text-slate-800 bg-[#111111] min-h-screen pb-24">
      {/* Page Header Banner */}
      <section className="py-12 border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#B58E3D]/10 text-[#B58E3D] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Project & Material Showcase
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-white font-display">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58E3D] to-[#D4AF37]">Product Gallery</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Examine our high-end finished wood boards, premium kitchen cabinetry layouts, solid timber entries, and commercial office furniture installations.
          </p>
        </div>
      </section>

      {/* Full Width Carousel */}
      <div className="w-full h-[60vh] sm:h-[75vh] relative overflow-hidden bg-black mt-8">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        
        {/* Navigation Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/80 to-transparent z-20 flex items-center">
          <button
            onClick={prevSlide}
            className="ml-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/80 to-transparent z-20 flex items-center justify-end">
          <button
            onClick={nextSlide}
            className="mr-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all rounded-full ${
                idx === currentIndex ? 'w-8 h-2 bg-[#B58E3D]' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
