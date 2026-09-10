"use client";

import { useState } from "react";
import s from "./v2.module.css";

export default function MobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={s.mobileMenu}>
      <button
        type="button"
        className={s.menuToggle}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav id="mobile-nav" className={s.mobilePanel}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
