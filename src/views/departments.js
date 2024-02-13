import React, { useEffect, useState } from 'react'

import FooterContainer from '../components/footer-container'
import Header from '../components/header'
import UserHeader from '../components/user-header'
import config from './config/config'
import './departments.css'

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
            <div className="departments-container1">
                {headerComponent}
                <div className="departments-container2">
                    <div className="departments-container3">
                        <div className="departments-gallery-card">
                            <img
                                alt="image"
                                src="https://pacificdreamrp.com/SAFR_LOGO.png"
                                className="departments-image"
                            />
                            <h2 className="departments-text">
                                San Andreas Fire &amp; Rescue
                            </h2>
                            <span className="departments-text01">
                                The mission of the San Andreas Fire Rescue is ensuring the
                                safety of all the citizens in the state of San Andreas, doing so
                                in a mature and professional manner. SAFR works with other
                                agencies to educate, protect and assist the citizens of San
                                Andreas. We have many divisions to help achieve this.
                            </span>
                        </div>
                        <div className="departments-gallery-card1">
                            <img
                                alt="image"
                                src="https://pacificdreamrp.com/LSPD_LOGO.png"
                                className="departments-image1"
                            />
                            <h2 className="departments-text02">Los Santos Police</h2>
                            <span className="departments-text03">
                                <span>
                                    The Los Santos Police Department is dedicated to protecting
                                    rights, property, and lives, maintaining order, and enforcing
                                    laws. We aim to achieve this by setting goals, practicing core
                                    values, and being totally dedicated to our mission. Our values
                                    guide members in treating people with respect, fairness, and
                                    compassion.
                                </span>
                                <br></br>
                            </span>
                        </div>
                        <div className="departments-gallery-card2">
                            <img
                                alt="image"
                                src="https://pacificdreamrp.com/BCSO_LOGO.png"
                                className="departments-image2"
                            />
                            <h2 className="departments-text06">
                                <span>Blaine County</span>
                                <br></br>
                            </h2>
                            <span className="departments-text09">
                                <span>
                                    The Blaine County Sheriff&apos;s Office is on a crucial
                                    mission to protect the Blaine County district in San Andreas.
                                    Our core values include Loyalty, Strength, Courageousness, and
                                    Obedience, guiding each deputy to play a vital role in the
                                    community. Committed to serving and enhancing the state of
                                    living for everyone, our deputies prioritize the proper care
                                    and respect needed for trust. Various divisions work towards
                                    upholding these values.
                                </span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                    <div className="departments-container4">
                        <div className="departments-gallery-card3">
                            <img
                                alt="image"
                                src="https://pacificdreamrp.com/CIV_LOGO.png"
                                className="departments-image3"
                            />
                            <h2 className="departments-text12">
                                San Andreas Civilians Operations
                            </h2>
                            <span className="departments-text13">
                                Embark on a new chapter in your life on our server, where
                                everything depends on you and your fellow citizens. With
                                diligence, you can start your own company and turn your
                                imagination into reality. Life here goes beyond a simple
                                role-playing game; you are fully immersed in your character.
                                Every knowledge and experience in San Andreas contributes to
                                your advancement. Details matter, influencing the history of San
                                Andreas. Whether a friendly police officer, a successful rich
                                person, or an aggressive criminal, Pacific Dream has no
                                limitations.
                            </span>
                        </div>
                        <div className="departments-gallery-card4">
                            <img
                                alt="image"
                                src="https://pacificdreamrp.com/DOC_LOGO.png"
                                className="departments-image4"
                            />
                            <h2 className="departments-text14">San Andreas Communications</h2>
                            <span className="departments-text15">
                                The San Andreas Department of Communications strives for utmost
                                professionalism in radio communication. As the backbone of San
                                Andreas departments, we aim to excel, not just within our own
                                ranks but also for those who depend on us, including the Pacific
                                Dream Roleplay FiveM server.
                            </span>
                        </div>
                        <div className="departments-gallery-card4">
                            <img
                                alt="image"
                                src="https://pacificdreamrp.com/SASC_LOGO.jpg"
                                className="departments-image4"
                            />
                            <h2 className="departments-text14">San Andreas State Constable</h2>
                            <span className="departments-text15">
                                No Information at this Time.
                            </span>
                        </div>
                    </div>
                    <div className="departments-container4">
                        <div className="departments-gallery-card4">
                            <img
                                alt="image"
                                src="https://pacificdreamrp.com/DOT_LOGO.png"
                                className="departments-image4"
                            />
                            <h2 className="departments-text14">San Andreas Department of Transportation</h2>
                            <span className="departments-text15">
                                No Information at this Time.
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
