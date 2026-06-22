"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "⊞" },
  { href: "/admin/projects", label: "Projects", icon: "📁" },
  { href: "/admin/faq", label: "FAQ", icon: "❓" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        <span className="gradient-text">Omkar</span>
        <span className="admin-sidebar-badge">Admin</span>
      </div>

      <nav className="admin-nav">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`admin-nav-link${pathname === item.href ? " active" : ""}`}
          >
            <span className="admin-nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="admin-sidebar-footer">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="admin-nav-link"
        >
          <span className="admin-nav-icon">↗</span>
          View Site
        </a>
        <button className="admin-nav-link admin-logout-btn" onClick={handleLogout}>
          <span className="admin-nav-icon">⏻</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
