import type { Metadata } from "next";
import Link from "next/link";
import PortfolioFilter from "@/components/PortfolioFilter";
import SectionDecor from "@/components/SectionDecor";
import { readData } from "@/lib/data";
import type { Project } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio — Omkar Biradar",
  description: "Real client work — AI agents for enterprise, WhatsApp & email bots, real estate lead generation, and customized marketing automation.",
};

export default async function PortfolioPage() {
  const projects = await readData<Project[]>("projects.json", []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Portfolio</span>
          </div>
          <div className="page-hero-label">Our Work</div>
          <h1 className="page-hero-title">Real Clients.<br /><span className="gradient-text">Real Systems. Shipped.</span></h1>
          <p className="page-hero-desc">From enterprise AI agents to WhatsApp bots and real estate lead generation — every project is custom-built for the client&apos;s exact workflow and delivered end-to-end.</p>
        </div>
      </section>

      <section className="section has-decor">
        <SectionDecor variant="dots" />
        <div className="container">
          <div className="results-stats stagger-parent">
            <div className="result-stat-card tilt-card reveal">
              <div className="result-stat-num">6</div>
              <div className="result-stat-label">Automations Built</div>
            </div>
            <div className="result-stat-card tilt-card reveal reveal-delay-1">
              <div className="result-stat-num">2</div>
              <div className="result-stat-label">Clients Served</div>
            </div>
            <div className="result-stat-card tilt-card reveal reveal-delay-2">
              <div className="result-stat-num">60–70%</div>
              <div className="result-stat-label">Effort Reduced (FTA Global)</div>
            </div>
          </div>

          <PortfolioFilter projects={projects} />
        </div>
      </section>

      {/* CTA */}
      <section className="section has-decor">
        <SectionDecor variant="particles" />
        <div className="container">
          <div className="cta-banner reveal">
            <div className="cta-banner-orb"></div>
            <div className="section-label" style={{marginBottom:"20px"}}>Start Your Project</div>
            <h2 className="cta-banner-title">Your Case Study Could<br /><span className="gradient-text">Be Next on This Page.</span></h2>
            <p className="cta-banner-desc">Book a free strategy call and let&apos;s figure out which automation will have the biggest impact on your business in the next 90 days.</p>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Book Free Strategy Call</Link>
              <Link href="/services" className="btn btn-outline btn-lg">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
