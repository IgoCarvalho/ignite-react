import {render} from "react-dom";
import { App } from './App'

function Main() {
  return <h1>Hello React!</h1>
}

render(<Main></Main>, document.getElementById('root'))
