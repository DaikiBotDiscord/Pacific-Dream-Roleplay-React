import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './donation.css'

const Donation = (props) => {
  return (
    <div className="donation-container">
      <Helmet>
        <title>Donation - Pacific Dream Roleplay</title>
        <meta property="og:title" content="Donation - Pacific Dream Roleplay" />
      </Helmet>
      <div className="donation-container1">
        <header data-role="Header" className="donation-header">
          <Link to="/" className="donation-navlink">
            <img
              alt="logo"
              src="https://cdn.discordapp.com/attachments/1134243980276678716/1191250339953918093/game_ove_6_1.png?ex=65a4c155&amp;is=65924c55&amp;hm=e2f2ebac2bf6ba6f7257bf734060b513945f2c71a27475a40b9e35a7679b561a&amp;"
              className="donation-image"
            />
          </Link>
          <div className="donation-nav">
            <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          </div>
          <a
            href="https://cfx.re/join/zz8mqp"
            target="_blank"
            rel="noreferrer noopener"
            className="donation-link button"
          >
            <span className="donation-text">
              <span>FiveM Connect</span>
              <br></br>
            </span>
          </a>
        </header>
      </div>
    </div>
  )
}

export default Donation
