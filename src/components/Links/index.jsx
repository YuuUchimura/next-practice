import styles from "./Links.module.css";

const ITEMS = [
  {
    href: "https://www.google.com/?hl=ja",
    title: "Google",
    description: "Google最高",
  },
  {
    href: "https://www.amazon.co.jp/",
    title: "Amazon",
    description: "Amazon最高",
  },
  {
    href: "https://ja-jp.facebook.com/",
    title: "FaceBook",
    description: "Facebook良い",
  },
  {
    href: "https://www.apple.com/jp/",
    title: "Apple",
    description: "Apple高い",
  },
];

export function Links() {
  return (
    <div className={styles.cards}>
      {ITEMS.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
          </a>
        );
      })}
    </div>
  );
}
