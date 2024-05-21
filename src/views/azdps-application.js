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
                Q9: q9,
                Q10: q10,
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
                    src="https://www.pinalcountyrp.com/AZDPS_title.png"
                    className="azdps-application-image"
                />
                <div className="azdps-application-hero">
                    <div className="azdps-application-container2">
                        <div className="azdps-application-container3">
                            <img
                                alt="image"
                                src="https://pinalcountyrp.com/AZDPS_background.png"
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
                                    • You are required to be at least 15 years of age during your
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
                                        <span>What is your name? </span>
                                        <span className="azdps-application-text27">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={32}
                                    />
                                    <p>Characters left: {32 - q1.length}</p>
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
                                        maxLength={32}
                                    />
                                    <p>Characters left: {32 - q2.length}</p>
                                </div>
                                <div className="azdps-application-question-3">
                                    <span className="azdps-application-text31">
                                        <span>What is your age? </span>
                                        <span className="azdps-application-text33">*</span>
                                    </span>
                                    <input
                                        type="number"
                                        id="q3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput2 input"
                                        onChange={(e) => setQ3(e.target.value)}
                                        maxLength={2}
                                    />
                                    <p>Characters left: {2 - q3.length}</p>
                                </div>
                                <div className="azdps-application-question-4">
                                    <span className="azdps-application-text34">
                                        <span>
                                            What is your date of birth?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text36">*</span>
                                    </span>
                                    <input
                                        type="date"
                                        id="q4"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput3 input"
                                        onChange={(e) => setQ4(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-5">
                                    <span className="azdps-application-text37">
                                        <span>
                                            Why do you want to join Arizona Department of Public
                                            Safety?
                                        </span>
                                        <span className="azdps-application-text39">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q5"
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea textarea"
                                        required={true}
                                        onChange={(e) => setQ5(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q5.length}</p>
                                </div>
                                <div className="azdps-application-question-6">
                                    <span className="azdps-application-text41">
                                        <span>What does CoC stand for? </span>
                                        <span className="azdps-application-text43">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q6"
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea1 textarea"
                                        require={true}
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q6.length}</p>
                                </div>
                                <div className="azdps-application-question-7">
                                    <span className="azdps-application-text45">
                                        <span>
                                            Give a detailed reason how the AZDPS would benefit from
                                            hiring you?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text47">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q7"
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea2 textarea"
                                        required={true}
                                        onChange={(e) => setQ7(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q7.length}</p>
                                </div>
                                <div className="azdps-application-question-8">
                                    <span className="azdps-application-text49">
                                        <span>
                                            What is RDM and VDM?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text51">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q8"
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea3 textarea"
                                        required={true}
                                        onChange={(e) => setQ8(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q8.length}</p>
                                </div>
                                <div className="azdps-application-question-9">
                                    <span className="azdps-application-text53">
                                        <span>
                                            For how long have you played Fivem?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text55">*</span>
                                    </span>
                                    <textarea
                                        id="q9"
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea4 textarea"
                                        required={true}
                                        onChange={(e) => setQ9(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q9.length}</p>
                                </div>
                                <div className="azdps-application-question-10">
                                    <span className="azdps-application-text56">
                                        <span>
                                            Give a brief detailed example of a LEO scene.
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text58">*</span>
                                    </span>
                                    <textarea
                                        id="q10"
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea5 textarea"
                                        required={true}
                                        onChange={(e) => setQ10(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q10.length}</p>
                                </div>
                                <button onClick={handleSubmit} className="azdps-application-button button">
                                    <span>
                                        <span className="azdps-application-text60">Submit</span>
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
