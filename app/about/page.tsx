import Link from "next/link";
import type { Metadata } from "next";
import SectionDecor from "@/components/SectionDecor";

export const metadata: Metadata = {
  title: "About — Omkar Biradar",
  description: "Meet Omkar Biradar — the AI automation engineer behind the systems that are scaling businesses worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>About</span>
          </div>
          <div className="page-hero-label">About Me</div>
          <h1 className="page-hero-title">I&apos;m Omkar.<br /><span className="gradient-text">Obsessed with Automation.</span></h1>
          <p className="page-hero-desc">I started my consulting practice because I was tired of watching great businesses lose hours to manual, repetitive work. Here&apos;s how I&apos;m fixing that — one automation at a time.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section has-decor">
        <SectionDecor variant="orb" />
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-image-placeholder"><span style={{position:"relative",zIndex:1,fontSize:"5rem"}}>🚀</span></div>
              <div className="about-stat-cards">
                <div className="about-mini-card tilt-card"><div className="mini-card-value">2</div><div className="mini-card-label">Enterprise Clients</div></div>
                <div className="about-mini-card tilt-card"><div className="mini-card-value">5+</div><div className="mini-card-label">Live Systems</div></div>
              </div>
            </div>
            <div className="about-text reveal reveal-delay-2">
              <div className="about-label">My Story</div>
              <h2 className="about-title">Built on the Belief That<br /><span className="gradient-text">Automation Levels the Field.</span></h2>
              <p className="about-desc">I&apos;m Omkar Biradar — an AI Automation &amp; Agent Engineer based in Bangalore, India. My premise is simple: the same automation infrastructure that Fortune 500 teams take for granted should be accessible to any business that needs it.</p>
              <p className="about-desc">Working directly with clients like FTA Globals and Perennial Technology, Omkar has built production automation systems — from AI content pipelines to facility management tools — that real teams use every day.</p>
              <p className="about-desc">The approach: embed directly into your workflow, diagnose where efficiency is breaking, and ship working fixes fast. No lengthy discovery phases, no strategy decks — just systems that run.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section section-alt has-decor">
        <SectionDecor variant="hex" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Purpose</div>
            <h2 className="section-title">Mission, Vision &amp; <span className="gradient-text">What Drives Us</span></h2>
          </div>
          <div className="mission-grid">
            <div className="mission-card tilt-card reveal">
              <div className="mission-icon">🎯</div>
              <div className="mission-title">My Mission</div>
              <div className="mission-text">To eliminate the operational inefficiencies that hold businesses back — by designing and deploying automation systems that are intelligent, reliable, and built to scale. I believe every hour spent on repetitive work is an hour stolen from growth, strategy, and the things that actually matter.</div>
            </div>
            <div className="mission-card tilt-card reveal reveal-delay-1">
              <div className="mission-icon">🔭</div>
              <div className="mission-title">My Vision</div>
              <div className="mission-text">A future where every business — from solo founders to enterprise teams — has access to the automation infrastructure that was previously reserved for Fortune 500 companies with massive engineering departments. AI and automation should be a competitive equalizer, not an advantage held only by the largest players.</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section has-decor">
        <SectionDecor variant="dots" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Core Values</div>
            <h2 className="section-title">The Principles We <span className="gradient-text">Build Everything On</span></h2>
          </div>
          <div className="values-grid stagger-parent">
            <div className="value-card tilt-card reveal"><div className="value-card-icon">⚡</div><div className="value-card-name">Speed with Intention</div><div className="value-card-desc">I move fast but deliberately. Every system I build is designed to be durable, not just quick to ship.</div></div>
            <div className="value-card tilt-card reveal reveal-delay-1"><div className="value-card-icon">🔍</div><div className="value-card-name">Radical Transparency</div><div className="value-card-desc">No black boxes. You&apos;ll always know exactly what we&apos;re building, why, and what to expect from it.</div></div>
            <div className="value-card tilt-card reveal reveal-delay-2"><div className="value-card-icon">📊</div><div className="value-card-name">Outcomes Over Output</div><div className="value-card-desc">I don&apos;t measure success by deliverables. I measure it by the business results you get from the work.</div></div>
            <div className="value-card tilt-card reveal reveal-delay-3"><div className="value-card-icon">🤝</div><div className="value-card-name">Long-Term Partnership</div><div className="value-card-desc">I&apos;m not a vendor. I&apos;m a partner who grows with you and evolves your systems as your business scales.</div></div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section section-alt has-decor">
        <SectionDecor variant="geo" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Who Builds This</div>
            <h2 className="section-title">One Person. <span className="gradient-text">End-to-End.</span></h2>
            <p className="section-desc">You work directly with me — the person who designs, builds, tests, and deploys everything. No account managers. No handoffs.</p>
          </div>
          <div className="team-grid stagger-parent">
            <div className="team-card tilt-card reveal">
              <div className="team-avatar">OB<div className="team-avatar-ring"></div></div>
              <div className="team-name">Omkar Biradar</div>
              <div className="team-role">Founder — AI Automation Engineer</div>
              <div className="team-bio">B.Tech CS graduate (CMR University, 2025). Builds LLM-powered workflows, RAG systems, and autonomous pipelines using Python, FastAPI, LangChain &amp; n8n. Has shipped production automation tools at FTA Globals and Perennial Technology.</div>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/omkar-biradar-01615b247/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
                <a href="https://github.com/Om13884" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">⌥</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE & WHY */}
      <section className="section has-decor">
        <SectionDecor variant="rings" />
        <div className="container">
          <div className="about-grid" style={{gap:"80px"}}>
            <div className="reveal">
              <div className="about-label">The Journey</div>
              <h2 className="about-title" style={{marginBottom:"48px"}}>From First Build<br /><span className="gradient-text">to Enterprise Clients</span></h2>
              <div className="timeline">
                {[
                  {year:"2024",title:"First Production Systems",text:"Built and shipped the SEO Content Outline Generator for FTA Globals — reducing manual content planning effort by 60–70%. First real production AI tool in use by an actual team."},
                  {year:"2025",title:"Perennial Technology",text:"Joined Perennial Technology as AI Automation Engineer. Built the Breakdown Management System automating facility workflows, escalation triggers, and breakdown pattern tracking for lifts, DG sets &amp; pumps."},
                  {year:"2025",title:"Graduation &amp; Launch",text:"Graduated B.Tech CS from CMR University (CGPA 8.30). Launched my AI automation practice to bring production-grade systems to businesses that need it — starting with FTA Globals &amp; Perennial Technology."},
                  {year:"2026",title:"Now Accepting Clients",text:"Expanding my client base. Bringing the same embedded, ship-fast approach to new teams — real estate, marketing, enterprise ops. Open to new projects now."},
                ].map(t=>(
                  <div className="timeline-item" key={t.year}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-year">{t.year}</div>
                    <div className="timeline-title">{t.title}</div>
                    <div className="timeline-text">{t.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="about-label">Why Omkar</div>
              <h2 className="about-title" style={{marginBottom:"32px"}}>What Makes This <span className="gradient-text">Different</span></h2>
              <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                {[
                  {icon:"🎯",name:"Automation-First, Always",bio:"I'm not a generalist consultant who offers automation as an upsell. It's the only thing I do — which means I go deeper on it than anyone who treats it as a side service."},
                  {icon:"📊",name:"Real Business Metrics",bio:"I don't measure success by automations built. I measure it by leads generated, hours saved, and outcomes created. Every project has clear, measurable KPIs."},
                  {icon:"⚡",name:"30-Day Delivery",bio:"Most systems are live within 30 days. No 6-month implementation projects, no endless planning. You see results fast, and we iterate from there."},
                ].map(w=>(
                  <div className="founder-card tilt-card" style={{flexDirection:"column",alignItems:"flex-start",gap:"12px"}} key={w.name}>
                    <div style={{fontSize:"1.5rem"}}>{w.icon}</div>
                    <div><div className="founder-name">{w.name}</div><div className="founder-bio">{w.bio}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt has-decor">
        <SectionDecor variant="particles" />
        <div className="container">
          <div className="cta-banner reveal">
            <div className="cta-banner-orb"></div>
            <div className="section-label" style={{marginBottom:"20px"}}>Work Together</div>
            <h2 className="cta-banner-title">Ready to Work With <span className="gradient-text">An Embedded Consultant?</span></h2>
            <p className="cta-banner-desc">Book a free 30-minute strategy call. I&apos;ll diagnose your biggest workflow bottlenecks and show you exactly what&apos;s possible with the right automation systems.</p>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Book Free Strategy Call</Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
