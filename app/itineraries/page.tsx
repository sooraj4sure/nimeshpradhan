import Link from "next/link";
import Reveal from "@/components/Reveal";
import SamplePill from "@/components/SamplePill";
import { ITINERARIES, IG_URL } from "@/app/data";

export default function ItinerariesPage() {
  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Itineraries</span>
        <h1 className="display">Day-wise plans, ready to follow.</h1>
        <p>
          The same format Animesh sends over DM — what to do each day, where to stay,
          and what it roughly costs. Comment “Itinerary” on Instagram for the full guide.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {ITINERARIES.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.06}>
                <article className="itin">
                  <div className="itin-media">
                    <img src={t.img} alt={t.title} loading="lazy" />
                  </div>
                  <div className="itin-body">
                    <h3>
                      {t.title}
                      <SamplePill />
                    </h3>
                    <div className="itin-meta">
                      <span>{t.days}</span>
                      <span>{t.region}</span>
                      <span>Sample itinerary</span>
                    </div>
                    <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.65, marginBottom: 8 }}>{t.intro}</p>
                    {t.plan.map((d) => (
                      <div className="day" key={d.day}>
                        <b>{d.day.replace("Day ", "D")}</b>
                        <div>
                          <h4>{d.title}</h4>
                          <p>{d.text}</p>
                        </div>
                      </div>
                    ))}
                    <p className="budget-note">{t.budget}</p>
                    <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <a className="btn btn-terra btn-sm" href={IG_URL} target="_blank" rel="noreferrer">
                        Get the full itinerary ↗
                      </a>
                      <Link href="/destinations" className="btn btn-ghost btn-sm">Browse destinations</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="note">
            These are sample itineraries for preview — day plans, stays and budgets are
            confirmed by Animesh before publishing. Want a different destination? DM
            “Destination” on Instagram and he will build the guide for it.
          </p>
        </div>
      </section>
    </>
  );
}
