import Link from "next/link";
import SectionDecor from "@/components/SectionDecor";
import ServicesFaqAccordion from "@/components/ServicesFaqAccordion";
import { readData } from "@/lib/data";
import type { FaqItem } from "@/lib/types";

export const dynamic = "force-dynamic";

const services = [
  {icon:"🤖",name:"AI Automation",desc:"Deploy intelligent AI agents that handle complex tasks, learn from your data, and make autonomous decisions at scale. From GPT-powered assistants to fully autonomous workflow agents — I build AI that actually works in production.",benefits:["GPT-4 / Claude-powered decision systems","AI agents that trigger multi-step workflows","Natural language processing for data extraction","Autonomous lead qualification and routing","AI-generated content at scale"],tools:["OpenAI","Anthropic","LangChain","Make.com","Zapier"],delay:""},
  {icon:"🔍",name:"SEO Automation",desc:"Scale your organic search presence without scaling your team. I build programmatic SEO systems, automated content workflows, and technical SEO pipelines that work around the clock to grow your rankings.",benefits:["Programmatic content at scale (100s of pages/month)","Automated keyword research and clustering","Technical SEO monitoring and auto-fixing","Competitor tracking and gap analysis","Automated internal linking systems"],tools:["Ahrefs API","Screaming Frog","Python","GPT-4"],delay:" reveal-delay-1"},
  {icon:"👥",name:"CRM Automation",desc:"Turn your CRM from a contact database into a revenue-generating machine. I automate every stage of your pipeline — from initial capture to closed-won — so your sales team focuses only on selling.",benefits:["AI-powered lead scoring and prioritization","Automated multi-channel follow-up sequences","Deal stage automation and trigger-based actions","Pipeline health reporting and alerts","CRM data hygiene and deduplication"],tools:["HubSpot","Salesforce","Pipedrive","GoHighLevel"],delay:""},
  {icon:"🎯",name:"Lead Generation Automation",desc:"Stop relying on one-off campaigns and manual outreach. I build always-on lead generation systems that find, qualify, and deliver warm prospects to your inbox — around the clock, without any manual effort.",benefits:["Multi-channel automated outreach (email, LinkedIn, SMS)","Instant lead qualification via AI chatbots","Real-time lead routing to the right sales rep","Lead enrichment and contact data automation","Automated nurture sequences for cold leads"],tools:["Clay","Apollo.io","Instantly","LinkedIn API"],delay:" reveal-delay-1"},
  {icon:"📧",name:"Email Automation",desc:"Build intelligent email systems that generate revenue while you sleep. From behavioral trigger campaigns to complex multi-branch nurture flows — I design email automation that actually converts, not just sends.",benefits:["Behavioral trigger email sequences","Dynamic personalization at scale","A/B testing automation and winner deployment","Advanced segmentation and tagging logic","Revenue attribution reporting"],tools:["Klaviyo","ActiveCampaign","Mailchimp","Drip"],delay:""},
  {icon:"⚡",name:"Workflow Systems",desc:"Your team's biggest productivity killer isn't lazy people — it's broken, manual processes. I map your workflows, identify every manual handoff, and replace them with seamless automated systems that connect all your tools.",benefits:["End-to-end workflow mapping and automation","Cross-platform API integrations","Automated data sync across all your tools","Custom webhook and trigger logic","Error monitoring and auto-recovery"],tools:["Make.com","Zapier","n8n","Custom APIs"],delay:" reveal-delay-1"},
  {icon:"💬",name:"Chatbots & AI Agents",desc:"Deploy conversational AI that qualifies leads, answers complex questions, books appointments, and handles customer support — without a single human having to be available. Built on real AI, not rigid decision trees.",benefits:["GPT-powered conversational AI agents","Lead qualification and booking automation","24/7 customer support automation","Multi-channel deployment (web, WhatsApp, Messenger)","CRM integration and handoff to human agents"],tools:["OpenAI","Voiceflow","Intercom","Crisp"],delay:""},
  {icon:"📊",name:"Reporting Dashboards",desc:"Stop spending hours pulling reports from 10 different tools. I build real-time reporting dashboards that automatically pull data from every platform you use and present it in one clean, actionable view.",benefits:["Real-time automated data pipelines","Custom KPI dashboards tailored to your business","Cross-platform data aggregation","Automated weekly/monthly report delivery","Anomaly detection and smart alerts"],tools:["Google Looker","Databox","Google Sheets","BigQuery"],delay:" reveal-delay-1"},
];

export default async function ServicesPage() {
  const faqs = await readData<FaqItem[]>("faq.json", []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Services</span>
          </div>
          <div className="page-hero-label">Our Services</div>
          <h1 className="page-hero-title">Every Automation Service<br /><span className="gradient-text">Your Business Needs to Scale</span></h1>
          <p className="page-hero-desc">From AI-powered workflows to full CRM overhauls — I build custom systems that transform how your business operates, attracts leads, and converts revenue.</p>
        </div>
      </section>

      {/* SERVICES FULL */}
      <section className="section has-decor">
        <SectionDecor variant="cube" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">What We Build</div>
            <h2 className="section-title">8 Core Services. <span className="gradient-text">Infinite Possibilities.</span></h2>
            <p className="section-desc">Each service is custom-scoped to your business. I don&apos;t do templates — I build exactly what you need.</p>
          </div>
          <div className="services-full-grid">
            {services.map(s=>(
              <div className={`service-full-card tilt-card reveal${s.delay}`} key={s.name}>
                <div className="service-full-icon">{s.icon}</div>
                <div className="service-full-body">
                  <div className="service-full-name">{s.name}</div>
                  <div className="service-full-desc">{s.desc}</div>
                  <ul className="service-full-benefits">{s.benefits.map(b=><li key={b}>{b}</li>)}</ul>
                  <div className="service-tools">{s.tools.map(t=><span className="service-tool-tag" key={t}>{t}</span>)}</div>
                  <Link href="/contact" className="btn btn-outline btn-sm">Get Started →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section has-decor">
        <SectionDecor variant="mesh" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Questions We Get <span className="gradient-text">Asked Most</span></h2>
          </div>
          <ServicesFaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt has-decor">
        <SectionDecor variant="particles" />
        <div className="container">
          <div className="cta-banner reveal">
            <div className="cta-banner-orb"></div>
            <div className="section-label" style={{marginBottom:"20px"}}>Get Started</div>
            <h2 className="cta-banner-title">Not Sure Which Service You Need?<br /><span className="gradient-text">Let&apos;s Figure It Out Together.</span></h2>
            <p className="cta-banner-desc">Book a free 30-minute audit call. I&apos;ll look at your current workflows and tell you exactly which automations will have the biggest impact on your business — for free.</p>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Book Free Audit Call</Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">See Our Results</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
