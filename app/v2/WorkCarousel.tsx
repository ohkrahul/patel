"use client";

import { useState } from "react";
import { explorationCards } from "@/data/explorations";
import s from "./v2.module.css";

export default function WorkCarousel() {
  const [i, setI] = useState(0);
  const card = explorationCards[i];
  const step = (d: number) =>
    setI((n) => (n + d + explorationCards.length) % explorationCards.length);

  return (
    <>
      <div className={s.workStage}>
        <button
          type="button"
          className={s.arrow}
          onClick={() => step(-1)}
          aria-label="Previous project"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 4 7 12l8 8" />
          </svg>
        </button>

        <div key={`copy-${card.id}`} className={s.slideBody}>
          <h3 className={s.slideTitle}>{card.title}</h3>
          <p className={s.slideCopy}>{card.copy}</p>
          <a className={s.btnGhost} href="#work">
            <span>Read more</span>
          </a>
        </div>

        <div key={`tile-${card.id}`} className={s.slideTile}>
          <span className={s.tileNumber}>{card.number}</span>
          <ul className={s.tileTags}>
            {card.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className={s.arrow}
          onClick={() => step(1)}
          aria-label="Next project"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 4 8 8-8 8" />
          </svg>
        </button>
      </div>

      <div className={s.dots}>
        {explorationCards.map((c, n) => (
          <button
            key={c.id}
            type="button"
            className={`${s.dot} ${n === i ? s.dotActive : ""}`}
            onClick={() => setI(n)}
            aria-label={`Go to ${c.title}`}
            aria-current={n === i}
          />
        ))}
      </div>
    </>
  );
}
