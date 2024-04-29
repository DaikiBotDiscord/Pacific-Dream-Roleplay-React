import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
import './home.css'
import Header from '../components/header'
import UserHeader from '../components/user-header'
import config from './config/config'
import axios from 'axios'

const Home = (props) => {
  const [headerComponent, setHeaderComponent] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState();
  const [maxPlayers, setMaxPlayers] = useState();
  const [discordMembers, setDiscordMembers] = useState();


  axios.get(`${config.apiDomain}/api/fivem/onlineplayers`)
    .then(response => {
      setOnlinePlayers(response.data)
    }).catch(error => {
      console.error('API Error:', error);
    })

  axios.get(`${config.apiDomain}/api/fivem/maxplayers`)
    .then(response => {
      setMaxPlayers(response.data)
    }).catch(error => {
      console.error('API Error:', error);
    })

  axios.get(`${config.apiDomain}/api/discord/membercount`)
    .then(response => {
      setDiscordMembers(response.data)
    }).catch(error => {
      console.error('API Error:', error);
    })


  useEffect(() => {
    checkTokenRepeat();
  }, []);

  const checkTokenRepeat = async () => {
    try {
      const response = await fetch(`${config.apiDomain}/api/token-check`, {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          token: config.requiredToken,
        },
        body: JSON.stringify({
          token: window.localStorage.getItem('token'),
        }),
      });

      const data = await response.json();

      if (data.data === 'token expired') {
        window.localStorage.clear();
        setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
      } else if (data.status === 'active') {
        // Set the UserHeader component to be rendered
        setHeaderComponent(<UserHeader rootClassName="header-root-class-name2" />);
      } else {
        // Set the default Header component to be rendered
        setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
      }
    } catch (err) {
      console.error(err);
      // Handle error (e.g., display an error message or redirect)
    }
  };



  function handleContextMenu(event) {
    event.preventDefault();
  }

  return (
    <div className="home-container">
      <Helmet>
        <title>Pinal County Roleplay</title>
        <meta property="og:title" content="Pinal County Roleplay" />
      </Helmet>
      <div className="home-container1">
        {headerComponent}
        <div className="home-hero">
          <img
            alt="image"
            src="https://pinalcountyrp.com/welcome_banner.png"
            className="home-image"
            onContextMenu={handleContextMenu}
          />
          <img
            alt="image"
            src="https://pinalcountyrp.com/mobile_welcome_banner.png"
            className="home-image1"
            onContextMenu={handleContextMenu}
          />
          <div className="home-btn-group">
            <a
              href="https://cfx.re/join/zz8mqp"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <img
                alt="image"
                src="https://pinalcountyrp.com/Play_Now.png"
                className="home-image2"
                onContextMenu={handleContextMenu}
              />
            </a>
            <a
              href="https://discord.gg/pinalcountyrp"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <img
                alt="image"
                src="https://pinalcountyrp.com/Join_Discord.png"
                className="home-image3"
                onContextMenu={handleContextMenu}
              />
            </a>
          </div>
          <div className="home-container2">
            <div className="home-container3">
              <img
                src="https://pinalcountyrp.com/FiveM_Logo.png"
                alt="image"
                className="home-image4"
                onContextMenu={handleContextMenu}
              />
              <div className="home-container4">
                <span className="home-text">{onlinePlayers}/{maxPlayers}</span>
                <span className="home-text01">
                  <span>Online Players</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container5">
              <img
                src="https://pinalcountyrp.com/discord_blurple.png"
                alt="image"
                className="home-image5"
                onContextMenu={handleContextMenu}
              />
              <div className="home-container6">
                <span className="home-text04">
                  <span>{discordMembers}</span>
                  <br></br>
                </span>
                <span className="home-text07">
                  <span>Discord Members</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container7">
          <a
            href="https://discord.gg/jYgY8TwFac"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <div className="home-pricing-card">
              <img
                alt="image"
                src="/external/discord-logo-color-200w-200w.webp"
                className="home-image6"
                onContextMenu={handleContextMenu}
              />
              <span className="home-text10">Discord</span>
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCoYE6ssoT28HPCn30r8TNxQ"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            <div className="home-pricing-card1">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
              <span className="home-text11">Youtube</span>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@pacific.dream.rol"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            <div className="home-pricing-card2">
              <img
                alt="image"
                src="/external/tiktok%20logo-200w-200w.webp"
                className="home-image7"
                onContextMenu={handleContextMenu}
              />
              <span className="home-text12">TikTok</span>
            </div>
          </a>
          <a
            href="https://www.instagram.com/pacificdream.official/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link5"
          >
            <div className="home-pricing-card3">
              <img
                alt="image"
                src="/external/1-12860_new-instagram-logo-png-transparent-png-format-instagram-200h-200h.webp"
                className="home-image8"
                onContextMenu={handleContextMenu}
              />
              <span className="home-text13">
                <span className="home-text14">Instagram</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <FooterContainer></FooterContainer>
    </div>
  )
}

export default Home
