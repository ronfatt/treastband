import React, { useEffect, useState } from 'react';

interface DigitalHUDProps {
  activeArtistIndex?: number;
  totalArtists?: number;
}

export default function DigitalHUD({ activeArtistIndex = 0, totalArtists = 9 }: DigitalHUDProps) {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollPercent(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 p-4 lg:p-8 flex flex-col justify-between select-none text-[10px] font-mono-custom tracking-widest text-slate-500/70 uppercase">
      {/* Top HUD Line */}
      <div className="flex justify-between items-center">
        <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 text-amber-400/80">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
          <span>TREAST // SEMPORNA SABAH · 06°N BORNEO</span>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 text-slate-400">
          <span>AUDIO ENGINE: ONLINE</span>
          <span className="text-amber-500">24-BIT / 48KHZ</span>
        </div>
      </div>

      {/* Bottom HUD Line */}
      <div className="flex justify-between items-end">
        <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          <span className="text-slate-400">SYS SCROLL:</span>
          <span className="text-amber-400 font-bold">{String(scrollPercent).padStart(3, '0')}%</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          <span className="text-slate-400 font-bold">ACTIVE ARTIST:</span>
          <span className="text-amber-400 font-bold">
            {String(activeArtistIndex + 1).padStart(2, '0')} / {String(totalArtists).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}
