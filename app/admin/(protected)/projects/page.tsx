"use client";

import { useState, useEffect, useCallback } from "react";
import type { Project } from "@/lib/types";

const BADGE_CLASSES = ["badge-accent", "badge-success", "badge-warning"];
const THUMB_PRESETS = [
  "linear-gradient(135deg,#0f0f2e,#1a1a4e)",
  "linear-gradient(135deg,#0f2a1a,#1a4a2e)",
  "linear-gradient(135deg,#1a0f2e,#2e1a4e)",
  "linear-gradient(135deg,#1a1000,#3a2200)",
  "linear-gradient(135deg,#0a1a2e,#0a2a4e)",
  "linear-gradient(135deg,#2e0a0a,#4e1a1a)",
];

const BLANK: Omit<Project, "id"> = {
  category: "",
  thumb: THUMB_PRESETS[0],
  thumbIcon: "🤖",
  badge: "",
  badgeClass: "badge-accent",
  industry: "",
  title: "",
  problem: "",
  tools: [],
  timeline: "",
  client: "",
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<Omit<Project, "id">>(BLANK);
  const [toolsInput, setToolsInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [showForm, setShowForm] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/projects");
    if (res.ok) setProjects(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  function openAdd() {
    setEditId(null);
    setForm(BLANK);
    setToolsInput("");
    setShowForm(true);
  }

  function openEdit(p: Project) {
    setEditId(p.id);
    const { id: _id, ...rest } = p;
    setForm(rest);
    setToolsInput(p.tools.join(", "));
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setEditId(null);
    setForm(BLANK);
    setToolsInput("");
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    const payload = { ...form, tools: toolsInput.split(",").map(t => t.trim()).filter(Boolean) };
    const url = editId ? `/api/admin/projects/${editId}` : "/api/admin/projects";
    const method = editId ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    if (res.ok) {
      setMsg(editId ? "Project updated." : "Project added.");
      cancelForm();
      load();
    } else {
      setMsg("Error saving. Please try again.");
    }
  }

  async function handleDelete(id: number, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    if (res.ok) { setMsg("Project deleted."); load(); }
    else setMsg("Delete failed.");
  }

  const set = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Projects</h1>
          <p className="admin-page-sub">Manage your portfolio case studies</p>
        </div>
        <button className="admin-btn" onClick={openAdd}>+ Add Project</button>
      </div>

      {msg && <div className="admin-msg">{msg}</div>}

      {showForm && (
        <div className="admin-card admin-form-card">
          <h2 className="admin-form-title">{editId ? "Edit Project" : "New Project"}</h2>
          <form onSubmit={handleSave} className="admin-form">
            <div className="admin-form-grid">
              <div className="admin-field">
                <label className="admin-label">Title *</label>
                <input className="admin-input" value={form.title} onChange={e => set("title", e.target.value)} required />
              </div>
              <div className="admin-field">
                <label className="admin-label">Client *</label>
                <input className="admin-input" value={form.client} onChange={e => set("client", e.target.value)} required />
              </div>
              <div className="admin-field">
                <label className="admin-label">Industry *</label>
                <input className="admin-input" value={form.industry} onChange={e => set("industry", e.target.value)} required />
              </div>
              <div className="admin-field">
                <label className="admin-label">Badge Text *</label>
                <input className="admin-input" value={form.badge} onChange={e => set("badge", e.target.value)} required />
              </div>
              <div className="admin-field">
                <label className="admin-label">Badge Colour</label>
                <select className="admin-input" value={form.badgeClass} onChange={e => set("badgeClass", e.target.value)}>
                  {BADGE_CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="admin-field">
                <label className="admin-label">Thumb Icon (emoji)</label>
                <input className="admin-input" value={form.thumbIcon} onChange={e => set("thumbIcon", e.target.value)} maxLength={4} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Card Background</label>
                <select className="admin-input" value={form.thumb} onChange={e => set("thumb", e.target.value)}>
                  {THUMB_PRESETS.map((g, i) => <option key={i} value={g}>Preset {i + 1}</option>)}
                </select>
              </div>
              <div className="admin-field">
                <label className="admin-label">Timeline</label>
                <input className="admin-input" value={form.timeline} onChange={e => set("timeline", e.target.value)} placeholder="e.g. Ongoing / 4 weeks" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Category Tags</label>
                <input className="admin-input" value={form.category} onChange={e => set("category", e.target.value)} placeholder="e.g. ai automation marketing" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Tools (comma-separated)</label>
                <input className="admin-input" value={toolsInput} onChange={e => setToolsInput(e.target.value)} placeholder="OpenAI, Python, n8n" />
              </div>
            </div>
            <div className="admin-field">
              <label className="admin-label">Problem / Description *</label>
              <textarea className="admin-input admin-textarea" value={form.problem} onChange={e => set("problem", e.target.value)} rows={4} required />
            </div>
            <div className="admin-form-actions">
              <button type="submit" className="admin-btn" disabled={saving}>{saving ? "Saving…" : editId ? "Update Project" : "Add Project"}</button>
              <button type="button" className="admin-btn-ghost" onClick={cancelForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="admin-loading">Loading projects…</div>
      ) : projects.length === 0 ? (
        <div className="admin-empty">No projects yet. Add your first one above.</div>
      ) : (
        <div className="admin-item-list">
          {projects.map(p => (
            <div key={p.id} className="admin-item-row">
              <div className="admin-item-thumb" style={{ background: p.thumb }}>
                <span>{p.thumbIcon}</span>
              </div>
              <div className="admin-item-body">
                <div className="admin-item-title">{p.title}</div>
                <div className="admin-item-meta">
                  <span className={`badge ${p.badgeClass}`}>{p.badge}</span>
                  <span>{p.industry}</span>
                  <span>·</span>
                  <span>{p.client}</span>
                  {p.timeline && <><span>·</span><span>⏱ {p.timeline}</span></>}
                </div>
              </div>
              <div className="admin-item-actions">
                <button className="admin-btn-ghost admin-btn-sm" onClick={() => openEdit(p)}>Edit</button>
                <button className="admin-btn-danger admin-btn-sm" onClick={() => handleDelete(p.id, p.title)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
