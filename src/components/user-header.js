import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './user-header.css'
import NavigationLinksUser from './navigation-links-user'

const UserHeader = (props) => {
    return (
        <header
            data-role="Header"
            className={`user-header-header ${props.rootClassName} `}
        >
            <Link to="/" className="user-header-navlink">
                <img
                    alt={props.image_alt}
                    src={props.image_src}
                    className="user-header-image"
                />
            </Link>
            <div className="user-header-nav">
                <NavigationLinksUser
                    rootClassName="rootClassName18"
                    className=""
                ></NavigationLinksUser>
            </div>
            <div className="user-header-container">
                <Link to="/user/logout" className="user-header-navlink1 button">
                    <span className="user-header-text">
                        <span className="">Logout</span>
                        <br className=""></br>
                    </span>
                </Link>
            </div>
        </header>
    )
}

UserHeader.defaultProps = {
    rootClassName: '',
    image_src: '/Pacific_Dream_RP_Clear.png',
    image_alt: 'logo',
}

UserHeader.propTypes = {
    rootClassName: PropTypes.string,
    image_src: PropTypes.string,
    image_alt: PropTypes.string,
}

export default UserHeader
