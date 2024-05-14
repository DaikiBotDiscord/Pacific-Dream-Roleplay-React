import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import UserHeader from '../components/user-header'
import config from './config/config'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './faa-application.css'

export default function FAAApplication({ userData, discordAuthenticated, verifiedCiv }) {
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
    const [q11, setQ11] = useState("");

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const q10 = `${check1 ? "Taxi Instructions" : "", check2 ? "Follow flight plan" : "", check3 ? "Maintain assigned altitude" : "", check4 ? "Control airplane before communicating" : ""}`

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
        console.log(check1 ? "Taxi Instructions" : "", check2 ? "Follow flight plan" : "", check3 ? "Maintain assigned altitude" : "", check4 ? "Control airplane before communicating" : "")
        fetch(`${config.apiDomain}/api/user/applications/faa-submit/${userData.data.email}/${userData.data.discordId}`, {
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
                Q10: `${check1 ? "Taxi Instructions" : "", check2 ? "Follow flight plan" : "", check3 ? "Maintain assigned altitude" : "", check4 ? "Control airplane before communicating" : ""}`,
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
        <div className="faa-application-container">
            <Helmet>
                <title>FAA-Application - Pacific Dream Roleplay</title>
                <meta
                    property="og:title"
                    content="FAA-Application - Pacific Dream Roleplay"
                />
            </Helmet>
            <div className="faa-application-container1">
                {headerComponent}
                <img
                    alt="image"
                    src="https://www.pinalcountyrp.com/FAA_title.png"
                    className="faa-application-image"
                />
                <div className="faa-application-hero">
                    <div className="faa-application-container2">
                        <div className="faa-application-container3">
                            <img
                                alt="image"
                                src="https://www.pinalcountyrp.com/FAA_background.png"
                                className="faa-application-image1"
                            />
                            <span className="faa-application-text">
                                <br></br>
                                <span>Arizona State Roleplay FAA Department</span>
                                <br></br>
                                <br></br>
                                <span>
                                    Applications checked with AI detectors, you application WILL
                                    be denied if it comes back positive.
                                </span>
                                <br></br>
                            </span>
                            <span className="faa-application-text07">
                                <span className="faa-application-text08">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="faa-application-form">
                                <div className="faa-application-question-1">
                                    <span className="faa-application-text10">
                                        <span>What is your discord name? </span>
                                        <span className="faa-application-text12">*</span>
                                    </span>
                                    <input
                                        type="email"
                                        id="q1"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="faa-application-textinput input"
                                        onChange={(e) => setQ1(e.target.value)}
                                        maxLength={35}
                                    />
                                    <p>Characters left: {35 - q1.length}</p>
                                </div>
                                <div className="faa-application-question-2">
                                    <span className="faa-application-text13">
                                        <span>When did you first join Arizona State Roleplay? </span>
                                        <span className="faa-application-text15">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="faa-application-textinput1 input"
                                        onChange={(e) => setQ2(e.target.value)}
                                        maxLength={25}
                                    />
                                    <p>Characters left: {25 - q2.length}</p>
                                </div>
                                <div className="faa-application-question-3">
                                    <span className="faa-application-text16">
                                        <span>Why do you want to join the FAA Department? </span>
                                        <span className="faa-application-text18">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q3"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="faa-application-textinput2 input"
                                        onChange={(e) => setQ3(e.target.value)}
                                        maxLength={1024}
                                    />
                                    <p>Characters left: {1024 - q3.length}</p>
                                </div>
                                <div className="faa-application-question-4">
                                    <span className="faa-application-text20">
                                        <span>
                                            Do you have any previous experience operations aircrafts
                                            in or out of FiveM?
                                        </span>
                                        <span className="faa-application-text22">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q4"
                                        required={true}
                                        className="faa-application-select"
                                        onChange={(e) => setQ4(e.target.value)}
                                    >
                                        <option></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="faa-application-question-5">
                                    <span className="faa-application-text24">
                                        <span>
                                            How well do you know the phonetic alphabet? 1 = None &amp;
                                            10 = All
                                        </span>
                                        <span className="faa-application-text26">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q5"
                                        required={true}
                                        className="faa-application-select1"
                                        onChange={(e) => setQ5(e.target.value)}
                                    >
                                        <option></option>
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
                                <div className="faa-application-question-6">
                                    <span className="faa-application-text28">
                                        <span>Explain what &quot;IFR&quot; means </span>
                                        <span className="faa-application-text30">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q6"
                                        placeholder="Your Answer"
                                        className="faa-application-textarea textarea"
                                        onChange={(e) => setQ6(e.target.value)}
                                        maxLength={1024}
                                    ></textarea>
                                    <p>Characters left: {1024 - q6.length}</p>
                                </div>
                                <div className="faa-application-question-7">
                                    <span className="faa-application-text32">
                                        <span>Explain what &quot;VFR&quot; means </span>
                                        <span className="faa-application-text34">*</span>
                                    </span>
                                    <textarea
                                        id="q7"
                                        placeholder="Your Answer"
                                        className="faa-application-textarea1 textarea"
                                        onChange={(e) => setQ7(e.target.value)}
                                        maxLength={1024}
                                    ></textarea>
                                    <p>Characters left: {1024 - q7.length}</p>
                                </div>
                                <div className="faa-application-question-8">
                                    <span className="faa-application-text35">
                                        <span>List the basic flight controls for an aircraft </span>
                                        <span className="faa-application-text37">*</span>
                                    </span>
                                    <textarea
                                        id="q8"
                                        placeholder="Your Answer"
                                        className="faa-application-textarea2 textarea"
                                        onChange={(e) => setQ8(e.target.value)}
                                        maxLength={1024}
                                    ></textarea>
                                    <p>Characters left: {1024 - q8.length}</p>
                                </div>
                                <div className="faa-application-question-9">
                                    <span className="faa-application-text38">
                                        <span>What is included in a flight plan? </span>
                                        <span className="faa-application-text40">*</span>
                                    </span>
                                    <textarea
                                        id="q9"
                                        placeholder="Your Answer"
                                        className="faa-application-textarea3 textarea"
                                        onChange={(e) => setQ9(e.target.value)}
                                        maxLength={1024}
                                    ></textarea>
                                    <p>Characters left: {1024 - q9.length}</p>
                                </div>
                                <div className="faa-application-question-10">
                                    <span className="faa-application-text41">
                                        <span>
                                            Which of the following are important to follow while in
                                            flight
                                        </span>
                                        <span className="faa-application-text43">*</span>
                                    </span>
                                    <div className="faa-application-container4">
                                        <input
                                            type="checkbox"
                                            checked={check1}
                                            onChange={() => setCheck1(prevState => !prevState)}
                                        />
                                        <span className="faa-application-text44">
                                            <span>Taxi Instructions</span>
                                            <br></br>
                                        </span>
                                    </div>
                                    <div className="faa-application-container5">
                                        <input
                                            type="checkbox"
                                            checked={check2}
                                            onChange={() => setCheck2(prevState => !prevState)}
                                        />
                                        <span className="faa-application-text47">
                                            <span>Follow flight plan</span>
                                            <br></br>
                                        </span>
                                    </div>
                                    <div className="faa-application-container6">
                                        <input
                                            type="checkbox"
                                            checked={check3}
                                            onChange={() => setCheck3(prevState => !prevState)}
                                        />
                                        <span className="faa-application-text50">
                                            <span>Maintain assigned altitude</span>
                                            <br></br>
                                        </span>
                                    </div>
                                    <div className="faa-application-container7">
                                        <input
                                            type="checkbox"
                                            checked={check4}
                                            onChange={() => setCheck4(prevState => !prevState)}
                                        />
                                        <span className="faa-application-text53">
                                            <span>Control airplane before communicating</span>
                                            <br></br>
                                        </span>
                                    </div>
                                </div>
                                <div className="faa-application-question-11">
                                    <span className="faa-application-text56">
                                        <span>
                                            Do you understand that if you use any AI to answer these
                                            questions, your application will immediately be denied?
                                        </span>
                                        <span className="faa-application-text58">*</span>
                                    </span>
                                    <select
                                        id="q11"
                                        required={true}
                                        className="faa-application-select2"
                                        onChange={(e) => setQ11(e.target.value)}
                                    >
                                        <option></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <button className="faa-application-button button">
                                    <span>
                                        <span className="faa-application-text60">Submit</span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name15"></FooterContainer>
        </div>
    )
}