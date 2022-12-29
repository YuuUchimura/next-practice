import styles from "../styles/Home.module.css";
import { Headline } from "./Headline";

export function Main(props) {
  const { title } = props;
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Headline title={title} />
      </div>
    </main>
  );
}
