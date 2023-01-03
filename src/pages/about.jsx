import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();

  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.body}>
        {isShow ? <h1>{count}</h1> : null}
        <button href="/about" onClick={handleClick}>
          ボタン
        </button>
        <div>
          <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
        </div>
        <div>
          <input type="text" value={text} onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleAdd}>追加</button>
        </div>
        <ul>
          {array.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
      <Main title="about" />
    </>
  );
}
