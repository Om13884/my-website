"use client";

import Image from "next/image";

export default function PersonalPage() {
  return (
    <div className="personal-page">

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="personal-nav">
        <div className="personal-nav-inner">
          <div className="personal-nav-badge">
            <span className="dot"></span>
            Open to Work
          </div>
          <ul className="personal-nav-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="/" className="personal-nav-home" title="Back to Home">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Home
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="personal-hero">
        <div className="personal-wrap">
          <div className="personal-hero-inner">

            {/* Left */}
            <div>
              <div className="hero-tag">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
                Open to new opportunities
              </div>
              <h1>
                Hey, I&apos;m Omkar.<br />
                I build <span>AI agents</span> &amp;<br />
                automations that<br />
                replace busywork.
              </h1>
              <p className="hero-sub">
                AI Automation &amp; Agent Engineer — designing LLM-powered workflows,
                RAG systems, and autonomous pipelines using Python, FastAPI,
                LangChain &amp; n8n. Based in Bangalore, India.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="personal-btn-primary">Say Hello</a>
                <a href="#projects" className="personal-btn-outline">See My Work</a>
              </div>
              <div className="hero-socials">
                <a href="https://www.linkedin.com/in/omkar-biradar-01615b247/" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/Om13884" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="mailto:omkar13884@gmail.com" className="social-link" title="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>

            {/* Right — floating mini project-window cards */}
            <div className="personal-visual" aria-hidden="true">
              <div className="float-card c1" style={{background:"linear-gradient(145deg,#1e1b4b,#2e1065)"}}>
                <div className="fcard-head">
                  <div className="fcard-dots"><span style={{background:"#ef4444"}}></span><span style={{background:"#f59e0b"}}></span><span style={{background:"#22c55e"}}></span></div>
                  <span className="fcard-title">RAG pipeline</span>
                </div>
                <div className="fcard-body">
                  <div className="fcard-num">98.2%</div>
                  <div className="fcard-sub">retrieval accuracy</div>
                  <div className="fcard-bars">
                    <div className="fcard-bar-row"><span className="fcard-bar-label">Embed</span><div className="fcard-bar-track"><div className="fcard-bar-fill" style={{width:"90%",background:"#818cf8"}}></div></div></div>
                    <div className="fcard-bar-row"><span className="fcard-bar-label">Retriev</span><div className="fcard-bar-track"><div className="fcard-bar-fill" style={{width:"76%",background:"#a78bfa"}}></div></div></div>
                    <div className="fcard-bar-row"><span className="fcard-bar-label">Output</span><div className="fcard-bar-track"><div className="fcard-bar-fill" style={{width:"88%",background:"#c4b5fd"}}></div></div></div>
                  </div>
                </div>
              </div>
              <div className="float-card c4" style={{background:"linear-gradient(145deg,#064e3b,#065f46)"}}>
                <div className="fcard-head">
                  <div className="fcard-dots"><span style={{background:"#ef4444"}}></span><span style={{background:"#f59e0b"}}></span><span style={{background:"#22c55e"}}></span></div>
                  <span className="fcard-title">n8n workflow</span>
                </div>
                <div className="fcard-body">
                  <div className="fcard-num">60–70%</div>
                  <div className="fcard-sub">effort reduced</div>
                  <div className="fcard-bars">
                    <div className="fcard-bar-row"><span className="fcard-bar-label">Auto</span><div className="fcard-bar-track"><div className="fcard-bar-fill" style={{width:"92%",background:"#34d399"}}></div></div></div>
                  </div>
                </div>
              </div>
              <div className="float-card c2" style={{background:"linear-gradient(145deg,#0c1a2e,#1e3a5f)"}}>
                <div className="fcard-head">
                  <div className="fcard-dots"><span style={{background:"#ef4444"}}></span><span style={{background:"#f59e0b"}}></span><span style={{background:"#22c55e"}}></span></div>
                  <span className="fcard-title">FastAPI service</span>
                </div>
                <div className="fcard-body">
                  <div className="fcard-num">24/7</div>
                  <div className="fcard-sub">autonomous</div>
                  <div className="fcard-bars">
                    <div className="fcard-bar-row"><span className="fcard-bar-label">API</span><div className="fcard-bar-track"><div className="fcard-bar-fill" style={{width:"85%",background:"#38bdf8"}}></div></div></div>
                  </div>
                </div>
              </div>
              <div className="float-card c3" style={{background:"linear-gradient(145deg,#7c2d12,#92400e)"}}>
                <div className="fcard-head">
                  <div className="fcard-dots"><span style={{background:"#ef4444"}}></span><span style={{background:"#f59e0b"}}></span><span style={{background:"#22c55e"}}></span></div>
                  <span className="fcard-title">auto-mail</span>
                </div>
                <div className="fcard-body">
                  <div className="fcard-num">0</div>
                  <div className="fcard-sub">manual follow-ups</div>
                  <div className="fcard-bars">
                    <div className="fcard-bar-row"><span className="fcard-bar-label">Sent</span><div className="fcard-bar-track"><div className="fcard-bar-fill" style={{width:"78%",background:"#fb923c"}}></div></div></div>
                    <div className="fcard-bar-row"><span className="fcard-bar-label">Trig.</span><div className="fcard-bar-track"><div className="fcard-bar-fill" style={{width:"95%",background:"#fdba74"}}></div></div></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────── */}
      <section id="projects" className="personal-section">
        <div className="personal-wrap">
          <span className="personal-section-label">Systems I&apos;ve Built</span>
          <h2 className="personal-section-title">Things I&apos;ve Built</h2>
          <p className="personal-section-desc">
            Personal builds, client systems, and automation services — all built end-to-end by me.
          </p>
          <div className="projects-grid">

            {/* ── Personal / GitHub builds ── */}
            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#1e1b4b,#4c1d95)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
                </div>
                <span className="thumb-tag">RAG · LLM</span>
              </div>
              <div className="project-info">
                <h3>Autonomous Validator</h3>
                <p>LLMs validate structured &amp; unstructured documents without human intervention — grounded via RAG with HuggingFace embeddings &amp; ChromaDB.</p>
                <div className="project-tags">
                  <span className="tag">FastAPI</span><span className="tag">React</span><span className="tag">ChromaDB</span><span className="tag">Docker</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{position:"relative",overflow:"hidden",background:"#0d0d0d"}}>
                <Image src="/project-imgs/image3.png" alt="Dynamic Workflow Automation — n8n pipeline" fill sizes="(max-width:768px) 100vw, 33vw" style={{objectFit:"cover",objectPosition:"top left",opacity:0.85}} className="project-screenshot" />
                <span className="thumb-tag">n8n · API</span>
              </div>
              <div className="project-info">
                <h3>Dynamic Workflow Automation</h3>
                <p>Async, API-driven pipelines in n8n with custom JS logic — multi-step workflows triggered by webhooks, built as reusable AI-agent components.</p>
                <div className="project-tags">
                  <span className="tag">n8n</span><span className="tag">JavaScript</span><span className="tag">REST APIs</span><span className="tag">Webhooks</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#14532d,#065f46)"}}>
                <div className="thumb-icon" style={{background:"rgba(255,255,255,0.12)"}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span className="thumb-tag">Python · Node.js</span>
              </div>
              <div className="project-info">
                <h3>Auto-Mail Trigger System</h3>
                <p>Hybrid event-driven automation — Python handles business logic, Node.js executes email triggers. Zero manual follow-ups.</p>
                <div className="project-tags">
                  <span className="tag">Python</span><span className="tag">Node.js</span><span className="tag">Event-driven</span>
                </div>
              </div>
            </div>

            {/* ── Service systems built ── */}
            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#1a0533,#3b0764)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                </div>
                <span className="thumb-tag">LLM · Agents</span>
              </div>
              <div className="project-info">
                <h3>AI Automation Systems</h3>
                <p>GPT-4 / Claude-powered decision systems and autonomous agents that classify, route, and act across email, forms, and internal workflows — replacing human review loops entirely.</p>
                <div className="project-tags">
                  <span className="tag">OpenAI</span><span className="tag">Anthropic</span><span className="tag">LangChain</span><span className="tag">Make.com</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#0c4a6e,#075985)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M8 11h6M11 8v6"/></svg>
                </div>
                <span className="thumb-tag">SEO · Content</span>
              </div>
              <div className="project-info">
                <h3>SEO Automation Pipeline</h3>
                <p>Programmatic content systems, automated keyword research pipelines, technical SEO monitoring, and AI-driven outline generators that scale organic output without extra headcount.</p>
                <div className="project-tags">
                  <span className="tag">Python</span><span className="tag">GPT-4</span><span className="tag">Ahrefs API</span><span className="tag">FastAPI</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#431407,#7c2d12)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <span className="thumb-tag">CRM · Sales</span>
              </div>
              <div className="project-info">
                <h3>CRM Automation Engine</h3>
                <p>AI-powered lead scoring, automated multi-channel follow-up sequences, deal stage triggers, and CRM data hygiene pipelines — turning a contact database into a revenue machine.</p>
                <div className="project-tags">
                  <span className="tag">HubSpot</span><span className="tag">Salesforce</span><span className="tag">Pipedrive</span><span className="tag">Python</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#4a044e,#701a75)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <span className="thumb-tag">Lead Gen · Outreach</span>
              </div>
              <div className="project-info">
                <h3>Lead Generation Automation</h3>
                <p>Always-on multi-channel outreach systems — finds, qualifies, and routes warm leads to your inbox around the clock via email, LinkedIn, and SMS with zero manual effort.</p>
                <div className="project-tags">
                  <span className="tag">Clay</span><span className="tag">Apollo.io</span><span className="tag">LinkedIn API</span><span className="tag">Instantly</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#0c1a2e,#1e3a5f)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span className="thumb-tag">Email · Sequences</span>
              </div>
              <div className="project-info">
                <h3>Email Automation Systems</h3>
                <p>Behavioral trigger campaigns, dynamic personalization at scale, multi-branch nurture flows, and A/B testing pipelines that generate revenue while the team sleeps.</p>
                <div className="project-tags">
                  <span className="tag">Klaviyo</span><span className="tag">ActiveCampaign</span><span className="tag">Mailchimp</span><span className="tag">Python</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#052e16,#14532d)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <span className="thumb-tag">Workflow · APIs</span>
              </div>
              <div className="project-info">
                <h3>Workflow Automation Systems</h3>
                <p>End-to-end workflow mapping and automation — cross-platform API integrations, custom webhook logic, automated data sync, and error monitoring with auto-recovery across all tools.</p>
                <div className="project-tags">
                  <span className="tag">Make.com</span><span className="tag">Zapier</span><span className="tag">n8n</span><span className="tag">Custom APIs</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#2e1065,#4c1d95)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
                <span className="thumb-tag">Chat · AI</span>
              </div>
              <div className="project-info">
                <h3>Chatbots &amp; AI Agents</h3>
                <p>GPT-powered conversational agents that qualify leads, answer complex questions, book appointments, and handle customer support 24/7 — deployed on web, WhatsApp, and Messenger.</p>
                <div className="project-tags">
                  <span className="tag">OpenAI</span><span className="tag">Voiceflow</span><span className="tag">WhatsApp API</span><span className="tag">Crisp</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb" style={{background:"linear-gradient(135deg,#042f2e,#134e4a)"}}>
                <div className="thumb-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
                </div>
                <span className="thumb-tag">Analytics · BI</span>
              </div>
              <div className="project-info">
                <h3>Reporting &amp; Dashboard Systems</h3>
                <p>Real-time automated data pipelines pulling from every platform into one clean view — custom KPI dashboards, cross-tool aggregation, and smart anomaly alerts delivered automatically.</p>
                <div className="project-tags">
                  <span className="tag">Google Looker</span><span className="tag">BigQuery</span><span className="tag">Databox</span><span className="tag">Google Sheets</span>
                </div>
              </div>
            </div>

          </div>
          <div style={{marginTop:"28px",textAlign:"center"}}>
            <a href="https://github.com/Om13884" target="_blank" rel="noopener noreferrer" className="personal-btn-outline">
              View all repos on GitHub →
            </a>
          </div>
        </div>
      </section>

      <hr className="personal-divider" />

      {/* ── WORK & CLIENT PROJECTS ───────────────────────────────── */}
      <section className="personal-section">
        <div className="personal-wrap">
          <span className="personal-section-label">Client &amp; Work Projects</span>
          <h2 className="personal-section-title">Production Systems</h2>
          <p className="personal-section-desc">
            Automation systems shipped for real clients — live tools used by real teams every day.
          </p>
          <div className="work-projects-grid">

            <div className="work-project-card">
              <div className="work-project-thumb">
                <Image src="/project-imgs/image2.png" alt="SEO Content Outline Generator" fill sizes="(max-width:768px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top left"}} />
                <span className="work-project-tag">SEO · AI</span>
                <span className="work-project-org">FTA Global</span>
              </div>
              <div className="work-project-info">
                <h3>SEO Content Outline Generator</h3>
                <p>Automated SEO content planning pipeline — reduced 10–15 hrs/week of manual work to 1–2 hrs. Let the marketing team scale output without adding headcount.</p>
                <div className="project-tags">
                  <span className="tag">LangChain</span><span className="tag">FastAPI</span><span className="tag">Python</span><span className="tag">n8n</span>
                </div>
              </div>
            </div>

            <div className="work-project-card">
              <div className="work-project-thumb">
                <Image src="/project-imgs/image3.png" alt="SEO Content Refresh Tool" fill sizes="(max-width:768px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top left"}} />
                <span className="work-project-tag">SEO · Content</span>
                <span className="work-project-org">FTA Global</span>
              </div>
              <div className="work-project-info">
                <h3>SEO Content Refresh Tool</h3>
                <p>AI-powered tool that analyzes and rewrites existing content for better performance at scale — consistent output quality without human bottlenecks.</p>
                <div className="project-tags">
                  <span className="tag">OpenAI</span><span className="tag">Python</span><span className="tag">n8n</span><span className="tag">REST APIs</span>
                </div>
              </div>
            </div>

            <div className="work-project-card">
              <div className="work-project-thumb">
                <Image src="/project-imgs/image4.png" alt="Google Ads Monitoring & Alert System" fill sizes="(max-width:768px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top left"}} />
                <span className="work-project-tag">Monitoring · Alerts</span>
                <span className="work-project-org">FTA Global</span>
              </div>
              <div className="work-project-info">
                <h3>Google Ads Monitoring &amp; Alert System</h3>
                <p>Automated campaign monitoring that tracks metrics in real-time and fires alerts the moment performance drops — less wasted budget, faster response time.</p>
                <div className="project-tags">
                  <span className="tag">Google Ads API</span><span className="tag">Python</span><span className="tag">n8n</span><span className="tag">Webhooks</span>
                </div>
              </div>
            </div>

            <div className="work-project-card">
              <div className="work-project-thumb">
                <Image src="/project-imgs/image5.png" alt="Auto Calendar Meeting Scheduler Agent" fill sizes="(max-width:768px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top left"}} />
                <span className="work-project-tag">AI Agent · Calendar</span>
                <span className="work-project-org">Private Client</span>
              </div>
              <div className="work-project-info">
                <h3>Auto Calendar Meeting Scheduler Agent</h3>
                <p>AI agent that handles scheduling end-to-end — no back-and-forth messages, no missed slots. Meetings confirmed and booked autonomously while you focus on work.</p>
                <div className="project-tags">
                  <span className="tag">n8n</span><span className="tag">OpenAI</span><span className="tag">Calendar API</span><span className="tag">Webhooks</span>
                </div>
              </div>
            </div>

            <div className="work-project-card">
              <div className="work-project-thumb">
                <Image src="/project-imgs/image6.png" alt="Email Agent with Website Form Integration" fill sizes="(max-width:768px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top left"}} />
                <span className="work-project-tag">Email · Lead Response</span>
                <span className="work-project-org">Private Client</span>
              </div>
              <div className="work-project-info">
                <h3>Email Agent with Website Form Integration</h3>
                <p>Automated email agent that picks up form submissions the instant they arrive and responds with the right message — no lead left waiting hours for a reply.</p>
                <div className="project-tags">
                  <span className="tag">n8n</span><span className="tag">OpenAI</span><span className="tag">Email API</span><span className="tag">Webhooks</span>
                </div>
              </div>
            </div>

            <div className="work-project-card">
              <div className="work-project-thumb">
                <Image src="/project-imgs/image7.png" alt="Auto Instagram Posting Agent" fill sizes="(max-width:768px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top left"}} />
                <span className="work-project-tag">Social · Automation</span>
                <span className="work-project-org">Private Client</span>
              </div>
              <div className="work-project-info">
                <h3>Auto Instagram Posting Agent</h3>
                <p>Agent that auto-schedules and posts content to Instagram on a cron — keeps the account active and consistent without any daily manual effort.</p>
                <div className="project-tags">
                  <span className="tag">n8n</span><span className="tag">Instagram API</span><span className="tag">Python</span><span className="tag">Cron</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="personal-divider" />

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="personal-section">
        <div className="personal-wrap">
          <div className="personal-about-grid">
            <div>
              <span className="personal-section-label">About Me</span>
              <h2 className="personal-section-title">Hello! I&apos;m Omkar.</h2>
              <div className="about-text-personal">
                <p>I&apos;m an AI Automation &amp; Agent Engineer who gets genuinely excited about replacing manual, repetitive work with intelligent systems. If something can be automated, I&apos;m probably already thinking about how.</p>
                <p>I specialize in LLM-powered workflows, RAG architectures, and API-driven autonomous pipelines — building end-to-end from Python backends and FastAPI services through n8n workflow orchestration and React frontends.</p>
                <p>I graduated with a B.Tech in Computer Science from CMR University, Bangalore in May 2025 (CGPA 8.30), and have since built production automation tools at Perennial Technology and FTA Globals that are used by real teams every day.</p>
                <p>I believe the best automation is one you never have to think about again.</p>
              </div>
            </div>
            <div className="about-photo-real">
              <Image
                src="/omkar.jpg"
                alt="Omkar Biradar"
                fill
                sizes="(max-width:768px) 100vw, 400px"
                style={{objectFit:"cover", objectPosition:"center top"}}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="personal-divider" />

      {/* ── EXPERIENCE ──────────────────────────────────────────── */}
      <section id="experience" className="personal-section">
        <div className="personal-wrap">
          <span className="personal-section-label">Career</span>
          <h2 className="personal-section-title">Work Experience</h2>
          <div className="exp-list">

            <div className="exp-item">
              <div className="exp-meta">
                <p className="exp-period">Mar 2026 — Present</p>
                <p className="exp-company"><span className="exp-dot"></span>Perennial Technology</p>
              </div>
              <div>
                <h3 className="exp-role">AI Automation Engineer</h3>
                <p className="exp-desc">Built the BMS Tool to automate facility workflows — eliminating manual follow-ups through automated notifications and escalation triggers. Developed breakdown pattern tracking for facility assets enabling predictive maintenance.</p>
                <div className="exp-skills">
                  <span className="tag">Python</span><span className="tag">n8n</span><span className="tag">API Automation</span><span className="tag">Webhooks</span>
                </div>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-meta">
                <p className="exp-period">Apr 2026 — Present</p>
                <p className="exp-company"><span className="exp-dot"></span>FTA Globals</p>
              </div>
              <div>
                <h3 className="exp-role">AI Automation Consultant</h3>
                <p className="exp-desc">Designed and built a Content Outline Generator to automate SEO content planning — reducing manual effort by 60–70%. Integrated AI-driven content structuring letting the marketing team scale output without adding headcount.</p>
                <div className="exp-skills">
                  <span className="tag">LangChain</span><span className="tag">FastAPI</span><span className="tag">Python</span><span className="tag">SEO Automation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="personal-divider" />

      {/* ── STACK ───────────────────────────────────────────────── */}
      <section id="stack" className="personal-section">
        <div className="personal-wrap">
          <span className="personal-section-label">Tools &amp; Tech</span>
          <h2 className="personal-section-title">My Stack</h2>
          <p className="personal-section-desc">What I actually use to build production-grade AI and automation systems.</p>
          <div className="stack-pills">
            {[
              {icon:"🔴",name:"n8n"},{icon:"🦜",name:"LangChain"},{icon:"⚡",name:"FastAPI"},
              {icon:"🐍",name:"Python"},{icon:"🧠",name:"RAG"},{icon:"🗄️",name:"ChromaDB"},
              {icon:"📐",name:"FAISS"},{icon:"🐳",name:"Docker"},{icon:"⬛",name:"Node.js"},
              {icon:"⚛️",name:"React"},{icon:"🔷",name:"TypeScript"},{icon:"🐘",name:"PostgreSQL"},
              {icon:"🔗",name:"REST APIs"},{icon:"🔄",name:"Webhooks"},{icon:"🐙",name:"GitHub"},
              {icon:"📮",name:"Postman"},{icon:"🌐",name:"Next.js"},{icon:"🏗️",name:"Django"},
            ].map(s => (
              <span className="stack-pill" key={s.name}>
                <span className="stack-pill-icon">{s.icon}</span>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <hr className="personal-divider" />

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="personal-section">
        <div className="personal-wrap">
          <div className="contact-wrap">
            <span className="personal-section-label">Get In Touch</span>
            <h2 className="personal-section-title">Contact Me</h2>
            <p className="personal-section-desc" style={{margin:"0 auto 40px",textAlign:"center"}}>
              Want to collaborate on an automation project, build something with AI,
              or just talk tech? I reply to everything.
            </p>
            <div className="contact-links">
              <a href="mailto:omkar13884@gmail.com" className="contact-link-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                omkar13884@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/omkar-biradar-01615b247/" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/Om13884" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
            <p className="contact-quote">&quot;I build things to understand them.&quot;</p>
          </div>
        </div>
      </section>

      {/* ── BACK TO SITE BANNER ─────────────────────────────────── */}
      <section className="personal-cta-banner">
        <div className="personal-wrap">
          <div className="personal-cta-inner">
            <div className="personal-cta-left">
              <div className="personal-cta-label">Omkar Biradar — AI Automation Consulting</div>
              <h2 className="personal-cta-title">Need automation built for your business?</h2>
              <p className="personal-cta-desc">I take on a limited number of client projects. Book a free strategy call to see if we&apos;re a fit.</p>
            </div>
            <div className="personal-cta-actions">
              <a href="/contact" className="personal-btn-primary">
                Book a Free Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/" className="personal-btn-outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Visit My Site
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="personal-footer">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px"}}>
          <p>© 2025 Omkar Biradar &nbsp;·&nbsp; Bangalore, India &nbsp;·&nbsp;
            <a href="mailto:omkar13884@gmail.com" style={{color:"var(--text-muted)"}}>omkar13884@gmail.com</a>
          </p>
          <a href="/" className="personal-footer-home">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to Home
          </a>
        </div>
      </footer>

    </div>
  );
}
