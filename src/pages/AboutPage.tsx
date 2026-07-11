import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Globe2,
  Maximize2,
  X,
  Building2,
  Compass,
  ArrowRight,
  Sparkles,
  ThumbsUp,
  Users,
  CheckCircle,
} from 'lucide-react';
import { companyTimeline, SAIL_SERVICES } from '../data/mockData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {


  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Established Corporate Profile
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 font-display">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D97706]">Smart Age Innovations Limited</span>
          </h1>

          <p className="text-base text-slate-500 max-w-2xl leading-relaxed font-normal">
            Supplying premium wood boards, furniture, stationery, and hardware across SADC borders with absolute structural accuracy.
          </p>
        </div>
      </section>

      {/* New Image block between About Us and Corporate Journey */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
            alt="Corporate Office" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 1. COMPANY STORY & MISSION / VISION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-wider font-mono">
              Corporate Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display leading-tight">
              A Direct Legacy of Excellence & SADC Regional Innovation
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>Smart Age Innovations Ltd (SAIL)</strong> is an indigenous Zambian-owned company recently incorporated as a subsidiary of Smart Age Business Solutions Ltd. SAIL is a dynamic and forward-thinking organization dedicated to delivering cutting-edge solutions and exceptional services while leveraging the strength and expertise of its parent company.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Through our premium timber supply, modern panels, high-durability school & office furniture, and tailored interior solutions, we serve a growing client list across the Southern African region with certified, durable craftsmanship.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-1">
                <span className="text-2xl font-black text-[#8B5A2B] font-mono">150+</span>
                <span className="block text-xs font-bold text-slate-900">Enterprise Partners</span>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-1">
                <span className="text-2xl font-black text-[#D97706] font-mono">99.8%</span>
                <span className="block text-xs font-bold text-slate-900">SLA Project Success</span>
              </div>
            </div>
          </div>


        </div>

        {/* Vision & Mission Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            <div className="p-3.5 w-fit bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-2xl relative z-10">
              <Compass className="w-6 h-6 animate-pulse-slow" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display relative z-10">Vision Statement</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed relative z-10 font-normal">
              Empowering a futuristic world through innovative solutions while transforming lives and industries for a smarter tomorrow. 🚀
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            <div className="p-3.5 w-fit bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-2xl relative z-10">
              <CheckCircle2 className="w-6 h-6 animate-pulse-slow" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display relative z-10">Mission Statement</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed relative z-10 font-normal">
              To ignite a smarter future by developing and delivering smart innovative solutions that are accessible, intuitive, and transformative, thus simplifying lives, driving progress, and making a lasting impact on the world.
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className="pt-16 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#8B5A2B] tracking-widest uppercase font-mono">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">Our Services</h2>
            <p className="text-slate-500 text-xs">
              Professional edging and cutting, custom design and installation, accessories, and many more services tailored for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAIL_SERVICES.map((srv) => {
              // Internal state for each service slider
              const [currentIndex, setCurrentIndex] = React.useState(0);
              const hasMultiple = srv.images && srv.images.length > 1;

              React.useEffect(() => {
                if (!hasMultiple) return;
                const timer = setInterval(() => {
                  setCurrentIndex((prev) => (prev + 1) % srv.images.length);
                }, 3000 + Math.random() * 2000); // Randomize slightly so they don't all flip at exactly the same time
                return () => clearInterval(timer);
              }, [hasMultiple, srv.images?.length]);

              return (
                <div key={srv.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  <div className="h-40 relative bg-slate-100 overflow-hidden">
                    {srv.images?.map((img: string, idx: number) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${srv.title} ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          idx === currentIndex ? 'opacity-100 relative z-10' : 'opacity-0 z-0'
                        } group-hover:scale-105 transition-transform`}
                        referrerPolicy="no-referrer"
                      />
                    ))}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-[#8B5A2B] z-20">
                      {srv.category}
                    </div>
                    {hasMultiple && (
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-20">
                        {srv.images.map((_, dotIdx: number) => (
                          <div
                            key={dotIdx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              dotIdx === currentIndex ? 'w-4 bg-[#8B5A2B]' : 'w-1.5 bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-slate-900 leading-tight">{srv.title}</h3>
                    <p className="text-[11px] text-slate-500 line-clamp-3">{srv.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Smartage Innovation */}
        <div className="pt-16 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#8B5A2B] tracking-widest uppercase font-mono">Our Pillars</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">Why Choose Smartage Innovation?</h2>
            <p className="text-slate-500 text-xs">
              Exceptional service levels, uncompromising quality control, and robust corporate integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8B5A2B] shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Innovative Solutions</h4>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">Delivering smart, reliable, and future-focused solutions.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8B5A2B] shrink-0 mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Quality Assurance</h4>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">Committed to excellence in every product and service.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8B5A2B] shrink-0 mt-0.5">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Customer Focused</h4>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">We prioritize your needs and satisfaction.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8B5A2B] shrink-0 mt-0.5">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Experienced Team</h4>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">Skilled professionals dedicated to delivering outstanding results.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8B5A2B] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Integrity & Trust</h4>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">We operate with honesty, transparency, and accountability.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#8B5A2B]/20 transition-all shadow-sm flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8B5A2B] shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Reliable Service</h4>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">Providing exceptional support and long-term value to every client.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. TIMELINE */}
        <div className="pt-12 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#8B5A2B] tracking-widest uppercase font-mono">History</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">Corporate Milestones</h2>
            <p className="text-slate-500 text-xs">
              A timeline reflecting our persistent growth, industrial modernization, and continuous corporate alignment.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-100 pl-8 ml-4 sm:ml-12 space-y-10 max-w-3xl mx-auto">
            {companyTimeline.map((item) => (
              <div key={item.year} className="relative">
                {/* Bullet */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#8B5A2B] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D97706]" />
                </div>
                <div className="space-y-1 bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
                  <span className="inline-block px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-[10px] font-bold font-mono rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 font-display">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                  <p className="text-[#8B5A2B] text-[11px] font-mono font-bold pt-2 font-semibold">✓ Verified Status: {item.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="bg-[#0B1220] py-20 text-center relative overflow-hidden mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Need premium timber board contracts or bulk corporate supplies?
          </h2>
          <p className="text-slate-300 text-xs leading-relaxed max-w-xl mx-auto">
            Schedule a private consultation at our Lusaka industrial offices. Our estimating department will coordinate your customized cutting lists.
          </p>
          <div className="flex justify-center space-x-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-[#8B5A2B] hover:bg-[#704823] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Contact SAIL Sourcing Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
