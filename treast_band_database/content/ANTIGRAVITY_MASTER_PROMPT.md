# ANTIGRAVITY MASTER BUILD PROMPT — TREAST BAND

Build a premium, international-standard official website for **TREAST BAND**, an independent Malaysian rock band and creative music collective based in **Semporna, Sabah, Malaysia**.

## Brand
Primary tagline: **THE SOUND OF SEMPORNA**
Supporting line: **Born in Semporna. Rooted in culture. Made for the world.**
Tone: independent, powerful, original, cinematic, culturally rooted, contemporary.
Do NOT make the website look like a tourism agency, wedding entertainment company, karaoke band, or generic corporate template.

## Source of truth
Load and treat `/data/treast_database.json` as the structured content source.
Use `/assets` for current local imagery.
Use `/content/previous_official_website_copy.md` as editorial source material.
Any item flagged “needs confirmation” or “status: project material” must be easy to edit from the CMS/data layer.

## Pages
1. Home
2. Our Story
3. The Band
4. Artists
5. Music
6. Productions
7. Live & Booking
8. Contact

## Homepage
Create a full-screen cinematic hero with background video/image.
Typography should feel like a global rock/alternative artist campaign.
Headline: THE SOUND OF SEMPORNA.
Primary CTA: LISTEN TO OUR MUSIC.
Secondary CTA: BOOK TREAST.
Add an immersive scroll transition using words:
ROOTS / RHYTHM / BROTHERHOOD / FREEDOM / SEMPORNA.

Then show:
- four-member band introduction
- latest featured release
- selected featured vocalists
- music video reel
- “From Semporna to the World” story section
- live performance section
- booking CTA

## Music database UI
Every release needs:
slug, title, cover, year/date, artist, featured_artist, language, category,
description, credits[], youtube_url, spotify_url, apple_music_url,
gallery[], lyrics_optional, featured boolean.

Create filters:
ALL / ORIGINALS / COLLABORATIONS / LIVE / COVERS.

## Artist database UI
Each artist:
name, role, instrument, portrait, hero_image, short_bio, full_bio,
origin, languages, style, associated_songs[], social_links[].

Core band members must be visually separated from featured vocalists.

## Interaction
- Smooth section transitions, no gimmicky excessive animation.
- Subtle parallax on full-width photography.
- Video hover previews for releases on desktop.
- Tap-friendly mobile interactions.
- Sticky mobile CTA: LISTEN / WATCH / BOOK.
- Preserve excellent performance and accessibility.
- Lazy load media.
- Respect prefers-reduced-motion.

## Design
Dark cinematic base.
Large editorial typography.
Warm amber/gold accents only as highlights.
Texture inspired by Borneo night, stage light, sea haze and tropical shadow.
Use negative space.
Avoid excessive rounded SaaS cards.
Use cinematic grids, magazine layouts and full-bleed sections.
Photos should be treated like music editorial photography, not travel photos.

## Technical
Create reusable components and a clean data/content layer.
Do not hard-code member/release details inside page components.
Add SEO metadata and OpenGraph per release and artist.
Add JSON-LD for MusicGroup, MusicAlbum/MusicRecording and Event when data exists.
Responsive breakpoints must prioritize mobile.
Create placeholders for missing photos without inventing people or biographies.

## Booking
Form fields:
Name
Company / Organisation
Email
WhatsApp
Event Type
Event Date
Venue / City
Estimated Audience
Performance Format
Message

Public contact currently stored in database:
+60 13-436 0024
treast.band@gmail.com

## Final rule
The emotional impression should be:
“An original band from a small coastal town in Borneo that has a real identity and is ready for a wider regional/international audience.”
