import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
    function handleContextMenu(event) {
        event.preventDefault();
    }
    return (
        <header
            data-role="Header"
            className={`header-header ${props.rootClassName} `}
        >
            <Link to="/home" className="header-navlink">
                <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="header-image"
                    onContextMenu={handleContextMenu}
                />
            </Link>
            <div data-thq="thq-dropdown" className="header-thq-dropdown list-item">
                <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle">
                    <span className="header-text">Navigation</span>
                    <div data-thq="thq-dropdown-arrow" className="header-dropdown-arrow">
                        <svg viewBox="0 0 1024 1024" className="header-icon">
                            <path d="M426 726v-428l214 214z" className=""></path>
                        </svg>
                    </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
                    <li
                        data-thq="thq-dropdown"
                        className="header-dropdown list-item"
                    ></li>
                    <li data-thq="thq-dropdown" className="header-dropdown1 list-item">
                        <Link to="/staff" className="">
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="header-dropdown-toggle1"
                            >
                                <span className="header-text01">
                                    <span className="">Our Team</span>
                                    <br className=""></br>
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li data-thq="thq-dropdown" className="header-dropdown2 list-item">
                        <Link to="/donation" className="">
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="header-dropdown-toggle2"
                            >
                                <span className="header-text04">
                                    <span className="header-text05">Donations</span>
                                    <br className=""></br>
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li data-thq="thq-dropdown" className="header-dropdown3 list-item">
                        <Link to="/departments" className="">
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="header-dropdown-toggle3"
                            >
                                <span className="header-text07">Departments</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="header-nav">
                <NavigationLinks
                    rootClassName="rootClassName16"
                    className=""
                ></NavigationLinks>
            </div>
            <div className="header-container">
                <Link to="/register" className="header-navlink1 button">
                    <span className="header-text08">
                        <span className="">Register</span>
                        <br className=""></br>
                    </span>
                </Link>
                <Link to="/login" className="header-navlink2 button">
                    <span className="header-text11">
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
    linkButton1: 'https://cfx.re/join/zz8mqp',
    linkButton: 'https://cfx.re/join/zz8mqp',
    button: 'Login',
    imageSrc: '/pcrp_logo.png',
    imageAlt: 'logo',
}

Header.propTypes = {
    rootClassName: PropTypes.string,
    linkButton1: PropTypes.string,
    linkButton: PropTypes.string,
    button: PropTypes.string,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
}

export default Header
