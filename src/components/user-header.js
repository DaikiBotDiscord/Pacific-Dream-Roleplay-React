import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './user-header.css'
import NavigationLinksUser from './navigation-links-user';
import AccountPopup from './AccountPopup'; // Import the new component
import config from '../views/config/config';

const UserHeader = (props) => {
    const [avatarData, setAvatarData] = useState(null);
    const [discordAuthenticated, setDiscordAuthenticated] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.apiDomain}/api/auth/user/discord/avatar`, {
                    method: 'POST',
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
                setDiscordAuthenticated(data.data.discordUserAuthenticated || false);
                setAvatarData(data.avatar); // Assuming the response is an object containing avatar data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <header
            data-role="Header"
            className={`user-header-header ${props.rootClassName} `}
        >
            {showPopup && <AccountPopup handleClosePopup={handleClosePopup} />}
            <Link to="/user/home" className="user-header-navlink">
                <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="user-header-image"
                />
            </Link>
            <div className="user-header-nav">
                <NavigationLinksUser
                    rootClassName="navigation-links-user-root-class-name"
                    className=""
                ></NavigationLinksUser>
            </div>
            <div className="user-header-container">
                <button onClick={handleOpenPopup}>
                    {avatarData && (
                        <img
                            alt={props.pfpImageAlt}
                            src={discordAuthenticated === true ? props.pfpImageSrc : avatarData}
                            className="user-header-pfp-image1"
                        />
                    )}
                </button>
                <Link to="/user/logout" className="user-header-navlink1 button">
                    <span className="user-header-text">
                        <span className="">Logout</span>
                        <br className=""></br>
                    </span>
                </Link>
            </div>
            <div
                data-thq="thq-dropdown"
                className="user-header-thq-dropdown list-item"
            >
                <div
                    data-thq="thq-dropdown-toggle"
                    className="user-header-dropdown-toggle"
                >
                    <span className="user-header-text03">Navigation</span>
                    <div
                        data-thq="thq-dropdown-arrow"
                        className="user-header-dropdown-arrow"
                    >
                        <svg viewBox="0 0 1024 1024" className="user-header-icon">
                            <path d="M426 726v-428l214 214z" className=""></path>
                        </svg>
                    </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="user-header-dropdown-list">
                    <li
                        data-thq="thq-dropdown"
                        className="user-header-dropdown list-item"
                    >
                        <Link to="/user/home" className="">
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="user-header-dropdown-toggle1"
                            >
                                <span className="user-header-text04">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li
                        data-thq="thq-dropdown"
                        className="user-header-dropdown1 list-item"
                    >
                        <Link to="/staff" className="">
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="user-header-dropdown-toggle2"
                            >
                                <span className="user-header-text05">
                                    <span className="">Our Team</span>
                                    <br className=""></br>
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li
                        data-thq="thq-dropdown"
                        className="user-header-dropdown2 list-item"
                    >
                        <Link to="/donation" className="">
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="user-header-dropdown-toggle3"
                            >
                                <span className="user-header-text08">
                                    <span className="user-header-text09">Donations</span>
                                    <br className=""></br>
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li
                        data-thq="thq-dropdown"
                        className="user-header-dropdown3 list-item"
                    >
                        <Link to="/departments" className="">
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="user-header-dropdown-toggle4"
                            >
                                <span className="user-header-text11">Departments</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="user-header-container1">
                <button onClick={handleOpenPopup}>
                    {avatarData && (
                        <img
                            alt={props.pfpImageAlt}
                            src={discordAuthenticated === true ? props.pfpImageSrc : avatarData}
                            className="user-header-pfp-image1"
                        />
                    )}
                </button>
                <button type="button" className="user-header-button button">
                    <span className="user-header-text12">
                        <span className="">Logout</span>
                        <br className=""></br>
                    </span>
                </button>
            </div>
        </header>
    )
}

UserHeader.defaultProps = {
    imageAlt: 'logo',
    pfpImageSrc:
        'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-user-profile-character-faceless-unknown-png-image_4816132.png',
    pfpImageAlt1: 'image',
    pfpImageSrc2:
        'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-user-profile-character-faceless-unknown-png-image_4816132.png',
    pfpImageAlt2: 'image',
    pfpImageSrc1:
        'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-user-profile-character-faceless-unknown-png-image_4816132.png',
    pfpImageAlt: 'image',
    rootClassName: '',
    imageSrc: '/pdrp_logo.png',
}

UserHeader.propTypes = {
    imageAlt: PropTypes.string,
    pfpImageSrc: PropTypes.string,
    pfpImageAlt1: PropTypes.string,
    pfpImageSrc2: PropTypes.string,
    pfpImageAlt2: PropTypes.string,
    pfpImageSrc1: PropTypes.string,
    pfpImageAlt: PropTypes.string,
    rootClassName: PropTypes.string,
    imageSrc: PropTypes.string,
}
export default UserHeader