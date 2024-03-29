import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './azdps-application.css'
import UserHeader from '../components/user-header'
import config from './config/config'
import { toast, ToastContainer } from 'react-toastify'

export default function AZDPSApplication({ userData, discordAuthenticated, verifiedCiv }) {

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

        fetch(`${config.apiDomain}/api/user/applications/azdps-submit/${userData.data.email}/${userData.data.discordId}`, {
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
        <div className="azdps-application-container">
            <Helmet>
                <title>AZDPS Application - Pacific Dream Roleplay</title>
                <meta
                    property="og:title"
                    content="AZDPS-Application - Pacific Dream Roleplay"
                />
            </Helmet>
            <div className="azdps-application-container1">
                {headerComponent}
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/AZDPS_title.png"
                    className="azdps-application-image"
                />
                <div className="azdps-application-hero">
                    <div className="azdps-application-container2">
                        <div className="azdps-application-container3">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/AZDPS_background.png"
                                className="azdps-application-image1"
                            />
                            <h1 className="azdps-application-text">Requirements:</h1>
                            <span className="azdps-application-text01">
                                <span>
                                    • You must be able to up hold a professional and mature
                                    attitude.
                                </span>
                                <br></br>
                                <span>
                                    • You must have a clean punishment record, for example,
                                    haven&apos;t punished in the last 2 weeks
                                </span>
                                <br></br>
                                <span>
                                    • You must be active within our server, this shows dedication
                                </span>
                                <br></br>
                                <span>
                                    • You are required to be at least 16 years of age during your
                                    application, exceptions WILL not be made
                                </span>
                                <br></br>
                            </span>
                            <h1 className="azdps-application-text10">Guidelines:</h1>
                            <span className="azdps-application-text11">
                                <span>
                                    • To increase your chances of being accepted into the state
                                    police team, ensure you put as much detail &amp; effort into
                                    the application as possible.
                                </span>
                                <br></br>
                                <span>
                                    • Learn &amp; memorize our server rules &amp; guidelines,
                                    this&apos;ll better your answers when it comes to the scenario
                                    section.
                                </span>
                                <br></br>
                                <span>
                                    • Honesty goes a long way, lying on your applications
                                    won&apos;t get you anywhere
                                </span>
                                <br></br>
                                <span>
                                    • As you wait for you application to be reviewed, you CANNOT
                                    ask any member of the department about the status of your
                                    application.
                                </span>
                                <br></br>
                                <span>
                                    • For written answers a minimum of 3 sentences is required.
                                </span>
                                <br></br>
                            </span>
                            <span className="azdps-application-text22">
                                <span className="azdps-application-text23">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="azdps-application-form">
                                <div className="azdps-application-question-1">
                                    <span className="azdps-application-text25">
                                        <span>What is your email? </span>
                                        <span className="azdps-application-text27">*</span>
                                    </span>
                                    <input
                                        type="email"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-2">
                                    <span className="azdps-application-text28">
                                        <span>
                                            What is your Discord Name?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text30">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput1 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-3">
                                    <span className="azdps-application-text31">
                                        <span>
                                            Are you able to speak, read, write, and comprehend the
                                            English language?
                                        </span>
                                        <span className="azdps-application-text33">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q3"
                                        required={true}
                                        className="azdps-application-select"
                                        onChange={(e) => setQ3(e.target.value)}
                                    >
                                        <option defaultChecked defaultValue></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="azdps-application-question-4">
                                    <span className="azdps-application-text35">
                                        <span>
                                            Do you understand that lying on this application, as well
                                            as Command members from the AZDPS have the final say on
                                            your application status?
                                        </span>
                                        <span className="azdps-application-text37">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q4"
                                        required={true}
                                        className="azdps-application-select1"
                                        onChange={(e) => setQ4(e.target.value)}
                                    >
                                        <option defaultChecked defaultValue></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="azdps-application-question-5">
                                    <span className="azdps-application-text39">
                                        <span>
                                            Do you understand that you will be judged based on written
                                            answers regarding this application?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text41">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q5"
                                        required={true}
                                        className="azdps-application-select2"
                                        onChange={(e) => setQ5(e.target.value)}
                                    >
                                        <option defaultChecked defaultValue></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="azdps-application-question-6">
                                    <span className="azdps-application-text43">
                                        <span>
                                            You are on scene of a disturbance regarding two parties,
                                            the first party is instantly coming to your vehicle
                                            complaining that the second party is threatening them with
                                            violence, you find out the entire situation started due to
                                            a road rage, and the second party had hit the back of the
                                            Reporting parties vehicle, what would you do?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text45">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q6"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea textarea"
                                        onChange={(e) => setQ6(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="azdps-application-question-7">
                                    <span className="azdps-application-text47">
                                        <span>
                                            You arrive on scene to a shoplifting call, the caller is a
                                            loss prevention officer in charge of the cameras, during
                                            your call you establish contact with the reporting party,
                                            you observed the camera footage of the shoplifting however
                                            you are unable to articulate the original complain of
                                            shoplifting, how would you go about this situation?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text49">*</span>
                                    </span>
                                    <textarea
                                        id="q7"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea1 textarea"
                                        onChange={(e) => setQ7(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="azdps-application-question-8">
                                    <span className="azdps-application-text50">
                                        <span>
                                            A dispatcher assigns you to a call outside of your patrol
                                            designation, you have already told the dispatcher that you
                                            are unable to accept that call, how would you go about
                                            this situation?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text52">*</span>
                                    </span>
                                    <textarea
                                        id="q8"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea2 textarea"
                                        onChange={(e) => setQ8(e.target.value)}
                                    ></textarea>
                                </div>
                                <button onClick={handleSubmit} className="azdps-application-button button">
                                    <span>
                                        <span className="azdps-application-text54">Submit</span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name7"></FooterContainer>
        </div>
    )
}
