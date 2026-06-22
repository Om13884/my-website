import { readData } from "@/lib/data";
import type { Project, FaqItem } from "@/lib/types";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const projects = await readData<Project[]>("projects.json", []);
  const faq = await readData<FaqItem[]>("faq.json", []);

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-sub">Welcome back. Here&apos;s your content overview.</p>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-num">{projects.length}</div>
          <div className="admin-stat-label">Portfolio Projects</div>
          <Link href="/admin/projects" className="admin-stat-link">Manage →</Link>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{faq.length}</div>
          <div className="admin-stat-label">FAQ Items</div>
          <Link href="/admin/faq" className="admin-stat-link">Manage →</Link>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">2</div>
          <div className="admin-stat-label">Major Clients</div>
          <div className="admin-stat-link" style={{ opacity: 0.4, cursor: "default" }}>FTA Global · Perennial</div>
        </div>
      </div>

      <div className="admin-quick-actions">
        <h2 className="admin-section-title">Quick Actions</h2>
        <div className="admin-action-grid">
          <Link href="/admin/projects" className="admin-action-card">
            <div className="admin-action-icon">📁</div>
            <div className="admin-action-label">Add New Project</div>
            <div className="admin-action-desc">Add a new portfolio case study</div>
          </Link>
          <Link href="/admin/faq" className="admin-action-card">
            <div className="admin-action-icon">❓</div>
            <div className="admin-action-label">Add FAQ Item</div>
            <div className="admin-action-desc">Add a question to the services FAQ</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
