import Image from "next/image";
import styles from "../page.module.css";

type Tile = {
  src: string;
  alt: string;
  caption: string;
};

const TILES: Tile[] = [
  {
    src: "/nanofiber-infocomm/product-connectors.jpg",
    alt: "nanoFIBER fiber connector terminations — OpticalCON, LC, SC",
    caption: "OpticalCON · LC · SC · Terminable",
  },
  {
    src: "/nanofiber-infocomm/product-splice.jpg",
    alt: "nanoFIBER splice in field — tactical fiber deployment",
    caption: "2T · 4T · 24T · Single-Mode + Multimode",
  },
];

export function ProductStrip() {
  return (
    <section className={styles.productStrip} aria-label="nanoFIBER product range">
      {TILES.map((tile) => (
        <div key={tile.src} className={styles.productTile}>
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <span className={styles.productCaption}>{tile.caption}</span>
        </div>
      ))}
    </section>
  );
}
