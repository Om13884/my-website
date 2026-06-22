"use client";

import { useState, useEffect, FormEvent } from "react";
import { usePathname } from "next/navigation";

const EXCLUDED = ["/contact", "/personal"];

export default function ScrollTriggerPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

  const isExcluded =
    EXCLUDED.includes(pathname) || pathname.startsWith("/admin");

  useEffect(() => {
    if (isExcluded) return;
    // Per-page key so popup can fire once per page per session
    const key = `nf_popup_${pathname}`;
    if (sessionStorage.getItem(key)) return;

    // Reset form state on each new page
    setOpen(false);
    setSubmitted(false);
    setErrors({});
    setSubmitError("");

    const check = () => {
      const pct =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (pct >= 0.82) {
        setOpen(true);
        sessionStorage.setItem(key, "1");
        window.removeEventListener("scroll", check);
      }
    };

    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname, isExcluded]);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 280);
  };

  const validate = (form: HTMLFormElement) => {
    const e: Record<string, string> = {};
    ["name", "email", "service", "message"].forEach((f) => {
      const el = form.elements.namedItem(f) as HTMLInputElement | null;
      if (!el?.value.trim()) e[f] = "Required";
      else if (f === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value))
        e[f] = "Invalid email";
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate(e.currentTarget)) return;
    setSending(true);
    setSubmitError("");
    const form = e.currentTarget;
    const g = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: g("name"),
          lastName: "",
          email: g("email"),
          service: g("service"),
          message: g("message"),
        }),
      });
      if (res.ok) setSubmitted(true);
      else setSubmitError("Something went wrong. Email omkar13884@gmail.com directly.");
    } catch {
      setSubmitError("Network error. Email omkar13884@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  if (!open || isExcluded) return null;

  return (
    <div
      className={`stp-overlay${closing ? " stp-closing" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Quick contact form"
    >
      <div className="stp-card">
        <button className="stp-close" onClick={dismiss} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        {submitted ? (
          <div className="stp-success">
            <div className="stp-success-icon">🎉</div>
            <div className="stp-success-title">You&apos;re on my radar.</div>
            <div className="stp-success-desc">I&apos;ll review your message and reply within 24 hours — personally.</div>
            <button className="stp-btn-outline" onClick={dismiss} style={{ marginTop: "20px" }}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="stp-header">
              <div className="stp-badge">
                <span className="live-dot"></span>
                3 Strategy Call Spots Left This Week
              </div>
              <h2 className="stp-title">
                Let&apos;s talk about<br />
                <span className="gradient-text">automating your workflow.</span>
              </h2>
              <p className="stp-desc">
                Drop your details — I&apos;ll reach out within 24h with a free workflow audit tailored to your business.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="stp-form">
              <div className="stp-row">
                <div className="stp-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name *"
                    className={`stp-input${errors.name ? " stp-error" : ""}`}
                    autoComplete="name"
                  />
                  {errors.name && <span className="stp-err-msg">{errors.name}</span>}
                </div>
                <div className="stp-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work email *"
                    className={`stp-input${errors.email ? " stp-error" : ""}`}
                    autoComplete="email"
                  />
                  {errors.email && <span className="stp-err-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="stp-group">
                <select
                  name="service"
                  defaultValue=""
                  className={`stp-select${errors.service ? " stp-error" : ""}`}
                >
                  <option value="" disabled>What do you need help with? *</option>
                  <option>AI Automation</option>
                  <option>SEO Automation</option>
                  <option>CRM Automation</option>
                  <option>Lead Generation</option>
                  <option>Email Automation</option>
                  <option>Workflow Systems</option>
                  <option>Chatbots / AI Agents</option>
                  <option>Reporting Dashboards</option>
                  <option>Not sure — I need an audit</option>
                </select>
                {errors.service && <span className="stp-err-msg">{errors.service}</span>}
              </div>

              <div className="stp-group">
                <textarea
                  name="message"
                  placeholder="Biggest workflow bottleneck right now? *"
                  rows={3}
                  className={`stp-textarea${errors.message ? " stp-error" : ""}`}
                />
                {errors.message && <span className="stp-err-msg">{errors.message}</span>}
              </div>

              {submitError && (
                <div className="stp-submit-error">{submitError}</div>
              )}

              <button type="submit" className="stp-submit" disabled={sending}>
                {sending ? "Sending..." : (
                  <>
                    Get Free Workflow Audit
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </>
                )}
              </button>
              <p className="stp-note">🔒 No spam. Unsubscribe any time. Reply within 24h guaranteed.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
