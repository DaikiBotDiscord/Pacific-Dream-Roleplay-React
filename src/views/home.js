import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pacific Dream Roleplay</title>
        <meta property="og:title" content="Pacific Dream Roleplay" />
      </Helmet>
      <div className="home-container1">
        <header data-role="Header" className="home-header">
          <img
            alt="logo"
            src="https://cdn.discordapp.com/attachments/1134243980276678716/1191250339953918093/game_ove_6_1.png?ex=65a4c155&amp;is=65924c55&amp;hm=e2f2ebac2bf6ba6f7257bf734060b513945f2c71a27475a40b9e35a7679b561a&amp;"
            className="home-image"
          />
          <div className="home-nav">
            <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          </div>
        </header>
        <div className="home-hero">
          <h1 className="home-text">
            <span className="home-text1">What is Pacific Dream Roleplay</span>
            <br></br>
          </h1>
          <span className="home-text3">
            <span>
              Pacific Dream Roleplay is a GTA FiveM roleplay server based off of
              the shore line of San Diego
            </span>
            <br></br>
          </span>
          <div className="home-btn-group"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
