import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Pacific Dream Roleplay</title>
        <meta property="og:title" content="Login - Pacific Dream Roleplay" />
      </Helmet>
      <div className="login-container1">
        <header data-role="Header" className="login-header">
          <Link to="/" className="login-navlink">
            <img
              alt="logo"
              src="https://cdn.discordapp.com/attachments/1134243980276678716/1191250339953918093/game_ove_6_1.png?ex=65a4c155&amp;is=65924c55&amp;hm=e2f2ebac2bf6ba6f7257bf734060b513945f2c71a27475a40b9e35a7679b561a&amp;"
              className="login-image"
            />
          </Link>
          <div className="login-nav">
            <NavigationLinks rootClassName="rootClassName13"></NavigationLinks>
          </div>
          <a
            href="https://cfx.re/join/zz8mqp"
            target="_blank"
            rel="noreferrer noopener"
            className="login-link button"
          >
            <span className="login-text">
              <span>FiveM Connect</span>
              <br></br>
            </span>
          </a>
        </header>
        <div className="login-hero">
          <form className="login-form">
            <div className="login-container2">
              <h1 className="login-text3">
                <span>Login</span>
                <br></br>
              </h1>
              <span className="login-text6">Email Address</span>
              <input
                type="email"
                placeholder="Enter Email"
                className="login-textinput input"
              />
              <span className="login-text7">Password</span>
              <input
                type="password"
                placeholder="Enter Password"
                className="login-textinput1 input"
              />
              <button type="submit" className="login-button button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterContainer rootClassName="footer-container-root-class-name2"></FooterContainer>
    </div>
  )
}

export default Login
