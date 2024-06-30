import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import UserHeader from '../components/user-header'
import config from './config/config'
import FooterContainer from '../components/footer-container'
import './staff-application.css'
import { ToastContainer, toast } from 'react-toastify';

export default function StaffApplication({ userData, discordAuthenticated, verifiedCiv }) {
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

        fetch(`${config.apiDomain}/api/user/applications/staff-submit/${userData.data.email}/${userData.data.discordId}`, {
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
                Q13: q13
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
        <div className="staff-application-container">
            <Helmet>
                <title>Staff Application - Arizona State Roleplay</title>
                <meta
                    property="og:title"
                    content="Staff-Application - Arizona State Roleplay"
                />
            </Helmet>
            <div className="staff-application-container1">
                <UserHeader rootClassName="header-root-class-name17" />
                <img
                    alt="image"
                    src="https://pinalcountyrp.com/staff_app_title.png"
                    className="staff-application-image"
                />
                <div className="staff-application-hero">
                    <div className="staff-application-container2">
                        <div className="staff-application-container3">
                            <span className="staff-application-text">
                                <span className="staff-application-text01">Requirements:</span>
                                <br className="staff-application-text02"></br>
                                <span className="staff-application-text03">
                                    Must be 16 Years of Age
                                </span>
                                <br className="staff-application-text04"></br>
                                <span className="staff-application-text05">
                                    Must have been in the Arizona State Roleplay Discord for 2
                                    Weeks Prior to Application
                                </span>
                                <br className="staff-application-text06"></br>
                                <span className="staff-application-text07">
                                    Must have logged 5 Hours or more in the FiveM Server
                                </span>
                                <br className="staff-application-text08"></br>
                                <span className="staff-application-text09">
                                    Must have a good standing with staff and or leadership
                                </span>
                                <br className="staff-application-text10"></br>
                                <span className="staff-application-text11">
                                    Must have had no past staff related punishments in the past 2
                                    weeks
                                </span>
                                <br></br>
                            </span>
                            <span className="staff-application-text13">
                                <span className="staff-application-text14">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="staff-application-form">
                                <span className="staff-application-text16">
                                    <span>Section 1</span>
                                    <br></br>
                                </span>
                                <div className="staff-application-question-1">
                                    <span className="staff-application-text19">
                                        <span>What is your discord username? ex. 4cezscopex </span>
                                        <span className="staff-application-text21">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={32}
                                    />
                                    <p>Characters left: {32 - q1.length}</p>
                                </div>
                                <div className="staff-application-question-2">
                                    <span className="staff-application-text22">
                                        <span>
                                            Why do you want to be on the staff team? (5 Sentence
                                            Minimum)
                                        </span>
                                        <span className="staff-application-text24">*</span>
                                    </span>
                                    <textarea
                                        type="text"
                                        id="q2"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textinput1 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q2.length}</p>
                                </div>
                                <span className="staff-application-text25">Section 2</span>
                                <div className="staff-application-question-3">
                                    <span className="staff-application-text26">
                                        <span>How long have you been in our server? </span>
                                        <span className="staff-application-text28">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q3"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea textarea"
                                        onChange={(e) => setQ3(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q3.length}</p>
                                </div>
                                <div className="staff-application-question-4">
                                    <span className="staff-application-text30">
                                        <span>
                                            Do you have experience as a staff member in other servers
                                            if so. Explain. (If Explaining 5 Sentence Minimum)
                                        </span>
                                        <span className="staff-application-text32">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q4"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea01 textarea"
                                        onChange={(e) => setQ4(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q4.length}</p>
                                </div>
                                <div className="staff-application-question-5">
                                    <span className="staff-application-text34">
                                        <span>
                                            How much time can you dedicate to our server. (Hours a
                                            week)
                                        </span>
                                        <span className="staff-application-text36">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q5"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea02 textarea"
                                        onChange={(e) => setQ5(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q5.length}</p>
                                </div>
                                <div className="staff-application-question-6">
                                    <span className="staff-application-text38">
                                        <span>
                                            What are your Strengths? (Roleplay Abilities / Staff
                                            Abilities) (3 Sentence Minimum)
                                        </span>
                                        <span className="staff-application-text40">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q6"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea03 textarea"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q6.length}</p>
                                </div>
                                <div className="staff-application-question-7">
                                    <span className="staff-application-text42">
                                        <span>
                                            What are your Weaknesses? (Roleplay Abilities / Staff
                                            Abilities) (3 Sentence Minimum)
                                        </span>
                                        <span className="staff-application-text44">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q7"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea04 textarea"
                                        onChange={(e) => setQ7(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q7.length}</p>
                                </div>
                                <div className="staff-application-question-8">
                                    <span className="staff-application-text46">
                                        <span>
                                            Do you have any previous experience in the Federal side of
                                            law enforcement? If so, explain.
                                        </span>
                                        <span className="staff-application-text48">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q8"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea05 textarea"
                                        onChange={(e) => setQ8(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q8.length}</p>
                                </div>
                                <div className="staff-application-question-9">
                                    <span className="staff-application-text50">
                                        <span>What other communities are you in? </span>
                                        <span className="staff-application-text52">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q9"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea06 textarea"
                                        onChange={(e) => setQ9(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q9.length}</p>
                                </div>
                                <span className="staff-application-text54">Section 3</span>
                                <div className="staff-application-question-10">
                                    <span className="staff-application-text55">
                                        <span>
                                            What would you do if a staff member was caught abusing
                                            their power in roleplay. You decide if there a higher or
                                            lower rank than you. (5 Sentence Minimum)
                                        </span>
                                        <span className="staff-application-text57">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q10"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea07 textarea"
                                        onChange={(e) => setQ10(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q10.length}</p>
                                </div>
                                <div className="staff-application-question-11">
                                    <span className="staff-application-text59">
                                        <span>
                                            Lets say someone when you try to start a staff scene
                                            shoots at staff how would you handle that situation?
                                        </span>
                                        <span className="staff-application-text61">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q11"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea08 textarea"
                                        onChange={(e) => setQ11(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q11.length}</p>
                                </div>
                                <span className="staff-application-text63">Section 4</span>
                                <div className="staff-application-question-12">
                                    <span className="staff-application-text64">
                                        <span>
                                            Do you understand lying on these applications will result
                                            in denial and possible disciplinary action in our server?
                                        </span>
                                        <span className="staff-application-text66">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q12"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea09 textarea"
                                        onChange={(e) => setQ12(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q12.length}</p>
                                </div>
                                <div className="staff-application-question-13">
                                    <span className="staff-application-text68">
                                        <span>Anything to add? </span>
                                        <span className="staff-application-text70">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q13"
                                        cols="60"
                                        rows="3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="staff-application-textarea10 textarea"
                                        onChange={(e) => setQ13(e.target.value)}
                                        maxLength={4096}
                                    />
                                    <p>Characters left: {4096 - q13.length}</p>
                                </div>
                                <button onClick={handleSubmit} className="staff-application-button button">
                                    <span>
                                        <span className="staff-application-text73">Submit</span>
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
            <FooterContainer rootClassName="footer-container-root-class-name17"></FooterContainer>
        </div>
    )
}
