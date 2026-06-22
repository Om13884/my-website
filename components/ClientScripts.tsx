"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function animateCounter(el: HTMLElement, target: number, duration = 1800) {
  const suffix = el.dataset.suffix || "";
  const prefix = el.dataset.prefix || "";
  const start = performance.now();
  const update = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Reveal animations
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // Counter animations
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0", 10);
            animateCounter(el, target);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));

    // Process animation
    const processSection = document.querySelector<HTMLElement>(".process-track");
    if (processSection) {
      const processObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const steps = processSection.querySelectorAll<HTMLElement>(".process-step");
            const fill = processSection.querySelector<HTMLElement>(".process-line-fill");
            steps.forEach((step, i) => {
              setTimeout(() => step.classList.add("active"), i * 180);
            });
            if (fill) {
              setTimeout(() => { fill.style.width = "100%"; }, 100);
            }
            processObserver.unobserve(processSection);
          }
        },
        { threshold: 0.3 }
      );
      processObserver.observe(processSection);
    }

    // 3D card tilt — throttled via rAF so getBoundingClientRect runs at most once per frame
    const tiltCards = document.querySelectorAll<HTMLElement>(".tilt-card");
    const tiltState = new WeakMap<HTMLElement, { raf: number | null; mx: number; my: number }>();
    const onTiltMove = function(this: HTMLElement, e: MouseEvent) {
      let state = tiltState.get(this);
      if (!state) { state = { raf: null, mx: 0, my: 0 }; tiltState.set(this, state); }
      state.mx = e.clientX;
      state.my = e.clientY;
      if (state.raf !== null) return;
      state.raf = requestAnimationFrame(() => {
        if (!state) return;
        state.raf = null;
        const rect = (this as HTMLElement).getBoundingClientRect();
        const x = state.mx - rect.left;
        const y = state.my - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotY = ((x - cx) / cx) * 8;
        const rotX = -((y - cy) / cy) * 6;
        (this as HTMLElement).style.setProperty("--tilt-x", `${rotX}deg`);
        (this as HTMLElement).style.setProperty("--tilt-y", `${rotY}deg`);
        (this as HTMLElement).style.setProperty("--shine-x", `${x}px`);
        (this as HTMLElement).style.setProperty("--shine-y", `${y}px`);
      });
    };
    const onTiltLeave = function(this: HTMLElement) {
      this.style.setProperty("--tilt-x", "0deg");
      this.style.setProperty("--tilt-y", "0deg");
    };
    tiltCards.forEach(card => {
      card.addEventListener("mousemove", onTiltMove as EventListener);
      card.addEventListener("mouseleave", onTiltLeave as EventListener);
    });

    // Stagger children of .stagger-parent
    document.querySelectorAll<HTMLElement>(".stagger-parent").forEach(parent => {
      const children = Array.from(parent.children) as HTMLElement[];
      children.forEach((child, i) => {
        child.style.animationDelay = `${i * 0.12}s`;
      });
    });

    // Dashboard simulation
    const dashCard = document.querySelector<HTMLElement>(".dashboard-card");
    if (dashCard) {
      const activities = [
        { text: "New lead captured from LinkedIn", dot: "green", time: "2s ago" },
        { text: "Email sequence triggered", dot: "purple", time: "18s ago" },
        { text: "CRM record updated automatically", dot: "yellow", time: "1m ago" },
        { text: "Lead scored — High Intent (94/100)", dot: "green", time: "2m ago" },
        { text: "Appointment booked via chatbot", dot: "purple", time: "4m ago" },
      ];
      let idx = 0;
      const timer = setInterval(() => {
        const rows = dashCard.querySelectorAll<HTMLElement>(".activity-row");
        if (!rows.length) return;
        const next = activities[idx % activities.length];
        const first = rows[0];
        const textEl = first.querySelector<HTMLElement>(".activity-text");
        const timeEl = first.querySelector<HTMLElement>(".activity-time");
        const dotEl = first.querySelector<HTMLElement>(".activity-dot");
        if (textEl) textEl.textContent = next.text;
        if (timeEl) timeEl.textContent = next.time;
        if (dotEl) dotEl.className = `activity-dot ${next.dot}`;
        first.style.opacity = "0";
        first.style.transform = "translateY(-8px)";
        setTimeout(() => {
          first.style.transition = "all 0.4s ease";
          first.style.opacity = "1";
          first.style.transform = "translateY(0)";
        }, 100);
        idx++;
      }, 3500);
      return () => {
        clearInterval(timer);
        revealObserver.disconnect();
        counterObserver.disconnect();
      };
    }

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
