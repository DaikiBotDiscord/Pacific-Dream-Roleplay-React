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
                <a
                    href={props.link_button}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="header-link button"
                >
                    <span className="header-text">
                        <span className="">FiveM Connect</span>
                        <br className=""></br>
                    </span>
                </a>
                <Link to="/login" className="header-navlink1 button">
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
}

Header.propTypes = {
    rootClassName: PropTypes.string,
    link_button: PropTypes.string,
    button: PropTypes.string,
    image_src: PropTypes.string,
    image_alt: PropTypes.string,
}

export default Header
