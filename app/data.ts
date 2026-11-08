// Animesh Pradhan — demo content. Facts verified 2026-11-08 (see RESEARCH.md).
// Photos are illustrative Unsplash stand-ins — Animesh's own photos replace them at launch.
// Itinerary prices are NOT his — budgets are labelled indicative only.

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

export const HERO_IMG = U("1503220317375-aaad61436b1b");
export const HOW_IMG = U("1530789253388-582c481c54b0");
export const ABOUT_IMG = U("1488646953014-85cb44e25828");

export const IG_URL = "https://www.instagram.com/_animeshpradhan_official";
export const EMAIL = "animeshinsta16@gmail.com";

export type Region =
  | "India"
  | "Southeast Asia"
  | "East Asia"
  | "Central Asia & Caucasus"
  | "Middle East & Africa"
  | "Europe";

export const REGIONS: Region[] = [
  "India",
  "Southeast Asia",
  "East Asia",
  "Central Asia & Caucasus",
  "Middle East & Africa",
  "Europe",
];

export interface Destination {
  country: string;
  place: string;
  region: Region;
  img: string;
  hook: string;
}

export const DESTINATIONS: Destination[] = [
  { country: "India", place: "Agra & beyond", region: "India", img: U("1524492412937-b28074a5d7da"), hook: "Home turf first — the classics and the corners of India most itineraries skip." },
  { country: "Vietnam", place: "Phu Quoc Island", region: "Southeast Asia", img: U("1528127269322-539801943592"), hook: "The island that looks like five countries at once — beaches, replica towns and night markets." },
  { country: "Thailand", place: "Islands & Bangkok", region: "Southeast Asia", img: U("1552465011-b4e21bf6e79a"), hook: "Longtail boats, island hops and street food — the first international trip for most Indians." },
  { country: "Laos", place: "Luang Prabang", region: "Southeast Asia", img: U("1476514525535-07fb3b4ae5f1"), hook: "Slow rivers, morning alms and waterfalls — Southeast Asia at its calmest." },
  { country: "Cambodia", place: "Siem Reap", region: "Southeast Asia", img: U("1563492065599-3520f775eeed"), hook: "Angkor at sunrise, then the temples nobody queues for." },
  { country: "Malaysia", place: "Highlands & Langkawi", region: "Southeast Asia", img: U("1537996194471-e657df975ab4"), hook: "Tea terraces in the morning, island beaches by evening." },
  { country: "Singapore", place: "The city-state", region: "Southeast Asia", img: U("1525625293386-3f8f99389edd"), hook: "A perfect first international trip — clean, compact and packed with viewpoints." },
  { country: "Sri Lanka", place: "South coast", region: "Southeast Asia", img: U("1507525428034-b723cf961d3e"), hook: "Palm-lined beaches, trains along the coast and food worth the flight alone." },
  { country: "Hong Kong", place: "Harbour city", region: "East Asia", img: U("1536599018102-9f803c140fc1"), hook: "Skyline ferries, night markets and viewpoints that cost almost nothing." },
  { country: "Taiwan", place: "Taipei", region: "East Asia", img: U("1508009603885-50cf7c579365"), hook: "Night markets, hot springs and mountain day-trips from one easy base." },
  { country: "Kazakhstan", place: "Almaty & the steppe", region: "Central Asia & Caucasus", img: U("1506905925346-21bda4d32df4"), hook: "Big-sky mountains and canyons, a short hop from India — and still underrated." },
  { country: "Georgia", place: "Tbilisi & Kazbegi", region: "Central Asia & Caucasus", img: U("1563284223-333497472e88"), hook: "Mountain churches, wine valleys and old-town streets that feel made for reels." },
  { country: "Azerbaijan", place: "Baku & the Caucasus", region: "Central Asia & Caucasus", img: U("1519681393784-d120267933ba"), hook: "Flame towers by night, mountain villages by day." },
  { country: "UAE", place: "Dubai & Abu Dhabi", region: "Middle East & Africa", img: U("1512453979798-5ea266f8880c"), hook: "The desert-meets-skyline trip — dunes at dawn, Marina lights at night." },
  { country: "Kenya", place: "Amboseli safari", region: "Middle East & Africa", img: U("1516426122078-c23e76319801"), hook: "Elephants under Kilimanjaro — the safari Animesh filmed with Wildora Voyages." },
  { country: "Switzerland", place: "The Alps", region: "Europe", img: U("1527668752968-14dc70a27c95"), hook: "Lakes, trains and viewpoints — the Europe trip every Indian traveller dreams of." },
  { country: "Austria", place: "Hallstatt & Vienna", region: "Europe", img: U("1501785888041-af3ef285b470"), hook: "Lakeside villages and coffee-house cities, done slowly." },
  { country: "Germany", place: "Bavaria & Berlin", region: "Europe", img: U("1467269204594-9661b134dd2b"), hook: "Storybook towns, castles and Christmas-market streets." },
  { country: "France", place: "Paris", region: "Europe", img: U("1502602898657-3e91760cbb34"), hook: "The classic, minus the tourist traps — viewpoints, cafés and day trips." },
  { country: "Netherlands", place: "Amsterdam", region: "Europe", img: U("1534351590666-13e3e96b5017"), hook: "Canals, bikes and tulip fields — Europe at its most photogenic." },
  { country: "Czechia", place: "Prague", region: "Europe", img: U("1541849546-216549ae216d"), hook: "Castle views and old-town squares that look like a film set." },
];

