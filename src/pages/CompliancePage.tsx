import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  FileCheck,
  ExternalLink,
  Lock,
  Download,
} from 'lucide-react';
import { complianceCertificates } from '../data/mockData';
import { PageId } from '../types';

interface CompliancePageProps {
  onNavigate: (page: PageId) => void;
}

export const CompliancePage: React.FC<CompliancePageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC]">
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Audit & Tender Verified
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 font-display">
            Quality & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">Corporate Compliance</span>
          </h1>

          <p className="text-base text-slate-500 max-w-2xl leading-relaxed font-normal">
            As a trusted national partner, Smart Age Innovations Limited is fully registered, tax-compliant, pension-insured, and certified for public and private sector tenders.
          </p>
        </div>
      </section>

      {/* CORE STATUTORY PAPERS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Text Intro Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">
                Corporate Integrity
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display leading-tight">
                Flawless Regulatory Credentials
              </h2>
            </div>
            
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              We understand that corporate procurement teams and government tender boards demand absolute compliance. Under-the-table procurement is a risk we never take. Smart Age maintains active, up-to-date filings with PACRA, ZRA, and NAPSA.
            </p>

            <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl space-y-4">
              <div className="flex items-center space-x-3 text-emerald-800 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Verified Active Supplier Status</span>
              </div>
              <p className="text-emerald-700 text-xs leading-relaxed">
                Our TPIN and ZPPA registrations are refreshed annually to prevent any delays on major bulk materials, timber, or institutional furniture supply contracts.
              </p>
              <button
                onClick={() => onNavigate('downloads')}
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl uppercase tracking-wider transition-colors shadow-sm"
              >
                Go to Document Downloads
              </button>
            </div>
          </div>

          {/* Certificates list column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {complianceCertificates.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all relative overflow-hidden"
                >
                  {/* Status Indicator line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />

                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-emerald-600" />
                      </div>
                      
                      <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-100">
                        {cert.status}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">{cert.title}</h3>
                      <p className="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wide font-mono">{cert.authority}</p>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 font-bold">
                      ID: {cert.docNumber}
                    </span>
                    <span className="text-emerald-600 font-bold text-[10px] uppercase">
                      {cert.validUntil}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE PROCESS & TRUST BUILDER */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-bold text-base text-slate-100">Absolute Legal Safety</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We operate strictly under Pacra registration and ZRA guidelines, ensuring clean compliance audits for both our private corporate partners and public boards.
            </p>
          </div>

          <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-bold text-base text-slate-100">Certified SADC Logistics</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our regional wood materials, hardware panels, and PPE supplies comply with SADC certificates of origin for flawless cross-border transit.
            </p>
          </div>

          <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-bold text-base text-slate-100">Transparent Tender Bidding</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              With pre-cleared ZPPA credentials, our company profile, tax paperwork, and financial records are ready for rapid integration into any government portal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
