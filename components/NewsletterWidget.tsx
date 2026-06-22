import Link from "next/link";

export default function NewsletterWidget() {
  return (
    <div className="sidebar-widget tilt-card">
      <div className="sidebar-widget-title">Stay in the Loop</div>
      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: 1.6 }}>
        I write about AI automation, n8n workflows, and the systems I build for clients. Follow me on LinkedIn for updates.
      </p>
      <a
        href="https://www.linkedin.com/in/omkar-biradar-01615b247/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
      >
        Follow on LinkedIn
      </a>
      <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "10px" }}>
        Or <Link href="/contact" style={{ color: "var(--accent-light)" }}>reach out directly</Link> — I reply to everything.
      </p>
    </div>
  );
}
