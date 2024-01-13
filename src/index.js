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
import Login from './views/login'
import Home from './views/home'
import NotFound from './views/not-found'
import Register from './views/register'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Staff} exact path="/staff" />
        {/* <Route component={Donation} exact path="/donation" /> */}
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
