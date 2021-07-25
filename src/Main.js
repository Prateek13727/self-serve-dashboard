import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Workspace from './view/components/workspace/Workspace'; 

// import App from './view/App'

import './Main.css';

const Taskbar = () => {
  return <div>
    Taskbar
  </div>
}

function Main() {
  return (
    <>
      <Router>
        <Taskbar />
        <Workspace />
      </Router>
    </>
  )
}

export default Main


/* <div className="container">
    <Switch>
      <Route path="/app">
        <App />
      </Route>
      <Route path="/">
        <Website />
      </Route>
    </Switch>
</div> */