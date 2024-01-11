import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Staff from './views/staff'
import Donation from './views/donation'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/discord" component={window.location.replace('https://discord.gg/aKmGcdK6aZ')} />
        <Route path="/fiveM-join" component={window.location.replace('https://cfx.re/join/zz8mqp')} />
        <Route component={Staff} exact path="/staff" />
        {/*         <Route component={Donation} exact path="/donation" /> */}
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
