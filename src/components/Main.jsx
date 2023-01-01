import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import styles from "../styles/Home.module.css";

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
