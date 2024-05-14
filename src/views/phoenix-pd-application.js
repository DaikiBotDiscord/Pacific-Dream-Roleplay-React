import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './phoenix-pd-application.css'
import UserHeader from '../components/user-header'
import config from './config/config'
import { ToastContainer, toast } from 'react-toastify';

export default function PhoenixPDApplication({ userData, discordAuthenticated, verifiedCiv }) {
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
    const [q10, setQ10] = useState("");
    const [q11, setQ11] = useState("");
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

        fetch(`${config.apiDomain}/api/user/applications/ppd-submit/${userData.data.email}/${userData.data.discordId}`, {
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
                Q10: q10,
                Q11: q11
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
        <div className="phoenix-pd-application-container">
            <Helmet>
                <title>Phoenix PD Application - Arizona State Roleplay</title>
                <meta property="og:title" content="Phoenix PD Application - Arizona State Roleplay" />
            </Helmet>
            <div className="phoenix-pd-application-container1">
                {headerComponent}
                <img
                    alt="image"
                    src="https://www.pinalcountyrp.com/PPD_title.png"
                    className="phoenix-pd-application-image"
                />
                <div className="phoenix-pd-application-hero">
                    <div className="phoenix-pd-application-container2">
                        <div className="phoenix-pd-application-container3">
                            <img
                                alt="image" a
                                src="https://www.pinalcountyrp.com/PPD_background.png"
                                className="phoenix-pd-application-image1"
                            />
                            <span className="phoenix-pd-application-text">
                                AZSRP Official PHXPD Application
                            </span>
                            <span className="phoenix-pd-application-text01">
                                <span className="phoenix-pd-application-text02">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="phoenix-pd-application-form">
                                <div className="phoenix-pd-application-question-1">
                                    <span className="phoenix-pd-application-text04">
                                        <span>What is your Discord Username? </span>
                                        <span className="phoenix-pd-application-text06">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={32}
                                    />
                                    <p>Characters left: {32 - q1.length}</p>
                                </div>
                                <div className="phoenix-pd-application-question-2">
                                    <span className="phoenix-pd-application-text07">
                                        <span>How old are you? </span>
                                        <span className="phoenix-pd-application-text09">*</span>
                                    </span>
                                    <select id="q2" required={true}
                                        onChange={(e) => setQ2(e.target.value)}>
                                        <option defaultValue value=""></option>
                                        <option value="15 or Younger">15 or Younger</option>
                                        <option value="16-18">16-18</option>
                                        <option value="18+">18+</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-question-3">
                                    <span className="phoenix-pd-application-text10">
                                        <span>
                                            Are you a Certified Civilian with PCRP? (Arizona County
                                            Roleplay)
                                        </span>
                                        <span className="phoenix-pd-application-text12">*</span>
                                    </span>
                                    <select id="q3" required={true}
                                        onChange={(e) => setQ3(e.target.value)}>
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Not Yet">Not Yet</option>
                                        <option value="Working on it">Working on it</option>
                                        <option value="I don't know">I don&apos;t know</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-question-4">
                                    <span className="phoenix-pd-application-text13">
                                        <span>How long have you been in our server? </span>
                                        <span className="phoenix-pd-application-text15">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q4"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input1 input"
                                        onChange={(e) => setQ4(e.target.value)}
                                        maxLength={15}
                                    />
                                    <p>Characters left: {15 - q4.length}</p>
                                </div>
                                <div className="phoenix-pd-application-question-5">
                                    <span className="phoenix-pd-application-text16">
                                        <span>
                                            Do you have a microphone good enough for content
                                            creation?
                                        </span>
                                        <span className="phoenix-pd-application-text18">*</span>
                                    </span>
                                    <select id="q5" required={true}
                                        onChange={(e) => setQ5(e.target.value)}>
                                        <option defaultValue value=""></option>
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-separator">
                                    <div className="phoenix-pd-application-separator1"></div>
                                </div>
                                <span className="phoenix-pd-application-text19">
                                    <span>Experience / Work Ethic Questions</span>
                                    <br></br>
                                </span>
                                <h1>
                                    <span>Previous LEO Service / Experience in Other Cities</span>
                                    <br></br>
                                </h1>
                                <div className="phoenix-pd-application-question-6">
                                    <span className="phoenix-pd-application-text25">
                                        <span>
                                            Do you have experience in other servers as LEO? If so
                                            explain.
                                        </span>
                                        <span className="phoenix-pd-application-text27">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q6"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input2 input"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q6.length}</p>
                                </div>
                                <div className="phoenix-pd-application-question-7">
                                    <span className="phoenix-pd-application-text28">
                                        <span>Why do you want to be a officer with us? </span>
                                        <span className="phoenix-pd-application-text30">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q7"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input3 input"
                                        onChange={(e) => setQ7(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q7.length}</p>
                                </div>
                                <div className="phoenix-pd-application-question-8">
                                    <span className="phoenix-pd-application-text31">
                                        <span>What can you bring to the department? </span>
                                        <span className="phoenix-pd-application-text33">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q8"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input4 input"
                                        onChange={(e) => setQ8(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q8.length}</p>
                                </div>
                                <div className="phoenix-pd-application-separator2">
                                    <div className="phoenix-pd-application-separator3"></div>
                                </div>
                                <span className="phoenix-pd-application-text34">
                                    <span>Requirements</span>
                                    <br></br>
                                </span>
                                <h1>
                                    <span>PHXPD Oaths to The Department</span>
                                    <br></br>
                                </h1>
                                <div className="phoenix-pd-application-question-9">
                                    <span className="phoenix-pd-application-text40">
                                        <span>
                                            Are you willing to listen to instructions and respect your
                                            fellow officers that are of a higher rank?
                                        </span>
                                        <span className="phoenix-pd-application-text42">*</span>
                                    </span>
                                    <select
                                        id="q9"
                                        required={true}
                                        className="phoenix-pd-application-select3"
                                        onChange={(e) => setQ9(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-question-10">
                                    <span className="phoenix-pd-application-text43">
                                        <span>
                                            Do you understand lying on these applications will result in automatic denial?
                                        </span>
                                        <span className="phoenix-pd-application-text45">*</span>
                                    </span>
                                    <select
                                        id="q10"
                                        required={true}
                                        className="phoenix-pd-application-select4"
                                        onChange={(e) => setQ10(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-question-11">
                                    <span className="phoenix-pd-application-text46">
                                        <span>Anything you would like to Add? </span>
                                        <span className="phoenix-pd-application-text48">*</span>
                                    </span>
                                    <textarea
                                        id="q11"
                                        cols="25"
                                        rows="4"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-textarea textarea"
                                        onChange={(e) => setQ11(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q11.length}</p>
                                </div>
                                <button type='submit' className="phoenix-pd-application-button button" onClick={handleSubmit}>
                                    <span>
                                        <span className="phoenix-pd-application-text50">
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
            <FooterContainer rootClassName="footer-container-root-class-name8"></FooterContainer>
            <ToastContainer />
        </div>
    )
}