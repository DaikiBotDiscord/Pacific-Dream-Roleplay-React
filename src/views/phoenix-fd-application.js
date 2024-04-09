import React, { useEffect, useState } from 'react'

import Header from '../components/header'
import UserHeader from '../components/user-header'
import FooterContainer from '../components/footer-container'
import './phoenix-fd-application.css'
import { Helmet } from 'react-helmet'
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
    const [q12, setQ12] = useState("");
    const [q13, setQ13] = useState("");
    const [q14, setQ14] = useState("");
    const [q15, setQ15] = useState("");
    const [q16, setQ16] = useState("");
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

        fetch(`${config.apiDomain}/api/user/applications/pfd-submit/${userData.data.email}/${userData.data.discordId}`, {
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
                Q16: q16
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
        <div className="phoenix-fd-application-container">
            <Helmet>
                <title>Phoenix FD Application - Pinal County Roleplay</title>
                <meta property="og:title" content="Phoenix FD Application - Pinal County Roleplay" />
            </Helmet>
            <div className="phoenix-fd-application-container1">
                {headerComponent}
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/PFD_title.png"
                    className="phoenix-fd-application-image"
                />
                <div className="phoenix-fd-application-hero">
                    <div className="phoenix-fd-application-container2">
                        <div className="phoenix-fd-application-container3">
                            <h1 className="phoenix-fd-application-text">Legal Notice:</h1>
                            <span className="phoenix-fd-application-text01">
                                <span>
                                    This document is in no way, shape or form, affiliated with
                                    Federal, Governmental, or National Agencies. This document is
                                    purely fictional in nature, and offers no accreditation to
                                    legal agencies. Property of Pinal County Roleplay
                                </span>
                                <br></br>
                            </span>
                            <h1 className="phoenix-fd-application-text04">Guidelines:</h1>
                            <span className="phoenix-fd-application-text05">
                                <span>
                                    You must wait 7 days before asking about the status of the
                                    application
                                </span>
                                <br></br>
                            </span>
                            <span className="phoenix-fd-application-text08">
                                <span className="phoenix-fd-application-text09">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="phoenix-fd-application-form">
                                <div className="phoenix-fd-application-question-1">
                                    <span className="phoenix-fd-application-text11">
                                        Email Address
                                        <span className="phoenix-fd-application-text17"> *</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="email"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={35}
                                    />
                                    <p>Characters left: {35 - q1.length}</p>
                                </div>
                                <div className="phoenix-fd-application-question-2">
                                    <span className="phoenix-fd-application-text12">
                                        <span>First &amp; Last Name </span>
                                        <span className="phoenix-fd-application-text14">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput01 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                        maxLength={40}
                                    />
                                    <p>Characters left: {40 - q2.length}</p>
                                </div>
                                <div className="phoenix-fd-application-question-3">
                                    <span className="phoenix-fd-application-text15">
                                        <span>Role Play Name </span>
                                        <span className="phoenix-fd-application-text17">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput02 input"
                                        onChange={(e) => setQ3(e.target.value)}
                                        maxLength={35}
                                    />
                                    <p>Characters left: {35 - q3.length}</p>
                                </div>
                                <div className="phoenix-fd-application-question-4">
                                    <span className="phoenix-fd-application-text19">
                                        <span>
                                            Discord Name (Example: Little White Tiger#0308)
                                        </span>
                                        <span className="phoenix-fd-application-text21">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q4"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput03 input"
                                        onChange={(e) => setQ4(e.target.value)}
                                        maxLength={35}
                                    />
                                    <p>Characters left: {35 - q4.length}</p>
                                </div>
                                <div className="phoenix-fd-application-question-5">
                                    <span className="phoenix-fd-application-text23">
                                        <span>Date of Birth </span>
                                        <span className="phoenix-fd-application-text25">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="date"
                                        id="q5"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput04 input"
                                        onChange={(e) => setQ5(e.target.value)}
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-6">
                                    <span className="phoenix-fd-application-text27">
                                        <span>Age </span>
                                        <span className="phoenix-fd-application-text29">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="number"
                                        id="q6"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput05 input"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={2}
                                    />
                                    <p>Characters left: {2 - q6.length}</p>
                                </div>
                                <div className="phoenix-fd-application-question-7">
                                    <span className="phoenix-fd-application-text31">
                                        <span>Have you read over the SOP? </span>
                                        <span className="phoenix-fd-application-text33">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q7"
                                        required={true}
                                        className="phoenix-fd-application-select"
                                        onChange={(e) => setQ7(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="phoenix-fd-application-separator">
                                    <div className="phoenix-fd-application-separator1"></div>
                                </div>
                                <h1>
                                    <span>Basic Questions</span>
                                    <br></br>
                                </h1>
                                <div className="phoenix-fd-application-question-8">
                                    <span className="phoenix-fd-application-text38">
                                        <span>
                                            In a few sentences please explain why you would want to
                                            join PHFD
                                        </span>
                                        <span className="phoenix-fd-application-text40">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q8"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput06 input"
                                        onChange={(e) => setQ8(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q8.length}</p>
                                </div>
                                <div className="phoenix-fd-application-question-9">
                                    <span className="phoenix-fd-application-text42">
                                        <span>
                                            Do you have any previous experience with fire and rescue
                                            IRL or In FiveM? If so please explain here, N/A If none
                                        </span>
                                        <span className="phoenix-fd-application-text44">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q9"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput07 input"
                                        onChange={(e) => setQ9(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q9.length}</p>
                                </div>
                                <div className="phoenix-fd-application-question-10">
                                    <span className="phoenix-fd-application-text46">
                                        <span>
                                            Why should we pick your application over others?
                                        </span>
                                        <span className="phoenix-fd-application-text48">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q10"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput08 input"
                                        onChange={(e) => setQ10(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q10.length}</p>
                                </div>
                                <div className="phoenix-fd-application-separator2">
                                    <div className="phoenix-fd-application-separator3"></div>
                                </div>
                                <h1>
                                    <span>Final Questions</span>
                                    <br></br>
                                </h1>
                                <div className="phoenix-fd-application-question-11">
                                    <span className="phoenix-fd-application-text53">
                                        <span>
                                            Are you okay with your higher ups being younger than you?
                                        </span>
                                        <span className="phoenix-fd-application-text55">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q11"
                                        required={true}
                                        className="phoenix-fd-application-select1"
                                        onChange={(e) => setQ11(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="phoenix-fd-application-question-12">
                                    <span className="phoenix-fd-application-text57">
                                        <span>
                                            Do you understand that any plagiarism will result in an
                                            instant denial?
                                        </span>
                                        <span className="phoenix-fd-application-text59">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q12"
                                        required={true}
                                        className="phoenix-fd-application-select2"
                                        onChange={(e) => setQ12(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="phoenix-fd-application-question-13">
                                    <span className="phoenix-fd-application-text61">
                                        <span>
                                            Do you understand that if you ask higher ups about your
                                            application status before the 7 days it could result in a
                                            instant denial?
                                        </span>
                                        <span className="phoenix-fd-application-text63">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q13"
                                        required={true}
                                        className="phoenix-fd-application-select3"
                                        onChange={(e) => setQ13(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="phoenix-fd-application-question-14">
                                    <span className="phoenix-fd-application-text65">
                                        <span>Do you have any other questions? N/A If none </span>
                                        <span className="phoenix-fd-application-text67">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q14"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput09 input"
                                        onChange={(e) => setQ14(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q14.length}</p>
                                </div>
                                <div className="phoenix-fd-application-question-15">
                                    <span className="phoenix-fd-application-text69">
                                        <span>Date of submission </span>
                                        <span className="phoenix-fd-application-text71">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="date"
                                        id="q15"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput10 input"
                                        onChange={(e) => setQ15(e.target.value)}
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-141">
                                    <span className="phoenix-fd-application-text73">
                                        <span>Signature </span>
                                        <span className="phoenix-fd-application-text75">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q16"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput11 input"
                                        onChange={(e) => setQ16(e.target.value)}
                                        maxLength={35}
                                    />
                                    <p>Characters left: {35 - q16.length}</p>
                                </div>
                                <button onClick={handleSubmit} className="phoenix-fd-application-button button">
                                    <span>
                                        <span className="phoenix-fd-application-text78">
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
            <FooterContainer rootClassName="footer-container-root-class-name9"></FooterContainer>
        </div>
    )
}
