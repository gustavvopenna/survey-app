import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './screens/welcomeScreen'
import Question from './screens/questionScreen'
import Thanks from './screens/thanksScreen'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/question" component={Question} />
    <Route exact path="/thanks" component={Thanks} />
  </Switch>
)

export default Routes
