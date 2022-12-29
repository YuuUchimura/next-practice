import styles from "../styles/Home.module.css";

export function Headline(props) {
  const { title } = props;
  return (
    <div>
      <h1 className={styles.title}>{title} page</h1>
    </div>
  );
}
