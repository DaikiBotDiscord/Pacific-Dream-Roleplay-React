import React from 'react'

import PropTypes from 'prop-types'

import './footer-container.css'

const FooterContainer = (props) => {
  return (
    <div
      className={`footer-container-footer-container ${props.rootClassName} `}
    >
      <div className="footer-container-footer">
        <div className="footer-container-social-links">
          <a
            href="https://discord.gg/pinalcountyrp"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-container-link"
          >
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-container-image"
            />
          </a>
        </div>
        <div className="footer-container-copyright-container">
          {/* <a class="copyrighted-badge" title="Copyrighted.com Registered &amp; Protected" target="_blank" href="https://app.copyrighted.com/website/nF3fYdJ2PP54SkXj">
            <img alt="Copyrighted.com Registered &amp; Protected" border="0" width="125" height="25" srcset="https://static.copyrighted.com/badges/125x25/02_2_2x.png 2x" src="https://static.copyrighted.com/badges/125x25/02_2.png">
              </a> */}
          <script src="https://static.copyrighted.com/badges/helper.js"></script>
          <a
            href="https://app.copyrighted.com/website/nF3fYdJ2PP54SkXj"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-container-link1"
          >
            <svg viewBox="0 0 1024 1024" className="footer-container-icon">
              <path
                d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"
                className=""
              ></path>
            </svg>
          </a>
          <span className="footer-container-text">{props.text}</span>
          <span className="footer-container-text1">{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

FooterContainer.defaultProps = {
  text: 'Arizona State Roleplay',
  image_alt: 'image',
  image_src: 'https://www.daiki-bot.xyz/playground_assets/discord%20logo.svg',
  text1: 'All Rights Reserved, Arizona State Roleplay',
  rootClassName: '',
}

FooterContainer.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FooterContainer
