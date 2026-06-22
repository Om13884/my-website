"use client";

import { useState, useEffect, useCallback } from "react";
import type { FaqItem } from "@/lib/types";

export default function AdminFaqPage() {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [showForm, setShowForm] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/faq");
    if (res.ok) setItems(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  function openAdd() {
    setEditId(null);
    setQ("");
    setA("");
    setShowForm(true);
  }

  function openEdit(item: FaqItem) {
    setEditId(item.id);
    setQ(item.q);
    setA(item.a);
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setEditId(null);
    setQ("");
    setA("");
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    const url = editId ? `/api/admin/faq/${editId}` : "/api/admin/faq";
    const method = editId ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q, a }),
    });
    setSaving(false);
    if (res.ok) {
      setMsg(editId ? "FAQ item updated." : "FAQ item added.");
      cancelForm();
      load();
    } else {
      setMsg("Error saving. Please try again.");
    }
  }

  async function handleDelete(id: number, question: string) {
    if (!confirm(`Delete this FAQ item?\n"${question}"`)) return;
    const res = await fetch(`/api/admin/faq/${id}`, { method: "DELETE" });
    if (res.ok) { setMsg("FAQ item deleted."); load(); }
    else setMsg("Delete failed.");
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">FAQ</h1>
          <p className="admin-page-sub">Manage questions on the Services page</p>
        </div>
        <button className="admin-btn" onClick={openAdd}>+ Add Question</button>
      </div>

      {msg && <div className="admin-msg">{msg}</div>}

      {showForm && (
        <div className="admin-card admin-form-card">
          <h2 className="admin-form-title">{editId ? "Edit FAQ Item" : "New FAQ Item"}</h2>
          <form onSubmit={handleSave} className="admin-form">
            <div className="admin-field">
              <label className="admin-label">Question *</label>
              <input className="admin-input" value={q} onChange={e => setQ(e.target.value)} required placeholder="e.g. How long does it take to build…" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Answer *</label>
              <textarea className="admin-input admin-textarea" value={a} onChange={e => setA(e.target.value)} rows={5} required placeholder="Your answer here…" />
            </div>
            <div className="admin-form-actions">
              <button type="submit" className="admin-btn" disabled={saving}>{saving ? "Saving…" : editId ? "Update" : "Add Question"}</button>
              <button type="button" className="admin-btn-ghost" onClick={cancelForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="admin-loading">Loading FAQ…</div>
      ) : items.length === 0 ? (
        <div className="admin-empty">No FAQ items yet. Add your first question above.</div>
      ) : (
        <div className="admin-item-list">
          {items.map(item => (
            <div key={item.id} className="admin-item-row">
              <div className="admin-item-body">
                <div className="admin-item-title">{item.q}</div>
                <div className="admin-item-answer">{item.a}</div>
              </div>
              <div className="admin-item-actions">
                <button className="admin-btn-ghost admin-btn-sm" onClick={() => openEdit(item)}>Edit</button>
                <button className="admin-btn-danger admin-btn-sm" onClick={() => handleDelete(item.id, item.q)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
