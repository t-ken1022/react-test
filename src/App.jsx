/* eslint react-hooks/exhaustive-deps: off */
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

import { ColorfulMessage } from "./components/ColorfulMessage";
// ↑ 通常の「export」の場合、インポート名はインポート先の変数名と同一のものを指定
// インポート名を間違えるとエラー
// メリットとしてインポート名が確約されるので、基本的にこちらのインポート方法を使用

// import ColorfulMessage from "./components/ColorfulMessage";
// ↑ 「default export」の場合、インポート名は基本任意;

const App = () => {
  console.log("first console");

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log(true);
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <main className="mn-cnt">
      <div className="mn-cnt_bdy">
        <h1 style={{ color: "red" }}>Hello World</h1>
        <ColorfulMessage color="blue">hogehogehogehoge</ColorfulMessage>
        <ColorfulMessage color="pink">fugafuga</ColorfulMessage>
        <button onClick={onClickButton}>カウントアップ</button>
        <br />
        <button onClick={onClickSwitchShowFlag}>on / off</button>
        <p>{num}</p>
        {faceShowFlag && <p>（＾ω＾）</p>}
      </div>
    </main>
  );
};

export default App;
