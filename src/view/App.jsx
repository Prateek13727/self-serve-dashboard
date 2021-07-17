import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';

import './App.css';

const AppContainer = () => {
  return (
    <div className="app-container">
        <Switch>
          <Route path="/stake">
            <Stake />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/">
            <Mint />
          </Route>
        </Switch>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar /> 
        <AppContainer />
      </div>
    </Router>
  )
}

function Mint() {
  return <h2>Mint</h2>
}

function Stake() {
  return <h2>Stake</h2>
}

function Stats() {
  return <h2>Stats</h2>
}

export default App
