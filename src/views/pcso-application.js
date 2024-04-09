import React, { useEffect, useState } from 'react'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './pcso-applicaiton.css'
import { Helmet } from 'react-helmet'
import UserHeader from '../components/user-header'
import config from './config/config'
import { ToastContainer, toast } from 'react-toastify';

export default function PCSOApplicaiton({ userData, discordAuthenticated, verifiedCiv }) {
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

        fetch(`${config.apiDomain}/api/user/applications/pcso-submit/${userData.data.email}/${userData.data.discordId}`, {
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
                Q10: q10
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
        <div className="pcso-applicaiton-container">
            <Helmet>
                <title>PCSO Application - Pinal County Roleplay</title>
                <meta property="og:title" content="PCSO Application - Pinal County Roleplay" />
            </Helmet>
            <div className="pcso-applicaiton-container1">
                {headerComponent}
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/PCSO_title.png"
                    className="pcso-applicaiton-image"
                />
                <div className="pcso-applicaiton-hero">
                    <div className="pcso-applicaiton-container2">
                        <div className="pcso-applicaiton-container3">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/PCSO_background.png"
                                className="pcso-applicaiton-image1"
                            />
                            <span className="pcso-applicaiton-text">
                                This is an application for the FiveM Roleplay server Pinal
                                County Roleplay | PCSO. This is in a way related to a real law
                                enforcement agency.
                            </span>
                            <h1 className="pcso-applicaiton-text01">Requirements:</h1>
                            <span className="pcso-applicaiton-text02">
                                <span>・Must be in the Discord.</span>
                                <br></br>
                                <span>・Be at least 14 years of age.</span>
                                <br></br>
                                <span>
                                    ・No major server disciplinary actions taken against you.
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <br></br>
                                <span>
                                    ・The ability to read, write, and understand English.
                                </span>
                                <br></br>
                                <span>・Must abide by department and server regulations</span>
                            </span>
                            <span className="pcso-applicaiton-text12">
                                <span className="pcso-applicaiton-text13">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="pcso-applicaiton-form">
                                <div className="pcso-applicaiton-question-1">
                                    <span className="pcso-applicaiton-text15">
                                        <span>What is your discord username? ex.4cezscopex </span>
                                        <span className="pcso-applicaiton-text17">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        placeholder="Your Answer"
                                        required={true}
                                        className="pcso-applicaiton-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={32}
                                    />
                                    <p>Characters left: {32 - q1.length}</p>
                                </div>
                                <div className="pcso-applicaiton-question-2">
                                    <span className="pcso-applicaiton-text19">
                                        <span>How long have you been in our server? </span>
                                        <span className="pcso-applicaiton-text21">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        placeholder="Your Answer"
                                        required={true}
                                        className="pcso-applicaiton-textinput1 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                        maxLength={15}
                                    />
                                    <p>Characters left: {15 - q2.length}</p>
                                </div>
                                <div className="pcso-applicaiton-question-3">
                                    <span className="pcso-applicaiton-text23">
                                        <span>How old are you? </span>
                                        <span className="pcso-applicaiton-text25">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        required={true}
                                        id="q3"
                                        className="pcso-applicaiton-select"
                                        onChange={(e) => setQ3(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="15 or Younger">15 or Younger</option>
                                        <option value="16-17">16-17</option>
                                        <option value="18+">18+</option>
                                    </select>
                                </div>
                                <div className="pcso-applicaiton-question-4">
                                    <span className="pcso-applicaiton-text27">
                                        <span>
                                            Do you have experience in other servers as LEO? If so
                                            explain.
                                        </span>
                                        <span className="pcso-applicaiton-text29">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q4"
                                        placeholder="Your Answer"
                                        required={true}
                                        className="pcso-applicaiton-textinput2 input"
                                        onChange={(e) => setQ4(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q4.length}</p>
                                </div>
                                <div className="pcso-applicaiton-question-5">
                                    <span className="pcso-applicaiton-text31">
                                        <span>
                                            Do you have a microphone good enough for content
                                            creation?
                                        </span>
                                        <span className="pcso-applicaiton-text33">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        required={true}
                                        id="q5"
                                        className="pcso-applicaiton-select1"
                                        onChange={(e) => setQ5(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="pcso-applicaiton-question-6">
                                    <span className="pcso-applicaiton-text35">
                                        <span>
                                            Why do you want to be a sheriff deputy with us?
                                        </span>
                                        <span className="pcso-applicaiton-text37">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q6"
                                        placeholder="Your Answer"
                                        required={true}
                                        className="pcso-applicaiton-textinput3 input"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q6.length}</p>
                                </div>
                                <div className="pcso-applicaiton-question-7">
                                    <span className="pcso-applicaiton-text39">
                                        <span>What can you bring to the department? </span>
                                        <span className="pcso-applicaiton-text41">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q7"
                                        placeholder="Your Answer"
                                        required={true}
                                        className="pcso-applicaiton-textinput4 input"
                                        onChange={(e) => setQ7(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q7.length}</p>
                                </div>
                                <div className="pcso-applicaiton-question-8">
                                    <span className="pcso-applicaiton-text43">
                                        <span>
                                            Are you willing to listen to instructions and respect your
                                            fellow officers that are of a higher rank?
                                        </span>
                                        <span className="pcso-applicaiton-text45">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        required={true}
                                        id="q8"
                                        className="pcso-applicaiton-select2"
                                        onChange={(e) => setQ8(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="pcso-applicaiton-question-9">
                                    <span className="pcso-applicaiton-text47">
                                        <span>
                                            Do you understand lying on these applications will result
                                            in automatic denial?
                                        </span>
                                        <span className="pcso-applicaiton-text49">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        required={true}
                                        id="q9"
                                        className="pcso-applicaiton-select3"
                                        onChange={(e) => setQ9(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="pcso-applicaiton-question-10">
                                    <span className="pcso-applicaiton-text51">
                                        <span>Anything you would like to Add? </span>
                                        <span className="pcso-applicaiton-text53">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q10"
                                        placeholder="Your Answer"
                                        required={true}
                                        className="pcso-applicaiton-textinput5 input"
                                        onChange={(e) => setQ10(e.target.value)}
                                        maxLength={maxLength}
                                    />
                                    <p>Characters left: {maxLength - q10.length}</p>
                                </div>
                                <button onClick={handleSubmit} className="pcso-applicaiton-button button">
                                    <span>
                                        <span className="pcso-applicaiton-text56">Submit</span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name10"></FooterContainer>
        </div>
    )
}
