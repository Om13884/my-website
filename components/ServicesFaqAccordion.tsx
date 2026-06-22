"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

export default function ServicesFaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="faq-grid">
      {items.map((f, i) => (
        <div
          key={f.id}
          className={`faq-item${i % 2 === 1 ? "" : ""}${openId === f.id ? " open" : ""}`}
          onClick={() => setOpenId(openId === f.id ? null : f.id)}
        >
          <div className="faq-question">
            {f.q}
            <span className="faq-toggle">+</span>
          </div>
          <div className="faq-answer">{f.a}</div>
        </div>
      ))}
    </div>
  );
}
