import React from 'react';
import { Play, Film, Youtube, ExternalLink } from 'lucide-react';
import { MUSIC_CATALOGUE, Release } from '../data/treastDatabase';
import MagneticButton from './MagneticButton';

interface VideoWallProps {
  onSelectVideo: (release: Release) => void;
}

export default function VideoWall({ onSelectVideo }: VideoWallProps) {
  // Select top featured videos
  const videos = MUSIC_CATALOGUE.filter(r => r.category === 'ORIGINALS' || r.category === 'COLLABORATIONS').slice(0, 6);

  return (
    <section id="visuals" className="py-24 px-4 bg-gradient-to-b from-[#050608] via-[#090c12] to-[#050608] border-y border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-amber-500 text-xs font-mono-custom tracking-widest uppercase inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3">
              Film & Music Videos
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              TREAST <span className="text-amber-400">VISUALS</span>
            </h2>
          </div>

          <MagneticButton
            href="https://www.youtube.com/@treastofficial"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 glass-panel"
            dataCursor="OPEN"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            Visit Official YouTube Channel
          </MagneticButton>
        </div>

        {/* Irregular Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {videos.map((release, idx) => {
            // First item large span 8, second span 4, rest span 4 each
            const colSpan = idx === 0 ? 'md:col-span-8' : idx === 1 ? 'md:col-span-4' : 'md:col-span-4';
            const height = idx === 0 ? 'h-[400px] sm:h-[480px]' : 'h-[320px]';

            return (
              <div 
                key={release.id}
                onClick={() => onSelectVideo(release)}
                data-cursor="WATCH"
                className={`${colSpan} ${height} relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-amber-500/40 transition-all duration-500 group cursor-pointer`}
              >
                <img 
                  src={release.coverImage} 
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-90" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-2xl shadow-amber-500/40 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-black translate-x-0.5" />
                </div>

                {/* Video Info Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="text-xs font-mono-custom text-amber-400 uppercase tracking-widest mb-1">
                      {release.artist} {release.featuredArtist && `feat. ${release.featuredArtist}`}
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-none">
                      {release.title}
                    </h3>
                  </div>

                  <div className="hidden sm:block text-xs font-mono-custom text-slate-400 bg-black/60 px-3 py-1 rounded-md border border-white/10">
                    {release.year}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
