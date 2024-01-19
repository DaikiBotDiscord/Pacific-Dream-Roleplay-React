import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './user-header.css'
import NavigationLinksUser from './navigation-links-user';
import config from '../views/config/config';

const UserHeader = (props) => {
    const [avatarData, setAvatarData] = useState(null);
    const [discordAuthenticated, setDiscordAuthenticated] = useState(false); // Add this state variable

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
    }, []); // empty dependency array ensures the effect runs only once on mount

    return (
        <header
            data-role="Header"
            className={`user-header-header ${props.rootClassName} `}
        >
            <Link to="/home" className="user-header-navlink">
                <img alt={props.image_alt} src={props.image_src} className="user-header-image" />
            </Link>
            <div className="user-header-nav">
                <NavigationLinksUser rootClassName="rootClassName18" className="" />
            </div>
            <div className="user-header-container">
                {avatarData && (
                    <img
                        alt={props.pfp_image_alt}
                        src={discordAuthenticated ? props.pfp_image_src : avatarData}
                        className="user-header-pfp-image"
                    />
                )}
                <Link to="/user/logout" className="user-header-navlink1 button">
                    <span className="user-header-text">
                        <span className="">Logout</span>
                        <br className=""></br>
                    </span>
                </Link>
            </div>
        </header>
    );
};

UserHeader.defaultProps = {
    image_alt: 'logo',
    rootClassName: '',
    image_src: '/Pacific_Dream_RP_Clear.png',
    pfp_image_src:
        'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-user-profile-character-faceless-unknown-png-image_4816132.png',
    pfp_image_alt: 'image',
};

UserHeader.propTypes = {
    image_alt: PropTypes.string,
    rootClassName: PropTypes.string,
    image_src: PropTypes.string,
    pfp_image_src: PropTypes.string,
    pfp_image_alt: PropTypes.string,
};

export default UserHeader;
