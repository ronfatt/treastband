# ANTIGRAVITY — YOUTUBE / MUSIC DATABASE V2 UPGRADE

Upgrade the current Treast website architecture so the site behaves like a music label / artist collective catalogue.

## Core relational models

### Artist
id
slug
name
artist_type: core_member | featured_vocalist | collaborator | producer
instrument
portrait
hero_image
origin
languages[]
genres[]
short_bio
full_bio
social_links[]
featured

### Release
id
slug
title
release_type: original | collaboration | official_cover | rock_cover | live | other
primary_artist_id
featured_artist_ids[]
release_date
year
language
cover_image
hero_image
description
youtube_url
spotify_url
apple_music_url
featured
credits[]

### Video
id
youtube_id
title
release_id
artist_ids[]
video_type: official_mv | cover | live | lyric | behind_the_scenes
thumbnail_url
published_at
duration
youtube_url
featured

### Credit
release_id
person_name
role
verified
source

## Dynamic relationships

On an ARTIST page:
show all associated releases and videos automatically.

On a RELEASE page:
show all participating artists, credits and related releases.

On the HOME page:
allow editors to mark a release/video as featured without editing UI code.

## Filters
ALL
ORIGINAL
COLLABORATION
COVER
LIVE

Optional language filters should be generated from database values.

## YouTube integration
Use Treast Official as the canonical public video channel:
https://www.youtube.com/@treastofficial

Do not scrape client-side on every page load.
Store curated video records in the database/CMS.
YouTube URLs and thumbnail IDs can be added/updated through admin/content data.

## Content integrity
Never invent credits.
If a credit has not been verified, omit it from the public page.
