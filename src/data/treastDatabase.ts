export interface CoreMember {
  id: string;
  name: string;
  artistName?: string;
  role: string[];
  instrument?: string;
  image: string;
  bio: string;
  status: string;
  needsConfirmation: boolean;
}

export interface FeaturedArtist {
  id: string;
  name: string;
  artistType: 'core' | 'featured';
  vocalStyle: string;
  origin: string;
  image: string;
  shortBio: string;
  fullBio: string;
  knownFor: string[];
  attributedSongs: string[];
  status: string;
  socials?: {
    instagram?: string;
    youtube?: string;
  };
}

export interface Release {
  id: string;
  slug: string;
  title: string;
  artist: string;
  featuredArtist?: string;
  year: string;
  category: 'ORIGINALS' | 'COLLABORATIONS' | 'OFFICIAL COVERS' | 'ROCK COVERS' | 'LIVE' | 'OTHER';
  language: string;
  coverImage: string;
  description: string;
  youtubeUrl: string;
  youtubeEmbedId?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  credits: {
    vocal?: string;
    composer?: string;
    lyrics?: string;
    producer?: string;
    mixingMastering?: string;
    director?: string;
  };
  sourcePlatform?: string;
  verification?: string;
  lyrics?: string;
  featured: boolean;
}

export interface Producer {
  name: string;
  artistName?: string;
  title: string;
  role: string;
  bio: string;
  note?: string;
  status: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  tag: string;
}

export const BAND_INFO = {
  name: "Treast Band",
  shortName: "Treast",
  tagline: "The Sound of Semporna",
  supportingLine: "Born in Semporna. Rooted in culture. Made for the world.",
  positioning: "Independent Malaysian rock band and creative music collective",
  studioName: "TREAST HOME RECORDING STUDIO",
  logoImage: "/assets/logo/treast_logo.jpg",
  ogShareImage: "/assets/og_share_image.jpg",
  base: "Semporna, Sabah, Malaysia",
  phone: "+60 13-436 0024",
  email: "treast.band@gmail.com",
  youtubeChannelUrl: "https://www.youtube.com/@treastofficial",
  facebookPageUrl: "https://www.facebook.com/profile.php?id=61574080386821",
  stats: {
    facebookFollowers: "30,000+",
    youtubeChannel: "@treastofficial",
    cataloguedTracks: "24",
    musicians: "13"
  },
  socials: {
    instagram: "https://instagram.com/treast_official",
    youtube: "https://www.youtube.com/@treastofficial",
    facebook: "https://www.facebook.com/profile.php?id=61574080386821",
    tiktok: "https://tiktok.com/@treast_official"
  },
  keywords: ["ROOTS", "RHYTHM", "BROTHERHOOD", "FREEDOM", "SEMPORNA"]
};

export const CORE_MEMBERS: CoreMember[] = [
  {
    id: "ronnie-fung",
    name: "Ronnie Fung",
    artistName: "R.ON",
    role: ["Main Producer", "Director", "Creative Direction"],
    instrument: "Production / Creative Direction",
    image: "/assets/artists/ronnie_fung.jpg",
    bio: "Leads overall production development behind Treast's expanding body of work at Treast Home Recording Studio in Semporna. With over two decades in music, film, and advertising, R.ON shapes projects from concept to final master.",
    status: "Confirmed from project materials",
    needsConfirmation: false
  },
  {
    id: "budi-muin",
    name: "Budi Muin",
    role: ["Musician", "Composer", "Mixing/Mastering", "Producer"],
    instrument: "Composer & Lead Sound Architect",
    image: "/assets/artists/budi_muin.jpg",
    bio: "Key creative pillar in Treast's sonic landscape. Composer of flagship works including 'Piyagbatuk Na In Suratan' and master sound engineer across live and studio productions.",
    status: "Public credits confirmed",
    needsConfirmation: false
  },
  {
    id: "meme-gend",
    name: "Meme Gend",
    role: ["Guitarist"],
    instrument: "Electric & Acoustic Guitars",
    image: "/assets/artists/ronnie_fung.jpg",
    bio: "Drives Treast's high-octane rock riffs and atmospheric guitar textures, bringing raw energy and melodic finesse to both live performances and studio cuts.",
    status: "Public performance credits found",
    needsConfirmation: true
  },
  {
    id: "ayu",
    name: "Ayu",
    role: ["Keyboardist"],
    instrument: "Keyboards & Synthesizers",
    image: "/assets/artists/ronnie_fung.jpg",
    bio: "Adds lush harmonic depth and synth arrangements that anchor Treast's fusion of Sabah regional melodies with contemporary rock.",
    status: "Public performance credits found",
    needsConfirmation: true
  }
];

