import type { Metadata } from "next";
import Link from "next/link";
import BlogFilter from "@/components/BlogFilter";
import SectionDecor from "@/components/SectionDecor";
import NewsletterWidget from "@/components/NewsletterWidget";

export const metadata: Metadata = {
  title: "Blog — Omkar Biradar",
  description: "Automation strategies, AI guides, and workflow frameworks from an embedded AI consultant. No fluff — just what actually works.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Blog</span>
          </div>
          <div className="page-hero-label">Insights &amp; Guides</div>
          <h1 className="page-hero-title">Automation Strategies<br /><span className="gradient-text">Worth Your Time</span></h1>
          <p className="page-hero-desc">Practical frameworks, real case studies, and tactical guides. No fluff — just the stuff that actually works in production.</p>
        </div>
      </section>

      <section className="section has-decor">
        <SectionDecor variant="mesh" />
        <div className="container">
          <div className="blog-full-grid">
            <div>
              <BlogFilter />
            </div>

            <aside className="blog-sidebar">
              <NewsletterWidget />

              <div className="sidebar-widget tilt-card reveal reveal-delay-1">
                <div className="sidebar-widget-title">Topics I Write About</div>
                <div className="category-list">
                  {[
                    {label:"AI Automation"},
                    {label:"n8n Workflows"},
                    {label:"SEO Automation"},
                    {label:"Lead Generation"},
                    {label:"Workflow Systems"},
                  ].map((c,i)=>(
                    <div className={`category-item${i===0?" active":""}`} key={c.label}>
                      {c.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget tilt-card reveal reveal-delay-1" style={{background:"var(--accent-subtle)",borderColor:"var(--accent-border)"}}>
                <div style={{fontSize:"1.5rem",marginBottom:"12px"}}>🎯</div>
                <div style={{fontSize:"1rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"10px"}}>Free Automation Audit</div>
                <p style={{fontSize:"0.84rem",color:"var(--text-secondary)",lineHeight:1.65,marginBottom:"18px"}}>Book a free 30-min call and we&apos;ll identify your top 3 automation opportunities — no strings attached.</p>
                <Link href="/contact" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>Book Free Call</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt has-decor">
        <SectionDecor variant="particles" />
        <div className="container">
          <div className="cta-banner reveal">
            <div className="cta-banner-orb"></div>
            <div className="section-label" style={{marginBottom:"20px"}}>Take Action</div>
            <h2 className="cta-banner-title">Ready to Move Beyond<br /><span className="gradient-text">Just Reading?</span></h2>
            <p className="cta-banner-desc">Knowledge without implementation is just entertainment. Book a free strategy call and let&apos;s turn these strategies into real systems running inside your business.</p>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Book Free Strategy Call</Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">See Our Results</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
