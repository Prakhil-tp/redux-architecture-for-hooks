import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Trainer from './pages/Trainer'
import Participant from './pages/Participant'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Participant} />
        <Route path="/:id" component={Trainer} />
      </Switch>
    </Router>
  )
}

export default App

