import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links-user.css'

const NavigationLinksUser = (props) => {
  return (
    <nav className={`navigation-links-user-nav ${props.rootClassName} `}>
      <Link to="/user/home" className="navigation-links-user-navlink">
        {props.text31}
      </Link>
      <Link to="/staff" className="navigation-links-user-navlink1">
        {props.text311}
      </Link>
      <Link to="/donation" className="navigation-links-user-navlink2">
        {props.text2}
      </Link>
      <Link to="/departments" className="navigation-links-user-navlink3">
        {props.text21}
      </Link>
    </nav>
  )
}

NavigationLinksUser.defaultProps = {
  text3: 'Our Team',
  text31: 'Home',
  rootClassName: '',
  text2: 'Donations',
  text21: 'Departments',
  text311: 'Our Team',
}

NavigationLinksUser.propTypes = {
  text3: PropTypes.string,
  text31: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  text311: PropTypes.string,
}

export default NavigationLinksUser