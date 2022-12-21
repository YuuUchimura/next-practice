import styles from "../../styles/Home.module.css";

export default function Headline(props) {
  let { title } = props;
  if (title === "") {
    title = "Index";
  }
  return (
    <div>
      <h1 className={styles.title}>{title} page</h1>
    </div>
  );
}
