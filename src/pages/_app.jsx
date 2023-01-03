import "../styles/globals.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightblue } from "src/hooks/useBgLightblue";

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightblue();

  return (
    <>
      <Component {...pageProps} {...counter} {...inputArray} />;
    </>
  );
}