export interface Itinerary {
  slug: string;
  title: string;
  days: string;
  region: string;
  img: string;
  intro: string;
  plan: { day: string; title: string; text: string }[];
  budget: string;
}

export const ITINERARIES: Itinerary[] = [
  {
    slug: "phu-quoc",
    title: "Phu Quoc, Vietnam",
    days: "5 days",
    region: "Southeast Asia",
    img: U("1559494007-9f5847c49d94"),
    intro:
      "The island from Animesh's viral reel — the one where every corner looks like a different country. Beaches, the replica towns, night markets and the world's longest sea cable car.",
    plan: [
      { day: "Day 1", title: "Arrive & Sunset Town", text: "Land, check in near the south coast, and walk Sunset Town as the lights come on — the first taste of the island's replica streets." },
      { day: "Day 2", title: "South island & Sao Beach", text: "Sao Beach in the morning, a fishing village at lunch, and the cable car over the water at golden hour." },
      { day: "Day 3", title: "Grand World — the 'This is NOT' day", text: "The Venice canal, the castle and the Colosseum-style arena from the reel — plus the night show and fireworks." },
      { day: "Day 4", title: "North island", text: "VinWonders and the safari park, then the night market for street food and souvenirs." },
      { day: "Day 5", title: "Slow morning, fly out", text: "A beach café breakfast, one last swim, and the flight home with the full photo set." },
    ],
    budget: "Indicative budget (excl. international flights): roughly ₹40,000–₹55,000 per person — stays, food, transport and entry tickets. Animesh confirms the final figure before publishing.",
  },
  {
    slug: "georgia",
    title: "Georgia — Tbilisi to Kazbegi",
    days: "6 days",
    region: "Central Asia & Caucasus",
    img: U("1563284223-333497472e88"),
    intro:
      "Mountains, wine and old towns — Georgia is the Europe trip that costs half as much and photographs twice as well. Tbilisi's lanes, the road to Kazbegi and the Kakheti vineyards.",
    plan: [
      { day: "Day 1", title: "Tbilisi old town", text: "Sulphur baths, the Narikala fortress viewpoint and dinner in the old town's wine bars." },
      { day: "Day 2", title: "The road to Kazbegi", text: "Ananuri fortress, the Friendship Arch and the mountain road up to Stepantsminda." },
      { day: "Day 3", title: "Gergeti Trinity Church", text: "The hike (or drive) to the church under Mount Kazbek — the shot that defines Georgia." },
      { day: "Day 4", title: "Kakheti wine region", text: "Vineyards, qvevri wine tasting and a supra feast with a local family." },
      { day: "Day 5", title: "Mtskheta & Tbilisi food walk", text: "The ancient capital in the morning, then khachapuri, khinkali and the markets back in Tbilisi." },
      { day: "Day 6", title: "Last bazaar, fly out", text: "A slow breakfast, the Dezerter Bazaar for souvenirs, and the flight home." },
    ],
    budget: "Indicative budget (excl. international flights): roughly ₹55,000–₹75,000 per person — stays, food, transport and entry tickets. Animesh confirms the final figure before publishing.",
  },
  {
    slug: "kenya-safari",
    title: "Kenya — Amboseli Safari",
    days: "4 days",
    region: "Middle East & Africa",
    img: U("1547471080-7cc2caa01a7e"),
    intro:
      "The safari Animesh filmed in May 2026 with Wildora Voyages — game drives in Amboseli National Park, elephants with Kilimanjaro behind them, and nights at a safari lodge.",
    plan: [
      { day: "Day 1", title: "Nairobi to Amboseli", text: "Drive south to the park, check in at the lodge, and head out for the first evening game drive." },
      { day: "Day 2", title: "Full-day game drive", text: "Dawn start for the best light — elephants, lions and Kilimanjaro on the horizon if the clouds lift." },
      { day: "Day 3", title: "Maasai village & sundowner", text: "A morning with a Maasai community, an afternoon rest at the lodge, and a sundowner drive." },
      { day: "Day 4", title: "Sunrise drive, fly out", text: "One last sunrise drive, breakfast at the lodge, and the road back to Nairobi." },
    ],
    budget: "Indicative budget (excl. international flights): roughly ₹85,000–₹1,10,000 per person — lodge stay, park fees, drives and meals. Animesh confirms the final figure before publishing.",
  },
];

export interface Stay {
  type: string;
  title: string;
  img: string;
  text: string;
}

export const STAYS: Stay[] = [
  { type: "Boutique stays", title: "Small hotels with a story", img: U("1566073771259-6a8506099945"), text: "The stays Animesh actually books — family-run boutique hotels and guesthouses where the host knows the best sunrise spot." },
  { type: "Safari lodges", title: "Nights in the bush", img: U("1516426122078-c23e76319801"), text: "Lodges a short drive from the animals — wake up to elephants, fall asleep to the sounds of the savanna." },
  { type: "Island resorts", title: "Beachfront, done right", img: U("1573843981267-be1999ff37cd"), text: "Island resorts in Phu Quoc and beyond — the ones worth the splurge, and the ones to skip." },
  { type: "Mountain stays", title: "High-altitude mornings", img: U("1470071459604-3b5ec3a7fe05"), text: "Guesthouses in Kazbegi, the Alps and the Himalayas — where the view from the window is the whole point." },
  { type: "City stays", title: "Bases for big cities", img: U("1536599018102-9f803c140fc1"), text: "Well-located city hotels in Singapore, Hong Kong, Dubai and Tbilisi — close to the metro, close to the food." },
];
