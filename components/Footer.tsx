import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-grid">
          <div>
            <h4>Animesh Pradhan</h4>
            <p>
              Bhubaneswar-based travel creator. Itineraries, destinations and stays —
              planned for Indian travellers, across India and 25+ countries.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="mailto:animeshinsta16@gmail.com">animeshinsta16@gmail.com</a>
              <br />
              <a
                href="https://www.instagram.com/_animeshpradhan_official"
                target="_blank"
                rel="noreferrer"
              >
                @_animeshpradhan_official
              </a>
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <Link href="/destinations">Destinations</Link>
              <Link href="/itineraries">Itineraries</Link>
              <Link href="/stays">Stays &amp; Hotels</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div>
            <h4>Work</h4>
            <div className="footer-links">
              <Link href="/work-with-me">Work With Me</Link>
              <Link href="/brand-collabs">Brand Collabs</Link>
              <a href="mailto:animeshinsta16@gmail.com">Business enquiries</a>
              <a
                href="https://www.instagram.com/_animeshpradhan_official"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 Animesh Pradhan · Bhubaneswar, India</span>
          <span>Itineraries · Destinations · Stays &amp; Hotels</span>
        </div>
      </div>
      <div className="demo-strip">Demo website by Evenlyn Studio — preview for Animesh Pradhan</div>
    </footer>
  );
}
