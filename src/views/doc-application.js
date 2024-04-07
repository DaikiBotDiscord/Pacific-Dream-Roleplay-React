import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './doc-application.css'
import UserHeader from '../components/user-header'
import config from './config/config'
import { ToastContainer, toast } from 'react-toastify';
import Analytics from '@vercel/analytics'

export default function DOCApplication({ userData, discordAuthenticated, verifiedCiv }) {
    const [headerComponent, setHeaderComponent] = useState(false);
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");
    const [q6, setQ6] = useState("");
    const [q7, setQ7] = useState("");
    const [q8, setQ8] = useState("");
    const [q9, setQ9] = useState("");
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

        fetch(`${config.apiDomain}/api/user/applications/doc-submit/${userData.data.email}/${userData.data.discordId}`, {
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
                Q9: q9,
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
        <div className="doc-application-container">
            <Analytics />
            <Helmet>
                <title>DOC Application - Pinal County Roleplay</title>
                <meta property="og:title" content="DOC Application - Pinal County Roleplay" />
            </Helmet>
            <div className="doc-application-container1">
                {headerComponent}
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/DOC_title.png"
                    className="doc-application-image"
                />
                <div className="doc-application-hero">
                    <div className="doc-application-container2">
                        <div className="doc-application-container3">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/DOC_background.png"
                                className="doc-application-image1"
                            />
                            <span className="doc-application-text">
                                The Official PCRP SADOC Application.
                            </span>
                            <span className="doc-application-text01">
                                <span className="doc-application-text02">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="doc-application-form">
                                <div className="doc-application-question-1">
                                    <span className="doc-application-text04">
                                        <span>What is your Discord username? ex.scopex07 </span>
                                        <span className="doc-application-text06">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="doc-application-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={32}
                                    />
                                    <p>Characters left: {32 - q1.length}</p>
                                </div>
                                <div className="doc-application-question-2">
                                    <span className="doc-application-text08">
                                        <span>How old are you? </span>
                                        <span className="doc-application-text10">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="number"
                                        id="q2"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="doc-application-textinput1 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                        maxLength={2}
                                    />
                                    <p>Characters left: {2 - q2.length}</p>
                                </div>
                                <div className="doc-application-question-3">
                                    <span className="doc-application-text12">
                                        <span>How long have you been in the server? </span>
                                        <span className="doc-application-text14">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="doc-application-textinput2 input"
                                        onChange={(e) => setQ3(e.target.value)}
                                        maxLength={15}
                                    />
                                    <p>Characters left: {15 - q3.length}</p>
                                </div>
                                <div className="doc-application-separator">
                                    <div className="doc-application-separator1"></div>
                                </div>
                                <span className="doc-application-text16">
                                    Questions about your qualification for the job.
                                </span>
                                <h1>
                                    <span>General Qualification Questions</span>
                                    <br></br>
                                </h1>
                                <div className="doc-application-question-4">
                                    <span className="doc-application-text20">
                                        <span>What would you rate your communication skills? </span>
                                        <span className="doc-application-text22">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q4"
                                        required={true}
                                        className="doc-application-select"
                                        onChange={(e) => setQ4(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className="doc-application-question-5">
                                    <span className="doc-application-text24">
                                        <span>
                                            Do you have any experience as dispatch in other servers?
                                            If so explain.
                                        </span>
                                        <span className="doc-application-text26">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q5"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="doc-application-textinput3 input"
                                        onChange={(e) => setQ5(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q5.length}</p>
                                </div>
                                <div className="doc-application-question-6">
                                    <span className="doc-application-text28">
                                        <span>
                                            Why is communication important to first responders? (In
                                            your opinion)
                                        </span>
                                        <span className="doc-application-text30">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q6"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="doc-application-textinput4 input"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q6.length}</p>
                                </div>
                                <div className="doc-application-question-7">
                                    <span className="doc-application-text32">
                                        <span>
                                            What makes you a Good Dispatcher? What makes you the best
                                            fit for the position?
                                        </span>
                                        <span className="doc-application-text34">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q7"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="doc-application-textinput5 input"
                                        onChange={(e) => setQ7(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q7.length}</p>
                                </div>
                                <div className="doc-application-separator2">
                                    <div className="doc-application-separator3"></div>
                                </div>
                                <span className="doc-application-text36">
                                    Questions about your qualification for the job.
                                </span>
                                <h1>
                                    <span>General Qualification Questions</span>
                                    <br></br>
                                </h1>
                                <div className="doc-application-question-8">
                                    <span className="doc-application-text40">
                                        <span>
                                            You will be required to take a short quiz and an interview
                                            to determine your rank if you pass do you understand?
                                        </span>
                                        <span className="doc-application-text42">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        required={true}
                                        id="q8"
                                        className="doc-application-select1"
                                        onChange={(e) => setQ8(e.target.value)}
                                    >
                                        <option></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="doc-application-question-9">
                                    <span className="doc-application-text44">
                                        <span>
                                            Do you understand lying on these applications will result
                                            in denial and possible further punishments?
                                        </span>
                                        <span className="doc-application-text46">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        required={true}
                                        id="q9"
                                        className="doc-application-select2"
                                        onChange={(e) => setQ9(e.target.value)}
                                    >
                                        <option></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <button onClick={handleSubmit} className="doc-application-button button">
                                    <span>
                                        <span className="doc-application-text49">Submit</span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name11"></FooterContainer>
        </div>
    )
}
