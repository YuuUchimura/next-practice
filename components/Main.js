import styles from "../styles/Home.module.css";
import { Headline } from "./Headline";
import { Links } from "./Links";

export function Main(props) {
  const { title } = props;
  return (
      <main className={styles.main}>
        <div className={styles.grid}>
          <Headline title={title} />
        </div>
        <Links />
      </main>
  );
}
