import Link from "next/link";
import Reveal from "@/components/Reveal";
import SamplePill from "@/components/SamplePill";
import { COLLABS, COLLAB_PACKAGES, EMAIL } from "@/app/data";

const STEPS = [
  {
    title: "Reach out",
    text: "Tell Animesh the brand, the destination and the dates — by email or Instagram DM. He replies personally, usually within a day or two.",
  },
  {
    title: "Plan the trip together",
    text: "Dates, deliverables and the story angle are agreed before anything is booked — so the content fits the trip, not the other way round.",
  },
  {
    title: "Publish & report",
    text: "Reels, stories and the itinerary go live, and the brand gets the numbers that matter — views, saves, shares and link clicks.",
  },
];

export default function BrandCollabsPage() {
  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Brand Collaborations</span>
        <h1 className="display">Brands travel with Animesh.</h1>
        <p>
          Destinations, stays, airlines and travel brands — Animesh works with the
          places his audience is already planning to visit, and films them the way
          he films his own trips: itinerary-first, budget-honest, and built to be saved.
        </p>
        <div className="stat-row">
          <div className="stat-cell">
            <b>219K+</b>
            <span>Instagram followers</span>
          </div>
          <div className="stat-cell">
            <b>25+</b>
            <span>Countries covered</span>
          </div>
          <div className="stat-cell">
            <b>459</b>
            <span>Posts &amp; reels</span>
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <h2 className="display" style={{ fontSize: 30, marginBottom: 8 }}>
            Previous collaborations
          </h2>
          <p className="muted" style={{ marginBottom: 26, fontSize: 15, lineHeight: 1.6 }}>
            The trips and stays Animesh has already made with brands.
          </p>
          <div className="grid grid-3">
            {COLLABS.map((c, i) => (
              <Reveal key={c.brand} delay={(i % 3) * 0.07}>
                <article className="card">
                  <div className="card-media">
                    <img src={c.img} alt={c.brand} loading="lazy" />
                    <span className="card-tag">{c.kind}</span>
                  </div>
                  <div className="card-body">
                    <h3>
                      {c.brand}
                      {c.sample && <SamplePill />}
                    </h3>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "var(--terra-deep)", marginBottom: 8 }}>
                      {c.place}
                    </p>
                    <p>{c.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="note">
            Only the Kenya safari is confirmed from Animesh&apos;s own posts — the
            other cards are samples showing how past work will appear once he confirms
            his collab list.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <h2 className="display" style={{ fontSize: 30, marginBottom: 8 }}>
            Work with Animesh
          </h2>
          <p className="muted" style={{ marginBottom: 26, fontSize: 15, lineHeight: 1.6 }}>
            Four ways to collaborate. Packages are a starting point — Animesh confirms
            the final deliverables and rates for each brand. Pricing is on request.
          </p>
          <div className="grid grid-3">
            {COLLAB_PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.07}>
                <article className="card">
                  <div className="card-body">
                    <h3>{p.name}</h3>
                    <p>{p.tagline}</p>
                    <p style={{ fontSize: 14, lineHeight: 1.9, color: "var(--ink-2)" }}>
                      {p.includes.map((line) => (
                        <span key={line}>
                          • {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    <p style={{ marginTop: 14, fontSize: 15 }}>
                      <b style={{ color: "var(--terra-deep)" }}>Price on request</b>
                    </p>
                    <a
                      className="btn btn-terra btn-sm"
                      style={{ marginTop: 12 }}
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        `Collab quote — ${p.name}`
                      )}&body=${encodeURIComponent(
                        `Hi Animesh,\n\nI'm interested in the ${p.name} package for our brand.\n\nBrand: \nDates: \nDestination: \n\n— Sent from animeshpradhan.com (demo)`
                      )}`}
                    >
                      Get a quote →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <h2 className="display" style={{ fontSize: 30, marginBottom: 26 }}>
            How it works
          </h2>
          <div className="grid grid-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="step">
                  <div className="step-num">{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="cta-band" style={{ marginTop: 36 }}>
            <h2 className="display">Ready to plan a trip together?</h2>
            <p>Send an enquiry and Animesh will get back to you with a plan and a quote.</p>
            <Link href="/work-with-me" className="btn btn-terra">
              Send a collab enquiry →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
