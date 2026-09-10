import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import WorkCarousel from "./WorkCarousel";
import s from "./v2.module.css";

export const metadata: Metadata = {
  title: "Shaurya Patel",
  description:
    "Shaurya Patel - student, researcher, innovator and guitarist exploring life sciences, healthcare and AI.",
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#foundations", label: "Beyond Academics" },
  { href: "#media", label: "Media" },
  { href: "#awards", label: "Awards" },
  { href: "#connect", label: "Contact" },
];

const projectLinks = [
  { href: "#work", label: "EarlyDetect-AI" },
  { href: "#work", label: "Metabolic Health Score" },
  { href: "#work", label: "Research process" },
];

const beyondLinks = [
  { href: "#foundations", label: "Six strings / guitar" },
  { href: "#awards", label: "IRIS & ISEF" },
  { href: "#media", label: "Behind the scenes" },
];

const stats = [
  { value: "2x", label: "Gold at IRIS" },
  { value: "9+", label: "Projects & Papers" },
  { value: "1 Mission", label: "Make Health Clearer" },
];

const pillars = [
  {
    title: "Research & Evidence",
    copy: "Following a question through literature, data and evidence until the picture gets a little clearer.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="21" cy="21" r="13" />
        <path d="m31 31 10 10" />
        <path d="m14 25 5-7 5 4 6-8" />
      </svg>
    ),
  },
  {
    title: "Health & Life Sciences",
    copy: "Exploring human biology, preventive health and metabolic risk across diabetes, obesity, MASLD and PCOS.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M24 40S8 30 8 19a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 11-16 21-16 21Z" />
        <path d="M13 24h7l3-5 4 10 3-5h5" />
      </svg>
    ),
  },
  {
    title: "AI & Data",
    copy: "Using pattern recognition and digital health to turn fragmented information into one interpretable metric.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="24" cy="24" r="6" />
        <circle cx="24" cy="8" r="3.5" />
        <circle cx="24" cy="40" r="3.5" />
        <circle cx="9" cy="16" r="3.5" />
        <circle cx="39" cy="16" r="3.5" />
        <circle cx="9" cy="32" r="3.5" />
        <circle cx="39" cy="32" r="3.5" />
        <path d="M24 12v6M24 30v6M12 18l7 3M36 18l-7 3M12 30l7-3M36 30l-7-3" />
      </svg>
    ),
  },
  {
    title: "Music & Expression",
    copy: "Six strings, a different way of thinking, and space to listen, practise and experiment.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="19" cy="33" r="8" />
        <circle cx="19" cy="33" r="3" />
        <path d="m26 27 9-9 4-9 3 3-9 4-9 9" />
      </svg>
    ),
  },
];

const featuredLarge = [
  { word: "IRIS National Fair", note: "Gold - 2025 & 2026" },
  { word: "Regeneron ISEF", note: "Columbus, Ohio - 2025" },
];

const featuredSmall = [
  { word: "Team India", note: "ISEF 2025" },
  { word: "EarlyDetect-AI", note: "Research project" },
  { word: "120 Projects", note: "152 students" },
  { word: "Metabolic Score", note: "In progress" },
];

const socials = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5L12 12.3 19.8 6H4.2ZM20 7.8l-7.4 6a1 1 0 0 1-1.2 0L4 7.8V18h16V7.8Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#connect",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.7 8.75 22 11 22 14.3V21h-4v-5.9c0-1.4-.02-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V21H9V9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#connect",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.6" />
        <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#connect",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.1 14.8l-.4-.2-2.6.7.7-2.5-.3-.4A8 8 0 0 1 12 4Zm-3.3 4.2c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.8-2c-.2-.5-.4-.4-.6-.4h-.4Z" />
      </svg>
    ),
  },
];

