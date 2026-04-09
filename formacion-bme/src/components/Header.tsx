import { useState } from "react";

const NAV = [
  { href: "#indice", label: "Índice" },
  { href: "#bloques", label: "Bloques" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#top">
          <span className="header__title">Material de formación</span>
        </a>
        <nav className="header__nav-desktop" aria-label="Principal">
          {NAV.map((item) => (
            <a key={item.href} className="header__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      <div id="mobile-nav" className={`mobile-drawer${open ? " is-open" : ""}`}>
        {NAV.map((item) => (
          <a
            key={item.href}
            className="header__link"
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
