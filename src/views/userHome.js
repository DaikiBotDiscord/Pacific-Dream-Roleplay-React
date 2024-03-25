import React, { useEffect, useState } from 'react'

import "./userHome.css";
import FooterContainer from "../components/footer-container";
import UserHeader from "../components/user-header";
import config from "./config/config";

export default function UserHome({ userData, discordAuthenticated, verifiedCiv }) {
    const [ppdStatus, setPPDStatus] = useState("Loading...");
    const [ppdLight, setPPDLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const [pfdStatus, setPFDStatus] = useState("Loading...");
    const [pfdLight, setPFDLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const [pcsoStatus, setPCSOStatus] = useState("Loading...");
    const [pcsoLight, setPCSOLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const [DOCStatus, setDOCStatus] = useState("Loading...");
    const [DOCLight, setDOCLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const [CIVStatus, setCIVStatus] = useState("Loading...");
    const [CIVLight, setCIVLight] = useState("https://pinalcountyroleplay.com/not_started.png");
    const [AZDPSStatus, setAZDPSStatus] = useState("Loading...");
    const [AZDPSLight, setAZDPSLight] = useState('https://pinalcountyroleplay.com/not_started.png');
    const user = userData.data
    function capitalizeFirstLetter(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }

    if (!userData || !userData.data) {
        // Handle the case where userData or userData.data is undefined
        return null; // or display a loading message, redirect, etc.
    }

    const { data } = userData;

    function handleDiscordSubmit(e) {
        e.preventDefault();

        fetch(`${config.apiDomain}/api/user/logged/info`, {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                token: config.requiredToken,
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            fetch(`${config.apiDomain}/api/auth/generate-pair-code`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    token: config.requiredToken,
                },
                body: JSON.stringify({
                    userMongoId: data.data._id,
                })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data)
                window.location.href = `${config.apiDomain}/api/auth/attach-pair-code/${data.pairCode}`;
            })
        })
    }

    setTimeout(() => {
        fetchData();
    }, 10);

    setInterval(() => {
        fetchData();
    }, 10 * 1000);

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
        fetch(`${config.apiDomain}/api/user/applications/azdps-status/${user.email}`, {
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
                setAZDPSStatus(data.status);
                setAZDPSLight(data.statusLight)
            })
        /* fetch(`${config.apiDomain}/api/user/applications/civ-status/${user.email}`, {
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
                setCIVStatus(data.status);
                setCIVLight(data.statusLight)
            }) */
    }

    return (
        <div className="user-home-container">
            <div className="user-home-container01">
                <UserHeader rootClassName="user-header-root-class-name"></UserHeader>
                {discordAuthenticated === false ? (
                    <div className="a-home-container">
                        <div className="a-home-container1">
                        </div>
                        <div className="a-home-container">
                            <h1 className="a-home-text2">{capitalizeFirstLetter(data.fname)} Discord Integration is Required</h1>
                            <span className="a-home-text3">
                                <span>
                                    To be able to access your PCRP account you are required to integrate with Discord
                                </span>
                                <br></br>
                                <span>
                                    All information given is secure, encrypted, and confidential
                                </span>
                                <br></br>
                            </span>
                            <button type="button" className="user-home-button button" onClick={handleDiscordSubmit}>
                                Integrate with Discord
                            </button>
                        </div>
                    </div>
                ) : (
                    discordAuthenticated === true ? (
                        <div className='user-home-container01'>
                            <h1 className="user-home-text">
                                Welcome {capitalizeFirstLetter(data.fname)} to your PCRP Account!
                            </h1>
                            <div className="user-home-container02">
                                <div className="user-home-container03">
                                    <h1 className="user-home-text01">Application Status</h1>
                                    <div className="user-home-container04">
                                        <div className="user-home-container05">
                                            <span className="user-home-text02">
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
                                            <span className="user-home-text06">
                                                <span>{pcsoStatus.toUpperCase()}</span>
                                                <br></br>
                                            </span>
                                            <img
                                                alt="image"
                                                src={pcsoLight}
                                                className="user-home-image"
                                            />
                                        </div>
                                        <div className="user-home-container06">
                                            <span className="user-home-text09">
                                                <span>Phoenix Police</span>
                                                <br></br>
                                                <span>Department</span>
                                                <br></br>
                                            </span>
                                            <span className="user-home-text14">
                                                <span>{ppdStatus.toUpperCase()}</span>
                                                <br></br>
                                            </span>
                                            <img
                                                alt="image"
                                                src={ppdLight}
                                                className="user-home-image1"
                                            />
                                        </div>
                                        <div className="user-home-container07">
                                            <span className="user-home-text17">
                                                <span>Phoenix Fire &amp;</span>
                                                <br></br>
                                                <span>Rescue</span>
                                                <br></br>
                                            </span>
                                            <span className="user-home-text22">
                                                <span>{pfdStatus.toUpperCase()}</span>
                                                <br></br>
                                            </span>
                                            <img
                                                alt="image"
                                                src={pfdLight}
                                                className="user-home-image2"
                                            />
                                        </div>
                                        <div className="user-home-container09">
                                            <span className="user-home-text33">
                                                <span>AZ Department</span>
                                                <br></br>
                                                <span>of </span>
                                                <span>Communications</span>
                                                <br></br>
                                            </span>
                                            <span className="user-home-text39">
                                                <span>{DOCStatus.toUpperCase()}</span>
                                                <br></br>
                                            </span>
                                            <img
                                                alt="image"
                                                src={DOCLight}
                                                className="user-home-image4"
                                            />
                                        </div>
                                        <div className="user-home-container11">
                                            <span className="user-home-text50">
                                                <span>AZ Department of </span>
                                                <br></br>
                                                <span>Public Safety</span>
                                                <br></br>
                                            </span>
                                            <span className="user-home-text55">
                                                <span>{AZDPSStatus.toUpperCase()}</span>
                                                <br></br>
                                            </span>
                                            <img
                                                alt="image"
                                                src={AZDPSLight}
                                                className="user-home-image6"
                                            />
                                        </div>
                                        <div className="user-home-container10">
                                            <span className="user-home-text42">
                                                <span>AZ Department of</span>
                                                <br></br>
                                                <span>Certified Civilians</span>
                                                <br></br>
                                            </span>
                                            <span className="user-home-text47">
                                                <span>CLOSED</span>
                                                <br></br>
                                            </span>
                                            <img
                                                alt="image"
                                                src="https://pinalcountyroleplay.com/denied_flash.gif"
                                                className="user-home-image5"
                                            />
                                        </div>
                                        <div className="user-home-container11">
                                            <span className="user-home-text50">
                                                <span>AZ Department of </span>
                                                <br></br>
                                                <span>Transportation</span>
                                                <br></br>
                                            </span>
                                            <span className="user-home-text55">
                                                <span>UNAVAILABLE</span>
                                                <br></br>
                                            </span>
                                            <img
                                                alt="image"
                                                src="https://pinalcountyroleplay.com/denied_flash.gif"
                                                className="user-home-image6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                )}
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name4"></FooterContainer>
        </div>
    );
}

/* <div className="user-home-container">
            <div className="user-home-container1">
                <UserHeader rootClassName="user-header-root-class-name"></UserHeader>
            </div>
            {discordAuthenticated === false ? (
                <div className="user-home-container2">
                    <h1 className="user-home-text2">{capitalizeFirstLetter(data.fname)} Discord Integration is Required</h1>
                    <span className="user-home-text3">
                        <span>
                            To be able to access your PCRP account you are required to integrate with Discord
                        </span>
                        <br></br>
                        <span>
                            All information given is secure, encrypted, and confidential
                        </span>
                        <br></br>
                    </span>
                    <button type="button" className="user-home-button button" onClick={handleDiscordSubmit}>
                        Integrate with Discord
                    </button>
                </div>
            ) : (
                discordAuthenticated === true ? (
                    
                ) : null
            )}
            <FooterContainer rootClassName="footer-container-root-class-name4"></FooterContainer>
        </div> */