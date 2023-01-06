import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./styles/global.scss";

function Main() {
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main></Main>
);
