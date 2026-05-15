import Image from "next/image";
import styles from "../page.module.css";

type TeamMember = {
  name: string;
  role: string;
  email: string;
};

const TEAM: TeamMember[] = [
  { name: "Blake Pederson", role: "Sales · LMS × P2P", email: "BPederson@P2PCable.com" },
  { name: "Patrick Evans", role: "Sales · P2P", email: "pevans@p2pcable.com" },
  { name: "Steve Stark", role: "VP Marketing · P2P", email: "sstark@p2pcable.com" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <section className={styles.team} aria-labelledby="nf-team-heading">
          <h3 id="nf-team-heading" className={styles.teamLabel}>
            Reach the team
          </h3>
          <ul className={styles.teamGrid}>
            {TEAM.map((m) => (
              <li key={m.email} className={styles.teamCard}>
                <span className={styles.teamName}>{m.name}</span>
                <span className={styles.teamRole}>{m.role}</span>
                <a className={styles.teamEmail} href={`mailto:${m.email}`}>
                  {m.email}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.footerColophon}>
          <span className={styles.footerBrand}>
            <Image
              className={styles.footerMark}
              src="/nanofiber-infocomm/logo-mark.png"
              alt=""
              width={2048}
              height={2048}
              aria-hidden
            />
            <span className={styles.footerCopy}>
              © 2026 nanoFIBER · InfoComm 2026 campaign
            </span>
          </span>
          <span className={styles.footerCredit}>
            Built by <a href="/">Linear Marketing Solutions →</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
