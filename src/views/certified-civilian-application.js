import React, { useEffect, useState } from 'react'

import Header from '../components/header'
import UserHeader from '../components/user-header'
import FooterContainer from '../components/footer-container'
import './certified-civilian-application.css'
import { Helmet } from 'react-helmet'
import config from './config/config'
import { ToastContainer, toast } from 'react-toastify';

export default function CertifiedCivilianApplicaiton({ userData, discordAuthenticated, VerifiedCiv }) {
    const [headerComponent, setHeaderComponent] = useState(false);
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");
    const [q6, setQ6] = useState("");
    const [q7, setQ7] = useState("");
    const [q8, setQ8] = useState("");
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

        fetch(`${config.apiDomain}/api/user/applications/civ-submit/${userData.data.email}/${userData.data.discordId}`, {
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
                Q7: q7,
                Q8: q8,
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
        <div className="certified-civilian-applicaiton-container">
            <Helmet>
                <title>Certified Civilian - Arizona State Roleplay</title>
                <meta property="og:title" content="Certified Civilian Application - Arizona State Roleplay" />
            </Helmet>
            <div className="certified-civilian-applicaiton-container1">
                {headerComponent}
                <img
                    alt="image"
                    src="https://www.pinalcountyrp.com/CIV_title.png"
                    className="certified-civilian-applicaiton-image"
                />
                <div className="certified-civilian-applicaiton-hero">
                    <div className="certified-civilian-applicaiton-container2">
                        <div className="certified-civilian-applicaiton-container3">
                            <img
                                alt="image"
                                src="https://www.pinalcountyrp.com/CIV_background.png"
                                className="certified-civilian-applicaiton-image1"
                            />
                            <span className="certified-civilian-applicaiton-text">
                                <br></br>
                                <span>The Official Arizona State Roleplay Civilian APP.</span>
                                <br></br>
                            </span>
                            <span className="certified-civilian-applicaiton-text04">
                                <span className="certified-civilian-applicaiton-text05">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="certified-civilian-applicaiton-form">
                                <div className="certified-civilian-applicaiton-question-1">
                                    <span className="certified-civilian-applicaiton-text07">
                                        <span>What is your Discord username? ex. scopex07 </span>
                                        <span className="certified-civilian-applicaiton-text09">
                                            *
                                        </span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={35}
                                    />
                                    <p>Characters left: {35 - q1.length}</p>
                                </div>
                                <div className="certified-civilian-applicaiton-question-2">
                                    <span className="certified-civilian-applicaiton-text10">
                                        <span>How long have you been in the server? </span>
                                        <span className="certified-civilian-applicaiton-text12">
                                            *
                                        </span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput1 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                        maxLength={25}
                                    />
                                    <p>Characters left: {25 - q2.length}</p>
                                </div>
                                <div className="certified-civilian-applicaiton-question-3">
                                    <span className="certified-civilian-applicaiton-text13">
                                        <span>How old are you </span>
                                        <span className="certified-civilian-applicaiton-text15">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q3"
                                        required={true}
                                        className="certified-civilian-applicaiton-select"
                                        onChange={(e) => setQ3(e.target.value)}
                                    >
                                        <option defaultValue defaultChecked></option>
                                        <option value="14-15">14-15</option>
                                        <option value="16-17">16-17</option>
                                        <option value="18+">18+</option>
                                    </select>
                                </div>
                                <div className="certified-civilian-applicaiton-question-4">
                                    <span className="certified-civilian-applicaiton-text17">
                                        <span>What is Fail RP? </span>
                                        <span className="certified-civilian-applicaiton-text19">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q4"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textarea textarea"
                                        onChange={(e) => setQ4(e.target.value)}
                                        maxLength={1024}
                                    ></textarea>
                                    <p>Characters left: {1024 - q4.length}</p>
                                </div>
                                <div className="certified-civilian-applicaiton-question-5">
                                    <span className="certified-civilian-applicaiton-text21">
                                        <span>What is Meta Gaming? </span>
                                        <span className="certified-civilian-applicaiton-text23">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q5"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textarea1 textarea"
                                        onChange={(e) => setQ5(e.target.value)}
                                        maxLength={1024}
                                    ></textarea>
                                    <p>Characters left: {1024 - q5.length}</p>
                                </div>
                                <div className="certified-civilian-applicaiton-question-6">
                                    <span className="certified-civilian-applicaiton-text25">
                                        <span>
                                            Please provide an in-depth description of a roleplay
                                            scene you could do in game.
                                        </span>
                                        <span className="certified-civilian-applicaiton-text27">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q6"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textarea2 textarea"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={1024}
                                    ></textarea>
                                    <p>Characters left: {1024 - q6.length}</p>
                                </div>
                                <div className="certified-civilian-applicaiton-question-7">
                                    <span className="certified-civilian-applicaiton-text29">
                                        <span>
                                            Do you understand lying on these applications will
                                            result in automatic denial?
                                        </span>
                                        <span className="certified-civilian-applicaiton-text31">
                                            *
                                        </span>
                                    </span>
                                    <select
                                        id="q7"
                                        required={true}
                                        className="certified-civilian-applicaiton-select1"
                                        onChange={(e) => setQ7(e.target.value)}
                                    >
                                        <option></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="certified-civilian-applicaiton-question-8">
                                    <span className="certified-civilian-applicaiton-text32">
                                        <span>Anything you would like to add? </span>
                                        <span className="certified-civilian-applicaiton-text34">
                                            *
                                        </span>
                                    </span>
                                    <textarea
                                        id="q8"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textarea3 textarea"
                                        onChange={(e) => setQ8(e.target.value)}
                                        maxLength={1024}
                                    ></textarea>
                                    <p>Characters left: {1024 - q8.length}</p>
                                </div>
                                <button onClick={handleSubmit} className="certified-civilian-applicaiton-button button">
                                    <span>
                                        <span className="certified-civilian-applicaiton-text36">
                                            Submit
                                        </span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name12"></FooterContainer>
        </div>
    )
}
