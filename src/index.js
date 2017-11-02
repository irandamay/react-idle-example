import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Idle from 'react-idle'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <p><Link to="/login">Click to go to login</Link></p>
      <p>If you've already logged in before, <Link to="/home">click to go back to Home</Link></p>
    </div>
  )
}

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (
      <div>
        <Idle timeout={5000} onChange={({ idle }) => {
            if (idle) {
              console.log('login history push')
              this.context.router.history.push('/')
            }
        }} />
        <h1>Login</h1>
        <p>Wait 5s to go back to Landing or <Link to="/home">click to login</Link></p>
      </div>
    )
  }
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>We want to stay here, but you're going to be redirected back to Landing in 5s</p>
    </div>
  )
}

render(
  <App />,
  document.getElementById('root')
)
