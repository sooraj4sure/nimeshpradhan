import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { HERO_IMG, HOW_IMG, DESTINATIONS, IG_URL, EMAIL } from "@/app/data";

const FEATURED = [
  { country: "Vietnam", place: "Phu Quoc Island", img: DESTINATIONS[1].img, text: "The island that looks like five countries at once — the reel that hit 44K likes." },
  { country: "Kenya", place: "Amboseli Safari", img: DESTINATIONS[14].img, text: "Elephants under Kilimanjaro — filmed with Wildora Voyages in May 2026." },
  { country: "Georgia", place: "Tbilisi & Kazbegi", img: DESTINATIONS[11].img, text: "Mountain churches, wine valleys and old-town streets made for reels." },
  { country: "Switzerland", place: "The Alps", img: DESTINATIONS[15].img, text: "Lakes, trains and viewpoints — the Europe trip every Indian traveller dreams of." },
];

const STEPS = [
  { n: "1", title: "Pick a destination", text: "Scroll the destinations — 25+ countries across India, Southeast Asia, Europe, the Middle East and Africa." },
  { n: "2", title: "Comment “Itinerary”", text: "On Instagram, comment “Itinerary” or “Destination” on the reel and Animesh sends the full guide over DM." },
  { n: "3", title: "Travel with the plan", text: "Day-wise plans, stays and an indicative budget — built for Indian travellers, in rupees, with real costs." },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-media">
          <img src={HERO_IMG} alt="Traveller watching the sunrise over the mountains" />
          <div className="hero-content">
            <div className="wrap">
              {/* <span className="hero-kicker">✈ @_animeshpradhan_official · Bhubaneswar, India</span> */}
              <h1 className="display">
                Itineraries, destinations &amp; stays — <em>planned for Indian travellers.</em>
              </h1>
              <p className="hero-sub">
                Budget-friendly international trips with day-wise plans, honest budgets and
                the stays worth booking — from Phu Quoc to Kazbegi to Amboseli.
              </p>
              <div className="hero-actions">
                <Link href="/destinations" className="btn btn-terra">Explore destinations →</Link>
                <Link href="/itineraries" className="btn btn-ghost">See sample itineraries</Link>
              </div>
              <div className="hero-strip">
                <div className="hero-stat"><b><CountUp to={219} suffix="K+" /></b><span>Instagram followers</span></div>
                <div className="hero-stat"><b><CountUp to={25} suffix="+" /></b><span>Countries covered</span></div>
                <div className="hero-stat"><b><CountUp to={459} suffix="" /></b><span>Posts &amp; reels</span></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Featured destinations</span>
              <h2 className="display">Where Animesh has been lately</h2>
              <p>Four trips his audience keeps asking about — the full list covers 25+ countries.</p>
            </div>
          </Reveal>
          <div className="grid grid-2">
            {FEATURED.map((f, i) => (
              <Reveal key={f.place} delay={i * 0.08}>
                <article className="card">
                  <div className="card-media">
                    <img src={f.img} alt={`${f.place}, ${f.country}`} loading="lazy" />
                    <span className="card-tag">{f.country}</span>
                  </div>
                  <div className="card-body">
                    <h3>{f.place}</h3>
                    <p>{f.text}</p>
                    <Link href="/destinations" className="card-link">See all destinations →</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)", paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2 className="display">From a reel to a ready trip</h2>
              <p>No spreadsheets, no guesswork — the itinerary comes to your DMs.</p>
            </div>
          </Reveal>
          <div className="grid grid-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="step">
                  <div className="step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn btn-teal" href={IG_URL} target="_blank" rel="noreferrer">Follow on Instagram ↗</a>
              <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>Business enquiries</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="press">
              <span className="eyebrow">In the press</span>
              <blockquote>
                “Travel influencer Animesh Pradhan says Vietnam can make Indians feel like
                crorepatis — an affordable international destination, with a full itinerary
                and budget breakdown for Indian travellers.”
              </blockquote>
              <cite>Times Now — 16 October 2026</cite>
              <div style={{ marginTop: 26 }}>
                <Link href="/about" className="btn btn-terra btn-sm">More about Animesh →</Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="cta-band" style={{ marginTop: 28 }}>
              <h2 className="display">Planning a trip? Start with the guide.</h2>
              <p>
                Comment “Itinerary” on any reel, or write to Animesh directly — the full
                day-wise plan and budget breakdown comes over DM.
              </p>
              <a className="btn btn-terra" href={IG_URL} target="_blank" rel="noreferrer">DM “Itinerary” on Instagram ↗</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
