import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Send, CheckCircle, FileText } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [appliedJobId, setAppliedJobId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const jobOpenings = [
    {
      id: 'job-01',
      title: 'CNC Machining Center Operator',
      department: 'Technical Production',
      location: 'Lusaka Workshop, Zambia',
      type: 'Full-time (On-Site)',
      salary: 'Competitive Regional Scale',
      desc: 'Seeking a skilled operator to configure, load, and run our computer-controlled 3-axis CNC router nesting stations.',
      requirements: [
        'At least 2 years operating industrial wood CNC nesting or milling machines',
        'Familiarity with interpreting CAD/CAM patterns or G-code setups',
        'Strong knowledge of wood density tolerances (MDF, Plywood, Pine)',
        'Impeccable focus on workshop safety regulations'
      ]
    },
    {
      id: 'job-02',
      title: 'SADC Logistics & Cargo Dispatcher',
      department: 'Logistics & Supply Chain',
      location: 'Lusaka Headquarters, Zambia',
      type: 'Full-time (On-Site / Hybrid)',
      salary: 'Negotiable based on experience',
      desc: 'Manage bulk container dispatch and regional customs clearance corridors across SADC borders for wooden boards and timber products.',
      requirements: [
        'Diploma or Degree in Supply Chain, Logistics, or Business Administration',
        'Proven expertise processing cross-border ZRA and SADC customs documentation',
        'Strong coordination skills with regional haulage and shipping fleets',
        'Minimum 3 years in a heavy industrial distribution environment'
      ]
    },
    {
      id: 'job-03',
      title: 'Quality Assurance Timber Auditor',
      department: 'Quality & Compliance',
      location: 'Central Depot, Ndola',
      type: 'Full-time (On-Site)',
      salary: 'Attractive salary package',
      desc: 'Verify moisture levels, dimensional accuracy, glue-line bonding strength, and edge banding quality across our wholesale board shipments.',
      requirements: [
        'Certificate or Diploma in Wood Technology, Carpentry, or Quality Engineering',
        'Extremely high attention to detail (zero-tolerance deviation checks)',
        'Experience using calibrated moisture meters and precision calipers',
        'Knowledge of regional standards (Zambian BOZ / SABS equivalent)'
      ]
    }
  ];

  const handleApplySubmit = (e: React.FormEvent, jobId: string) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email to proceed.');
      return;
    }
    setAppliedJobId(jobId);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 100);
  };

  return (
    <div className="font-sans text-slate-800 bg-[#F8FAFC] pb-24">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#B58E3D]/10 text-[#B58E3D] text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Corporate Employment
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 font-display">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58E3D] to-[#D4AF37]">Opportunities</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Join the team at SMARTAGE INNOVATIONS LTD. We provide stable, high-performance manufacturing, logistical, and compliance roles that foster regional SADC growth and skill development.
          </p>
        </div>
      </section>

      {/* Career Openings */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        {jobOpenings.map((job) => {
          const isApplied = appliedJobId === job.id;

          return (
            <div
              key={job.id}
              className="bg-white rounded-3xl border border-slate-150 p-6 sm:p-8 hover:shadow-md transition-all space-y-6"
            >
              {/* Header metadata */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B58E3D]">
                    {job.department}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">{job.title}</h2>
                </div>
                <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {job.type}
                </span>
              </div>

              {/* Description & Requirements */}
              <div className="space-y-4 text-xs sm:text-sm">
                <p className="text-slate-600 leading-relaxed font-normal">
                  {job.desc}
                </p>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-500 text-xs sm:text-sm pl-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="leading-relaxed">{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Meta indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-slate-300" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <DollarSign className="w-4 h-4 text-slate-300" />
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Apply Simulated Form */}
              <div className="pt-4 border-t border-slate-50">
                {isApplied ? (
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center space-x-3 text-emerald-800 text-xs sm:text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Application received! Our HR team will reach out to you via email shortly.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => handleApplySubmit(e, job.id)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold uppercase text-slate-400">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#B58E3D]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold uppercase text-slate-400">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#B58E3D]"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold uppercase text-slate-400">Cover Note / Brief Pitch</label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Explain why you are the perfect candidate for this position..."
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#B58E3D]"
                      />
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-[#111111] hover:bg-[#B58E3D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center space-x-1.5 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Application</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
