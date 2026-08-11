import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles, 
  Disc, 
  MapPin, 
  ArrowRight, 
  Users,
  ShieldCheck
} from 'lucide-react';
import { FEATURED_ARTISTS, FeaturedArtist } from '../data/treastDatabase';
import MagneticButton from './MagneticButton';

interface ArtistSelector3DProps {
  onSelectArtist: (artist: FeaturedArtist) => void;
  onSelectVideo: (artist: FeaturedArtist) => void;
  onActiveIndexChange?: (index: number) => void;
}

export default function ArtistSelector3D({ 
  onSelectArtist, 
  onSelectVideo,
  onActiveIndexChange
}: ArtistSelector3DProps) {
  const [filterType, setFilterType] = useState<'all' | 'core' | 'featured'>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const isAnimatingRef = useRef(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Filter musicians based on active tab
  const displayArtists = filterType === 'all' 
    ? FEATURED_ARTISTS 
    : FEATURED_ARTISTS.filter(a => a.artistType === filterType);

  const totalArtists = displayArtists.length;
  const activeArtist = displayArtists[activeIndex] || displayArtists[0];

  // Reset active index when filter tab changes
  const handleFilterTab = (type: 'all' | 'core' | 'featured') => {
    setFilterType(type);
    setActiveIndex(0);
    setIsPlayingAudio(false);
  };

  // Notify active index change to parent HUD
  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(activeIndex);
    }
  }, [activeIndex, onActiveIndexChange]);

  const changeArtist = (newIndex: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    
    // Stop audio preview on change
    setIsPlayingAudio(false);

    let wrappedIndex = newIndex;
    if (wrappedIndex < 0) wrappedIndex = totalArtists - 1;
    if (wrappedIndex >= totalArtists) wrappedIndex = 0;

    setActiveIndex(wrappedIndex);

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 320);
  };

  const handleNext = () => changeArtist(activeIndex + 1);
  const handlePrev = () => changeArtist(activeIndex - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const rect = stageRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, totalArtists]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 30) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      id="artists" 
      className="relative min-h-screen py-24 px-4 overflow-hidden bg-gradient-to-b from-[#050608] via-[#090b10] to-[#050608] flex flex-col justify-between border-y border-white/5 select-none"
    >
      {/* ------------------- HUGE BACKGROUND TYPOGRAPHY MORPH ------------------- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] overflow-hidden z-0">
        <h2 key={activeArtist.id} className="font-display font-black text-[18vw] uppercase tracking-tighter text-white whitespace-nowrap animate-pulse transition-all duration-700">
          {activeArtist.name}
        </h2>
      </div>

      {/* Ambient background glowing light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ------------------- SECTION HEADER & FILTER TABS ------------------- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center space-y-4">
        <div className="text-amber-500 text-xs font-mono-custom tracking-widest uppercase inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          Voices of Treast · 3D Artist Stage
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
          VOICES OF <span className="text-amber-400">TREAST</span>
        </h2>
        <p className="text-slate-400 font-light text-xs sm:text-sm max-w-xl mx-auto">
          Explore the core musicians and vocal partners shaping the sound of Treast Band. Click any card or filter tab to rotate the 3D stage.
        </p>

        {/* Stage Filter Tabs */}
        <div className="flex justify-center gap-2 pt-2">
          <div className="glass-panel p-1.5 rounded-2xl border border-white/10 flex gap-2">
            <button
              onClick={() => handleFilterTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono-custom tracking-wider transition-all ${
                filterType === 'all' 
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ALL ARTISTS (13)
            </button>
            <button
              onClick={() => handleFilterTab('core')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono-custom tracking-wider transition-all ${
                filterType === 'core' 
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CORE BAND (4)
            </button>
            <button
              onClick={() => handleFilterTab('featured')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono-custom tracking-wider transition-all ${
                filterType === 'featured' 
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              VOCALISTS (9)
            </button>
          </div>
        </div>

        {/* Singer Avatar Quick Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-3 max-w-4xl mx-auto">
          {displayArtists.map((artist, idx) => (
            <button
              key={artist.id}
              onClick={() => changeArtist(idx)}
              data-cursor="SELECT"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono-custom transition-all duration-300 ${
                idx === activeIndex 
                  ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/30 scale-105' 
                  : 'bg-black/40 text-slate-400 border-white/10 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-5 h-5 rounded-full object-cover border border-black/30"
              />
              <span>{artist.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ------------------- 3D ROTATING ARTIST CAROUSEL STAGE ------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto w-full my-6 flex flex-col items-center">
        
        {/* Perspective Stage Viewport */}
        <div 
          ref={stageRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[460px] sm:h-[520px] flex items-center justify-center [perspective:1200px]"
        >
          {/* Side Stage Arrow Controls Overlaid */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 sm:left-8 z-40 p-4 rounded-full glass-panel border border-white/20 text-white hover:text-amber-400 hover:border-amber-500/60 shadow-2xl hover:scale-110 active:scale-95 transition-all"
            data-cursor="PREV"
            aria-label="Previous Artist"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-2 sm:right-8 z-40 p-4 rounded-full glass-panel border border-white/20 text-white hover:text-amber-400 hover:border-amber-500/60 shadow-2xl hover:scale-110 active:scale-95 transition-all"
            data-cursor="NEXT"
            aria-label="Next Artist"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Cards Cylinder Loop */}
          {displayArtists.map((artist, idx) => {
            let offset = idx - activeIndex;
            
            // Shortest distance wrapping
            if (offset > totalArtists / 2) offset -= totalArtists;
            if (offset < -totalArtists / 2) offset += totalArtists;

            const isSelected = idx === activeIndex;

            // 3D positioning math
            const rotateY = offset * 26;
            const translateX = offset * (window.innerWidth < 640 ? 170 : 270);
            const translateZ = -Math.abs(offset) * 130;
            const scale = isSelected ? 1.0 : Math.max(0.55, 1 - Math.abs(offset) * 0.22);
            const opacity = isSelected ? 1.0 : Math.max(0.2, 0.6 - Math.abs(offset) * 0.18);
            const blur = isSelected ? 0 : Math.min(6, Math.abs(offset) * 2);

            return (
              <div
                key={artist.id}
                onClick={() => changeArtist(idx)}
                data-cursor={isSelected ? "VIEW" : "ROTATE"}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: totalArtists - Math.abs(offset)
                }}
                className={`absolute w-[280px] sm:w-[340px] h-[390px] sm:h-[460px] rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer glass-panel border overflow-hidden shadow-2xl group ${
                  isSelected ? 'border-amber-500/50 shadow-amber-500/20' : 'border-white/10 hover:border-amber-500/30'
                }`}
              >
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover object-top filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-90" />

                {/* Selected Status Badge */}
                {isSelected && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-black font-bold text-[10px] font-mono-custom px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {artist.artistType === 'core' ? 'CORE BAND MEMBER' : 'FEATURED VOCALIST'}
                  </div>
                )}

                {/* Artist Name & Origin Tag */}
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <div className="text-xs font-mono-custom text-amber-400 uppercase tracking-widest flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {artist.origin}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-none">
                    {artist.name}
                  </h3>
                  <div className="text-[11px] text-slate-300 font-light truncate">
                    {artist.vocalStyle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ------------------- SELECTED ARTIST DETAILED DISPLAY ------------------- */}
        <div className="w-full max-w-4xl glass-panel-amber p-6 sm:p-8 rounded-3xl border border-amber-500/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-4">
          
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-display font-black text-3xl">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-slate-500 font-mono-custom text-sm">/ {String(totalArtists).padStart(2, '0')}</span>
              <span className="text-xs font-mono-custom text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 uppercase tracking-widest">
                {activeArtist.status}
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase">
              {activeArtist.name}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              {activeArtist.fullBio}
            </p>

            {/* Allocated Song Pills */}
            <div className="pt-2">
              <div className="text-[11px] font-mono-custom text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Disc className="w-3.5 h-3.5 text-amber-400" />
                Allocated Works / Songs ({activeArtist.attributedSongs.length}):
              </div>
              <div className="flex flex-wrap gap-2">
                {activeArtist.attributedSongs.map((song, i) => (
                  <span key={i} className="text-xs bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-full font-medium">
                    {song}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-3 justify-center">
            <MagneticButton 
              onClick={() => onSelectArtist(activeArtist)}
              className="w-full btn-gold py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              dataCursor="VIEW"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton 
              onClick={() => onSelectVideo(activeArtist)}
              className="w-full btn-outline-gold py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 glass-panel"
              dataCursor="WATCH"
            >
              <Play className="w-3.5 h-3.5 fill-amber-400" />
              Watch Music Video
            </MagneticButton>
          </div>

        </div>

      </div>

      {/* ------------------- AUDIO PREVIEW BAR ------------------- */}
      <div className="relative z-20 max-w-4xl mx-auto w-full glass-panel px-6 py-3 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold hover:scale-105 transition-transform"
            data-cursor={isPlayingAudio ? "PAUSE" : "PLAY"}
          >
            {isPlayingAudio ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black translate-x-0.5" />}
          </button>
          <div>
            <div className="text-[10px] font-mono-custom text-amber-400 uppercase tracking-widest">
              NOW FEATURING
            </div>
            <div className="text-xs font-bold text-white">
              {activeArtist.attributedSongs[0] || 'Siara'} — {activeArtist.name} x Treast Band
            </div>
          </div>
        </div>

        {/* Audio Waveform Simulation */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 24 }).map((_, idx) => (
            <div 
              key={idx}
              className={`w-1 rounded-full transition-all duration-300 ${
                isPlayingAudio ? 'bg-amber-400 animate-pulse' : 'bg-slate-700'
              }`}
              style={{
                height: isPlayingAudio ? `${Math.floor(Math.sin(idx + Date.now() / 200) * 12 + 16)}px` : '8px'
              }}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
