import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
    return (
        <header
            data-role="Header"
            className={`header-header ${props.rootClassName} `}
        >
            <Link to="/home" className="header-navlink">
                <img
                    alt={props.image_alt}
                    src={props.image_src}
                    className="header-image"
                />
            </Link>
            <div className="header-nav">
                <NavigationLinks
                    rootClassName="rootClassName16"
                    className=""
                ></NavigationLinks>
            </div>
            <div className="header-container">
                <Link to="/register" className="header-navlink1 button">
                    <span className="header-text">
                        <span className="">Register</span>
                        <br className=""></br>
                    </span>
                </Link>
                <Link to="/login" className="header-navlink2 button">
                    <span className="header-text3">
                        <span className="">Login</span>
                        <br className=""></br>
                    </span>
                </Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    rootClassName: '',
    link_button: 'https://cfx.re/join/zz8mqp',
    button: 'Login',
    image_src: '/Pacific_Dream_RP_Clear.png',
    image_alt: 'logo',
    link_button1: 'https://cfx.re/join/zz8mqp',
}

Header.propTypes = {
    rootClassName: PropTypes.string,
    link_button: PropTypes.string,
    button: PropTypes.string,
    image_src: PropTypes.string,
    image_alt: PropTypes.string,
    link_button1: PropTypes.string,
}

export default Header
