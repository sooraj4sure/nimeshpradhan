import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { ABOUT_IMG, IG_URL, EMAIL } from "@/app/data";

export default function AboutPage() {
  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">About</span>
        <h1 className="display">The guy behind the itineraries.</h1>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap about-grid">
          <Reveal>
            <div className="about-photo">
              <img src={ABOUT_IMG} alt="Animesh Pradhan travelling with a camera" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="about-body">
              <span className="eyebrow">Bhubaneswar · India</span>
              <h2 className="display">Hi, I&apos;m Animesh.</h2>
              <p>
                I&apos;m a travel creator from Bhubaneswar, Odisha. I make itineraries,
                destination guides and stay recommendations — mostly international trips,
                planned the way an Indian traveller actually plans them: in rupees, with
                real budgets, and without the guesswork.
              </p>
              <p>
                My reels do one simple thing: they show you a place, then hand you the plan.
                Comment “Itinerary” or “Destination” and the full day-wise guide — with the
                budget breakdown — comes straight to your DMs.
              </p>
              <p>
                So far that has meant 25+ countries — Vietnam, Georgia, Thailand, Kenya,
                Switzerland, the UAE and more — and a community of over 219,000 travellers
                who plan their trips from my guides.
              </p>

              <div className="stat-row">
                <div className="stat-cell"><b><CountUp to={219} suffix="K+" /></b><span>Followers</span></div>
                <div className="stat-cell"><b><CountUp to={25} suffix="+" /></b><span>Countries</span></div>
                <div className="stat-cell"><b><CountUp to={459} suffix="" /></b><span>Posts</span></div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn-terra" href={IG_URL} target="_blank" rel="noreferrer">Follow on Instagram ↗</a>
                <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>Email Animesh</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
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
              <p style={{ marginTop: 18, color: "#cfe4e0", fontSize: 15, lineHeight: 1.65 }}>
                The reel that made the news: Phu Quoc, Vietnam — the island where every corner
                looks like a different country. It pulled 44K likes and a flood of
                “Itinerary please” comments.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="cta-band" style={{ marginTop: 28 }}>
              <h2 className="display">Brands — let&apos;s work together.</h2>
              <p>Destinations, stays, airlines and travel gear — if it helps Indian travellers travel better, Animesh wants to hear from you.</p>
              <Link href="/work-with-me" className="btn btn-terra">Work with Animesh →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
