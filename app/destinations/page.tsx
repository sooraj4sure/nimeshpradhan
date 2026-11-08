"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { DESTINATIONS, REGIONS, type Region } from "@/app/data";

export default function DestinationsPage() {
  const [filter, setFilter] = useState<Region | "All">("All");
  const shown = filter === "All" ? DESTINATIONS : DESTINATIONS.filter((d) => d.region === filter);

  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Destinations</span>
        <h1 className="display">25+ countries, one feed.</h1>
        <p>
          From India to Kazakhstan, Georgia, Vietnam, Kenya and the Alps — every place
          Animesh has filmed, with the itineraries and stays to match.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <div className="chips">
            {(["All", ...REGIONS] as const).map((r) => (
              <button key={r} className={`chip${filter === r ? " on" : ""}`} onClick={() => setFilter(r)}>
                {r}
              </button>
            ))}
          </div>

          <div className="grid grid-3">
            {shown.map((d, i) => (
              <Reveal key={d.country} delay={(i % 3) * 0.07}>
                <article className="card">
                  <div className="card-media">
                    <img src={d.img} alt={`${d.place}, ${d.country}`} loading="lazy" />
                    <span className="card-tag">{d.region}</span>
                  </div>
                  <div className="card-body">
                    <h3>{d.country}</h3>
                    <p><b style={{ color: "var(--teal-deep)" }}>{d.place}.</b> {d.hook}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="note">
            Also covered: Slovakia, Hungary and Belgium — ask Animesh for the full country
            list. Photos on this page are illustrative stand-ins; Animesh&apos;s own photos
            take their place at launch.
          </p>
        </div>
      </section>
    </>
  );
}
