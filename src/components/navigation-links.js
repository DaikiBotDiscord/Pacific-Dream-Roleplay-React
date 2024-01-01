import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a
        href="https://discord.gg/jYgY8TwFac"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text}
      </a>
      <a
        href="https://www.youtube.com/channel/UCoYE6ssoT28HPCn30r8TNxQ"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link1"
      >
        {props.text1}
      </a>
      <a
        href="https://vm.tiktok.com/ZT8xrXd4c/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link2"
      >
        {props.text2}
      </a>
      <a
        href="https://www.instagram.com/pacificdream.official/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link3"
      >
        {props.text3}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Youtube',
  rootClassName: '',
  text2: 'TikTok',
  text3: 'Instagram',
  text: 'Discord',
  text4: 'Blog',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
