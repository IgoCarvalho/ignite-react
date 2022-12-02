import {render} from "react-dom";
import { App } from './App'

import './styles/global.scss'

function Main() {
  return <App />
}

render(<Main></Main>, document.getElementById('root'))
