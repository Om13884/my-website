"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/types";

const filters = [
  { label: "All Projects", value: "all" },
  { label: "AI Agents", value: "ai" },
  { label: "SEO", value: "seo" },
  { label: "Marketing", value: "marketing" },
  { label: "Workflow", value: "workflow" },
  { label: "Lead Gen", value: "lead-gen" },
];

export default function PortfolioFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((c) => c.category.includes(active));

  return (
    <>
      <div className="portfolio-filters reveal">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${active === f.value ? " active" : ""}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="case-study-grid">
        {visible.map((card) => (
          <div
            key={card.id}
            className="case-study-card tilt-card"
          >
            <div
              className="case-thumb"
              style={card.image ? { background: "#0d0d0d", position: "relative", overflow: "hidden" } : { background: card.thumb }}
            >
              {card.image ? (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "top left", opacity: 0.9 }}
                />
              ) : (
                <div className="case-thumb-icon">{card.thumbIcon}</div>
              )}
              {card.image && (
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.55) 100%)",
                  pointerEvents: "none",
                }} />
              )}
            </div>
            <div className="case-body">
              <div className="case-meta">
                <span className={`badge ${card.badgeClass}`}>{card.badge}</span>
                <span className="case-industry">{card.industry}</span>
              </div>
              <h3 className="case-title">{card.title}</h3>
              <p className="case-problem">{card.problem}</p>
              {card.result && (
                <div className="case-result">
                  <strong>Result:</strong> {card.result}
                </div>
              )}
              {card.stats && card.stats.length > 0 && (
                <div className="case-stats">
                  {card.stats.map((s) => (
                    <div className="case-stat" key={s.label}>
                      <div className="case-stat-num">{s.num}</div>
                      <div className="case-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="case-tools">
                {card.tools.map((t) => (
                  <span className="case-tool" key={t}>{t}</span>
                ))}
              </div>
              <div className="case-footer">
                <div className="case-timeline">
                  ⏱ {card.timeline} · {card.client}
                </div>
                <a href="/contact" className="btn btn-outline btn-sm">
                  Similar Project?
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
