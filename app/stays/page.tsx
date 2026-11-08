import Link from "next/link";
import Reveal from "@/components/Reveal";
import SamplePill from "@/components/SamplePill";
import { STAYS, IG_URL } from "@/app/data";

export default function StaysPage() {
  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Stays &amp; Hotels</span>
        <h1 className="display">Where to sleep, from someone who stayed there.</h1>
        <p>
          Stays are half the trip — Animesh films the rooms, the breakfasts and the
          views, so you can book with confidence instead of guessing from listing photos.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <div className="grid grid-3">
            {STAYS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.07}>
                <article className="card">
                  <div className="card-media">
                    <img src={s.img} alt={s.title} loading="lazy" />
                    <span className="card-tag">{s.type}</span>
                  </div>
                  <div className="card-body">
                    <h3>
                      {s.title}
                      <SamplePill />
                    </h3>
                    <p>{s.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.14}>
              <article className="card" style={{ background: "var(--teal-deep)", border: "none" }}>
                <div className="card-body" style={{ padding: 28 }}>
                  <h3 style={{ color: "#fff" }}>Want the exact stay list?</h3>
                  <p style={{ color: "#cfe4e0" }}>
                    Every itinerary comes with the stays Animesh picked for that trip —
                    with the booking links, the room to ask for, and what it costs.
                  </p>
                  <a
                    className="btn btn-terra btn-sm"
                    style={{ marginTop: 18 }}
                    href={IG_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask on Instagram ↗
                  </a>
                </div>
              </article>
            </Reveal>
          </div>

          <p className="note">
            Stay picks shown here are sample selections for preview — the real list uses
            the hotels and lodges Animesh has personally stayed at, with his own photos
            and honest notes.
          </p>

          <div className="cta-band" style={{ marginTop: 36 }}>
            <h2 className="display">Planning a stay-first trip?</h2>
            <p>Tell Animesh the destination and the budget — the stay shortlist comes back over DM.</p>
            <Link href="/itineraries" className="btn btn-terra">See sample itineraries →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
