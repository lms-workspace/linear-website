import Image from "next/image";
import styles from "../page.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="nf-hero-heading">
      <div className={styles.heroInner}>
        <span className={styles.heroRail} aria-hidden />
        <div className={styles.heroCopy}>
          <Image
            className={styles.heroLogo}
            src="/nanofiber-infocomm/logo.png"
            alt="nanoFIBER"
            width={1830}
            height={357}
            priority
          />
          <p className={styles.heroEyebrow}>
            InfoComm 2026 · LVCC West Hall · Jun 17 – 19
          </p>
          <h1 id="nf-hero-heading" className={styles.heroHeadline}>
            Mission-Critical Fiber
            <em>From Camera to Core.</em>
          </h1>
          <p className={styles.heroSub}>
            Tactical-armored single-mode and multimode for broadcast,
            Pro AV, stadium, and data-center deployments. Field-proven,
            OpticalCON-terminable, deployed today. Talk specs with the
            team — at the show or after.
          </p>
          <div className={styles.heroCta}>
            <a href="#meet" className={styles.btn}>
              Book a 30-Min Call
              <span className={styles.btnArrow} aria-hidden>→</span>
            </a>
            <a href="#brief" className={`${styles.btn} ${styles.btnGhost}`}>
              Send a Brief
            </a>
          </div>
        </div>
        <div className={styles.heroVisual} aria-hidden>
          <Image
            src="/nanofiber-infocomm/hero-strands.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