export const FEATURED_ARTISTS: FeaturedArtist[] = [
  // Core Band Unified
  {
    id: "ronnie-fung",
    name: "Ronnie Fung (R.ON)",
    artistType: "core",
    vocalStyle: "Main Producer & Creative Director",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/ronnie_fung.jpg",
    shortBio: "Main producer, director, and creative lead behind Treast Home Recording Studio.",
    fullBio: "Ronnie Fung (R.ON) leads overall production development across music, film, and visual storytelling at Treast Home Recording Studio, guiding Treast Band's emotional direction and international vision.",
    knownFor: ["Producer & Director across all releases"],
    attributedSongs: ["Piyagbatuk Na In Suratan", "Siara", "Tinombong Ka"],
    status: "Core Producer / Director"
  },
  {
    id: "budi-muin",
    name: "Budi Muin",
    artistType: "core",
    vocalStyle: "Composer & Mixing/Mastering Engineer",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/budi_muin.jpg",
    shortBio: "Composer of 'Piyagbatuk Na In Suratan' and lead sound architect.",
    fullBio: "Budi Muin is a core musician, composer, and mixing/mastering engineer responsible for shaping Treast Band's sonic fidelity.",
    knownFor: ["Piyagbatuk Na In Suratan"],
    attributedSongs: ["Piyagbatuk Na In Suratan", "Siara"],
    status: "Core Musician & Composer"
  },
  {
    id: "meme-gend",
    name: "Meme Gend",
    artistType: "core",
    vocalStyle: "Lead Guitarist",
    origin: "Semporna, Sabah",
    image: "/assets/artists/ronnie_fung.jpg",
    shortBio: "Drives Treast's high-octane rock riffs and live energy.",
    fullBio: "Meme Gend drives Treast Band's electric guitar riffs and solos, bringing raw Borneo rock power to stage and studio cuts.",
    knownFor: ["Live Performances & Studio Riffs"],
    attributedSongs: ["Kyabayaanku", "Siara"],
    status: "Core Guitarist"
  },
  {
    id: "ayu",
    name: "Ayu",
    artistType: "core",
    vocalStyle: "Keyboardist & Synthesizers",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/ronnie_fung.jpg",
    shortBio: "Keyboards and harmonic synth textures.",
    fullBio: "Ayu provides lush keyboard harmonies and modern synth atmosphere that anchor Treast Band's soundscapes.",
    knownFor: ["Keyboard & Synth Arrangements"],
    attributedSongs: ["Kyabayaanku", "Rayakan Aidilfitri"],
    status: "Core Keyboardist"
  },

  // Featured Vocalists
  {
    id: "chang-mazhar",
    name: "Chang Mazhar",
    artistType: "featured",
    vocalStyle: "Powerful Rock / Soaring Melodic Vocalist",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/chang_mazhar.jpg",
    shortBio: "Voice of the flagship rock anthem 'Siara'.",
    fullBio: "Chang Mazhar brings raw emotional power and soaring vocal range to Treast Band. His performance on 'Siara' defined the band's anthem sound.",
    knownFor: ["Siara"],
    attributedSongs: ["Siara"],
    status: "Public credits confirmed"
  },
  {
    id: "ce-mon",
    name: "Ce Mon",
    artistType: "featured",
    vocalStyle: "Sabahan Cultural & Soulful Vocalist",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/ce_mon.jpg",
    shortBio: "Vocalist for 'Tinombong Ka' & 'Mamahi Panansang'.",
    fullBio: "Ce Mon is a versatile Sabahan vocalist whose rich timbre and authentic cultural phrasing give Treast collaborations a distinctive regional identity.",
    knownFor: ["Tinombong Ka", "Mamahi Panansang"],
    attributedSongs: ["Tinombong Ka", "Mamahi Panansang"],
    status: "Public credits confirmed"
  },
  {
    id: "fiq",
    name: "Fiq",
    artistType: "featured",
    vocalStyle: "Emotional Duet Lead Vocalist",
    origin: "Sandakan, Sabah",
    image: "/assets/artists/fiq.jpg",
    shortBio: "Co-lead vocalist for 'Piyagbatuk Na In Suratan'.",
    fullBio: "Hailing from Sandakan, Fiq delivers heartfelt, nuanced vocal performances that express longing, destiny, and personal connection.",
    knownFor: ["Piyagbatuk Na In Suratan"],
    attributedSongs: ["Piyagbatuk Na In Suratan"],
    status: "Project material confirmed"
  },
  {
    id: "emma",
    name: "Emma",
    artistType: "featured",
    vocalStyle: "Expressive Regional Female Vocalist",
    origin: "Semporna, Sabah",
    image: "/assets/artists/emma.png",
    shortBio: "Co-lead vocalist for 'Piyagbatuk Na In Suratan'.",
    fullBio: "A native of Semporna, Emma brings an intimate local authenticity and graceful vocal harmony to Treast's featured releases.",
    knownFor: ["Piyagbatuk Na In Suratan"],
    attributedSongs: ["Piyagbatuk Na In Suratan"],
    status: "Project material confirmed"
  },
  {
    id: "pia-ramona",
    name: "Pia Ramona",
    artistType: "featured",
    vocalStyle: "Acoustic Folk & Rock Cover Vocalist",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/pia_ramona.jpg",
    shortBio: "Vocalist for 'Bugtuan Napas', 'Kiyapag Isunan', 'Lasa Mag Labi', 'Masi Malasa'.",
    fullBio: "Pia Ramona is one of Treast's most frequent collaborators, featured on major official rock covers and live acoustic sessions.",
    knownFor: ["Bugtuan Napas", "Kiyapag Isunan", "Lasa Mag Labi", "Masi Malasa"],
    attributedSongs: ["Bugtuan Napas", "Kiyapag Isunan", "Lasa Mag Labi", "Masi Malasa"],
    status: "YouTube Official Index Confirmed"
  },
  {
    id: "latif-rashid",
    name: "Latif Rashid",
    artistType: "featured",
    vocalStyle: "Classic Heritage Vocalist",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/latif_rashid.jpg",
    shortBio: "Collaborating artist for 'Sabalan'.",
    fullBio: "Latif Rashid collaborates with Treast on heritage covers and regional reinterpretations, bridging generational Sabahan music traditions.",
    knownFor: ["Sabalan"],
    attributedSongs: ["Sabalan"],
    status: "YouTube Official Index Confirmed"
  },
  {
    id: "wanie-amir",
    name: "Wanie Amir",
    artistType: "featured",
    vocalStyle: "Expressive Regional Cover Vocalist",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/wanie_amir.jpg",
    shortBio: "Vocalist for 'Wayna Dugaing Lasahun'.",
    fullBio: "Wanie Amir brings lyrical grace and vocal warmth to Treast's official cover release 'Wayna Dugaing Lasahun'.",
    knownFor: ["Wayna Dugaing Lasahun"],
    attributedSongs: ["Wayna Dugaing Lasahun"],
    status: "YouTube Official Index Confirmed"
  },
  {
    id: "azirah",
    name: "Azirah",
    artistType: "featured",
    vocalStyle: "Soulful Ballad Vocalist",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/azirah.jpg",
    shortBio: "Featured vocalist for official music video 'Landu Sa In Lasaku'.",
    fullBio: "Azirah leads the vocals on the official music video 'Landu Sa In Lasaku', blending heartfelt balladry with Sabahan rock arrangement.",
    knownFor: ["Landu Sa In Lasaku"],
    attributedSongs: ["Landu Sa In Lasaku"],
    status: "YouTube Official Index Confirmed"
  },
  {
    id: "atikah-zaki",
    name: "Atikah Zaki",
    artistType: "featured",
    vocalStyle: "High-Energy Rock Sensation Vocalist",
    origin: "Sabah, Malaysia",
    image: "/assets/artists/atikah_zaki.jpg",
    shortBio: "Vocalist for 'Aku Tak Sempurna' & 'Terakhir Kali'.",
    fullBio: "Atikah Zaki is a powerhouse Sabahan vocalist featured on two landmark Treast official music videos: 'Aku Tak Sempurna' and 'Terakhir Kali'.",
    knownFor: ["Aku Tak Sempurna", "Terakhir Kali"],
    attributedSongs: ["Aku Tak Sempurna", "Terakhir Kali"],
    status: "YouTube Official Index Confirmed"
  }
];

