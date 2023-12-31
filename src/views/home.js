import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
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
          <Link to="/" className="home-navlink">
            <img
              alt="logo"
              src="https://cdn.discordapp.com/attachments/1134243980276678716/1191250339953918093/game_ove_6_1.png?ex=65a4c155&amp;is=65924c55&amp;hm=e2f2ebac2bf6ba6f7257bf734060b513945f2c71a27475a40b9e35a7679b561a&amp;"
              className="home-image"
            />
          </Link>
          <div className="home-nav">
            <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          </div>
          <a
            href="https://cfx.re/join/zz8mqp"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link button"
          >
            <span className="home-text">
              <span>FiveM Connect</span>
              <br></br>
            </span>
          </a>
        </header>
        <div className="home-hero">
          <h1 className="home-text03">
            <span className="home-text04">What is Pacific Dream Roleplay</span>
            <br></br>
          </h1>
          <span className="home-text06">
            <span>
              Pacific Dream Roleplay is a GTA FiveM roleplay server based off of
              the shore line of San Diego
            </span>
            <br></br>
          </span>
          <div className="home-btn-group"></div>
        </div>
        <div className="home-container2">
          <a
            href="https://discord.gg/jYgY8TwFac"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <div className="home-pricing-card">
              <img
                alt="image"
                src="/external/discord-logo-color-200w-200w.webp"
                className="home-image1"
              />
              <span className="home-text09">Discord</span>
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCoYE6ssoT28HPCn30r8TNxQ"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <div className="home-pricing-card1">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
              <span className="home-text10">Youtube</span>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@pacific.dream.rol"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            <div className="home-pricing-card2">
              <img
                alt="image"
                src="/external/tiktok%20logo-200w-200w.webp"
                className="home-image2"
              />
              <span className="home-text11">TikTok</span>
            </div>
          </a>
          <a
            href="https://www.instagram.com/pacificdream.official/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            <div className="home-pricing-card3">
              <img
                alt="image"
                src="/external/1-12860_new-instagram-logo-png-transparent-png-format-instagram-200h-200h.webp"
                className="home-image3"
              />
              <span className="home-text12">
                <span className="home-text13">Instagram</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <FooterContainer />
    </div>
  )
}

export default Home
