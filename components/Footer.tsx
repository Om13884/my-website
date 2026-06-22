"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/personal") return null;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">
              <div className="brand-icon" style={{ width: "32px", height: "32px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M13 3L5 14H11L11 21L19 10H13L13 3Z" fill="white" />
                </svg>
              </div>
              Omkar<span style={{ color: "var(--accent-light)" }}> Biradar</span>
            </div>
            <p className="footer-tagline">
              Embedded AI consulting for technical teams. I diagnose where efficiency is breaking
              and ship working fixes alongside you — not decks.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/omkar-biradar-01615b247/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/Om13884" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Services</div>
            <ul className="footer-links">
              <li>
                <Link href="/services" className="footer-link">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  SEO Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  CRM Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Workflow Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Chatbots &amp; AI Agents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Get in Touch</div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉</span>
              <a href="mailto:omkar13884@gmail.com" className="footer-contact-text footer-contact-link">omkar13884@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <a href="tel:+919972734513" className="footer-contact-text footer-contact-link">+91 99727 34513</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">💼</span>
              <a href="https://www.linkedin.com/in/omkar-biradar-01615b247/" target="_blank" rel="noopener noreferrer" className="footer-contact-text footer-contact-link">linkedin.com/in/omkar-biradar</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">Bangalore, India</span>
            </div>
            <div className="mt-24">
              <Link href="/contact" className="btn btn-primary btn-sm">
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">© 2026 Omkar Biradar · Bangalore, India</div>
          <div className="footer-trust">
            <span className="footer-trust-item">
              <span className="live-dot" style={{ width: "5px", height: "5px" }}></span>
              Available for new projects
            </span>
            <span className="footer-trust-sep">·</span>
            <span className="footer-trust-item">Response within 24h</span>
            <span className="footer-trust-sep">·</span>
            <span className="footer-trust-item">Bangalore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
