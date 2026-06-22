"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

  const validate = (form: HTMLFormElement): boolean => {
    const newErrors: Record<string, string> = {};
    const required = ["firstName", "lastName", "email", "service", "message"];
    required.forEach((name) => {
      const field = form.elements.namedItem(name) as HTMLInputElement | null;
      if (!field || !field.value.trim()) {
        newErrors[name] = "This field is required";
      } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        newErrors[name] = "Please enter a valid email address";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate(e.currentTarget)) return;
    setSending(true);
    setSubmitError("");

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: get("firstName"),
          lastName:  get("lastName"),
          email:     get("email"),
          phone:     get("phone"),
          company:   get("company"),
          revenue:   get("revenue"),
          service:   get("service"),
          message:   get("message"),
          timeline:  get("timeline"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(
          data.error ?? "Something went wrong. Please email me directly at omkar13884@gmail.com"
        );
      }
    } catch {
      setSubmitError(
        "Network error. Please email me directly at omkar13884@gmail.com"
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success visible">
        <div className="form-success-icon">🎉</div>
        <div className="form-success-title">Message Received!</div>
        <div className="form-success-text">
          Thanks for reaching out. I&apos;ll review your details personally and get back to you within 24 hours.
        </div>
        <div style={{ marginTop: "20px" }}>
          <a href="/portfolio" className="btn btn-outline">
            Browse My Work While You Wait
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`form-input${errors.firstName ? " error" : ""}`}
            placeholder="Alex"
            required
          />
          {errors.firstName && <span className="form-error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lastName">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`form-input${errors.lastName ? " error" : ""}`}
            placeholder="Johnson"
            required
          />
          {errors.lastName && <span className="form-error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input${errors.email ? " error" : ""}`}
            placeholder="alex@company.com"
            required
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="company">
            Company / Business
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="form-input"
            placeholder="Your Company Name"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="revenue">
            Monthly Revenue Range
          </label>
          <select id="revenue" name="revenue" className="form-select" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>Under $10K/month</option>
            <option>$10K–$50K/month</option>
            <option>$50K–$200K/month</option>
            <option>$200K–$1M/month</option>
            <option>$1M+/month</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="service">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          className={`form-select${errors.service ? " error" : ""}`}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>AI Automation</option>
          <option>SEO Automation</option>
          <option>CRM Automation</option>
          <option>Lead Generation</option>
          <option>Email Automation</option>
          <option>Workflow Systems</option>
          <option>Chatbots / AI Agents</option>
          <option>Reporting Dashboards</option>
          <option>Not sure — I need an audit</option>
          <option>Multiple services</option>
        </select>
        {errors.service && <span className="form-error">{errors.service}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Tell Us About Your Business &amp; Goals *
        </label>
        <textarea
          id="message"
          name="message"
          className={`form-textarea${errors.message ? " error" : ""}`}
          placeholder="What's your biggest operational challenge right now? What would success look like in 90 days?"
          required
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="timeline">
          When do you want to get started?
        </label>
        <select id="timeline" name="timeline" className="form-select" defaultValue="">
          <option value="" disabled>
            Select a timeline
          </option>
          <option>As soon as possible</option>
          <option>Within the next month</option>
          <option>In the next 1–3 months</option>
          <option>Just exploring right now</option>
        </select>
      </div>

      {submitError && (
        <div className="form-error" style={{ marginBottom: "12px", padding: "12px 14px", borderRadius: "8px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
          {submitError}
        </div>
      )}

      <button type="submit" className="form-submit" disabled={sending}>
        {sending ? (
          "Sending..."
        ) : (
          <>
            Send Message &amp; Get Free Audit
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p className="form-note">
        🔒 Your information is encrypted and never shared. We&apos;ll respond within 24 hours.
      </p>
    </form>
  );
}
