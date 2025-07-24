import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="inputContainer">
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input type="text" id="username" className="input" />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="inputContainer">
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input type="password" id="password" className="input" />
      </div>
    )
  }

  render() {
    return (
      <div className="login-container">
        <div className="loginForm">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxtwatch-logo"
            className="logo"
          />
          <div className="loginFormConatiner">
            <div>{this.renderUsernameField()}</div>
            <div>{this.renderPasswordField()}</div>
            <div>
              <div className="checkboxContainer">
                <input type="checkbox" id="showPassword" />
                <label htmlFor="showPassword" className="showPasswordText">
                  Show Password
                </label>
              </div>
              <button type="button" className="loginButton">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
