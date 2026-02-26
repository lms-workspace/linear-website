import Link from "next/link";
import Image from "next/image";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "Services" },
      { href: "/services#strategy", label: "Strategy" },
      { href: "/services#creative", label: "Creative" },
      { href: "/services#execution", label: "Execution" },
    ],
  },
  {
    title: "Work",
    links: [
      { href: "/work", label: "Portfolio" },
      { href: "/work#apps", label: "Apps" },
      { href: "/work#dashboards", label: "Dashboards" },
      { href: "/work#websites", label: "Websites" },
    ],
  },
  {
    title: "AI Tools",
    links: [
      { href: "/ai-tools", label: "AI Tools" },
      { href: "/ai-tools#openclaw", label: "OpenClaw Setup" },
    ],
  },
  {
    title: "Company",
    links: [{ href: "/contact", label: "Contact" }],
  },
];

const TAGLINE =
  "Strategy. Creative. AI. Execution. Linear Marketing Solutions does it all.";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="footer-root">
      <div className="footer-top">
        <div className="footer-inner">
          <Link
            href="/"
            className="footer-logo"
            aria-label="Linear Marketing Solutions — Home"
          >
            <Image
              src="/logo-full.svg"
              alt=""
              width={320}
              height={48}
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-tagline">{TAGLINE}</p>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-inner footer-grid">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="footer-col">
              <h3 className="footer-col-title">{col.title}</h3>
              <ul className="footer-col-links">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-inner footer-bottom-inner">
          <p className="footer-copyright">
            © {year} Linear Marketing Solutions. All rights reserved.
          </p>
          <div className="footer-bottom-right">
            <p className="footer-statement">
              Built with AI. Operated by humans.
            </p>
            <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/linear-marketing-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/linearmarketingsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