export const MUSIC_CATALOGUE: Release[] = [
  // Originals & Flagships
  {
    id: "siara",
    slug: "siara",
    title: "Siara",
    artist: "Treast Band",
    featuredArtist: "Chang Mazhar",
    year: "2024",
    category: "ORIGINALS",
    language: "Malay / Sabahan",
    coverImage: "/assets/siara_cover.jpg",
    description: "A heartfelt rock anthem born from Semporna, carrying the tension between longing and hope through soaring guitars and Chang Mazhar's vocal performance.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Siara+Chang+Mazhar",
    credits: {
      vocal: "Chang Mazhar",
      composer: "Treast Band",
      producer: "Ronnie Fung (R.ON)",
      mixingMastering: "Budi Muin"
    },
    featured: true
  },
  {
    id: "piyagbatuk-na-in-suratan",
    slug: "piyagbatuk-na-in-suratan",
    title: "Piyagbatuk Na In Suratan",
    artist: "Treast Band",
    featuredArtist: "Fiq & Emma",
    year: "2025",
    category: "ORIGINALS",
    language: "Tausug / Bajau / Malay",
    coverImage: "/assets/piyagbatuk_promo_16x9_v01.png",
    description: "A breathtaking cinematic ballad about fate and enduring love, featuring Sandakan's Fiq and Semporna's Emma, directed and produced by Ronnie Fung at Treast Home Recording Studio.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Piyagbatuk+Na+In+Suratan+Fiq+Emma",
    credits: {
      vocal: "Fiq & Emma",
      composer: "Budi Muin",
      lyrics: "Jonaherry",
      producer: "Ronnie Fung (R.ON)",
      director: "Ronnie Fung",
      mixingMastering: "Budi Muin"
    },
    featured: true
  },
  {
    id: "tinombong-ka",
    slug: "tinombong-ka",
    title: "Tinombong Ka",
    artist: "Ce Mon x Treast Band",
    featuredArtist: "Ce Mon",
    year: "2024",
    category: "COLLABORATIONS",
    language: "Local Sabah Dialect",
    coverImage: "/assets/tinombong_ka_cover.jpg",
    description: "A powerful collaboration fusing tribal Sabah percussion, driving guitar riffs, and Ce Mon's authentic cultural vocal phrasing.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Tinombong+Ka+Ce+Mon",
    credits: {
      vocal: "Ce Mon",
      composer: "Treast Band & Ce Mon",
      producer: "Ronnie Fung (R.ON)"
    },
    featured: true
  },
  {
    id: "kyabayaanku",
    slug: "kyabayaanku",
    title: "Kyabayaanku",
    artist: "Treast Band",
    year: "2024",
    category: "ORIGINALS",
    language: "Sabahan",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "An energetic rock track celebrating identity, freedom, and the coastal rhythm of eastern Sabah.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Kyabayaanku",
    credits: { vocal: "Treast Band", producer: "Ronnie Fung" },
    featured: true
  },
  {
    id: "landu-sa-in-lasaku",
    slug: "landu-sa-in-lasaku",
    title: "Landu Sa In Lasaku",
    artist: "Azirah X Treast",
    featuredArtist: "Azirah",
    year: "2024",
    category: "COLLABORATIONS",
    language: "Sabahan",
    coverImage: "/assets/artists/azirah.jpg",
    description: "Official music video collaboration with vocalist Azirah, blending emotional Sabahan melody with electric band instrumentation.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Azirah+Landu+Sa+In+Lasaku",
    credits: { vocal: "Azirah", producer: "Ronnie Fung" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: true
  },
  {
    id: "aku-tak-sempurna",
    slug: "aku-tak-sempurna",
    title: "Aku Tak Sempurna",
    artist: "Atikah Zaki X Treast",
    featuredArtist: "Atikah Zaki",
    year: "2024",
    category: "COLLABORATIONS",
    language: "Malay",
    coverImage: "/assets/artists/atikah_zaki.jpg",
    description: "High-octane official music video with rock vocalist Atikah Zaki.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Atikah+Zaki+Aku+Tak+Sempurna",
    credits: { vocal: "Atikah Zaki", producer: "Ronnie Fung" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: true
  },
  {
    id: "rayakan-aidilfitri",
    slug: "rayakan-aidilfitri",
    title: "Rayakan Aidilfitri",
    artist: "Treast Band",
    year: "2024",
    category: "ORIGINALS",
    language: "Malay",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "Festive rock celebration of Aidilfitri, bringing togetherness and joy from Semporna home to families across Sabah.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Rayakan+Aidilfitri",
    credits: { vocal: "Treast Collective", producer: "Ronnie Fung" },
    featured: false
  },
  {
    id: "sukacita-di-hari-raya",
    slug: "sukacita-di-hari-raya",
    title: "Sukacita Di Hari Raya",
    artist: "Treast Band",
    year: "2024",
    category: "ORIGINALS",
    language: "Malay",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "Warm festive song celebrating returning home to Sabah.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Sukacita+Di+Hari+Raya",
    credits: { vocal: "Treast Band" },
    featured: false
  },
  {
    id: "atay-nu-atay-ku",
    slug: "atay-nu-atay-ku",
    title: "Atay Nu Atay Ku",
    artist: "Treast Band",
    year: "2024",
    category: "ORIGINALS",
    language: "Sabahan",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "A rock ballad about unspoken love and distance.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Atay+Nu+Atay+Ku",
    credits: { vocal: "Treast Band" },
    featured: false
  },
  {
    id: "mamahi-panansang",
    slug: "mamahi-panansang",
    title: "Mamahi Panansang",
    artist: "Treast Band",
    featuredArtist: "Ce Mon",
    year: "2024",
    category: "COLLABORATIONS",
    language: "Local Dialect",
    coverImage: "/assets/artists/ce_mon.jpg",
    description: "Dynamic collaboration highlighting traditional Sabahan lyrical themes set against modern alternative rock.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Ce+Mon+Mamahi+Panansang",
    credits: { vocal: "Ce Mon" },
    featured: false
  },
  {
    id: "tunub-in-nanam",
    slug: "tunub-in-nanam",
    title: "Tunub In Nanam",
    artist: "Treast Band",
    year: "2025",
    category: "ORIGINALS",
    language: "Sabahan",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "2025 release promo track carrying regional melody and rock drive.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Tunub+In+Nanam",
    credits: { vocal: "Treast Band" },
    featured: false
  },
  {
    id: "terakhir-kali",
    slug: "terakhir-kali",
    title: "Terakhir Kali",
    artist: "Atikah Zaki X Treast",
    featuredArtist: "Atikah Zaki",
    year: "2024",
    category: "COLLABORATIONS",
    language: "Malay",
    coverImage: "/assets/artists/atikah_zaki.jpg",
    description: "Atmospheric rock collaboration music video featuring Atikah Zaki.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Atikah+Zaki+Terakhir+Kali",
    credits: { vocal: "Atikah Zaki", producer: "Ronnie Fung" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: false
  },
  {
    id: "masi-malasa",
    slug: "masi-malasa",
    title: "Masi Malasa",
    artist: "Treast X Pia Ramona",
    featuredArtist: "Pia Ramona",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Sabahan",
    coverImage: "/assets/artists/pia_ramona.jpg",
    description: "Official cover release featuring Pia Ramona, blending folk sensitivity with modern rock production.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Pia+Ramona+Masi+Malasa",
    credits: { vocal: "Pia Ramona", producer: "Treast Studio" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: false
  },
  {
    id: "bugtuan-napas",
    slug: "bugtuan-napas",
    title: "Bugtuan Napas",
    artist: "Treast X Pia Ramona",
    featuredArtist: "Pia Ramona",
    year: "2024",
    category: "ROCK COVERS",
    language: "Sabahan",
    coverImage: "/assets/artists/pia_ramona.jpg",
    description: "Heavy rock arrangement cover featuring soaring vocals by Pia Ramona.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Pia+Ramona+Bugtuan+Napas",
    credits: { vocal: "Pia Ramona", producer: "Treast Studio" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: false
  },
  {
    id: "kiyapag-isunan",
    slug: "kiyapag-isunan",
    title: "Kiyapag Isunan",
    artist: "Treast X Pia Ramona",
    featuredArtist: "Pia Ramona",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Sabahan",
    coverImage: "/assets/artists/pia_ramona.jpg",
    description: "Waterfront acoustic cover recorded live with Pia Ramona.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Pia+Ramona+Kiyapag+Isunan",
    credits: { vocal: "Pia Ramona" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: false
  },
  {
    id: "lasa-mag-labi",
    slug: "lasa-mag-labi",
    title: "Lasa Mag Labi",
    artist: "Pia Ramona X Treast",
    featuredArtist: "Pia Ramona",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Sabahan",
    coverImage: "/assets/artists/pia_ramona.jpg",
    description: "Intimate official cover collaboration with vocalist Pia Ramona.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Pia+Ramona+Lasa+Mag+Labi",
    credits: { vocal: "Pia Ramona" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: false
  },
  {
    id: "wayna-dugaing-lasahun",
    slug: "wayna-dugaing-lasahun",
    title: "Wayna Dugaing Lasahun",
    artist: "Treast X Wanie Amir",
    featuredArtist: "Wanie Amir",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Sabahan",
    coverImage: "/assets/artists/wanie_amir.jpg",
    description: "Official cover featuring Wanie Amir with acoustic and electric backing.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Wanie+Amir+Wayna+Dugaing+Lasahun",
    credits: { vocal: "Wanie Amir" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: false
  },
  {
    id: "sabalan",
    slug: "sabalan",
    title: "Sabalan",
    artist: "Treast X Latiff Rashid",
    featuredArtist: "Latiff Rashid",
    year: "2023",
    category: "OFFICIAL COVERS",
    language: "Malay / Heritage",
    coverImage: "/assets/artists/latif_rashid.jpg",
    description: "Heritage cover honoring regional songcraft with vintage acoustic work.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Latiff+Rashid+Sabalan",
    credits: { vocal: "Latiff Rashid" },
    sourcePlatform: "Treast Official YouTube",
    verification: "Verified on YouTube Official Channel",
    featured: false
  },
  {
    id: "kalasahanku",
    slug: "kalasahanku",
    title: "Kalasahanku",
    artist: "Treast Band",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Tausug / Sabahan",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "Official cover of traditional Sabahan love song.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Kalasahanku",
    credits: { vocal: "Treast Band" },
    sourcePlatform: "Treast Official YouTube",
    featured: false
  },
  {
    id: "nagtatapok-sin-bayah",
    slug: "nagtatapok-sin-bayah",
    title: "Nagtatapok Sin Bayah",
    artist: "Treast Band",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Tausug",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "Rock arrangement of Tausug classic song.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Nagtatapok+Sin+Bayah",
    credits: { vocal: "Treast Band" },
    sourcePlatform: "Treast Official YouTube",
    featured: false
  },
  {
    id: "astana-kasilasa",
    slug: "astana-kasilasa",
    title: "Astana Kasilasa",
    artist: "Treast Band",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Tausug",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "Atmospheric cover of traditional ballad 'Astana Kasilasa'.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Astana+Kasilasa",
    credits: { vocal: "Treast Band" },
    sourcePlatform: "Treast Official YouTube",
    featured: false
  },
  {
    id: "hitangis-kura-kuman",
    slug: "hitangis-kura-kuman",
    title: "Hitangis Kura Kuman",
    artist: "Treast Band",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Tausug",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "Regional heritage Tausug song reinterpreted with rock instrumentation.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Hitangis+Kura+Kuman",
    credits: { vocal: "Treast Band" },
    sourcePlatform: "Treast Official YouTube",
    featured: false
  },
  {
    id: "ikaw-na-in-panagnaan",
    slug: "ikaw-na-in-panagnaan",
    title: "Ikaw Na In Panagnaan",
    artist: "Treast Band",
    year: "2024",
    category: "OFFICIAL COVERS",
    language: "Tausug",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "Semporna coastal acoustic cover release.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Ikaw+Na+In+Panagnaan",
    credits: { vocal: "Treast Band" },
    sourcePlatform: "Treast Official YouTube",
    featured: false
  },
  {
    id: "alpha-kappa-rho",
    slug: "alpha-kappa-rho",
    title: "Alpha Kappa Rho",
    artist: "Treast Band",
    year: "2024",
    category: "OTHER",
    language: "Sabahan",
    coverImage: "/assets/hero_band_stage.jpg",
    description: "Special tribute performance release on official YouTube.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Treast+Band+Alpha+Kappa+Rho",
    credits: { vocal: "Treast Band" },
    sourcePlatform: "Treast Official YouTube",
    featured: false
  }
];

export const PRODUCERS: Producer[] = [
  {
    name: "Ronnie Fung",
    artistName: "R.ON",
    title: "MAIN PRODUCER / DIRECTOR",
    role: "Overall Production Lead & Creative Direction",
    bio: "Ronnie Fung, creatively known as R.ON, leads overall production development behind Treast's expanding body of work at Treast Home Recording Studio in Semporna. Drawing on more than two decades of experience across music, film, advertising and visual storytelling.",
    status: "Confirmed"
  },
  {
    name: "Dato Hazriel",
    title: "ASSOCIATE PRODUCER / CREATIVE COLLABORATOR",
    role: "Project Coordination & Lyricist",
    bio: "Dato Hazriel works alongside the band and production team across creative development, project coordination and visual production.",
    note: "Also referenced as Datu Hazriel in select reference documents.",
    status: "Title spelling confirmation pending"
  }
];

export const SERVICES: Service[] = [
  {
    id: "live-performance",
    title: "Live Performance Booking",
    description: "Bring the energy of Treast Band to your stage — from festivals and cultural celebrations to corporate launches, weddings and private events.",
    ctaText: "Book Performance",
    tag: "Stage & Tour"
  },
  {
    id: "songwriting",
    title: "Original Songwriting & Arrangement",
    description: "Turn your story, campaign or emotional message into a fully produced original composition crafted by our songwriting collective.",
    ctaText: "Create a Song",
    tag: "Creative"
  },
  {
    id: "music-production",
    title: "Music Production",
    description: "From demo concept to final master — arrangement, recording coordination, vocal direction, mixing and mastering at Treast Home Recording Studio.",
    ctaText: "Start Music Project",
    tag: "Studio"
  },
  {
    id: "mv-production",
    title: "Music Video Production",
    description: "Complete cinematic visual storytelling — scriptwriting, filming on location in Sabah, lighting, direction, and post-production.",
    ctaText: "Produce Video",
    tag: "Film"
  },
  {
    id: "jingles",
    title: "Commercial Jingles & Theme Songs",
    description: "Original branded audio identity for products, corporate campaigns, and television/radio scored with Sabah soul.",
    ctaText: "Discuss Commercial",
    tag: "Branded"
  }
];

export const LIVE_FORMATS = [
  "Full Treast Band (Electric Rock Stage)",
  "Acoustic / Unplugged Set",
  "Treast with Featured Vocalists",
  "Festival & Cultural Celebration Format",
  "Corporate Event & Product Launch",
  "Wedding & Private Celebration",
  "Custom Theme Song with Live Premiere"
];
