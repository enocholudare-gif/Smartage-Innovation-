import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Zap,
  Play,
  RotateCcw,
  Sliders,
  Terminal,
  Activity,
  Maximize2,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

// Predefined mock cutting items for the nesting demonstration
interface CuttingItem {
  id: string;
  name: string;
  width: number;
  height: number;
  color: string;
}

const SAMPLE_ITEMS: CuttingItem[] = [
  { id: '1', name: 'Kitchen Counter Front', width: 120, height: 60, color: 'bg-amber-600' },
  { id: '2', name: 'Cabinet Side Panel A', width: 90, height: 50, color: 'bg-amber-700' },
  { id: '3', name: 'Cabinet Side Panel B', width: 90, height: 50, color: 'bg-amber-700' },
  { id: '4', name: 'Drawer Face Upper', width: 40, height: 25, color: 'bg-amber-500' },
  { id: '5', name: 'Drawer Face Lower', width: 40, height: 25, color: 'bg-amber-500' },
  { id: '6', name: 'Shelving Board Internal', width: 80, height: 35, color: 'bg-stone-500' },
  { id: '7', name: 'Under-sink Accent Strip', width: 110, height: 15, color: 'bg-orange-600' },
];

export const SmartFactoryHub: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<'nesting' | 'telemetry'>('nesting');
  const [wasteRate, setWasteRate] = useState<number>(18.5); // Starts with default high manual waste
  const [boardsNeeded, setBoardsNeeded] = useState<number>(3);
  const [logs, setLogs] = useState<string[]>([
    'System Initialized. Awaiting CAD/CAM XML Cutting Lists...',
    'All 4 SADC fabrication units connected to SAIL-AI cloud.',
    'Ready for automated nesting simulation.'
  ]);
  const [selectedMachine, setSelectedMachine] = useState<string>('SmartCut 5200');

  // Fluctuating machinery values
  const [telemetry, setTelemetry] = useState({
    sawLoad: 42,
    sawTemp: 44,
    sawSpeed: 1800,
    edgeLoad: 28,
    edgeTemp: 190, // PUR heat
    edgeSpeed: 18,
    cncLoad: 55,
    cncTemp: 38,
    cncSpeed: 18000,
    scannerLoad: 12,
    scannerTemp: 29,
    scannerSpeed: 95, // conveyor percentage
  });

  // Periodically fluctuate telemetry slightly to make it feel alive
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => ({
        sawLoad: Math.max(15, Math.min(85, prev.sawLoad + (Math.random() > 0.5 ? 2 : -2))),
        sawTemp: Math.max(40, Math.min(55, prev.sawTemp + (Math.random() > 0.5 ? 0.5 : -0.5))),
        sawSpeed: Math.max(1750, Math.min(1850, prev.sawSpeed + Math.floor((Math.random() - 0.5) * 10))),
        edgeLoad: Math.max(10, Math.min(60, prev.edgeLoad + (Math.random() > 0.5 ? 3 : -3))),
        edgeTemp: Math.max(185, Math.min(195, prev.edgeTemp + (Math.random() > 0.5 ? 1 : -1))),
        edgeSpeed: Math.max(16, Math.min(22, prev.edgeSpeed + (Math.random() > 0.5 ? 0.5 : -0.5))),
        cncLoad: Math.max(20, Math.min(92, prev.cncLoad + (Math.random() > 0.5 ? 4 : -4))),
        cncTemp: Math.max(35, Math.min(48, prev.cncTemp + (Math.random() > 0.5 ? 0.4 : -0.4))),
        cncSpeed: Math.max(17800, Math.min(18200, prev.cncSpeed + Math.floor((Math.random() - 0.5) * 50))),
        scannerLoad: Math.max(5, Math.min(25, prev.scannerLoad + (Math.random() > 0.5 ? 1 : -1))),
        scannerTemp: Math.max(25, Math.min(32, prev.scannerTemp + (Math.random() > 0.5 ? 0.2 : -0.2))),
        scannerSpeed: Math.max(90, Math.min(100, prev.scannerSpeed + (Math.random() > 0.5 ? 1 : -1))),
      }));

      // Add rare log updates
      if (Math.random() > 0.7) {
        const testLogs = [
          'IntelScan: LiDAR surface profiling active. Density variance: 1.2%.',
          'FlexBend-PUR: Edge Bending adhesive tank level: 84.6% - Optimal.',
          'SmartCut-5200: Pneumatic side alignment cycle completed.',
          'Zenith-CNC: Spindle heat within ideal operating threshold (38°C).',
          'SAIL-AI: Dynamic fiber orientation matched successfully with CAD blueprint.',
          'Telemetry: Core network latency: 4ms. High-speed automation synchronized.',
        ];
        const newLog = `[${new Date().toLocaleTimeString()}] ${testLogs[Math.floor(Math.random() * testLogs.length)]}`;
        setLogs((prev) => [newLog, ...prev.slice(0, 8)]);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Run the AI nesting simulation
  const handleOptimize = () => {
    if (isOptimizing) return;
    setIsOptimizing(true);
    setOptimizationProgress(0);
    setLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] SAIL-AI: Initiating heuristic cutting list analysis for 7 bespoke cabinetry panels...`,
      ...prev,
    ]);

    const interval = setInterval(() => {
      setOptimizationProgress((prev) => {
        const next = prev + 5;
        if (next === 25) {
          setLogs((l) => [`[${new Date().toLocaleTimeString()}] SAIL-AI: Rotating panels to match board grain patterns (eucalyptus wood fibers)...`, ...l]);
        } else if (next === 50) {
          setLogs((l) => [`[${new Date().toLocaleTimeString()}] SAIL-AI: Executing multi-shape packing algorithm to minimize offcuts...`, ...l]);
        } else if (next === 75) {
          setLogs((l) => [`[${new Date().toLocaleTimeString()}] SAIL-AI: Sub-millimeter laser path calibration verified. Final checks pass.`, ...l]);
        } else if (next >= 100) {
          clearInterval(interval);
          setIsOptimizing(false);
          setWasteRate(2.4); // Drastically reduced waste
          setBoardsNeeded(2); // Reduced raw boards used
          setLogs((l) => [
            `[${new Date().toLocaleTimeString()}] SAIL-AI COMPLETED: Successfully optimized sheet nesting! Waste reduced from 18.5% to 2.4%. Saved 1 full raw board. Ready for automated saw dispatch.`,
            ...l,
          ]);
          return 100;
        }
        return next;
      });
    }, 150);
  };

  const resetOptimization = () => {
    setWasteRate(18.5);
    setBoardsNeeded(3);
    setOptimizationProgress(0);
    setLogs((l) => [`[${new Date().toLocaleTimeString()}] System reset. Reloaded standard manual-aligned board specs.`, ...l]);
  };

  return (
    <div id="ai-smart-factory" className="w-full bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-left mt-12">
      {/* Top Banner with status */}
      <div className="bg-slate-950 p-4 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
              SAIL Smart Factory AI Active — Lusaka Hub
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black tracking-tight font-display text-slate-100 uppercase">
            SAIL AI Smart Factory Hub
          </h3>
        </div>

        {/* Tab Toggle Buttons */}
        <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 shrink-0 self-stretch sm:self-auto">
          <button
            onClick={() => setActiveTab('nesting')}
            className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'nesting'
                ? 'bg-[#8B5A2B] text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Nesting Optimizer
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'telemetry'
                ? 'bg-[#8B5A2B] text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live IoT Telemetry
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {activeTab === 'nesting' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left controls & status info */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-widest font-mono">
                  Nesting Heuristics Engine
                </span>
                <h4 className="text-base font-bold font-display text-slate-200">
                  SADC's Smartest Timber Layout Slicer
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Normally, manual board alignment leaves large offcut waste (averaging 18-25%). Our AI engine rotates, groups, and clusters customized shapes to fit perfectly on raw boards.
                </p>

                {/* Waste Stats */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left">
                    <span className="text-[9px] text-slate-400 font-mono uppercase block">Raw Timber Waste</span>
                    <span className={`text-xl font-mono font-black ${wasteRate > 5 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {isOptimizing ? 'Calculating...' : `${wasteRate}%`}
                    </span>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left">
                    <span className="text-[9px] text-slate-400 font-mono uppercase block">SADC Sheet Usage</span>
                    <span className="text-xl font-mono font-black text-amber-400">
                      {isOptimizing ? 'Compressing...' : `${boardsNeeded} Boards`}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                {isOptimizing && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>OPTIMIZING TIMBER GRAIN ALIGNMENT...</span>
                      <span>{optimizationProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#8B5A2B] to-[#D97706] h-full transition-all duration-150"
                        style={{ width: `${optimizationProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2 pt-4">
                <button
                  disabled={isOptimizing}
                  onClick={handleOptimize}
                  className="w-full py-3 bg-[#8B5A2B] hover:bg-[#704823] disabled:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 text-[#D97706]" />
                  <span>{isOptimizing ? 'Calibrating Multi-Axis Cuts...' : 'Run AI Nesting Optimization'}</span>
                </button>

                {wasteRate < 5 && !isOptimizing && (
                  <button
                    onClick={resetOptimization}
                    className="w-full py-2 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800 font-mono text-[10px] uppercase rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Simulation</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right: Board preview visualization */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-slate-400">
                    VIRTUAL CARDBOARD REPRESENTATION (2750mm x 1830mm)
                  </span>
                  <span className="text-[9px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">
                    State: {wasteRate > 5 ? 'Standard Manual Slicing' : 'AI Optimal Packed Pattern'}
                  </span>
                </div>

                {/* Simulated wood plate */}
                <div className="aspect-video w-full rounded-2xl bg-amber-900/10 border-2 border-dashed border-slate-700 p-4 relative overflow-hidden flex flex-col justify-between">
                  {/* Beautiful wooden background lines */}
                  <div className="absolute inset-0 bg-wood-pattern opacity-10 pointer-events-none" />

                  {wasteRate > 5 ? (
                    // Unoptimized Manual layout: sparse, overlapping or spaced with high gaps
                    <div className="w-full h-full relative">
                      {/* Panel 1 */}
                      <div className="absolute top-2 left-2 w-1/3 h-1/2 bg-[#8B5A2B]/40 border border-amber-600 rounded-lg flex flex-col justify-center p-2 text-left">
                        <span className="text-[10px] font-bold text-white uppercase truncate">Cabinet Panel A</span>
                        <span className="text-[8px] font-mono text-slate-300">900x500mm</span>
                      </div>
                      {/* Panel 2 */}
                      <div className="absolute top-2 right-4 w-1/3 h-1/2 bg-[#8B5A2B]/40 border border-amber-600 rounded-lg flex flex-col justify-center p-2 text-left">
                        <span className="text-[10px] font-bold text-white uppercase truncate">Cabinet Panel B</span>
                        <span className="text-[8px] font-mono text-slate-300">900x500mm</span>
                      </div>
                      {/* Panel 3 */}
                      <div className="absolute bottom-2 left-2 w-1/2 h-1/3 bg-amber-800/40 border border-amber-600 rounded-lg flex flex-col justify-center p-2 text-left">
                        <span className="text-[10px] font-bold text-white uppercase truncate">Kitchen Counter</span>
                        <span className="text-[8px] font-mono text-slate-300">1200x600mm</span>
                      </div>
                      {/* High unoptimized blank zones representing waste */}
                      <div className="absolute bottom-4 right-10 w-24 h-12 bg-rose-500/20 border-2 border-rose-500/30 border-dotted rounded-lg flex items-center justify-center">
                        <span className="text-[8px] font-mono font-bold text-rose-400">18.5% CUT WASTAGE</span>
                      </div>
                    </div>
                  ) : (
                    // Beautiful AI Nesting layout: perfectly organized, space packed tight
                    <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-2 relative">
                      {/* Perfectly packed block grid */}
                      <div className="col-span-5 row-span-4 bg-emerald-600/30 border-2 border-emerald-500/50 rounded-xl flex flex-col justify-center p-2 text-left shadow-lg">
                        <span className="text-[10px] font-bold text-emerald-300 uppercase truncate">Kitchen Counter</span>
                        <span className="text-[8px] font-mono text-emerald-400">1200 x 600 mm</span>
                      </div>
                      <div className="col-span-4 row-span-3 bg-emerald-700/30 border-2 border-emerald-500/50 rounded-xl flex flex-col justify-center p-2 text-left">
                        <span className="text-[10px] font-bold text-emerald-300 uppercase truncate">Cabinet Side A</span>
                        <span className="text-[8px] font-mono text-emerald-400">900 x 500 mm</span>
                      </div>
                      <div className="col-span-3 row-span-3 bg-emerald-700/30 border-2 border-emerald-500/50 rounded-xl flex flex-col justify-center p-2 text-left">
                        <span className="text-[10px] font-bold text-emerald-300 uppercase truncate">Cabinet Side B</span>
                        <span className="text-[8px] font-mono text-emerald-400">900 x 500 mm</span>
                      </div>

                      <div className="col-span-4 row-span-3 bg-amber-600/20 border-2 border-emerald-500/40 rounded-xl flex flex-col justify-center p-2 text-left">
                        <span className="text-[10px] font-bold text-emerald-300 truncate">Shelving Internal</span>
                        <span className="text-[8px] font-mono text-emerald-400">800 x 350 mm</span>
                      </div>
                      <div className="col-span-3 row-span-2 bg-orange-600/20 border-2 border-emerald-500/40 rounded-xl flex flex-col justify-center p-1 text-left">
                        <span className="text-[9px] font-bold text-emerald-300 truncate">Sill Accent Strip</span>
                        <span className="text-[8px] font-mono text-emerald-400">1100 x 150 mm</span>
                      </div>
                      <div className="col-span-2 row-span-2 bg-stone-500/20 border-2 border-emerald-500/40 rounded-xl flex flex-col justify-center p-1 text-left">
                        <span className="text-[9px] font-bold text-emerald-300 truncate font-mono">Drawer B</span>
                        <span className="text-[7px] font-mono text-emerald-400">400x250</span>
                      </div>
                      <div className="col-span-3 row-span-2 bg-stone-500/20 border-2 border-emerald-500/40 rounded-xl flex flex-col justify-center p-1 text-left">
                        <span className="text-[9px] font-bold text-emerald-300 truncate font-mono">Drawer A</span>
                        <span className="text-[7px] font-mono text-emerald-400">400x250</span>
                      </div>

                      {/* Ultra small waste line */}
                      <div className="col-span-12 row-span-1 bg-emerald-950/40 border border-dashed border-emerald-500/30 rounded flex items-center justify-between px-4 text-[8.5px] text-emerald-400 font-mono">
                        <span>OPTIMAL GRAIN FLOW DETECTED</span>
                        <span className="font-bold">AI Waste: 2.4% (Absolute Minimal)</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Panel Items count */}
              <div className="flex flex-wrap gap-2">
                <span className="text-[9px] font-mono text-slate-400 uppercase py-1">Active Cutting Queue:</span>
                {SAMPLE_ITEMS.map((item) => (
                  <span
                    key={item.id}
                    className="px-2.5 py-1 bg-slate-950 rounded-lg text-[10px] font-mono border border-slate-800 text-slate-300 flex items-center space-x-1"
                  >
                    <span className="w-2 h-2 rounded bg-amber-500 inline-block" />
                    <span>{item.name} ({item.width}x{item.height}cm)</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Telemetry List */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-widest font-mono">
                Machine IoT Sensors
              </span>
              <h4 className="text-base font-bold font-display text-slate-200">
                Lusaka Automated Production Line
              </h4>

              <div className="space-y-2">
                {/* Machine 1 */}
                <div
                  onClick={() => setSelectedMachine('SmartCut 5200')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedMachine === 'SmartCut 5200'
                      ? 'bg-slate-950 border-[#8B5A2B]'
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-200">SmartCut 5200 Panel Saw</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono rounded">
                      Active Cutting
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 text-left">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Work Load</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.sawLoad}%</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Blades Temp</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.sawTemp}°C</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Arbor Speed</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.sawSpeed} RPM</span>
                    </div>
                  </div>
                </div>

                {/* Machine 2 */}
                <div
                  onClick={() => setSelectedMachine('FlexBend PUR')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedMachine === 'FlexBend PUR'
                      ? 'bg-slate-950 border-[#8B5A2B]'
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-200">FlexBend PUR Edge Bending Machine</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono rounded">
                      PUR Gluing Active
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 text-left">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Track Load</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.edgeLoad}%</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Glue Pot Temp</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.edgeTemp}°C</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Feed Speed</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.edgeSpeed} m/min</span>
                    </div>
                  </div>
                </div>

                {/* Machine 3 */}
                <div
                  onClick={() => setSelectedMachine('Zenith AI-CNC')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedMachine === 'Zenith AI-CNC'
                      ? 'bg-slate-950 border-[#8B5A2B]'
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-200">Zenith AI-CNC Milling</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono rounded">
                      5-Axis Milling
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 text-left">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Spindle Load</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.cncLoad}%</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Core Temp</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.cncTemp}°C</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Rotary Speed</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.cncSpeed} RPM</span>
                    </div>
                  </div>
                </div>

                {/* Machine 4 */}
                <div
                  onClick={() => setSelectedMachine('IntelScan LiDAR')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedMachine === 'IntelScan LiDAR'
                      ? 'bg-slate-950 border-[#8B5A2B]'
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-200">IntelScan LiDAR Quality</span>
                    <span className="px-2 py-0.5 bg-[#D97706]/10 text-[#D97706] text-[9px] font-mono rounded">
                      Scanning Conveyor
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 text-left">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Laser Pulse</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.scannerLoad}%</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Lens Temp</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.scannerTemp}°C</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-mono block">Belt Speed</span>
                      <span className="text-xs font-mono font-bold text-slate-300">{telemetry.scannerSpeed}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Telemetry Terminal Console */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center space-x-1">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    <span>SAIL Smart Factory AI Terminal Feed</span>
                  </span>
                  <span className="text-[9px] bg-slate-950 px-2.5 py-1 text-slate-400 font-mono border border-slate-800 rounded">
                    Rate: 1.2 GB/s data telemetry
                  </span>
                </div>

                {/* Terminal code layout */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 h-80 overflow-y-auto space-y-2 flex flex-col-reverse text-left scrollbar-thin scrollbar-thumb-slate-800">
                  {logs.map((log, index) => {
                    let colorClass = 'text-slate-300';
                    if (log.includes('COMPLETED')) {
                      colorClass = 'text-emerald-400 font-bold';
                    } else if (log.includes('SAIL-AI:')) {
                      colorClass = 'text-sky-400';
                    } else if (log.includes('IntelScan')) {
                      colorClass = 'text-amber-400';
                    } else if (log.includes('FlexBend')) {
                      colorClass = 'text-purple-400';
                    }
                    return (
                      <div key={index} className={`leading-relaxed border-b border-slate-900/30 pb-1.5 ${colorClass}`}>
                        {log}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Simulated AI advice block based on selected machine */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start space-x-3 text-left">
                <Cpu className="w-8 h-8 text-[#D97706] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-[11px] font-bold font-mono uppercase text-[#D97706]">
                    SAIL AI Copilot Diagnostic ({selectedMachine})
                  </h5>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    {selectedMachine === 'SmartCut 5200' && (
                      'Blades and arbor temperatures are operating inside safe margins. Automated panel layouts have minimized vertical stroke actions, extending blade lifespans by 14%.'
                    )}
                    {selectedMachine === 'FlexBend PUR' && (
                      'The glue pot is hot and ready. The edge bending machine is running smoothly, sealing board edges perfectly against water.'
                    )}
                    {selectedMachine === 'Zenith AI-CNC' && (
                      '5-axis contour milling is running with active vector smoothing. Dynamic material resonance control has minimized cutter vibration by 22% on solid teak panels.'
                    )}
                    {selectedMachine === 'IntelScan LiDAR' && (
                      'LiDAR continuous surface profiling indicates solid board fibers with no structural air pocket voids. Average density exceeds standard SADC load capacity indices.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
