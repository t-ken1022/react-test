import { createRoot } from "react-dom/client";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, // ES2015からプロパティ名と値に指定する変数名が同じ場合、右辺（値に指定した変数名）を省略可
    fontSize: "1.5em"
  };

  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
// ↑ 「default export」は1つのファイルにつき1回まで