export default function V2Page() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headerInner}>
          <a href="#top" className={s.logo}>
            SP
          </a>

          <nav className={s.nav}>
            <div className={s.navItem}>
              <a className={s.navLink} href="#about">
                About
              </a>
            </div>

            <div className={s.navItem}>
              <a className={s.navLink} href="#work">
                Projects <Caret />
              </a>
              <div className={s.dropdown}>
                {projectLinks.map((l) => (
                  <a key={l.label} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={s.navItem}>
              <a className={s.navLink} href="#foundations">
                Beyond Academics <Caret />
              </a>
              <div className={s.dropdown}>
                {beyondLinks.map((l) => (
                  <a key={l.label} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={s.navItem}>
              <a className={s.navLink} href="#media">
                Media
              </a>
            </div>
            <div className={s.navItem}>
              <a className={s.navLink} href="#awards">
                Awards
              </a>
            </div>
            <div className={s.navItem}>
              <a className={s.navLink} href="#connect">
                Contact
              </a>
            </div>
          </nav>

          <MobileMenu links={navLinks} />
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <h1 className={`${s.display} ${s.heroName}`}>Shaurya Patel</h1>

            <div className={s.heroPortrait}>
              <Image
                src="/shaurya/hero.webp"
                alt="Shaurya Patel"
                width={1000}
                height={1284}
                priority
              />
            </div>

            <div className={s.heroCols}>
              <p className={s.heroIntro}>
                Hi, I&apos;m Shaurya
                <br />a <strong>Student</strong>,
                <br />
                <strong>Researcher</strong>,
                <br />
                <strong>Innovator</strong>,
                <br />
                and <strong>Guitarist</strong>
              </p>

              <div className={s.heroSpacer} />

              <div>
                <p className={s.heroTagline}>
                  Turning curiosity into questions and questions into impact. Watch
                  this space.
                </p>
                <div className={s.heroCta}>
                  <a className={s.btnSolid} href="#work">
                    View my projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about */}
        <section id="about" className={`${s.onDark} ${s.about}`}>
          <div className={s.shell}>
            <h2 className={`${s.display} ${s.aboutTitle} ${s.reveal}`}>
              Curiosity is my competitive advantage
            </h2>

            <div className={`${s.aboutCols} ${s.reveal}`}>
              <p className={s.aboutLabel}>About me</p>
              <p className={s.aboutBody}>
                I&apos;m Shaurya Patel, a student and researcher from Ahmedabad
                exploring life sciences, healthcare and technology. I enjoy
                following a question until I understand it a little better -
                reading the science, working with data, and changing my thinking
                when the evidence tells me to.
              </p>
            </div>

            <div className={s.stats}>
              <Bulb className={`${s.bulb} ${s.reveal}`} />
              {stats.map((st, n) => (
                <div
                  key={st.label}
                  className={`${s.stat} ${s.reveal}`}
                  style={{ "--i": n } as CSSProperties}
                >
                  <div className={s.statValue}>{st.value}</div>
                  <div className={s.statLabel}>{st.label}</div>
                </div>
              ))}
            </div>

            <div className={s.aboutCols}>
              <span />
              <div className={`${s.aboutMore} ${s.reveal}`}>
                <a className={s.btnGhost} href="#work">
                  <span>Read more</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* journey */}
        <section id="media" className={s.journey}>
          <div className={s.shell}>
            <div className={s.journeyGrid}>
              <div className={s.reveal}>
                <h2 className={s.journeyTitle}>My journey in the making</h2>
                <p>
                  This isn&apos;t just a collection of projects - it&apos;s a
                  journey of growth, driven by curiosity and creativity. From
                  literature reviews to data quality checks to a national science
                  fair stage, each step reflects what I&apos;ve learned and what I
                  still want to build.
                </p>
              </div>

              <a className={`${s.videoCard} ${s.reveal}`} href="#work">
                <Image
                  src="/shaurya/hero.webp"
                  alt="Shaurya Patel"
                  width={1000}
                  height={1284}
                />
                <span className={`${s.display} ${s.videoLabel}`}>
                  Research Reel
                </span>
                <span className={s.playBtn}>
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </div>
            <hr className={s.journeyRule} />
          </div>
        </section>

        {/* foundations */}
        <section id="foundations" className={s.foundations}>
          <div className={s.shell}>
            <h2 className={`${s.display} ${s.centerTitle} ${s.reveal}`}>
              My foundations of innovation
            </h2>

            <div className={s.foundGrid}>
              <Image
                className={`${s.foundPhoto} ${s.reveal}`}
                src="/shaurya/hero.webp"
                alt="Shaurya Patel"
                width={1000}
                height={1284}
              />

              <div className={s.pillars}>
                {pillars.map((p, n) => (
                  <div
                    key={p.title}
                    className={`${s.pillar} ${s.reveal}`}
                    style={{ "--i": n } as CSSProperties}
                  >
                    <span className={s.pillarIcon}>{p.icon}</span>
                    <div>
                      <h3 className={s.pillarTitle}>{p.title}</h3>
                      <p className={s.pillarCopy}>{p.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* work */}
        <section id="work" className={`${s.onDark} ${s.work}`}>
          <div className={s.shell}>
            <h2 className={`${s.display} ${s.workTitle} ${s.reveal}`}>Dive into my work</h2>
            <WorkCarousel />
          </div>
        </section>

        {/* featured */}
        <section id="awards" className={s.featured}>
          <div className={s.shell}>
            <h2 className={`${s.display} ${s.centerTitle} ${s.reveal}`}>
              Recognized & featured in
            </h2>
            <p className={`${s.featuredSub} ${s.reveal}`}>
              Work that earned national recognition and an international stage.
            </p>

            <div className={s.logoRowLarge}>
              {featuredLarge.map((f, n) => (
                <div
                  key={f.word}
                  className={`${s.logoBox} ${s.reveal}`}
                  style={{ "--i": n } as CSSProperties}
                >
                  <span className={s.logoWord}>
                    {f.word}
                    <span className={s.logoNote}>{f.note}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className={s.logoRowSmall}>
              {featuredSmall.map((f, n) => (
                <div
                  key={f.word}
                  className={`${s.logoBox} ${s.reveal}`}
                  style={{ "--i": n } as CSSProperties}
                >
                  <span className={s.logoWord}>
                    {f.word}
                    <span className={s.logoNote}>{f.note}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* connect */}
        <section id="connect" className={`${s.onDark} ${s.connect}`}>
          <div className={s.shell}>
            <h2 className={`${s.display} ${s.connectTitle} ${s.reveal}`}>Let&apos;s connect</h2>
            <p className={`${s.connectSub} ${s.reveal}`}>
              Ready to explore bold questions, meaningful research and projects
              that matter.
            </p>

            <div className={s.socials}>
              {socials.map((so, n) => (
                <a
                  key={so.label}
                  href={so.href}
                  className={`${s.social} ${s.reveal}`}
                  style={{ "--i": n } as CSSProperties}
                >
                  <span className={s.socialCircle}>{so.icon}</span>
                  <span className={s.socialLabel}>{so.label}</span>
                </a>
              ))}
            </div>

            <p className={`${s.copyright} ${s.reveal}`}>
              &copy; 2026 Shaurya Patel. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function Caret() {
  return (
    <svg className={s.caret} viewBox="0 0 10 10" fill="currentColor" aria-hidden>
      <path d="M0 2.5h10L5 8.5z" />
    </svg>
  );
}

function Bulb({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M50 18a24 24 0 0 1 14 43.5c-2.5 1.9-4 4.4-4 7.3V72H40v-3.2c0-2.9-1.5-5.4-4-7.3A24 24 0 0 1 50 18Z" />
      <path d="M40 78h20M42 84h16M45 90h10" />
      <path d="M50 42v14M44 48h12" />
      <path d="M18 34l8 4M18 58h9M24 78l8-5" />
      <path d="M10 104c16-10 34-6 44 4M50 112l6-6-7-4" />
    </svg>
  );
}
