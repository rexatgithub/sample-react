import React, { Component, Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// them activates instructure ui-theme
// import theme from '@instructure/ui-themes/lib/canvas'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { updateUser, apiRequest } from './actions/user-actions'
import ILoader from './components/common/Iloader'
import './app.css'

const Dashboard = lazy(() => import('./components/dashboard/Dashboard'))
const Login = lazy(() => import('./components/auth/login/login'))
const ForgotPassword = lazy(() => import('./components/auth/forgot/forgot-password'))

class App extends Component {
  onUpdateUser = event => {
    const { onUpdateUser } = this.props
    onUpdateUser(event.target.value)
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<ILoader />}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

App.defaultProps = {
  onUpdateUser: () => {},
}

App.propTypes = {
  onUpdateUser: PropTypes.func,
}

const navigationSelector = createSelector(
  state => state.navigation,
  navigation => navigation,
)

const userSelector = createSelector(
  state => state.user,
  user => user,
)

const mapStateToProps = createSelector(
  userSelector,
  navigationSelector,
  (user, navigation) => ({
    navigation,
    user,
  }),
)

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(App)
