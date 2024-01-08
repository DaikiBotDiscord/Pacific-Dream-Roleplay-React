import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/staff" className="navigation-links-navlink">
        {props.text3}
      </Link>
      {/* <Link to="/donation" className="navigation-links-navlink1">
        {props.text2}
      </Link> */}
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Youtube',
  rootClassName: '',
  text2: 'Donations',
  text3: 'Our Team',
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
