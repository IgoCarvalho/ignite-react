import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./styles/global.scss";

function Main() {
  return <App />;
}

createRoot(document.getElementById("root")).render(<Main></Main>);
