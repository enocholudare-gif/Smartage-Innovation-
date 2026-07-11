import React, { useState } from 'react';
import { X, Calculator, RefreshCw, Layers, Scale } from 'lucide-react';

interface UnitCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UnitCalculatorModal: React.FC<UnitCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Volume state
  const [calcType, setCalcType] = useState<'volume' | 'weight'>('volume');

  // Volume inputs (mm)
  const [lengthMm, setLengthMm] = useState<number>(2440);
  const [widthMm, setWidthMm] = useState<number>(1220);
  const [thicknessMm, setThicknessMm] = useState<number>(18);
  const [pieces, setPieces] = useState<number>(100);

  // Density selection for weight calculation
  const [boardDensity, setBoardDensity] = useState<number>(750); // kg/m3 (High-Density MDF)

  if (!isOpen) return null;

  // Calculations
  // Volume per piece in m3 = (L * W * T) / 1,000,000,000
  const singleVolM3 = (lengthMm * widthMm * thicknessMm) / 1000000000;
  const totalVolM3 = singleVolM3 * pieces;
  // Board Feet = Total m3 * 423.776
  const totalBoardFeet = totalVolM3 * 423.776;
  // Total weight in kg = totalVolM3 * boardDensity
  const totalWeightKg = totalVolM3 * boardDensity;
  const totalWeightTons = totalWeightKg / 1000;

  const boardSubstrates = [
    { name: 'High-Density MDF Board (750 kg/m³)', density: 750 },
    { name: 'Korean DuPont Fire-Rated Core (820 kg/m³)', density: 820 },
    { name: 'Standard Melamine Particleboard (660 kg/m³)', density: 660 },
    { name: 'Birch Waterproof Marine Plywood (680 kg/m³)', density: 680 },
    { name: 'Premium Veneer Joinery Board (710 kg/m³)', density: 710 },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6 flex justify-center items-center font-sans">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-100">
        {/* Header */}
        <div className="p-5 bg-[#0B1220] text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#8B5A2B] flex items-center justify-center text-white">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-extrabold font-display uppercase tracking-tight">SAIL Corporate Spec Calculator</h3>
              <p className="text-[11px] text-slate-300 font-mono">
                Calculate board dimensions, volume, and shipment weight
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex space-x-2">
          <button
            onClick={() => setCalcType('volume')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              calcType === 'volume'
                ? 'bg-[#8B5A2B] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Volume Dimensions (m³)</span>
          </button>
          <button
            onClick={() => setCalcType('weight')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              calcType === 'weight'
                ? 'bg-[#8B5A2B] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Logistics Cargo Weight</span>
          </button>
        </div>

        {/* Inputs */}
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-500 font-mono mb-1">
                Length (mm)
              </label>
              <input
                type="number"
                value={lengthMm}
                onChange={(e) => setLengthMm(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-[#8B5A2B]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-500 font-mono mb-1">
                Width (mm)
              </label>
              <input
                type="number"
                value={widthMm}
                onChange={(e) => setWidthMm(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-[#8B5A2B]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-500 font-mono mb-1">
                Thickness (mm)
              </label>
              <input
                type="number"
                value={thicknessMm}
                onChange={(e) => setThicknessMm(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-[#8B5A2B]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-500 font-mono mb-1">
                Pieces / Boards
              </label>
              <input
                type="number"
                value={pieces}
                onChange={(e) => setPieces(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-[#8B5A2B]"
              />
            </div>
          </div>

          {calcType === 'weight' && (
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-500 font-mono mb-1">
                Select Sourced Substrate Material Density
              </label>
              <select
                value={boardDensity}
                onChange={(e) => setBoardDensity(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#8B5A2B]"
              >
                {boardSubstrates.map((item) => (
                  <option key={item.name} value={item.density}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Results Box */}
          <div className="bg-[#0B1220] text-white p-5 rounded-2xl space-y-4 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                Calculated Output Summary
              </span>
              <RefreshCw className="w-3.5 h-3.5 text-[#D97706]" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-mono">
                  Total Volume (m³)
                </span>
                <span className="text-xl font-bold font-mono text-[#D97706]">
                  {totalVolM3.toFixed(3)} m³
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-mono">
                  Board Feet (FBM)
                </span>
                <span className="text-xl font-bold font-mono text-white">
                  {Math.round(totalBoardFeet).toLocaleString()} BF
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-mono">
                  Cargo Shipment Weight
                </span>
                <span className="text-base font-bold font-mono text-slate-200">
                  {totalWeightKg.toFixed(1)} kg ({totalWeightTons.toFixed(2)} Tons)
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-mono">
                  Single Board Volume
                </span>
                <span className="text-base font-bold font-mono text-slate-200">
                  {singleVolM3.toFixed(5)} m³
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <span className="text-[9px] text-slate-400 font-mono uppercase">
            SAIL Logistics calibrations approved by SADC Transport Authority
          </span>
          <button
            onClick={onClose}
            className="bg-[#0B1220] hover:bg-[#8B5A2B] text-white px-5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
