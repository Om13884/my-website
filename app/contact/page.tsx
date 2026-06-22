import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ContactGlassEffect from "@/components/ContactGlassEffect";

export const metadata: Metadata = {
  title: "Contact — Om | AI Automation Consulting",
  description: "Book a free strategy call or send a message. I respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Contact</span>
          </div>
          <div className="page-hero-label">Get in Touch</div>
          <h1 className="page-hero-title">
            Let&apos;s Build Something<br />
            <span className="gradient-text">That Actually Ships.</span>
          </h1>
          <p className="page-hero-desc">
            Book a free 30-minute strategy call. I&apos;ll map your workflows, identify your top
            automation opportunities, and tell you exactly what&apos;s possible — no commitment required.
          </p>
        </div>
      </section>

      <section className="section contact-glass-section">
        {/* Cursor-following glass animation — fixed to viewport */}
        <ContactGlassEffect />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="contact-page-grid">

            {/* LEFT */}
            <div className="reveal">
              <div className="about-label">Contact Info</div>
              <h2 className="contact-info-title">I&apos;m Ready<br />When You Are.</h2>
              <p className="contact-info-desc">
                Whether you want to explore what&apos;s possible, start a project, or just have
                questions — reach out. I respond to every message within 24 hours.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉</div>
                  <div>
                    <div className="contact-detail-label">Email</div>
                    <a href="mailto:omkar13884@gmail.com" className="contact-detail-value contact-detail-link">
                      omkar13884@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div>
                    <div className="contact-detail-label">Phone / WhatsApp</div>
                    <a href="tel:+919972734513" className="contact-detail-value contact-detail-link">
                      +91 99727 34513
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">💼</div>
                  <div>
                    <div className="contact-detail-label">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/omkar-biradar-01615b247/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-detail-value contact-detail-link"
                    >
                      linkedin.com/in/omkar-biradar
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <div className="contact-detail-label">Location</div>
                    <div className="contact-detail-value">Bangalore, India</div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">🕐</div>
                  <div>
                    <div className="contact-detail-label">Response Time</div>
                    <div className="contact-detail-value">Within 24 hours, guaranteed</div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <div className="contact-detail-label" style={{ marginBottom: "12px" }}>Connect</div>
                <div className="contact-social">
                  <a href="https://www.linkedin.com/in/omkar-biradar-01615b247/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
                  <a href="https://github.com/Om13884" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">⌥</a>
                </div>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <div className="contact-detail-label" style={{ marginBottom: "12px" }}>Current Availability</div>
                <div className="availability-grid">
                  <div className="availability-item">
                    <div className="availability-dot active"></div>
                    <div>
                      <div className="availability-label">New Projects</div>
                      <div className="availability-sub">Open now</div>
                    </div>
                  </div>
                  <div className="availability-item">
                    <div className="availability-dot limited"></div>
                    <div>
                      <div className="availability-label">Strategy Calls</div>
                      <div className="availability-sub">3 spots this week</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guarantee-cards">
                <div className="guarantee-card">
                  <div className="guarantee-icon">🎯</div>
                  <div>
                    <div className="guarantee-title">Free Audit Included</div>
                    <div className="guarantee-desc">Every intro call includes a workflow audit with your top automation opportunities identified — yours to keep.</div>
                  </div>
                </div>
                <div className="guarantee-card">
                  <div className="guarantee-icon">⚡</div>
                  <div>
                    <div className="guarantee-title">Ships in Days, Not Months</div>
                    <div className="guarantee-desc">First working automation delivered inside week one. No lengthy discovery phases, no decks.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="reveal reveal-delay-2">
              <div className="contact-form-card">
                <h3 className="contact-form-title">Send a Message</h3>
                <p className="contact-form-subtitle">
                  Or reach me directly at{" "}
                  <a href="mailto:omkar13884@gmail.com" style={{ color: "var(--accent-light)" }}>
                    omkar13884@gmail.com
                  </a>
                </p>
                <div className="contact-form-wrap">
                  <ContactForm />
                </div>
              </div>

              <div className="mini-process" style={{ marginTop: "40px" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "24px" }}>
                  What Happens After You Submit
                </div>
                {[
                  { n: 1, title: "I Review Your Details (within 24h)", text: "I read your message and look at your business before responding — so I come prepared, not cold." },
                  { n: 2, title: "Free 30-Min Strategy Call", text: "I map your current workflows, identify the top automation opportunities, and tell you exactly what I'd build and what results to expect." },
                  { n: 3, title: "Scope & Proposal (if it's a fit)", text: "You receive a clear proposal — scope, timeline, and fixed pricing — within 48 hours of the call." },
                  { n: 4, title: "We Build and Ship", text: "Once approved, I kick off immediately. First automation live within a week of starting." },
                ].map(s => (
                  <div className="mini-step" key={s.n}>
                    <div className="mini-step-num">{s.n}</div>
                    <div className="mini-step-content">
                      <div className="mini-step-title">{s.title}</div>
                      <div className="mini-step-text">{s.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
