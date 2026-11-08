"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { EMAIL, IG_URL } from "@/app/data";

const OFFERS = [
  {
    title: "Dedicated reels",
    text: "A reel (or a series) built around your destination, stay or product — in Animesh's itinerary-first style, with the guide in the comments.",
  },
  {
    title: "Itinerary features",
    text: "Your place inside a full day-wise itinerary — the format his audience actually saves and follows when they book.",
  },
  {
    title: "Stays features",
    text: "Room tours, breakfasts and honest stay notes — the content travellers check before they book.",
  },
];

export default function WorkWithMePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [kind, setKind] = useState("Dedicated reel");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Collab enquiry — ${brand || "your brand"}`
  )}&body=${encodeURIComponent(
    `Hi Animesh,\n\nName: ${name}\nEmail: ${email}\nBrand / company: ${brand}\nInterested in: ${kind}\n\n${message}\n\n— Sent from animeshpradhan.com (demo)`
  )}`;

  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Work With Me</span>
        <h1 className="display">Let&apos;s send 219,000 travellers somewhere.</h1>
        <p>
          Animesh works with destinations, stays, airlines and travel brands. No
          made-up numbers, no inflated promises — just the audience that plans trips
          from his guides.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <div className="grid grid-3">
            {OFFERS.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="step">
                  <div className="step-num">{i + 1}</div>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="about-grid" style={{ marginTop: 44 }}>
              <div className="form-card">
                <h2 className="display" style={{ fontSize: 28, marginBottom: 8 }}>Send an enquiry</h2>
                <p className="muted" style={{ marginBottom: 22, fontSize: 15, lineHeight: 1.6 }}>
                  Fill this in and your mail app will open with the enquiry addressed to{" "}
                  <b style={{ color: "var(--teal-deep)" }}>{EMAIL}</b>.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = mailto;
                  }}
                >
                  <div className="field">
                    <label htmlFor="w-name">Your name</label>
                    <input id="w-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="w-email">Your email</label>
                    <input id="w-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@company.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="w-brand">Brand / company</label>
                    <input id="w-brand" value={brand} onChange={(e) => setBrand(e.target.value)} required placeholder="Brand or destination name" />
                  </div>
                  <div className="field">
                    <label htmlFor="w-kind">Interested in</label>
                    <select id="w-kind" value={kind} onChange={(e) => setKind(e.target.value)}>
                      <option>Dedicated reel</option>
                      <option>Itinerary feature</option>
                      <option>Stays feature</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="w-msg">About the collab</label>
                    <textarea id="w-msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Dates, destination, what you'd like Animesh to cover…" />
                  </div>
                  <button className="btn btn-terra" type="submit" style={{ width: "100%" }}>
                    Send enquiry →
                  </button>
                </form>
              </div>

              <div>
                <div className="form-card" style={{ marginBottom: 22 }}>
                  <h3 className="display" style={{ fontSize: 24, marginBottom: 10 }}>Direct contacts</h3>
                  <p style={{ lineHeight: 1.8, fontSize: 15 }}>
                    <b>Email (business):</b>{" "}
                    <a href={`mailto:${EMAIL}`} style={{ color: "var(--terra-deep)", fontWeight: 700 }}>{EMAIL}</a>
                    <br />
                    <b>Instagram:</b>{" "}
                    <a href={IG_URL} target="_blank" rel="noreferrer" style={{ color: "var(--terra-deep)", fontWeight: 700 }}>
                      @_animeshpradhan_official
                    </a>
                    <br />
                    <b>Based in:</b> Bhubaneswar, Odisha, India
                  </p>
                </div>
                <div className="form-card">
                  <h3 className="display" style={{ fontSize: 24, marginBottom: 10 }}>What brands get</h3>
                  <p style={{ lineHeight: 1.8, fontSize: 15, color: "var(--ink-2)" }}>
                    • 219K+ followers who plan trips from his guides
                    <br />
                    • Itinerary-first content people save, not scroll past
                    <br />
                    • Coverage across India and 25+ countries
                    <br />• Honest, budget-first storytelling for Indian travellers
                  </p>
                  <p className="note" style={{ marginTop: 16 }}>
                    Past brand work is on the{" "}
                    <Link href="/brand-collabs" style={{ color: "var(--terra-deep)", fontWeight: 700 }}>
                      Brand Collabs page
                    </Link>{" "}
                    — only confirmed collabs are named, the rest are marked as samples.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
