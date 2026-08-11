import React from 'react';
import { Sparkles, MapPin, Compass, Globe, Heart } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function StoryChapters() {
  const chapters = [
    {
      num: "01",
      title: "SEMPORNA ROOTS",
      subtitle: "Born on the Eastern Edge of Sabah",
      text: "Semporna is world-renowned for its turquoise waters and sea nomad heritage. To us, it is also a living culture filled with distinct languages, rhythms, and untold human stories. Our roots are local, but our emotions are universal.",
      icon: MapPin,
      image: "/assets/hero_band_stage.jpg"
    },
    {
      num: "02",
      title: "FOUR MUSICIANS",
      subtitle: "Built on Brotherhood & Shared Trust",
      text: "At Treast's core are four musicians who grew up together on stage and in the studio. Unbound by commercial formulas, they shape an unmistakable sound that balances heavy rock energy with regional melodic warmth.",
      icon: Heart,
      image: "/assets/tinombong_ka_cover.jpg"
    },
    {
      num: "03",
      title: "ONE SOUND",
      subtitle: "Borneo Rock Identity",
      text: "We sing about love, longing, celebration, identity, and everyday life in languages that carry the soul of eastern Sabah — Tausug, Bajau, and regional Malay.",
      icon: Compass,
      image: "/assets/siara_cover.jpg"
    },
    {
      num: "04",
      title: "MORE VOICES",
      subtitle: "Creative Music Collective",
      text: "Treast is more than a four-piece band. We collaborate with singers, songwriters, and filmmakers across Sabah, building a creative home where local voices reach a global stage.",
      icon: Sparkles,
      image: "/assets/piyagbatuk_promo_16x9_v01.png"
    },
    {
      num: "05",
      title: "MADE TO TRAVEL",
      subtitle: "From Semporna to the World",
      text: "Proudly independent — building one song, one collaborator, and one audience at a time. This is music from home, made to travel beyond borders.",
      icon: Globe,
      image: "/assets/hero_band_stage.jpg"
    }
  ];

  return (
    <section id="story" className="py-24 px-4 max-w-7xl mx-auto space-y-24">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="text-amber-500 text-xs font-mono-custom tracking-widest uppercase inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
          Documentary Scroll Chapters
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
          FROM SEMPORNA, <br />
          <span className="text-amber-400">WITH SOMETHING REAL TO SAY</span>
        </h2>
      </div>

      {/* Chapters Stack */}
      <div className="space-y-20">
        {chapters.map((chapter, idx) => {
          const Icon = chapter.icon;
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="flex items-center gap-3">
                  <span className="font-display font-black text-4xl text-amber-500">{chapter.num}</span>
                  <div className="w-12 h-px bg-amber-500/40" />
                  <span className="text-xs font-mono-custom text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    Chapter {chapter.num}
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase">
                  {chapter.title}
                </h3>
                <div className="text-sm font-semibold text-amber-300 font-mono-custom">
                  {chapter.subtitle}
                </div>

                <p className="text-slate-300 text-base leading-relaxed font-light">
                  {chapter.text}
                </p>
              </div>

              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl overflow-hidden glass-panel p-2 border border-white/10 group">
                  <img 
                    src={chapter.image} 
                    alt={chapter.title}
                    className="w-full h-[360px] object-cover rounded-2xl filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chapter Closing Pull Quote */}
      <div className="glass-panel-amber p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto border border-amber-500/30 space-y-4">
        <blockquote className="italic font-display font-bold text-2xl sm:text-3xl text-amber-200">
          “We do not copy where music is going. We create from where we come from.”
        </blockquote>
        <div className="text-xs font-mono-custom text-slate-400 uppercase tracking-widest">
          — Treast Band Creative Philosophy
        </div>
      </div>

    </section>
  );
}
