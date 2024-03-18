import React, { useEffect, useState } from 'react'

import FooterContainer from '../components/footer-container'
import Header from '../components/header'
import UserHeader from '../components/user-header'
import config from './config/config'
import './departments.css'
import { Helmet } from 'react-helmet'

const Departments = (props) => {
    const [headerComponent, setHeaderComponent] = useState(false);

    useEffect(() => {
        checkTokenRepeat();
    }, []);

    const checkTokenRepeat = async () => {
        try {
            const response = await fetch(`${config.apiDomain}/api/token-check`, {
                method: 'POST',
                crossDomain: true,
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

            if (data.data === 'token expired') {
                window.localStorage.clear();
                setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
            } else if (data.status === 'active') {
                // Set the UserHeader component to be rendered
                setHeaderComponent(<UserHeader rootClassName="header-root-class-name2" />);
            } else {
                // Set the default Header component to be rendered
                setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
            }
        } catch (err) {
            console.error(err);
            // Handle error (e.g., display an error message or redirect)
        }
    };
    return (
        <div className="departments-container">
            <Helmet>
                <title>Departments - Pinal County Roleplay</title>
                <meta property="og:title" content="Pinal County Roleplay" />
            </Helmet>
            <div className="departments-container1">
                {headerComponent}
                <div className="departments-container2">
                    <div className="departments-container3">
                        <div className="departments-gallery-card">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/PCSO_LOGO.png"
                                className="departments-image2"
                            />
                            <h2 className="departments-text06">
                                <span>Pinal County Sheriffs Office</span>
                                <br></br>
                            </h2>
                            <span className="departments-text09">
                                <span>
                                    More Information Coming Soon!
                                </span>
                                <br></br>
                            </span>
                        </div>
                        <div className="departments-gallery-card1">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/PPD_LOGO.png"
                                className="departments-image"
                            />
                            <h2 className="departments-text">
                                Phoenix Police Department
                            </h2>
                            <span className="departments-text01">
                                The Phoenix Police Department is dedicated to protecting rights, property, and lives, maintaining order, and enforcing laws. We aim to achieve this by setting goals, practicing core values, and being totally dedicated to our mission. Our values guide members in treating people with respect, fairness, and compassion.
                            </span>
                        </div>
                        <div className="departments-gallery-card2">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/FFD_LOGO.png"
                                className="departments-image-fire"
                            />
                            <h2 className="departments-text">
                                Phoenix Fire Department
                            </h2>
                            <span className="departments-text01">
                                More Information Coming Soon!
                            </span>
                        </div>
                    </div>
                    <div className="departments-container3">
                        <div className="departments-gallery-card2">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/DOC_LOGO.png"
                                className="departments-image4"
                            />
                            <h2 className="departments-text14">Arizona Department of Communications</h2>
                            <span className="departments-text15">
                                The Arizona Department of Communications strives for utmost
                                professionalism in radio communication.
                                As the backbone of Arizona departments, we aim to excel, not just within our own
                                ranks but also for those who depend on us, including the Pinal
                                County Roleplay FiveM server.
                            </span>
                        </div>
                        <div className="departments-gallery-card1">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/CIV_LOGO.png"
                                className="departments-image3"
                            />
                            <h2 className="departments-text12">
                                Department of Certified Civilians
                            </h2>
                            <span className="departments-text13">
                                More Information Coming Soon!
                            </span>
                        </div>
                        <div className="departments-gallery-card">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/AZSP_LOGO.png"
                                className="departments-image1"
                            />
                            <h2 className="departments-text02">Arizona Department of Public Safety</h2>
                            <span className="departments-text03">
                                <span>
                                    More Information Coming Soon!
                                </span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                    <div className="departments-container4">
                        <div className="departments-gallery-card">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/AZDOT_LOGO.png"
                                className="departments-image3"
                            />
                            <h2 className="departments-text12">
                                Arizona Department of Transportation
                            </h2>
                            <span className="departments-text13">
                                More Information Coming Soon!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="departments-gallery"></div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name5"></FooterContainer>
        </div>
    )
}

export default Departments
