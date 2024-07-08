import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './azdot-application.css'
import config from './config/config'
import UserHeader from '../components/user-header'

export default function AZDOTApplication({ userData, discordAuthenticated, verifiedCiv }) {
    const [headerComponent, setHeaderComponent] = useState(false);
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");
    const [q6, setQ6] = useState("");
    const maxLength = 1024;


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
                setHeaderComponent(<UserHeader rootClassName="header-root-class-name2" />);
            } else {
                setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
            }
        } catch (err) {
            console.error(err);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`${config.apiDomain}/api/user/applications/dot-submit/${userData.data.email}/${userData.data.discordId}`, {
            method: 'POST',
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                token: config.requiredToken,
            },
            body: JSON.stringify({
                Q1: q1,
                Q2: q2,
                Q3: q3,
                Q4: q4,
                Q5: q5,
                Q6: q6,
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.message === "Successfully Applied") {
                    toast.success('Successfully Applied!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                } else if (data.error) {
                    toast.error(`${data.error}`, {
                        position: "top-right",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
    }
    return (
        <div className="azdot-application-container">
            <Helmet>
                <title>AZDOT Application - Pacific Dream Roleplay</title>
                <meta
                    property="og:title"
                    content="AZDOT Application - Pacific Dream Roleplay"
                />
            </Helmet>
            <div className="azdot-application-container1">
                {headerComponent}
                <img
                    alt="image"
                    src="https://www.pinalcountyrp.com/AZDOT_title.png"
                    className="azdot-application-image"
                />
                <div className="azdot-application-hero">
                    <div className="azdot-application-container2">
                        <div className="azdot-application-container3">
                            <img
                                alt="image"
                                src="https://www.pinalcountyrp.com/DOT_background.jpg"
                                className="azdot-application-image1"
                            />
                            <span className="azdot-application-text">
                                <span>This is the official application for ADOT in PCRP</span>
                                <br></br>
                            </span>
                            <span className="azdot-application-text03">
                                <span className="azdot-application-text04">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="azdot-application-form">
                                <div className="azdot-application-question-1">
                                    <span className="azdot-application-text06">
                                        <span>
                                            What is your character's name?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span> </span>
                                        <span className="azdot-application-text10">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdot-application-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={35}
                                    />
                                    <p>Characters left: {35 - q1.length}</p>
                                </div>
                                <div className="azdot-application-question-2">
                                    <span className="azdot-application-text11">
                                        <span>
                                            How old is your character?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdot-application-text15">*</span>
                                    </span>
                                    <input
                                        type="number"
                                        id="q2"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdot-application-textinput1 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                        maxLength={2}
                                    />
                                    <p>Characters left: {2 - q2.length}</p>
                                </div>
                                <div className="azdot-application-question-3">
                                    <span className="azdot-application-text16">
                                        <span>
                                            Is your character a felon?
                                        </span>
                                        <span className="azdot-application-text18">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q3"
                                        required={true}
                                        className="azdot-application-textinput2 input"
                                        onChange={(e) => setQ3(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="azdot-application-question-4">
                                    <span className="azdot-application-text20">
                                        <span>
                                            In 2-5 sentences tell us why you want to be apart of ADOT.
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span> </span>
                                        <span className="azdot-application-text24">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q4"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdot-application-textinput3 input"
                                        onChange={(e) => setQ4(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q4.length}</p>
                                </div>
                                <div className="azdot-application-question-5">
                                    <span className="azdot-application-text26">
                                        <span>
                                            Tell us why we should chose you over other applicants
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdot-application-text28">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q5"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdot-application-textinput4 input"
                                        onChange={(e) => setQ5(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q5.length}</p>
                                </div>
                                <div className="azdot-application-question-5">
                                    <span className="azdot-application-text26">
                                        <span>
                                            Any comments questions or concerns?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdot-application-text28">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q6"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdot-application-textinput4 input"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q6.length}</p>
                                </div>
                                <button onClick={handleSubmit} className="azdot-application-button button">
                                    <span>
                                        <span className="azdot-application-text31">Submit</span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <a className="copyrighted-badge" title="Copyrighted.com Registered &amp; Protected" target="_blank" href="https://app.copyrighted.com/website/VdyDkIgA3GE82WWI">
                <img alt="Copyrighted.com Registered &amp; Protected" border="0" width="125" height="25" srcSet="https://static.copyrighted.com/badges/125x25/01_1_2x.png 2x" src="https://static.copyrighted.com/badges/125x25/01_1.png" />
            </a>
            <script src="https://static.copyrighted.com/badges/helper.js"></script>
            <FooterContainer rootClassName="footer-container-root-class-name13"></FooterContainer>
        </div>
    )
}
