import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './fbi-application.css'

const FBIApplication = (props) => {
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
                <Header rootClassName="header-root-class-name16"></Header>
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
                                        required="true"
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput input"
                                    />
                                </div>
                                <div className="fbi-application-question-2">
                                    <span className="fbi-application-text16">
                                        <span>Supervisor Recommendation:  </span>
                                        <span className="fbi-application-text18">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput1 input"
                                    />
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
                                        required="true"
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput2 input"
                                    />
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
                                        required="true"
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput3 input"
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
                                        required="true"
                                        placeholder="Your Answer"
                                        className="fbi-application-textinput4 input"
                                    />
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
                                        placeholder="Your Answer"
                                        className="fbi-application-textarea textarea"
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
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
                                    ></textarea>
                                </div>
                                <button className="fbi-application-button button">
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

export default FBIApplication
