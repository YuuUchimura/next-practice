import { useEffect } from "react";
export const useBgLightblue = () => {
  useEffect(() => {
    // console.log(`マウント時：${count}`);
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // console.log(`アンマウント時：${count}`);
      document.body.style.backgroundColor = "";
    };
  }, []);
};
