import React from 'react';
import { MapPin, Globe, Compass, Radio } from 'lucide-react';

export default function SempornaWorldMap() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="glass-panel-amber rounded-3xl p-8 sm:p-14 border border-amber-500/30 relative overflow-hidden text-center space-y-8">
        
        {/* Radar Map Graphic Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-amber-400 animate-ping" />
          <div className="w-[350px] h-[350px] rounded-full border border-amber-400/60" />
          <div className="w-[200px] h-[200px] rounded-full border border-amber-400/40" />
        </div>

        <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
          <div className="text-amber-500 text-xs font-mono-custom tracking-widest uppercase inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Globe className="w-3.5 h-3.5" />
            Global Vision & Cultural Identity
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            FROM <span className="text-amber-400">SEMPORNA</span> <br />
            TO THE WORLD
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Our roots are anchored in the waters of Semporna, Sabah. Our ambition is to share the distinct sound, language, and original spirit of Borneo with listeners across borders.
          </p>
        </div>

        {/* Origin & Destination Nodes */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center font-bold">
              01
            </div>
            <div className="font-display font-bold text-xl text-white">Semporna, Sabah</div>
            <div className="text-xs font-mono-custom text-amber-400">04°28'N 118°36'E · ORIGIN</div>
            <p className="text-xs text-slate-400 font-light">Cultural home, songwriting roots, coastal rhythm.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-white/10 text-slate-300 mx-auto flex items-center justify-center font-bold">
              02
            </div>
            <div className="font-display font-bold text-xl text-white">Borneo Collective</div>
            <div className="text-xs font-mono-custom text-slate-400">Sabahan Vocal Partners</div>
            <p className="text-xs text-slate-400 font-light">Multilingual collaborations across Sabah.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-white/10 text-slate-300 mx-auto flex items-center justify-center font-bold">
              03
            </div>
            <div className="font-display font-bold text-xl text-white">Regional & Global</div>
            <div className="text-xs font-mono-custom text-slate-400">Digital Streaming</div>
            <p className="text-xs text-slate-400 font-light">Reaching listeners across Asia & international stages.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
