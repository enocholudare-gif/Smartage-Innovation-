import React, { useState } from 'react';
import {
  X,
  Trash2,
  Send,
  CheckCircle2,
  Building2,
  Globe2,
  Mail,
  Phone,
  FileText,
  PackageCheck,
  Plus,
  Minus,
} from 'lucide-react';
import { QuoteItem } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearQuote: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearQuote,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'Zambia',
    deliveryPort: '',
    projectNotes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRfq = `RFQ-SAIL-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(generatedRfq);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearQuote();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm flex justify-end font-sans">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-slate-100">
        {/* Header */}
        <div className="p-6 bg-[#0B1220] text-white flex items-center justify-between sticky top-0 z-10 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#8B5A2B] flex items-center justify-center text-white">
              <PackageCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-extrabold font-display uppercase tracking-tight">Corporate Inquiry Basket</h2>
              <p className="text-[11px] text-slate-300 font-mono">
                {items.length} {items.length === 1 ? 'item' : 'items'} selected for procurement review
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8 flex-1">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-650 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 font-display uppercase tracking-tight">Secure Inquiry Logged</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Your procurement specifications have been successfully routed to the SAIL Board and SADC logistics desk. Reference number:
                </p>
                <div className="inline-block bg-slate-100 border border-slate-200 text-slate-900 px-5 py-2.5 rounded-xl text-base font-bold font-mono">
                  {rfqNumber}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl max-w-md mx-auto text-left text-xs text-slate-600 space-y-2">
                <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px] font-mono">What happens next?</p>
                <ul className="space-y-1.5 text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full shrink-0" />
                    <span>Our sales director will check stocks, fabrication queue, and SADC shipping schedules.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full shrink-0" />
                    <span>A formal Pro-Forma CIF/FOB quote will be emailed to your corporate address.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full shrink-0" />
                    <span>PACRA approval papers and physical SADC compliance logs will be supplied.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#0B1220] hover:bg-[#8B5A2B] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Done & Return to Site
              </button>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    1. Selected Procurement Items ({items.length})
                  </h3>
                  {items.length > 0 && (
                    <button
                      onClick={onClearQuote}
                      className="text-xs text-rose-600 hover:text-rose-800 font-bold flex items-center space-x-1 cursor-pointer uppercase tracking-wider text-[10px]"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="p-8 border-2 border-dashed border-slate-150 rounded-3xl text-center space-y-3 bg-slate-50">
                    <PackageCheck className="w-10 h-10 text-slate-300 mx-auto" />
                    <p className="text-xs font-bold text-slate-600 uppercase">Your basket is empty</p>
                    <p className="text-[11px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Browse our Products and Fit-Outs collections and click "Quote" to assemble your custom procurement requirements.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between space-x-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 truncate">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-[#8B5A2B] font-bold block">
                            {item.codeOrCategory}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 shrink-0">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-6 text-center font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-650 transition-colors cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact & Details Form */}
              {items.length > 0 && (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-slate-100">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    2. Institutional Delivery Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase font-mono text-slate-500 mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-850 focus:outline-none focus:border-[#8B5A2B]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase font-mono text-slate-500 mb-1">
                        Corporate / School Name *
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Woodcraft Ltd"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-850 focus:outline-none focus:border-[#8B5A2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase font-mono text-slate-500 mb-1">
                        Corporate Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="j.doe@company.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-850 focus:outline-none focus:border-[#8B5A2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase font-mono text-slate-500 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+260 977 889900"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-850 focus:outline-none focus:border-[#8B5A2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase font-mono text-slate-500 mb-1">
                        SADC Target Country *
                      </label>
                      <div className="relative">
                        <Globe2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="Zambia, Malawi, Angola..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-850 focus:outline-none focus:border-[#8B5A2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase font-mono text-slate-500 mb-1">
                        Custom Destination Hub (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.deliveryPort}
                        onChange={(e) => setFormData({ ...formData, deliveryPort: e.target.value })}
                        placeholder="e.g. Ndola Central / Chipata Hub"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-850 focus:outline-none focus:border-[#8B5A2B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase font-mono text-slate-500 mb-1">
                      Specifications, Dimensions or Logistics Instructions
                    </label>
                    <div className="relative">
                      <FileText className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <textarea
                        rows={3}
                        value={formData.projectNotes}
                        onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                        placeholder="E.g., Require 18mm high density boards, double-bench school desks with graphite frames, specific copy ream thickness..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-850 focus:outline-none focus:border-[#8B5A2B]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B1220] hover:bg-[#8B5A2B] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Board Director</span>
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
