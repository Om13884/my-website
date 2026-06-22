import Link from "next/link";
import type { Metadata } from "next";
import SectionDecor from "@/components/SectionDecor";

export const metadata: Metadata = {
  title: "Omkar — AI Automation Engineer",
  description:
    "I build automations that eliminate hours of manual work — so your team can focus on what actually grows the business. Custom-built for marketing agencies, real estate firms, and growth-focused teams.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">

            {/* Left */}
            <div className="hero-text">
              <div className="hero-badge">
                <span className="live-dot"></span>
                Now Accepting New Clients
              </div>
              <h1 className="hero-title">
                Hi, I&apos;m Omkar —
                <span className="accent-line">AI Automation Engineer.</span>
              </h1>
              <p className="hero-subtitle">
                I build automations that eliminate hours of manual work — so your
                team can focus on what actually grows the business.
              </p>
              <p className="hero-subtitle" style={{ marginTop: "12px", fontSize: "0.95em", opacity: 0.8 }}>
                Custom-built for marketing agencies, real estate firms, and
                growth-focused teams. No templates. No bloat. Just workflows that work.
              </p>
              <div className="hero-ctas">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Let&apos;s Talk
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/portfolio" className="btn btn-outline btn-lg">View My Work</Link>
              </div>
              <div className="hero-proof">
                <div className="proof-item">
                  <div className="proof-value" data-count="2" data-suffix="+">0+</div>
                  <div className="proof-label">Enterprise Clients</div>
                </div>
                <div className="proof-divider"></div>
                <div className="proof-item">
                  <div className="proof-value" data-count="60" data-suffix="%+">0%+</div>
                  <div className="proof-label">Effort Reduced</div>
                </div>
                <div className="proof-divider"></div>
                <div className="proof-item">
                  <div className="proof-value" data-count="7" data-suffix=" days">0 days</div>
                  <div className="proof-label">First Ship</div>
                </div>
              </div>
            </div>

            {/* Right — live dashboard */}
            <div className="hero-visual">
              <div className="dashboard-glow"></div>
              <div className="dashboard-card tilt-card">
                <div className="dash-header">
                  <div className="dash-title-row">
                    <span className="live-dot"></span>
                    <span className="dash-title-text">Live Automation Dashboard</span>
                  </div>
                  <span className="dash-updated">Updated 2s ago</span>
                </div>
                <div className="dash-metrics">
                  <div className="dash-metric">
                    <div className="metric-num">6</div>
                    <div className="metric-name">Live Automations</div>
                    <div className="metric-change">Active</div>
                  </div>
                  <div className="dash-metric">
                    <div className="metric-num">60–70%</div>
                    <div className="metric-name">Effort Reduced</div>
                    <div className="metric-change">FTA Global</div>
                  </div>
                  <div className="dash-metric">
                    <div className="metric-num">0</div>
                    <div className="metric-name">Manual Steps Left</div>
                    <div className="metric-change">Goal</div>
                  </div>
                </div>
                <div className="dash-flow">
                  <div className="dash-flow-label">Active Workflow</div>
                  <div className="flow-nodes">
                    <div className="flow-node"><div className="node-icon active">📧</div><span className="node-label">Trigger</span></div>
                    <div className="flow-connector"></div>
                    <div className="flow-node"><div className="node-icon active">🤖</div><span className="node-label">AI Agent</span></div>
                    <div className="flow-connector"></div>
                    <div className="flow-node"><div className="node-icon active">🔗</div><span className="node-label">Route</span></div>
                    <div className="flow-connector"></div>
                    <div className="flow-node"><div className="node-icon active">📊</div><span className="node-label">Log</span></div>
                    <div className="flow-connector"></div>
                    <div className="flow-node"><div className="node-icon active">✅</div><span className="node-label">Done</span></div>
                  </div>
                </div>
                <div className="dash-activity">
                  <div className="activity-row">
                    <span className="activity-dot green"></span>
                    <span className="activity-text">Workflow triggered via webhook</span>
                    <span className="activity-time">2s ago</span>
                  </div>
                  <div className="activity-row">
                    <span className="activity-dot purple"></span>
                    <span className="activity-text">AI agent classified and routed</span>
                    <span className="activity-time">18s ago</span>
                  </div>
                  <div className="activity-row">
                    <span className="activity-dot yellow"></span>
                    <span className="activity-text">Google Sheets updated automatically</span>
                    <span className="activity-time">1m ago</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VANTA NET STRIP ──────────────────────────────────────── */}

      {/* ── CAPABILITIES STRIP ───────────────────────────────────── */}
      <div className="cap-strip">
        <div className="container">
          <div className="cap-grid stagger-parent">
            {[
              { icon: "🔎", title: "Diagnose Any Workflow", desc: "Rapidly map your processes and identify where AI can replace manual work — on Day 1" },
              { icon: "⚡", title: "Ships Work, End-to-End", desc: "Not strategy decks. Working systems deployed to production alongside your team" },
              { icon: "💸", title: "Consulting Speed & Cost", desc: "Results in days, not quarters — at a fraction of traditional consulting cost" },
              { icon: "🔗", title: "Forward-Deployed", desc: "I embed inside your tools and workflows and own delivery end-to-end" },
              { icon: "🏢", title: "Enterprise Ready", desc: "Audit trails, monitoring, security-first architecture, zero-downtime deploys" },
            ].map(c => (
              <div className="cap-item tilt-card" key={c.title}>
                <div className="cap-icon">{c.icon}</div>
                <div className="cap-title">{c.title}</div>
                <div className="cap-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY ME ───────────────────────────────────────────────── */}
      <section className="section has-decor" id="why">
        <SectionDecor variant="cube" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Why Me</div>
            <h2 className="section-title">What You Get With an <span className="gradient-text">Embedded Consultant.</span></h2>
            <p className="section-desc">
              Not a vendor. Not an agency. I sit inside your workflow, build the system, and own the outcome — end to end.
            </p>
          </div>
          <div className="why-grid stagger-parent">
            {[
              {
                icon: "🎯",
                title: "Embedded, Not Advisory",
                desc: "I work inside your tools, Slack, and workflows from day one. No remote briefings, no back-and-forth decks — just direct access to the person doing the work.",
              },
              {
                icon: "⚡",
                title: "First Ship in Days",
                desc: "Day one diagnosis. Working automation inside week one. I move at the speed of a developer, not a consulting firm with a 6-week discovery phase.",
              },
              {
                icon: "🔧",
                title: "One Person, End-to-End",
                desc: "No handoffs. No account managers relaying your requirements. I design, build, test, and deploy it myself — which means nothing gets lost in translation.",
              },
              {
                icon: "🛠️",
                title: "Production-Ready by Default",
                desc: "Every system I deliver is tested, monitored, and documented. Not a prototype you need to hand to an engineer — a live system running in your stack.",
              },
              {
                icon: "🧠",
                title: "Specialist, Not Generalist",
                desc: "AI automation is the only thing I do. That focus means I go deeper on it than any consultant who treats it as one service in a long menu.",
              },
              {
                icon: "💬",
                title: "You Talk to the Builder",
                desc: "You always speak directly to the person writing the code and building your system. Every update, every question, every decision — direct line, no layers.",
              },
            ].map(w => (
              <div className="why-card tilt-card reveal" key={w.title}>
                <div className="why-icon">{w.icon}</div>
                <div className="why-title">{w.title}</div>
                <div className="why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="section section-alt has-decor" id="process">
        <SectionDecor variant="rings" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">A Process Built for <span className="gradient-text">Fast, Reliable Delivery</span></h2>
            <p className="section-desc">Four clear phases from embed to a fully running automation system inside your business.</p>
          </div>
          <div className="process-steps-v2 reveal stagger-parent">
            {[
              {
                n: "01",
                name: "Integration & Setup",
                desc: "I embed directly into your team. Access your tools, workflows, and comms — get a complete picture of your operations on Day 1 with zero lengthy briefings.",
              },
              {
                n: "02",
                name: "Analysis & Risk Detection",
                desc: "Map every process, identify where efficiency is breaking, and surface automation opportunities ranked by impact. All signal, zero fluff.",
              },
              {
                n: "03",
                name: "Build & Deploy",
                desc: "Ship production-ready automation systems integrated with your existing stack. Every build is tested, monitored, and handed over with full documentation.",
              },
              {
                n: "04",
                name: "Continuous Improvement",
                desc: "Live performance monitoring, iteration loops, and expanding automation coverage as your business grows. Never set-and-forget.",
              },
            ].map(s => (
              <div className="proc-step-v2 tilt-card" key={s.n}>
                <div className="proc-num">{s.n}</div>
                <div className="proc-content">
                  <div className="proc-name">{s.name}</div>
                  <div className="proc-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────── */}
      <section className="section has-decor" id="use-cases">
        <SectionDecor variant="dots" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Use Cases</div>
            <h2 className="section-title">What We Actually <span className="gradient-text">Build for You</span></h2>
            <p className="section-desc">Real automation systems across every business function — not theoretical capabilities.</p>
          </div>
          <div className="use-cases-grid stagger-parent">
            {[
              { icon: "🔍", title: "Operational Audit & Automation", desc: "Map your workflows end-to-end, identify hours lost to manual tasks, and eliminate them with targeted automation systems built for your exact process." },
              { icon: "⚙️", title: "Workflow Automation & Tooling", desc: "Custom n8n flows, API integrations, and internal tools built precisely for your process — not templated, not off-the-shelf, not generic." },
              { icon: "🤖", title: "AI Agent Development", desc: "LLM-powered agents that classify, route, decide, and act — replacing human review loops across email, forms, and internal requests." },
              { icon: "📝", title: "Content & SEO Engines", desc: "Automated content pipelines, SEO outline generators, keyword tracking, and reporting that run without a content team's constant input." },
              { icon: "🎯", title: "CRM & Lead Automation", desc: "Smart lead capture, behavioral scoring, follow-up sequences, and pipeline automation that keeps your sales team focused on closing — not admin." },
              { icon: "📊", title: "Data Pipelines & Reporting", desc: "Real-time dashboards, automated reports, and cross-tool data sync so decisions are made on live data, not last week's spreadsheet." },
            ].map(u => (
              <div className="use-case-card reveal tilt-card" key={u.title}>
                <div className="uc-icon">{u.icon}</div>
                <h3 className="uc-title">{u.title}</h3>
                <p className="uc-desc">{u.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-48 reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Free Strategy Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section section-alt has-decor" id="faq">
        <SectionDecor variant="mesh" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Questions We <span className="gradient-text">Always Get</span></h2>
          </div>
          <div className="faq-list reveal">
            {[
              { q: "How fast do you start delivering?", a: "Day one diagnosis with zero excessive interviews. First shipped automation inside week one. I move at consulting speed — fast decisions, no committees." },
              { q: "Do we need a technical team on our side?", a: "No. I handle everything — architecture, build, deployment, and documentation. Your team doesn't need to be technical to see results." },
              { q: "What tools and stacks do you work with?", a: "n8n, Python, FastAPI, LangChain, Node.js, Make.com, Zapier, Google Sheets, Slack, Notion, HubSpot, WhatsApp API, and most modern REST APIs. If you use it, we can automate it." },
              { q: "How is pricing structured?", a: "Scope-based, transparent pricing. No long retainers, no surprise costs. We quote per engagement based on what's being built and the complexity involved." },
              { q: "Do you work with early-stage startups?", a: "Yes. I work with companies at any stage — from 5-person startups to established teams. The entry point is wherever your biggest manual bottleneck is." },
            ].map((faq, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-q">{faq.q}</div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="section has-decor" id="contact">
        <SectionDecor variant="particles" />
        <div className="container">
          <div className="cta-banner reveal">
            <div className="cta-banner-orb"></div>
            <div className="section-label" style={{ marginBottom: "20px" }}>Ready to Automate?</div>
            <h2 className="cta-banner-title">
              Let&apos;s Diagnose Your Workflow<br />and Ship the Fix — Fast.
            </h2>
            <p className="cta-banner-desc">
              Book a free 30-minute strategy call. I&apos;ll map your current workflows, identify your highest-impact automation opportunities, and tell you exactly what&apos;s possible — in that call.
            </p>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Book Free Strategy Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">See My Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
