import React from 'react'
import { connect } from 'react-redux'

import { authenticationActions } from '../../actions'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // reset login status
    this.props.logout()
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { email, password } = this.state
    if (email && password) {
      this.props.login(email, password)
    }
  }

  render() {
    const { loggingIn, error } = this.props
    const { email, password, submitted } = this.state
    return (
      <div className="login mt-28">
        <div className="max-w-2xl mx-auto">
          <form name="form" onSubmit={this.handleSubmit}>
            <div className="bg-white px-8 py-10 sm:h-60 sm:px-12 sm:py-8 ">
              <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-5">
                  <label htmlFor="email" className="leading-snug text-sm font-semibold text-black">Email</label>
                  <input type="email" name="email" id="email" value={email} autoComplete="email" onChange={this.handleChange} required className="block w-full h-12 px-3 py-2 border border-solid border-gray-400 rounded-lg" />
                </div>

                <div className="col-span-12 pl-0 pt-5 sm:col-span-5 sm:pl-4.5 sm:pt-0">
                  <label htmlFor="password" className="leading-snug text-sm font-semibold text-black">Password</label>
                  <input type="password" name="password" id="password" value={password} autoComplete="current-password" onChange={this.handleChange} required className="block w-full h-12 px-3 py-2 border border-solid border-gray-400 rounded-lg" />
                </div>
              </div>
              {error &&
                <div className="text-red-500 text-xs mt-1">
                  Invalid login credentials
                </div>
              }
              <a className="block text-primary mt-5 mb-5 sm:mb-3 leading-snug text-sm" href="/forgot-password">Forgot your password?</a>
              <button type="submit" className="w-full sm:w-60 h-12 bg-primary text-white rounded-xl leading-8 text-base">Log In</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggingIn, error } = state.authentication
  return {
    loggingIn,
    error,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    login: (email, password) => dispatch(authenticationActions.login({ email, password })),
    logout: () => dispatch(authenticationActions.logout()),
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
