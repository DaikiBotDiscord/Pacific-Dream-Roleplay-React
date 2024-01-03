import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './staff.css'

const Staff = (props) => {
  return (
    <div className="staff-container">
      <Helmet>
        <title>Staff - Pacific Dream Roleplay</title>
        <meta property="og:title" content="Staff - Pacific Dream Roleplay" />
      </Helmet>
      <div className="staff-container1">
        <header data-role="Header" className="staff-header">
          <Link to="/" className="staff-navlink">
            <img
              alt="logo"
              src="https://cdn.discordapp.com/attachments/1134243980276678716/1191250339953918093/game_ove_6_1.png?ex=65a4c155&amp;is=65924c55&amp;hm=e2f2ebac2bf6ba6f7257bf734060b513945f2c71a27475a40b9e35a7679b561a&amp;"
              className="staff-image"
            />
          </Link>
          <div className="staff-nav">
            <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
          </div>
          <a
            href="https://cfx.re/join/zz8mqp"
            target="_blank"
            rel="noreferrer noopener"
            className="staff-link button"
          >
            <span>
              <span>FiveM Connect</span>
              <br></br>
            </span>
          </a>
        </header>
      </div>
      <h1 className="staff-text3">
        <span>Founders</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Staff
