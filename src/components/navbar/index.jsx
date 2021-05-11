import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ReactComponent as NavbarLogo } from '../../assets/images/kabo-logo-nav.svg'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navStep: 0
    }
    this.setNav = this.setNav.bind(this)
  }

  setNav(index) {
    this.setState({
      navStep: index
    })
  }

  componentDidMount() {
    const urlString = window.location.href
    if (urlString.includes('store')) {
      this.setNav(2)
    } else if (urlString.includes('orders')) {
      this.setNav(3)
    } else if (urlString.includes('profile')) {
      this.setNav(4)
    }
    else {
      this.setNav(1)
    }
  }

  render() {
    const { user } = this.props
    const { navStep } = this.state

    const active = "bg-primary text-white px-3 py-2 rounded-md text-sm font-medium"
    const inActive = "text-charcoal hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

    const loggedIn = user && user.token
    return (
      <nav className="bg-white h-28">
        <div className="px-10 py-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <NavbarLogo className="block w-auto" />
              </div>
              {loggedIn &&
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <a href="/" className={navStep == 1 ? active : inActive}>Dashboard</a>
                    <a href="/store" className={navStep == 2 ? active : inActive}>Store</a>
                    <a href="/orders" className={navStep == 3 ? active : inActive}>Orders</a>
                    <a href="/profile" className={navStep == 4 ? active : inActive}>Account</a>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return {
    user,
  }
}

const connectedNavbar = connect(mapStateToProps)(Navbar)
export { connectedNavbar as Navbar }
