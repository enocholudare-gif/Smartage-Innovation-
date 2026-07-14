import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // All 17 images updated on the website for the gallery carousel
  const galleryImages = [
    'https://cdn.phototourl.com/free/2026-07-14-aa157a95-659c-4bf4-a804-41efd0abda8b.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-3b040c3a-225b-43ed-ad19-1c5445fd5ed5.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-d7ccf44e-0854-44e8-9237-74d641be341f.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-d937267f-b040-46dc-b4ba-0b19bfa77a09.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-4b8adf60-a060-450f-9766-b2af980511d3.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-93b353b3-b6c8-46b6-ade3-d37aed95015a.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-afdafdd3-f8a3-470b-b288-5040e3d7b30b.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-d1afd040-9659-45c6-8e97-5c6cc96c120e.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-0402ee58-b20f-40ed-bd68-06085b1b8d3d.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-2af2f329-3377-44b0-ae76-c99d83bcb343.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-3737f3aa-6b7b-4627-b9df-1ec5fac20f67.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-aec0bec3-5d7b-4577-82db-1c1c2a742c2e.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-dd4bf6e8-0651-451f-967a-cabbeb3f4e9c.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-69823b61-72e8-4d67-8572-146b3d6c8680.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-8e600d99-2a83-4c7b-b9cc-ec7d63c1e567.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-965d8078-01c1-4933-8088-4fd067c5ec5d.jpg',
    'https://cdn.phototourl.com/free/2026-07-14-f1040c01-de4a-4fbe-8303-7736b0fff814.jpg'
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
