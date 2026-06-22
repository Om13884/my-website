"use client";

export default function BlogFilter() {
  return (
    <div className="blog-coming-soon" style={{
      padding: "80px 40px",
      textAlign: "center",
      border: "1px dashed var(--border)",
      borderRadius: "16px",
      background: "var(--surface)",
    }}>
      <div style={{ fontSize: "3rem", marginBottom: "20px" }}>✍️</div>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
        Articles Coming Soon
      </h2>
      <p style={{ color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.7 }}>
        I&apos;m writing practical guides on AI automation, n8n workflows, and the exact systems I build for clients. Check back soon — no fluff, just what actually works.
      </p>
      <a href="/contact" className="btn btn-primary">
        Get Notified When I Publish →
      </a>
    </div>
  );
}
