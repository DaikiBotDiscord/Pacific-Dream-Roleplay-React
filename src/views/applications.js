import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/header'
import UserHeader from '../components/user-header'
import FooterContainer from '../components/footer-container'
import './applications.css'
import { Helmet } from 'react-helmet'
import config from './config/config'

export default function Applications({ userData, discordAuthenticated, VerifiedCiv }) {
    const [headerComponent, setHeaderComponent] = useState(false);
    const [ppdStatus, setPPDStatus] = useState("Loading...");
    const [ppdLight, setPPDLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const [pfdStatus, setPFDStatus] = useState("Loading...");
    const [pfdLight, setPFDLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const [pcsoStatus, setPCSOStatus] = useState("Loading...");
    const [pcsoLight, setPCSOLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const [DOCStatus, setDOCStatus] = useState("Loading...");
    const [DOCLight, setDOCLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const user = userData.data

    useEffect(() => {
        checkTokenRepeat();
    }, []);

    setTimeout(() => {
        fetchData();
    }, 10);

    setInterval(() => {
        fetchData();
    }, 10 * 1000);

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

    const fetchData = async () => {
        if (!user || !user.email) {
            return; // Exit early if user or user.email is not available
        }

        fetch(`${config.apiDomain}/api/user/applications/ppd-status/${user.email}`, {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                token: config.requiredToken,
            }
        }).then((res) => res.json())
            .then((data) => {
                setPPDStatus(data.status);
                setPPDLight(data.statusLight)
            })
        fetch(`${config.apiDomain}/api/user/applications/pfd-status/${user.email}`, {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                token: config.requiredToken,
            }
        }).then((res) => res.json())
            .then((data) => {
                setPFDStatus(data.status);
                setPFDLight(data.statusLight)
            })
        fetch(`${config.apiDomain}/api/user/applications/pcso-status/${user.email}`, {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                token: config.requiredToken,
            }
        }).then((res) => res.json())
            .then((data) => {
                setPCSOStatus(data.status);
                setPCSOLight(data.statusLight)
            })
        fetch(`${config.apiDomain}/api/user/applications/doc-status/${user.email}`, {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                token: config.requiredToken,
            }
        }).then((res) => res.json())
            .then((data) => {
                setDOCStatus(data.status);
                setDOCLight(data.statusLight)
            })
    }


    return (
        <div className="applications-container">
            <Helmet>
                <title>Applications - Pinal County Roleplay</title>
                <meta property="og:title" content="Applications - Pinal County Roleplay" />
            </Helmet>
            <div className="applications-container01">
                {headerComponent}
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/applications.png"
                    className="applications-image"
                />
                <div className="applications-hero">
                    <div className="applications-container02">
                        <h1 className="applications-text">Application Status</h1>
                        <div className="applications-container03">
                            <div className="applications-container04">
                                <span className="applications-text01">
                                    <span>
                                        Pinal County
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <br></br>
                                    <span>Sheriff&apos;s Office </span>
                                </span>
                                <span className="applications-text05">
                                    <span>{pcsoStatus.toUpperCase()}</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src={pcsoLight}
                                    className="applications-image01"
                                />
                            </div>
                            <div className="applications-container05">
                                <span className="applications-text08">
                                    <span>Phoenix Police</span>
                                    <br></br>
                                    <span>Department</span>
                                    <br></br>
                                </span>
                                <span className="applications-text13">
                                    <span>{ppdStatus.toUpperCase()}</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src={ppdLight}
                                    className="applications-image02"
                                />
                            </div>
                            <div className="applications-container06">
                                <span className="applications-text16">
                                    <span>Phoenix Fire</span>
                                    <br></br>
                                    <span>Department</span>
                                    <br></br>
                                </span>
                                <span className="applications-text21">
                                    <span>{pfdStatus.toUpperCase()}</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src={pfdLight}
                                    className="applications-image03"
                                />
                            </div>
                            <div className="applications-container08">
                                <span className="applications-text32">
                                    <span>AZ Department of</span>
                                    <br></br>
                                    <span>Communications</span>
                                    <br></br>
                                </span>
                                <span className="applications-text38">
                                    <span>{DOCStatus.toUpperCase()}</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src={DOCLight}
                                    className="applications-image05"
                                />
                            </div>
                            <div className="applications-container09">
                                <span className="applications-text41">
                                    <span>Department of</span>
                                    <br></br>
                                    <span>Certified Civilians</span>
                                    <br></br>
                                </span>
                                <span className="applications-text46">
                                    <span>UNAVAILABLE</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/not_started.png"
                                    className="applications-image06"
                                />
                            </div>
                            <div className="applications-container10">
                                <span className="applications-text49">
                                    <span>AZ Department of </span>
                                    <br></br>
                                    <span>Public Safety</span>
                                    <br></br>
                                </span>
                                <span className="applications-text54">
                                    <span>UNAVAILABLE</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/not_started.png"
                                    className="applications-image07"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="applications-container11">
                        <h1 className="applications-text57">
                            <span>Applications</span>
                            <br></br>
                        </h1>
                        <div className="applications-container12">
                            <Link to="/user/pcso-application" className="applications-navlink">
                                <div className="applications-container13">
                                    <img
                                        alt="image"
                                        src="https://pinalcountyroleplay.com/PCSO_LOGO.png"
                                        className="applications-image08"
                                    />
                                    <span className="applications-text60">
                                        <span>Pinal County</span>
                                        <br></br>
                                        <span>Sheriff&apos;s Office</span>
                                        <br></br>
                                    </span>
                                </div>
                            </Link>
                            <Link to="/user/phoenix-pd-application" className="applications-navlink3">
                                <div className="applications-container16">
                                    <img
                                        alt="image"
                                        src="https://pinalcountyroleplay.com/PPD_LOGO.png"
                                        className="applications-image11"
                                    />
                                    <span className="applications-text73">
                                        <span>Phoenix Police</span>
                                        <br></br>
                                        <span>Department</span>
                                        <br></br>
                                    </span>
                                </div>
                            </Link>
                            <Link to="/user/phoenix-fd-application" className="applications-navlink1">
                                <div className="applications-container14">
                                    <img
                                        alt="image"
                                        src="https://pinalcountyroleplay.com/FFD_LOGO.png"
                                        className="applications-image09"
                                    />
                                    <span className="applications-text65">
                                        <span>Phoenix Fire Department</span>
                                        <br></br>
                                    </span>
                                </div>
                            </Link>
                            {/* <Link to="/user/azdps-application" className="applications-navlink2">
                                <div className="applications-container15">
                                    <img
                                        alt="image"
                                        src="https://pinalcountyroleplay.com/AZSP_LOGO.png"
                                        className="applications-image10"
                                    />
                                    <span className="applications-text68">
                                        <span>Department of</span>
                                        <br></br>
                                        <span>Public Safety</span>
                                        <br></br>
                                    </span>
                                </div>
                            </Link> */}
                            {/* <Link to="/user/doc-application" className="applications-navlink4">
                                <div className="applications-container17">
                                    <img
                                        alt="image"
                                        src="https://pinalcountyroleplay.com/DOC_LOGO.png"
                                        className="applications-image12"
                                    />
                                    <span className="applications-text78">
                                        <span>Department of</span>
                                        <br></br>
                                        <span>Communications</span>
                                        <br></br>
                                    </span>
                                </div>
                            </Link> */}
                            {/* <Link to="/user/civ-application" className="applications-navlink4">
                                <div className="applications-container17">
                                    <img
                                        alt="image"
                                        src="https://pinalcountyroleplay.com/CIV_LOGO.png"
                                        className="applications-image12"
                                    />
                                    <span className="applications-text78">
                                        <span>Department of</span>
                                        <br></br>
                                        <span>Certified Civilians</span>
                                        <br></br>
                                    </span>
                                </div>
                            </Link> */}
                            {/* <Link to="/user/dot-application" className="applications-navlin4">
                                <div className="applications-container18">
                                    <img
                                        alt="image"
                                        src="https://pinalcountyroleplay.com/AZDOT_LOGO.png"
                                        className="applications-image13"
                                    />
                                    <span className="applications-text83">
                                        <span>Department of</span>
                                        <br></br>
                                        <span>Transportation</span>
                                        <br></br>
                                    </span>
                                </div>
                                        </Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name6"></FooterContainer>
        </div>
    )
}
