import styles from "./MobileHero.module.css";

export default function MobileHero() {
  return (
    <div className={styles.wrap}>
      <div className={styles.composition}>
        <img
          src="/newImg/Untitled-12%20copy.png"
          alt="Shaurya Patel"
          className={styles.wordmarkImg}
          data-anim="mobile-wordmark"
        />
        <div className={styles.portraitWrap}>
          <img
            src="/newImg/7.png"
            alt="Shaurya Patel"
            width={1968}
            height={1839}
          />
        </div>
      </div>

      <div className={styles.statementRow}>
        <img
          src="/hero/tagline.png"
          alt="Curious by nature. Building by choice."
          className={styles.taglineImg}
        />
        <img
          src="/hero/explore-text.png"
          alt="Exploring science, AI, healthcare, research and music."
          className={styles.exploreImg}
        />
      </div>
    </div>
  );
}
