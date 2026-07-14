import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  ChevronDown,
  Building2,
  HelpCircle,
  ArrowRight,
  Globe2,
  Plus
} from 'lucide-react';
import { officeLocations, faqList } from '../data/mockData';
import { FAQ, OfficeLocation } from '../types';

export const ContactPage: React.FC = () => {
  const selectedOffice = officeLocations[0] || {
    city: 'Lusaka',
    country: 'Zambia',
    address: 'Plot 3169, Mukwa rd, Lusaka',
    phone: '+260 978708354 | +260 950311205',
    email: 'enquiries@sailltd.com',
    workingHours: 'Mon - Fri: 08:00 - 17:00, Sat: 08:00 - 13:00'
  };

  const [activeFaqCat, setActiveFaqCat] = useState<string>('All');
  const [faqQuery, setFaqQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-01');

  // Contact Form state
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Office Furniture Fitout',
    country: 'Zambia',
    message: '',
  });

  const faqCategories = ['All', 'Sourcing', 'Logistics', 'Procurement'];

  const inquiryText = `Hello SMART AGE INNOVATIONS LIMITED (SAIL),
  
I am submitting a secure corporate inquiry:
• Name: ${formData.fullName}
• Company: ${formData.company || 'N/A'}
• Inquiry Type: ${formData.inquiryType}
• Phone: ${formData.phone}
• Email: ${formData.email}
• SADC Destination: ${formData.country}

Inquiry Message / Specifications:
${formData.message}`;

  const mailUrl = `mailto:enquiries@sailltd.com?subject=${encodeURIComponent(`SAIL SADC Inquiry: ${formData.inquiryType}`)}&body=${encodeURIComponent(inquiryText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open email client with prefilled corporate details
    window.location.href = mailUrl;
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: 'Office Furniture Fitout',
        country: 'Zambia',
        message: '',
      });
    }, 4000);
  };

  const filteredFaqs = faqList.filter((f) => {
    const matchesCat = activeFaqCat === 'All' || f.category === activeFaqCat;
    const matchesSearch =
      f.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            SMART AGE INNOVATIONS LIMITED
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 font-display">
            SADC Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D97706]">Contact Gateway</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Reach out directly to SAIL’s corporate estimating team in Lusaka, Zambia. Our logistics coordinators will respond within 24 business hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Form + Location Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <h2 className="text-lg font-black text-slate-900 font-display uppercase tracking-tight">Corporate Inquiry Form</h2>
              <p className="text-xs text-slate-400">
                Specify your bulk material or fit-out specifications. This form routes details directly to our corporate team.
              </p>
            </div>

            {submitted ? (
              <div className="p-5 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100 text-xs space-y-2">
                <p className="font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-bounce" />
                  <span>Secure Transmission Active</span>
                </p>
                <p>Opening your corporate mail client to securely transmit the prefilled inquiry. Please check your mail screen to approve the final dispatch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Chileshe Mwamba"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#8B5A2B] bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Institution / Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Copperbelt Academy"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#8B5A2B] bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. principal@copperbelt.edu.zm"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#8B5A2B] bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Active Telephone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +260 977 889900"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#8B5A2B] bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Sourcing Category *</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#8B5A2B] bg-slate-50 font-sans"
                    >
                      <option value="Office Furniture Fitout">Office Furniture Fitout</option>
                      <option value="School Furniture Supplies">School Furniture Supplies</option>
                      <option value="Bespoke Melamine Joinery">Bespoke Melamine Joinery</option>
                      <option value="Bulk Timber Boards">Bulk Wood Boards & Panels</option>
                      <option value="Timber Flush Doors">Timber Flush Doors</option>
                      <option value="Bulk Stationery Supplies">Bulk Stationery Supplies</option>
                      <option value="Hardware & PPE Procurement">Hardware & PPE Procurement</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">SADC Target Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Zambia, Angola, Malawi"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#8B5A2B] bg-slate-50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Detailed Specifications *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    placeholder="Provide details such as desk sizes, board quantities, wood veneers, overalls specs, or customized cutting requirements..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#8B5A2B] bg-slate-50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0B1220] hover:bg-[#8B5A2B] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Sourcing Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Office Coordinates & SADC Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <h2 className="text-lg font-black text-slate-900 font-display uppercase tracking-tight">Lusaka HQ Coordinates</h2>
              <p className="text-xs text-slate-400">
                Official offices and warehouse for SMART AGE INNOVATIONS LIMITED (SAIL).
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-md space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Lusaka Head Office
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-slate-900 font-display">
                  SMART AGE INNOVATIONS LIMITED
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#8B5A2B] shrink-0 mt-0.5" />
                  <span>Plot 3169, Mukwa rd, Lusaka</span>
                </p>
              </div>

              {/* Direct Channels */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs font-mono text-slate-500">
                <a
                  href={`tel:${selectedOffice.phone}`}
                  className="flex items-center space-x-3 hover:text-[#8B5A2B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8B5A2B]" />
                  <span>{selectedOffice.phone} (International Sales)</span>
                </a>

                <a
                  href={`mailto:${selectedOffice.email}`}
                  className="flex items-center space-x-3 hover:text-[#8B5A2B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8B5A2B]" />
                  <span>{selectedOffice.email}</span>
                </a>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#8B5A2B] mt-0.5" />
                  <span>{selectedOffice.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Route Map replacement */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-100 h-64 bg-[#0B1220] flex items-center justify-center text-center p-6 shadow-xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <svg className="absolute inset-0 w-full h-full opacity-40 stroke-[#D97706]" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40 160 Q 140 60 240 180 T 440 80" fill="none" strokeWidth="2.5" strokeDasharray="6 6" />
                <circle cx="240" cy="180" r="8" fill="#8B5A2B" />
                <circle cx="140" cy="94" r="5" fill="#D97706" />
                <circle cx="40" cy="160" r="5" fill="#D97706" />
              </svg>
              <div className="relative z-10 space-y-2">
                <MapPin className="w-8 h-8 text-[#D97706] mx-auto animate-bounce" />
                <p className="text-white text-xs font-bold font-mono">SAIL Corporate Tower</p>
                <p className="text-slate-400 text-[10px] font-mono leading-relaxed">Plot 3169, Mukwa rd, Lusaka<br />GPS Coordinates: -15.3875, 28.3228</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="pt-8 space-y-8 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#8B5A2B] tracking-widest uppercase font-mono font-semibold">Helpdesk</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">Sourcing FAQ & Guidelines</h2>
            <p className="text-slate-500 text-xs">
              Clear blueprints and logistical guidelines for SADC bulk tenders and material shipments.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 tracking-tight cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#8B5A2B]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="overflow-hidden border-t border-slate-50">
                      <p className="p-5 text-xs text-slate-500 leading-relaxed bg-slate-50">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
