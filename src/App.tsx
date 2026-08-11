import React, { useState } from 'react';
import { 
  Play, 
  Volume2, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Youtube, 
  Facebook, 
  ExternalLink, 
  Sparkles, 
  Music, 
  Users, 
  Tv, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  Info, 
  Menu, 
  Radio, 
  ArrowUpRight,
  Disc,
  Mic2,
  Film,
  Globe,
  ChevronDown
} from 'lucide-react';
import { 
  BAND_INFO, 
  CORE_MEMBERS, 
  FEATURED_ARTISTS, 
  MUSIC_CATALOGUE, 
  PRODUCERS, 
  SERVICES, 
  LIVE_FORMATS,
  Release,
  FeaturedArtist
} from './data/treastDatabase';

import CustomCursor from './components/CustomCursor';
import DigitalHUD from './components/DigitalHUD';
import MagneticButton from './components/MagneticButton';
import ArtistSelector3D from './components/ArtistSelector3D';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMusicFilter, setActiveMusicFilter] = useState<'ALL' | 'ORIGINALS' | 'COLLABORATIONS' | 'OFFICIAL COVERS' | 'ROCK COVERS'>('ALL');
  const [showFullDiscography, setShowFullDiscography] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<FeaturedArtist | null>(null);
  const [selectedVideoRelease, setSelectedVideoRelease] = useState<Release | null>(null);
  const [selectedCreditsRelease, setSelectedCreditsRelease] = useState<Release | null>(null);
  const [hudActiveArtistIndex, setHudActiveArtistIndex] = useState(0);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    eventType: 'Festival / Cultural Performance',
    eventDate: '',
    venue: '',
    audience: '500 - 2,000',
    format: 'Full Treast Band (Electric)',
    message: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Filter music releases
  const filteredReleases = activeMusicFilter === 'ALL' 
    ? MUSIC_CATALOGUE 
    : MUSIC_CATALOGUE.filter(item => item.category === activeMusicFilter);

  // Initial top 6 releases vs full discography
  const displayedReleases = showFullDiscography ? filteredReleases : filteredReleases.slice(0, 6);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const constructWhatsAppUrl = () => {
    const text = `Hello Treast Management! I would like to enquire about booking Treast Band for an event.%0A%0A*Name:* ${bookingForm.name}%0A*Event:* ${bookingForm.eventType}%0A*Date:* ${bookingForm.eventDate}%0A*Venue:* ${bookingForm.venue}%0A*Format:* ${bookingForm.format}%0A*Details:* ${bookingForm.message}`;
    return `https://wa.me/60134360024?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#050608] text-slate-100 font-sans selection:bg-amber-500 selection:text-black relative">
      
      {/* ------------------- CUSTOM CURSOR & HUD OVERLAY ------------------- */}
      <CustomCursor />
      <DigitalHUD activeArtistIndex={hudActiveArtistIndex} totalArtists={FEATURED_ARTISTS.length} />

      {/* ------------------- HEADER / NAV ------------------- */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3" data-cursor="HOME">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-extrabold font-display shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              T
            </div>
            <div>
              <div className="font-display font-black text-xl tracking-wider text-white group-hover:text-amber-400 transition-colors">
                TREAST<span className="text-amber-500">.</span>
              </div>
              <div className="text-[10px] font-mono-custom text-amber-500/80 tracking-widest uppercase -mt-1">
                The Sound of Semporna
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono-custom uppercase tracking-wider text-slate-300">
            <a href="#story" className="hover:text-amber-400 transition-colors" data-cursor="OPEN">Our Story</a>
            <a href="#artists" className="hover:text-amber-400 transition-colors" data-cursor="OPEN">3D Artists</a>
            <a href="#music" className="hover:text-amber-400 transition-colors" data-cursor="OPEN">Music & MV</a>
            <a href="#booking" className="hover:text-amber-400 transition-colors" data-cursor="OPEN">Live Booking</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors" data-cursor="OPEN">Contact</a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton 
              href={BAND_INFO.youtubeChannelUrl} 
              target="_blank" 
              rel="noreferrer"
              className="glass-panel text-slate-200 hover:text-amber-400 px-4 py-2 rounded-full text-xs font-mono-custom flex items-center gap-2 border border-white/10 hover:border-amber-500/40"
              dataCursor="YOUTUBE"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              @treastofficial
            </MagneticButton>

            <MagneticButton 
              href="#booking" 
              className="btn-gold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase flex items-center gap-2"
              dataCursor="BOOK"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book Treast
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel mt-4 p-6 rounded-2xl border border-white/10 flex flex-col gap-4 text-center">
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-2 border-b border-white/5">Our Story</a>
            <a href="#artists" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-2 border-b border-white/5">3D Artists Showcase</a>
            <a href="#music" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-2 border-b border-white/5">Music & MV ({MUSIC_CATALOGUE.length})</a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-2">Live Booking</a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="btn-gold py-3 rounded-xl mt-2 text-xs uppercase tracking-wider font-bold">
              Book Treast Band
            </a>
          </div>
        )}
      </header>

      {/* ------------------- SECTION 01: HERO EXPERIENCE ------------------- */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        {/* Full-bleed background visual */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero_band_stage.jpg" 
            alt="Treast Band Live in Semporna" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/90 via-transparent to-[#050608]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 pt-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-custom uppercase tracking-widest mb-6 backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            MALAYSIAN ROCK · BORNEO SOUL · INTERNATIONAL ATTITUDE
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-6">
            THE SOUND OF <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              SEMPORNA
            </span>
          </h1>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light mb-10 leading-relaxed">
            Born in Semporna. Rooted in culture. Made for the world. <br className="hidden sm:inline" />
            Original rock energy shaped by brotherhood and Sabahan regional soul.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton 
              href="#artists" 
              className="btn-gold px-8 py-4 rounded-full text-sm uppercase tracking-wider font-bold flex items-center gap-3 w-full sm:w-auto justify-center"
              dataCursor="3D STAGE"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              Explore 3D Artist Stage
            </MagneticButton>

            <MagneticButton 
              href="#music" 
              className="btn-outline-gold px-8 py-4 rounded-full text-sm uppercase tracking-wider font-bold flex items-center gap-3 w-full sm:w-auto justify-center glass-panel"
              dataCursor="LISTEN"
            >
              <Disc className="w-4 h-4" />
              Listen to Music ({MUSIC_CATALOGUE.length})
            </MagneticButton>
          </div>

          {/* Highlights summary badge */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-panel p-4 rounded-2xl text-center border-amber-500/20">
              <div className="text-2xl font-black font-display text-amber-400">30.9K+</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono-custom mt-1">Facebook Followers</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl text-center border-amber-500/20">
              <div className="text-2xl font-black font-display text-amber-400">13</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono-custom mt-1">Musicians & Singers</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl text-center border-amber-500/20">
              <div className="text-2xl font-black font-display text-amber-400">{MUSIC_CATALOGUE.length}</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono-custom mt-1">Catalogued Releases</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl text-center border-amber-500/20">
              <div className="text-xl font-black font-display text-amber-400">HOME STUDIO</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono-custom mt-1">Semporna HQ</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- ANIMATED TICKER MARQUEE ------------------- */}
      <div className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 py-3 overflow-hidden text-black font-display font-extrabold text-sm tracking-widest uppercase shadow-lg">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {Array(4).fill(BAND_INFO.keywords).flat().map((keyword, idx) => (
            <span key={idx} className="flex items-center gap-6">
              <span>{keyword}</span>
              <span className="w-2 h-2 rounded-full bg-black/40" />
            </span>
          ))}
        </div>
      </div>

      {/* ------------------- SECTION 02: OUR STORY (EDITORIAL SPLIT) ------------------- */}
      <section id="story" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-amber-500 text-xs font-mono-custom tracking-widest uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Our Story & Cultural Heritage
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase leading-tight">
              FROM SEMPORNA, <br />
              <span className="text-amber-400">WITH SOMETHING REAL TO SAY</span>
            </h2>

            <p className="text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              Treast Band is an independent Malaysian rock band and creative music collective born in Semporna, Sabah. Built on family spirit, friendship, and an unshakeable belief in original songwriting, Treast brings together a 4-piece core band and a growing circle of 9 featured singers.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Semporna is world-renowned for its sea nomad heritage and coastal islands. To us, it is a living culture filled with distinct languages (Tausug, Bajau, Malay), memories, and stories. We turn Borneo soul into soaring rock arrangements that travel across borders.
            </p>

            {/* Pull Quote */}
            <div className="glass-panel-amber p-6 rounded-2xl border-l-4 border-amber-500 my-6">
              <blockquote className="italic font-display font-semibold text-lg text-amber-200">
                “We do not copy where music is going. We create from where we come from.”
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <MagneticButton href="#artists" className="btn-outline-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider" dataCursor="3D STAGE">
                Explore 13 Musicians on 3D Stage
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden glass-panel p-2 border border-white/10">
              <img 
                src="/assets/hero_band_stage.jpg" 
                alt="Treast Band Live" 
                className="w-full h-[440px] object-cover rounded-2xl filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-mono-custom text-amber-300 uppercase tracking-wider">Semporna, Sabah, Malaysia · 04°N 118°E</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Independent Rock Collective · Original Releases · Live Concerts & Visual Productions
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------- SECTION 03: VOICES OF TREAST (3D STAGE) ------------------- */}
      <ArtistSelector3D 
        onSelectArtist={(artist) => setSelectedArtist(artist)}
        onSelectVideo={(artist) => {
          const match = MUSIC_CATALOGUE.find(r => r.featuredArtist?.includes(artist.name) || r.title.includes(artist.name));
          if (match) setSelectedVideoRelease(match);
          else setSelectedArtist(artist);
        }}
        onActiveIndexChange={(idx) => setHudActiveArtistIndex(idx)}
      />

      {/* ------------------- SECTION 04: MUSIC & VISUALS (UNIFIED DISCOGRAPHY HUB) ------------------- */}
      <section id="music" className="py-24 px-4 bg-gradient-to-b from-[#050608] via-[#0e121a] to-[#050608] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-amber-500 text-xs font-mono-custom tracking-widest uppercase inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3">
                YouTube Official Database V2 · {MUSIC_CATALOGUE.length} Catalogued Tracks
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
                FEATURED <span className="text-amber-400">MUSIC & MV RELEASES</span>
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-2xl border border-white/10">
              {(['ALL', 'ORIGINALS', 'COLLABORATIONS', 'OFFICIAL COVERS', 'ROCK COVERS'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveMusicFilter(cat)}
                  data-cursor="FILTER"
                  className={`px-3.5 py-2 rounded-xl text-[11px] font-bold font-mono-custom tracking-wider transition-all ${
                    activeMusicFilter === cat 
                      ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Release Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedReleases.map((release) => (
              <div 
                key={release.id} 
                className="glass-panel rounded-3xl p-5 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                    <img 
                      src={release.coverImage} 
                      alt={release.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-3 left-3 bg-amber-500 text-black font-bold text-[10px] font-mono-custom px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {release.category}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-slate-300 text-[10px] font-mono-custom px-2.5 py-1 rounded-md border border-white/10">
                      {release.year}
                    </div>

                    {/* Play Video Button Overlay */}
                    <button 
                      onClick={() => setSelectedVideoRelease(release)}
                      data-cursor="PLAY"
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-xl shadow-amber-500/40 hover:scale-110 transition-transform group-hover:bg-amber-400"
                      aria-label={`Play video preview for ${release.title}`}
                    >
                      <Play className="w-6 h-6 fill-black translate-x-0.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono-custom text-amber-400 mb-1">
                    <span>{release.artist}</span>
                    <span className="text-slate-500">{release.language}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {release.title}
                  </h3>

                  {release.featuredArtist && (
                    <div className="text-xs text-slate-300 font-medium mb-3">
                      Feat. <span className="text-amber-300">{release.featuredArtist}</span>
                    </div>
                  )}

                  <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                    {release.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MagneticButton 
                      onClick={() => setSelectedVideoRelease(release)}
                      className="flex-1 btn-gold py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
                      dataCursor="WATCH"
                    >
                      <Play className="w-3.5 h-3.5 fill-black" />
                      Watch MV
                    </MagneticButton>

                    <button 
                      onClick={() => setSelectedCreditsRelease(release)}
                      data-cursor="CREDITS"
                      className="px-4 py-2.5 glass-panel rounded-xl text-xs font-mono-custom text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                    >
                      Credits
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Toggle Full Discography Expand Button */}
          {!showFullDiscography && (
            <div className="text-center mt-12">
              <MagneticButton
                onClick={() => setShowFullDiscography(true)}
                className="btn-outline-gold px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider gap-2 glass-panel"
                dataCursor="EXPAND"
              >
                Explore Full {filteredReleases.length}-Track Catalogue Archive
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </MagneticButton>
            </div>
          )}

        </div>
      </section>

      {/* ------------------- SECTION 05: LIVE PERFORMANCE & BOOKING ------------------- */}
      <section id="booking" className="py-24 px-4 bg-gradient-to-b from-[#050608] via-[#0d1017] to-[#050608] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Booking Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-amber-500 text-xs font-mono-custom tracking-widest uppercase inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                Live Performance & Booking
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
                BRING TREAST TO <span className="text-amber-400">YOUR STAGE</span>
              </h2>
              <p className="text-slate-300 font-light text-base leading-relaxed">
                From an intimate unplugged acoustic set to a full-scale electric rock performance with featured vocalists, Treast tailors every show to your event's atmosphere.
              </p>

              <div className="space-y-3 pt-4">
                <div className="text-xs font-mono-custom text-amber-400 uppercase tracking-widest">Available Stage Formats</div>
                <div className="flex flex-wrap gap-2">
                  {LIVE_FORMATS.map((fmt, idx) => (
                    <span key={idx} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-slate-300">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Booking Contact Box */}
              <div className="glass-panel-amber p-6 rounded-3xl border border-amber-500/30 mt-8 space-y-4">
                <div className="text-xs font-mono-custom text-amber-400 uppercase tracking-wider">Direct Management Contact</div>
                <div className="space-y-2">
                  <a href="tel:+60134360024" className="flex items-center gap-3 text-white font-bold hover:text-amber-300 text-lg" data-cursor="CALL">
                    <Phone className="w-5 h-5 text-amber-400" />
                    +60 13-436 0024
                  </a>
                  <a href="mailto:treast.band@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-amber-300 text-sm" data-cursor="EMAIL">
                    <Mail className="w-5 h-5 text-amber-400" />
                    treast.band@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form Column */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-3xl p-8 border border-white/10">
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  TELL US ABOUT YOUR EVENT
                </h3>
                <p className="text-slate-400 text-xs mb-6">
                  Fill out the details below and our management team will respond within 24 hours.
                </p>

                {bookingSubmitted ? (
                  <div className="bg-amber-500/10 border border-amber-500/40 p-8 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                    <h4 className="font-display font-bold text-2xl text-white">Booking Enquiry Received!</h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for reaching out to Treast Band. Our team will review your event details and contact you shortly.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                      <MagneticButton 
                        href={constructWhatsAppUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-gold px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider inline-flex items-center justify-center gap-2"
                        dataCursor="WHATSAPP"
                      >
                        Send Direct WhatsApp Message
                        <ArrowUpRight className="w-4 h-4" />
                      </MagneticButton>
                      <button 
                        onClick={() => setBookingSubmitted(false)} 
                        className="glass-panel px-6 py-3 rounded-xl text-xs uppercase font-bold text-slate-300 hover:text-white"
                        data-cursor="RESET"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono-custom text-slate-400 mb-1">Your Name *</label>
                        <input 
                          type="text" 
                          required
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          placeholder="e.g. Alex Tan" 
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono-custom text-slate-400 mb-1">Company / Organisation</label>
                        <input 
                          type="text" 
                          value={bookingForm.company}
                          onChange={(e) => setBookingForm({...bookingForm, company: e.target.value})}
                          placeholder="e.g. Sabah Cultural Festival" 
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono-custom text-slate-400 mb-1">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                          placeholder="alex@example.com" 
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono-custom text-slate-400 mb-1">WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          required
                          value={bookingForm.whatsapp}
                          onChange={(e) => setBookingForm({...bookingForm, whatsapp: e.target.value})}
                          placeholder="+60 1X-XXXXXXX" 
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono-custom text-slate-400 mb-1">Event Type</label>
                        <select 
                          value={bookingForm.eventType}
                          onChange={(e) => setBookingForm({...bookingForm, eventType: e.target.value})}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-amber-500"
                        >
                          <option>Festival / Cultural Show</option>
                          <option>Corporate Launch / Gala</option>
                          <option>Wedding Celebration</option>
                          <option>Private Concert</option>
                          <option>Branded Music Production</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono-custom text-slate-400 mb-1">Event Date</label>
                        <input 
                          type="date" 
                          value={bookingForm.eventDate}
                          onChange={(e) => setBookingForm({...bookingForm, eventDate: e.target.value})}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono-custom text-slate-400 mb-1">Venue / City</label>
                        <input 
                          type="text" 
                          value={bookingForm.venue}
                          onChange={(e) => setBookingForm({...bookingForm, venue: e.target.value})}
                          placeholder="e.g. Kota Kinabalu" 
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-custom text-slate-400 mb-1">Performance Format</label>
                      <select 
                        value={bookingForm.format}
                        onChange={(e) => setBookingForm({...bookingForm, format: e.target.value})}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        {LIVE_FORMATS.map((f, i) => <option key={i}>{f}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-custom text-slate-400 mb-1">Tell Us About Your Event</label>
                      <textarea 
                        rows={4}
                        value={bookingForm.message}
                        onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                        placeholder="Provide details about stage setup, schedule, or custom songs..."
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <MagneticButton 
                      onClick={handleBookingSubmit}
                      className="w-full btn-gold py-4 rounded-xl text-xs uppercase font-bold tracking-wider shadow-lg shadow-amber-500/20"
                      dataCursor="SUBMIT"
                    >
                      Send Booking Enquiry
                    </MagneticButton>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------- FOOTER ------------------- */}
      <footer id="contact" className="py-16 px-4 bg-[#030406] border-t border-white/10 text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5 space-y-4">
            <div className="font-display font-black text-2xl text-white">
              TREAST BAND<span className="text-amber-500">.</span>
            </div>
            <div className="text-xs font-mono-custom text-amber-400 uppercase tracking-widest">
              The Sound of Semporna · International UI
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              Independent Malaysian rock band and creative music collective from Semporna, Sabah. Born in Semporna. Rooted in culture. Made for the world.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href={BAND_INFO.socials.youtube} target="_blank" rel="noreferrer" data-cursor="YOUTUBE" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40">
                <Youtube className="w-4 h-4 text-red-500" />
              </a>
              <a href={BAND_INFO.socials.instagram} target="_blank" rel="noreferrer" data-cursor="INSTAGRAM" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={BAND_INFO.socials.facebook} target="_blank" rel="noreferrer" data-cursor="FACEBOOK" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono-custom text-white uppercase tracking-widest mb-2">Navigation</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#story" className="hover:text-amber-400" data-cursor="OPEN">Our Story</a></li>
              <li><a href="#artists" className="hover:text-amber-400" data-cursor="OPEN">3D Artist Stage (13)</a></li>
              <li><a href="#music" className="hover:text-amber-400" data-cursor="OPEN">Music & MV ({MUSIC_CATALOGUE.length})</a></li>
              <li><a href="#booking" className="hover:text-amber-400" data-cursor="OPEN">Live Booking</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono-custom text-white uppercase tracking-widest mb-2">Management & Inquiries</div>
            <div className="text-xs text-slate-300 space-y-2">
              <div><strong className="text-white">Location:</strong> {BAND_INFO.base}</div>
              <div><strong className="text-white">WhatsApp / Call:</strong> +60 13-436 0024</div>
              <div><strong className="text-white">Email:</strong> treast.band@gmail.com</div>
              <div><strong className="text-white">YouTube:</strong> @treastofficial</div>
            </div>
            <div className="pt-3">
              <MagneticButton 
                href={constructWhatsAppUrl()} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-gold px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2"
                dataCursor="WHATSAPP"
              >
                WhatsApp Management
              </MagneticButton>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-custom text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Treast Band. All rights reserved. Semporna, Sabah, Malaysia.
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-amber-400" data-cursor="TOP">Back to Top ↑</a>
          </div>
        </div>
      </footer>

      {/* ------------------- STICKY MOBILE CTA BAR ------------------- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center justify-around">
        <a href="#artists" className="flex flex-col items-center gap-1 text-[10px] font-mono-custom text-slate-300 hover:text-amber-400">
          <Sparkles className="w-4 h-4 text-amber-400" />
          3D STAGE
        </a>
        <a href="#music" className="flex flex-col items-center gap-1 text-[10px] font-mono-custom text-slate-300 hover:text-amber-400">
          <Disc className="w-4 h-4 text-amber-400" />
          LISTEN ({MUSIC_CATALOGUE.length})
        </a>
        <a href="#booking" className="btn-gold px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider">
          BOOK
        </a>
      </div>

      {/* ------------------- ARTIST MODAL ------------------- */}
      {selectedArtist && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-white/20 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedArtist(null)} 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
              data-cursor="CLOSE"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              <img 
                src={selectedArtist.image} 
                alt={selectedArtist.name} 
                className="w-32 h-32 rounded-2xl object-cover border border-amber-500/30"
              />
              <div>
                <div className="text-xs font-mono-custom text-amber-400 uppercase tracking-widest">{selectedArtist.vocalStyle}</div>
                <h3 className="font-display font-black text-3xl text-white mb-1">{selectedArtist.name}</h3>
                <div className="text-xs text-slate-400 font-mono-custom flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Origin: {selectedArtist.origin}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono-custom text-amber-400 uppercase tracking-wider">Biography & Identity</h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {selectedArtist.fullBio}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-3">
              <h4 className="text-xs font-mono-custom text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Disc className="w-4 h-4 text-amber-400" />
                Allocated Songs & YouTube Music Videos ({selectedArtist.attributedSongs.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedArtist.attributedSongs.map((songName, idx) => {
                  const matchingRelease = MUSIC_CATALOGUE.find(r => r.title.toLowerCase().includes(songName.toLowerCase()) || songName.toLowerCase().includes(r.title.toLowerCase()));
                  const targetUrl = matchingRelease ? matchingRelease.youtubeUrl : `https://www.youtube.com/results?search_query=Treast+Band+${encodeURIComponent(songName)}+${encodeURIComponent(selectedArtist.name)}`;
                  
                  return (
                    <div key={idx} className="glass-panel p-3 rounded-2xl border border-white/10 flex items-center justify-between gap-2">
                      <div className="text-xs font-bold text-white truncate">
                        {songName}
                      </div>
                      <a 
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-wider inline-flex items-center gap-1 shrink-0"
                        data-cursor="PLAY"
                      >
                        <Play className="w-3 h-3 fill-black" />
                        Watch MV
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------- VIDEO MODAL ------------------- */}
      {selectedVideoRelease && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="glass-panel max-w-4xl w-full rounded-3xl p-6 border border-white/20 relative">
            <button 
              onClick={() => setSelectedVideoRelease(null)} 
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white"
              data-cursor="CLOSE"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-black border border-white/10 flex items-center justify-center">
              <img 
                src={selectedVideoRelease.coverImage} 
                alt={selectedVideoRelease.title} 
                className="w-full h-full object-cover filter brightness-50"
              />
              <div className="absolute text-center p-6 space-y-4">
                <Play className="w-16 h-16 text-amber-400 mx-auto animate-pulse" />
                <h3 className="font-display font-black text-3xl text-white uppercase">{selectedVideoRelease.title}</h3>
                <div className="text-xs font-mono-custom text-amber-300">{selectedVideoRelease.artist} {selectedVideoRelease.featuredArtist && `feat. ${selectedVideoRelease.featuredArtist}`}</div>
                <div className="pt-2">
                  <MagneticButton 
                    href={selectedVideoRelease.youtubeUrl || BAND_INFO.youtubeChannelUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-gold px-6 py-3 rounded-full text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2"
                    dataCursor="PLAY"
                  >
                    Watch Full Music Video on YouTube (@treastofficial)
                    <ExternalLink className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono-custom text-slate-400">
              <div>Category: <span className="text-amber-400">{selectedVideoRelease.category}</span></div>
              <div>Language: <span className="text-slate-200">{selectedVideoRelease.language}</span></div>
              {selectedVideoRelease.verification && (
                <div className="text-amber-300/80">{selectedVideoRelease.verification}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ------------------- CREDITS MODAL ------------------- */}
      {selectedCreditsRelease && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel max-w-lg w-full rounded-3xl p-6 border border-white/20 relative">
            <button 
              onClick={() => setSelectedCreditsRelease(null)} 
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
              data-cursor="CLOSE"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display font-bold text-2xl text-white mb-1">{selectedCreditsRelease.title}</h3>
            <div className="text-xs font-mono-custom text-amber-400 mb-6">Complete Production Credits</div>

            <div className="space-y-3 text-xs text-slate-300 font-mono-custom">
              {selectedCreditsRelease.credits.vocal && (
                <div className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-slate-400">Lead Vocal:</span>
                  <span className="text-white font-bold">{selectedCreditsRelease.credits.vocal}</span>
                </div>
              )}
              {selectedCreditsRelease.credits.composer && (
                <div className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-slate-400">Composer:</span>
                  <span className="text-white">{selectedCreditsRelease.credits.composer}</span>
                </div>
              )}
              {selectedCreditsRelease.credits.lyrics && (
                <div className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-slate-400">Lyricist:</span>
                  <span className="text-white">{selectedCreditsRelease.credits.lyrics}</span>
                </div>
              )}
              {selectedCreditsRelease.credits.producer && (
                <div className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-slate-400">Main Producer:</span>
                  <span className="text-amber-300 font-bold">{selectedCreditsRelease.credits.producer}</span>
                </div>
              )}
              {selectedCreditsRelease.credits.mixingMastering && (
                <div className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-slate-400">Mixing & Mastering:</span>
                  <span className="text-white">{selectedCreditsRelease.credits.mixingMastering}</span>
                </div>
              )}
              {selectedCreditsRelease.credits.director && (
                <div className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-slate-400">MV Director:</span>
                  <span className="text-amber-300">{selectedCreditsRelease.credits.director}</span>
                </div>
              )}
            </div>

            {selectedCreditsRelease.sourcePlatform && (
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 font-mono-custom flex items-center justify-between">
                <span>Source: {selectedCreditsRelease.sourcePlatform}</span>
                <span className="text-amber-400">{selectedCreditsRelease.verification}</span>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
