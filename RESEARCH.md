# Animesh Pradhan — demo research (v1)

Built 2026-11-08 for Evenlyn Studio. Animesh replied to our influencer pitch
(2026-11-07, Batch 1) asking for examples + a demo before proceeding.

## Verified facts (2026-11-08)

- **Name:** Animesh Pradhan
- **Instagram:** @_animeshpradhan_official — 219,679 followers, 459 posts, creator
  account, based Bhubaneswar, India. (instagram-cli profile read 2026-11-08.)
- **Bio:** "Travel Itineraries📝/ Destinations📍/Stays & Hotel🏠 — INDIA🇮🇳 &
  🇰🇿🇬🇪🇹🇭🇱🇦🇲🇾🇸🇬🇻🇳🇦🇪🇭🇰🇹🇼🇦🇿🇱🇰🇨🇭🇦🇹🇩🇪🇨🇿🇸🇰🇭🇺🇳🇱🇧🇪🇫🇷🇰🇪🇰🇭"
  — i.e. India + Kazakhstan, Georgia, Thailand, Laos, Malaysia, Singapore,
  Vietnam, UAE, Hong Kong, Taiwan, Azerbaijan, Sri Lanka, Switzerland, Austria,
  Germany, Czechia, Slovakia, Hungary, Netherlands, Belgium, France, Kenya,
  Cambodia.
- **Business email:** animeshinsta16@gmail.com (from bio; enquiry button uses this).
- **Content style:** budget-friendly international trips for Indian travellers.
  Reels ask viewers to comment "Itinerary" or "Destination" for a full guide +
  budget breakdown via DM.
- **Known features:**
  - Phu Quoc, Vietnam reel (27 Dec 2025, 44K likes) — "This is NOT Italy /
    Disneyland" replica-landmarks format; caption pitches Phu Quoc as a
    visa-friendly island for Indians.
  - Kenya safari, May 2026 — Amboseli National Park, with @wildoravoyages and
    @SIMBALODGES (Instagram posts read 2026-11-08).
  - Times Now, 16 Oct 2026: "Travel Influencer Animesh Pradhan Says Vietnam Can
    Make Indians Feel Like Crorepatis" — reel pitches Vietnam as affordable for
    Indian travellers, comment "Destination" for itinerary + budget via DM.
- **Website:** none — verified CLEAR in the lead file (leads-50.json, niche-travel);
  name+city search found no own website, only social profiles and news coverage.
- **Reply:** Sat 7 Nov 2026, 22:17 IST — "definitely interested in having a
  website for my handle! Please share some more details with few examples of
  websites you've built for other creators. I'd also be happy to review a demo
  website before proceeding."

## What the demo does NOT claim

- No past brand collabs are named anywhere — none were verified. The Work With
  Me page lists what brands get (dedicated reels, itinerary features, stays
  features) and says past work is listed once Animesh confirms it.
- Itinerary budgets are labelled "Indicative" and "confirmed by Animesh before
  publishing" — they are NOT his prices.
- All 3 itineraries (Vietnam–Phu Quoc 5 days, Georgia 6 days, Kenya safari
  4 days) are labelled "Sample itinerary".
- Photos are Unsplash stand-ins (all URLs verified HTTP 200 on 2026-11-08);
  pages note Animesh's own photos replace them at launch.

## Design

Own design — NOT the vix-travel look. Bright, warm, guide-like: warm paper
(#fff8ef), deep teal (#0c4a4a), sunrise terracotta (#e05d38), amber accents.
Fraunces display serif + Inter body. Mobile-first. Floating Instagram button
(bottom-right, icon-only) linking to his profile. "Demo website by Evenlyn
Studio" strip in the footer.

## Pages (6)

- `/` Home — hero, stats (219K+ / 25+ countries / 459 posts), featured
  destinations, how-it-works, Times Now press quote.
- `/destinations` — filterable grid by region (21 country cards).
- `/itineraries` — 3 sample itineraries, day-wise, labelled Sample.
- `/stays` — 5 stay-type cards, labelled sample picks.
- `/about` — story, stats, Times Now feature.
- `/work-with-me` — collab offer + enquiry form (mailto: animeshinsta16@gmail.com).

## Build

Next.js 14 + TypeScript + framer-motion (plain CSS, no Tailwind — same stack as
the other creator demos). `npm run build` clean 2026-11-08 (6 routes, static).
Zip: ~/workspace/your_files/animesh-travel-demo-v1.zip
