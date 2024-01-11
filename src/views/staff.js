import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
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
            <span className="staff-text">
              <span>FiveM Connect</span>
              <br></br>
            </span>
          </a>
        </header>
      </div>
      <div className="staff-container2">
        <div className="staff-separator"></div>
        <h1 className="staff-text03">
          <span>Founders</span>
          <br></br>
        </h1>
        <div className="staff-separator01"></div>
      </div>
      <div className="staff-user-container">
        <div className="staff-user-modal">
          <img
            alt="image"
            src="https://www.daiki-bot.xyz/playground_assets/Daiki4.png"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="staff-daiki-status-image"
          />
          <div className="staff-daiki-status-container">
            <h1 className="staff-daiki-status-container-heading">Nickname</h1>
          </div>
        </div>
        <div className="staff-user-modal1">
          <img
            alt="image"
            src="https://www.daiki-bot.xyz/playground_assets/Daiki4.png"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="staff-daiki-status-image1"
          />
          <div className="staff-daiki-status-container1">
            <h1 className="staff-daiki-status-container-heading1">Nickname</h1>
          </div>
        </div>
      </div>
      <div className="staff-container3">
        <div className="staff-separator02"></div>
        <h1 className="staff-text06">
          <span>Head Admin</span>
          <br></br>
        </h1>
        <div className="staff-separator03"></div>
      </div>
      <div className="staff-container4">
        <div className="staff-separator04"></div>
        <h1 className="staff-text09">
          <span>Senior Administration</span>
          <br></br>
        </h1>
        <div className="staff-separator05"></div>
      </div>
      <div className="staff-container5">
        <div className="staff-separator06"></div>
        <h1 className="staff-text12">
          <span>Administration</span>
          <br></br>
        </h1>
        <div className="staff-separator07"></div>
      </div>
      <div className="staff-container6">
        <div className="staff-separator08"></div>
        <h1 className="staff-text15">
          <span>Staff</span>
          <br></br>
        </h1>
        <div className="staff-separator09"></div>
      </div>
      <div className="staff-container7">
        <div className="staff-separator10"></div>
        <h1 className="staff-text18">
          <span>Moderation</span>
          <br></br>
        </h1>
        <div className="staff-separator11"></div>
      </div>
      <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
    </div>
  )
}

export default Staff
