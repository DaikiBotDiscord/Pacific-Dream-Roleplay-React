import React from 'react'

import FooterContainer from '../components/footer-container'
import Header from '../components/header'
import UserHeader from '../components/user-header'
import config from './config/config'
import './departments.css'

const Departments = (props) => {
    return (
        <div className="departments-container">
            <div className="departments-container1">
                <Header rootClassName="header-root-class-name4"></Header>
                <div className="departments-container2">
                    <div className="departments-container3">
                        <div className="departments-gallery-card">
                            <img
                                alt="image"
                                src="https://cdn.discordapp.com/attachments/1198690354656985159/1198818353603690567/Fire_Logo_2USA.png?ex=65c04998&amp;is=65add498&amp;hm=242160714902ad380183241d139c2b51ec647c9c9aede0eb79d7170eaceff852&amp;"
                                className="departments-image"
                            />
                            <h2 className="departments-text">
                                San Andreas Fire &amp; Rescue
                            </h2>
                            <span className="departments-text01">
                                The mission of the San Andreas Fire Rescue is ensuring the
                                safety of all the citizens in the state of San Andreas, doing so
                                in a mature and professional manner. SAFR works with other
                                agencies to educate, protect and assist the citizens of San
                                Andreas. We have many divisions to help achieve this.
                            </span>
                        </div>
                        <div className="departments-gallery-card1">
                            <img
                                alt="image"
                                src="https://cdn.discordapp.com/attachments/1198690354656985159/1198818357722497154/8228cc65-f0c2-4eae-bdd2-42226ae65219_1.png?ex=65c04999&amp;is=65add499&amp;hm=da0ec38e0270207092c5bb13b8960b0ffc1ca43e413b712e512cca22d2527ec6&amp;"
                                className="departments-image1"
                            />
                            <h2 className="departments-text02">Los Santos Police</h2>
                            <span className="departments-text03">
                                <span>
                                    The Los Santos Police Department is dedicated to protecting
                                    rights, property, and lives, maintaining order, and enforcing
                                    laws. We aim to achieve this by setting goals, practicing core
                                    values, and being totally dedicated to our mission. Our values
                                    guide members in treating people with respect, fairness, and
                                    compassion.
                                </span>
                                <br></br>
                            </span>
                        </div>
                        <div className="departments-gallery-card2">
                            <img
                                alt="image"
                                src="https://cdn.discordapp.com/attachments/1198690354656985159/1198818387502059550/download.png?ex=65c049a0&amp;is=65add4a0&amp;hm=50251ab1264615cb838c686da2839c3b6eabe6ca822b1021e9d41aef4fa3f957&amp;"
                                className="departments-image2"
                            />
                            <h2 className="departments-text06">
                                <span>Blaine County</span>
                                <br></br>
                            </h2>
                            <span className="departments-text09">
                                <span>
                                    The Blaine County Sheriff&apos;s Office is on a crucial
                                    mission to protect the Blaine County district in San Andreas.
                                    Our core values include Loyalty, Strength, Courageousness, and
                                    Obedience, guiding each deputy to play a vital role in the
                                    community. Committed to serving and enhancing the state of
                                    living for everyone, our deputies prioritize the proper care
                                    and respect needed for trust. Various divisions work towards
                                    upholding these values.
                                </span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                    <div className="departments-container4">
                        <div className="departments-gallery-card3">
                            <img
                                alt="image"
                                src="https://cdn.discordapp.com/attachments/1198690354656985159/1198818413645140018/RCiv_Logo.png.62e84cd49d883db8492dc588c771b8bd.png?ex=65c049a6&amp;is=65add4a6&amp;hm=663825dcbd1f47882733cfe42793687460996bc2b9c2d176c499bf076b089e6c&amp;"
                                className="departments-image3"
                            />
                            <h2 className="departments-text12">
                                San Andreas Civilians Operations
                            </h2>
                            <span className="departments-text13">
                                Embark on a new chapter in your life on our server, where
                                everything depends on you and your fellow citizens. With
                                diligence, you can start your own company and turn your
                                imagination into reality. Life here goes beyond a simple
                                role-playing game; you are fully immersed in your character.
                                Every knowledge and experience in San Andreas contributes to
                                your advancement. Details matter, influencing the history of San
                                Andreas. Whether a friendly police officer, a successful rich
                                person, or an aggressive criminal, Pacific Dream has no
                                limitations.
                            </span>
                        </div>
                        <div className="departments-gallery-card4">
                            <img
                                alt="image"
                                src="https://cdn.discordapp.com/attachments/1198690354656985159/1198818442556477510/690516657_ORPCommunicationsDepartmentLogoTeamSpeakChannel.thumb.png.3c641f93ba8bcd2c8a56de47002f20d7.png?ex=65c049ad&amp;is=65add4ad&amp;hm=305e08d363603b09efd9038d5c3c2a3d8674f68959e42eeae8165db7b2ec3f4d&amp;"
                                className="departments-image4"
                            />
                            <h2 className="departments-text14">San Andreas Communications</h2>
                            <span className="departments-text15">
                                The San Andreas Department of Communications strives for utmost
                                professionalism in radio communication. As the backbone of San
                                Andreas departments, we aim to excel, not just within our own
                                ranks but also for those who depend on us, including the Pacific
                                Dream Roleplay FiveM server.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="departments-gallery"></div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name5"></FooterContainer>
        </div>
    )
}

export default Departments
