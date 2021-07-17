import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './view/components/header/Header';
import Workspace from './view/components/workspace/Workspace'; 

// import App from './view/App'

import './Main.css';

function Main() {
  return (
    <>
      <Router>
        <Header />  
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