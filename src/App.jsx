import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from './utils'
import { PrivateRoute } from './route'
import LoginPage from './pages/login'
import AccountPage from './pages/account'
import AllOrdersPage from './pages/order'
import { Navbar } from './components/navbar'
import { Alert } from './components/alert'
import ProfilePage from './pages/profile'
import EditPlan from './pages/meal-plan'

function App() {
  return (
    <div className="h-screen">
      <h3>kkkk</h3>
      <Navbar />
      <Alert />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          
          <PrivateRoute path="/" exact component={AccountPage} />
          <PrivateRoute path="/edit-plan" component={EditPlan} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/orders" exact component={AllOrdersPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default connect(null, null)(App)
