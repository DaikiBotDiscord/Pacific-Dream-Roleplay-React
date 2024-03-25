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
    const [q11, setQ11] = useState("");
    const [q12, setQ12] = useState("");
    const [q13, setQ13] = useState("");
    const [q14, setQ14] = useState("");
    const [q15, setQ15] = useState("");
    const [q16, setQ16] = useState("");
    const [q17, setQ17] = useState("");
    const [q18, setQ18] = useState("");
    const [q19, setQ19] = useState("");


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
                Q11: q11,
                Q12: q12,
                Q13: q13,
                Q14: q14,
                Q15: q15,
                Q16: q16,
                Q17: q17,
                Q18: q18,
                Q19: q19,
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
        <div className="azdps-application-container" >
            <Helmet>
                <title>AZDPS Application - Pinal County Roleplay</title>
                <meta property="og:title" content="AZDPS Application - Pinal County Roleplay" />
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
                            <span className="azdps-application-text">
                                <span>AZDPS COMMISSONER J. SHORESEY</span>
                                <br></br>
                                <span className="azdps-application-text03">
                                    We appreciate your interest in becoming apart of AZDPS Before
                                    applying, ensure you fit the requirements and guidelines
                                    listed below.
                                </span>
                            </span>
                            <h1 className="azdps-application-text04">Requirements:</h1>
                            <span className="azdps-application-text05">
                                <span>
                                    • You must be able to up hold a professional and mature
                                    attitude.
                                </span>
                                <br></br>
                                <span>
                                    • You must have a clean punishment record, for example,
                                    haven&apos;t been punished in the last 2 weeks
                                </span>
                                <br></br>
                                <span>
                                    • You must be active within our serve, this shows dedication.
                                </span>
                                <br></br>
                            </span>
                            <h1 className="azdps-application-text12">Guidelines:</h1>
                            <span className="azdps-application-text13">
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
                                    won&apos;t get you anywhere.
                                </span>
                                <br></br>
                                <span>
                                    • As you wait for your application to be reviewed, you CANNOT
                                    ask any member of the department about the status of your
                                    application.
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
                                        <span>
                                            Tell me about a difficult work situation and how you
                                            overcame it
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text27">*</span>
                                    </span>
                                    <span className="azdps-application-text28">
                                        <span className="azdps-application-text29">
                                            PARAGRAPH MIN
                                        </span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q1"
                                        cols="25"
                                        rows="4"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textarea textarea"
                                        onChange={(e) => setQ1(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="azdps-application-question-2">
                                    <span className="azdps-application-text31">
                                        What is your Timezone?
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput input"
                                        onChange={(e) => setQ2(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-3">
                                    <span className="azdps-application-text32">
                                        <span>What would you do in a VDM or RDM event? </span>
                                        <span className="azdps-application-text34">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q3"
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput01 input"
                                        onChange={(e) => setQ3(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-4">
                                    <span className="azdps-application-text36">
                                        <span>
                                            Will you try your hardest every day?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text38">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q4"
                                        required={true}
                                        className="azdps-application-select"
                                        onChange={(e) => setQ4(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="azdps-application-question-5">
                                    <span className="azdps-application-text40">
                                        <span>
                                            DO YOU UNDERSTAND LYING ABOUT ANYTHING LIKE YOUR AGE OR
                                            ANYTHING AT ALL WILL RESULT IN A AUTOMATIC TERMINATION?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text42">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q5"
                                        required={true}
                                        className="azdps-application-select1"
                                        onChange={(e) => setQ5(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="azdps-application-question-6">
                                    <span className="azdps-application-text44">
                                        <span>What is your Discord ID?</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q6"
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput02 input"
                                        onChange={(e) => setQ6(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-7">
                                    <span className="azdps-application-text47">
                                        <span>
                                            What are your greatest strengths?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text49">*</span>
                                    </span>
                                    <span className="azdps-application-text50">
                                        <span className="azdps-application-text51">
                                            5 SENTENCES MIN
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q7"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput03 input"
                                        onChange={(e) => setQ7(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-8">
                                    <span className="azdps-application-text54">
                                        <span>
                                            Tell me something about yourself
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text56">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q8"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput04 input"
                                        onChange={(e) => setQ8(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-9">
                                    <span className="azdps-application-text57">
                                        <span>
                                            Do you have a clear, working microphone?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="azdps-application-text59">*</span>
                                    </span>
                                    <select
                                        id="q9"
                                        required={true}
                                        className="azdps-application-select2"
                                        onChange={(e) => setQ9(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                        <option value="Maybe">Maybe</option>
                                    </select>
                                </div>
                                <div className="azdps-application-question-10">
                                    <span className="azdps-application-text60">
                                        <span>What is your email address? </span>
                                        <span className="azdps-application-text62">*</span>
                                    </span>
                                    <input
                                        type="email"
                                        id="q10"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput05 input"
                                        onChange={(e) => setQ10(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-11">
                                    <span className="azdps-application-text63">
                                        <span>What is your Discord Username? </span>
                                        <span className="azdps-application-text65">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q11"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput06 input"
                                        onChange={(e) => setQ11(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-12">
                                    <span className="azdps-application-text66">
                                        <span>What made you want to apply for this position? </span>
                                        <span className="azdps-application-text68">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q12"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput07 input"
                                        onChange={(e) => setQ12(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-13">
                                    <span className="azdps-application-text69">
                                        <span>Will you abide by the server rules? </span>
                                        <span className="azdps-application-text71">*</span>
                                    </span>
                                    <select
                                        id="q13"
                                        required={true}
                                        className="azdps-application-select3"
                                        onChange={(e) => setQ13(e.target.value)}
                                    >
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Maybe">Maybe</option>
                                    </select>
                                </div>
                                <div className="azdps-application-question-14">
                                    <span className="azdps-application-text72">
                                        <span>
                                            Why should we pick you? What do you bring to the table?
                                        </span>
                                        <span className="azdps-application-text74">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q14"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput08 input"
                                        onChange={(e) => setQ14(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-15">
                                    <span className="azdps-application-text75">
                                        <span>What is your DOB (Date of Birth) </span>
                                        <span className="azdps-application-text77">*</span>
                                    </span>
                                    <span className="azdps-application-text78">
                                        <span className="azdps-application-text79">15+ ONLY</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="date"
                                        id="q15"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput09 input"
                                        onChange={(e) => setQ15(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-16">
                                    <span className="azdps-application-text81">
                                        <span>
                                            Tell me what you would do in the event of a FAILRP?
                                        </span>
                                        <span className="azdps-application-text83">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q16"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput10 input"
                                        onChange={(e) => setQ16(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-17">
                                    <span className="azdps-application-text84">
                                        <span>What are your greatest weaknesses? </span>
                                        <span className="azdps-application-text86">*</span>
                                    </span>
                                    <span className="azdps-application-text87">
                                        <span className="azdps-application-text88">
                                            5 SENTENCES MIN
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q17"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput11 input"
                                        onChange={(e) => setQ17(e.target.value)}
                                    />
                                </div>
                                <div className="azdps-application-question-18">
                                    <span className="azdps-application-text91">
                                        Can you record videos with your current computer?
                                    </span>
                                    <select id="q18" className="azdps-application-select4"
                                        onChange={(e) => setQ18(e.target.value)}>
                                        <option defaultValue value=""></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="azdps-application-question-19">
                                    <span className="azdps-application-text92">
                                        <span>How long have you been a member of our server? </span>
                                        <span className="azdps-application-text94">*</span>
                                    </span>
                                    <input
                                        type="date"
                                        id="q19"
                                        required={true}
                                        placeholder="Your Answer"
                                        className="azdps-application-textinput12 input"
                                        onChange={(e) => setQ19(e.target.value)}
                                    />
                                </div>
                                <button onClick={handleSubmit} className="azdps-application-button button">
                                    <span>
                                        <span className="azdps-application-text96">Submit</span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name7"></FooterContainer>
        </div>)
}
