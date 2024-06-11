import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import UserHeader from '../components/user-header'
import config from './config/config'
import FooterContainer from '../components/footer-container'
import './fbi-application.css'
import { ToastContainer, toast } from 'react-toastify';


export default function FBIApplication({ userData, discordAuthenticated, verifiedCiv }) {
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
    const [q12, setQ12] = useState("");
    const [q13, setQ13] = useState("");
    const [q14, setQ14] = useState("");
    const [q15, setQ15] = useState("");
    const [q16, setQ16] = useState("");
    const [q17, setQ17] = useState("");
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

        fetch(`${config.apiDomain}/api/user/applications/fbi-submit/${userData.data.email}/${userData.data.discordId}`, {
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
                Q11: q11,
                Q12: q12,
                Q13: q13,
                Q14: q14,
                Q15: q15,
                Q16: q16,
                Q17: q17,
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
        <div className="fbi-application-container">
            <Helmet>
                <title>FBI Application - Arizona State Roleplay</title>
                <meta
                    property="og:title"
                    content="FBI Application - Arizona State Roleplay"
                />
                <meta
                    property="og:image"
                    content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/151790f7-6583-4936-911e-8f0137220d74/b871f600-3969-4903-b609-41571670b9e4?org_if_sml=1&amp;force_format=original"
                />
            </Helmet>
            <div className="fbi-application-container1">
                <headerComponent />
                <img
                    alt="image"
                    src="https://pinalcountyrp.com/FBI_title.png"
                    className="fbi-application-image"
                />
                <div className="fbi-application-hero">
                    <div className="fbi-application-container2">
                        <div className="fbi-application-container3">
                            <img
                                alt="image"
                                src="https://pinalcountyrp.com/FBI_background.jpg"
                                className="fbi-application-image1"
                            />
                            <span className="fbi-application-text">
                                <span>
                                    Welcome to the official application for the Federal Bureau of
                                    Investigation of PCRP Roleplay. Fill out the following
                                    questions below and answer to the best of your ability. We
                                    appreciate you taking the time to fill out this application
                                    and you choosing this department. to you will hear back within
                                    24 hours so please be patient.
                                </span>
                                <br></br>
                                <br></br>
                                <span>We Hope to See You on the Team</span>
                                <br></br>
                                <span>Sincerely,</span>
                                <br></br>
                                <span>FBI Heads Team</span>
                                <br></br>
                            </span>
                            <span className="fbi-application-text10">
                                <span className="fbi-application-text11">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="fbi-application-form">
                                <div className="fbi-application-question-1">
                                    <span className="fbi-application-text13">
                                        <span>What is your discord username? </span>
                                        <span className="fbi-application-text15">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={32}
                                    />
                                    <p>Characters left: {32 - q1.length}</p>
                                </div>
                                <div className="fbi-application-question-2">
                                    <span className="fbi-application-text16">
                                        <span>Supervisor Recommendation:  </span>
                                        <span className="fbi-application-text18">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput1 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q2.length}</p>
                                </div>
                                <div className="fbi-application-question-3">
                                    <span className="fbi-application-text19">
                                        <span>In-Game Name: </span>
                                        <span className="fbi-application-text21">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput2 input"
                                        onChange={(e) => setQ3(e.target.value)}
                                        maxLength={32}
                                    />
                                    <p>Characters left: {32 - q3.length}</p>
                                </div>
                                <div className="fbi-application-question-4">
                                    <span className="fbi-application-text23">
                                        <span>Age </span>
                                        <span className="fbi-application-text25">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="date"
                                        id="q4"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput3 input"
                                        onChange={(e) => setQ4(e.target.value)}
                                    />
                                </div>
                                <div className="fbi-application-question-5">
                                    <span className="fbi-application-text27">
                                        <span>Timezone: </span>
                                        <span className="fbi-application-text29">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q5"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput4 input"
                                        onChange={(e) => setQ5(e.target.value)}
                                        maxLength={10}
                                    />
                                    <p>Characters left: {10 - q5.length}</p>
                                </div>
                                <div className="fbi-application-question-6">
                                    <span className="fbi-application-text31">
                                        <span>
                                            In your own words, what does the Federal Bureau of
                                            Investigation do?
                                        </span>
                                        <span className="fbi-application-text33">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q6"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea textarea"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q6.length}</p>
                                </div>
                                <div className="fbi-application-question-7">
                                    <span className="fbi-application-text35">
                                        <span>What leadership qualities do you demonstrate? </span>
                                        <span className="fbi-application-text37">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q7"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea01 textarea"
                                        onChange={(e) => setQ7(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q7.length}</p>
                                </div>
                                <div className="fbi-application-question-8">
                                    <span className="fbi-application-text39">
                                        <span>
                                            Do you have any previous experience in the Federal side of
                                            law enforcement? If so, explain.
                                        </span>
                                        <span className="fbi-application-text41">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q8"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea02 textarea"
                                        onChange={(e) => setQ8(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q8.length}</p>
                                </div>
                                <div className="fbi-application-question-9">
                                    <span className="fbi-application-text43">
                                        <span>
                                            What do you think is the most important characteristic of
                                            an investigator?
                                        </span>
                                        <span className="fbi-application-text45">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q9"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea03 textarea"
                                        onChange={(e) => setQ9(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q9.length}</p>
                                </div>
                                <div className="fbi-application-question-10">
                                    <span className="fbi-application-text47">
                                        <span>What do you do to improve yourself? </span>
                                        <span className="fbi-application-text49">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q10"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea04 textarea"
                                        onChange={(e) => setQ10(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q10.length}</p>
                                </div>
                                <div className="fbi-application-question-11">
                                    <span className="fbi-application-text51">
                                        <span>How do you handle stressful situations? </span>
                                        <span className="fbi-application-text53">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q11"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea05 textarea"
                                        onChange={(e) => setQ11(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q11.length}</p>
                                </div>
                                <div className="fbi-application-question-12">
                                    <span className="fbi-application-text55">
                                        <span>
                                            What steps do you take to preserve evidence at a crime
                                            scene?
                                        </span>
                                        <span className="fbi-application-text57">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q12"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea06 textarea"
                                        onChange={(e) => setQ12(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q12.length}</p>
                                </div>
                                <div className="fbi-application-question-13">
                                    <span className="fbi-application-text59">
                                        <span>
                                            You&apos;re investigating a murder in a small town. The
                                            victim, a well-known local, was found dead in their
                                            mansion. The crime scene has a broken window, muddy
                                            footprints, and a missing valuable item. How would you
                                            start your investigation?
                                        </span>
                                        <span className="fbi-application-text61">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q13"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea07 textarea"
                                        onChange={(e) => setQ13(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q13.length}</p>
                                </div>
                                <div className="fbi-application-question-14">
                                    <span className="fbi-application-text63">
                                        <span>
                                            There are rumors circulating about a dirty cop who has
                                            been involved in illegal activities. Your task is to
                                            gather evidence to either prove or disprove these claims.
                                            How would you approach this investigation?
                                        </span>
                                        <span className="fbi-application-text65">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q14"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea08 textarea"
                                        onChange={(e) => setQ14(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q14.length}</p>
                                </div>
                                <div className="fbi-application-question-15">
                                    <span className="fbi-application-text67">
                                        <span>
                                            A group of armed individuals has barricaded themselves
                                            inside a house, holding several people hostage. Your task
                                            is to safely rescue the hostages and neutralize the
                                            threat. How would you approach this operation?
                                        </span>
                                        <span className="fbi-application-text69">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q15"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea09 textarea"
                                        onChange={(e) => setQ15(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q15.length}</p>
                                </div>
                                <div className="fbi-application-question-16">
                                    <span className="fbi-application-text71">
                                        <span>
                                            You are investigating a bomb threat posted online
                                            targeting a large shopping mall. The threat indicates that
                                            an explosive device has been planted and is set to
                                            detonate within a specified timeframe. How would you
                                            approach this situation?
                                        </span>
                                        <span className="fbi-application-text73">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q16"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea10 textarea"
                                        onChange={(e) => setQ16(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q16.length}</p>
                                </div>
                                <div className="fbi-application-question-17">
                                    <span className="fbi-application-text75">
                                        <span>
                                            Before you submit this application, is there anything
                                            you&apos;d like to say?
                                        </span>
                                        <span className="fbi-application-text77">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q17"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea11 textarea"
                                        onChange={(e) => setQ17(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q17.length}</p>
                                </div>
                                <button onClick={handleSubmit} className="fbi-application-button button">
                                    <span>
                                        <span className="fbi-application-text80">Submit</span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name16"></FooterContainer>
        </div>
    )
}
