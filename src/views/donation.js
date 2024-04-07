import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
import './donation.css'
import Header from '../components/header'
import config from './config/config'
import UserHeader from '../components/user-header'
import Analytics from '@vercel/analytics'

const Donation = (props) => {
  const [headerComponent, setHeaderComponent] = useState(false);
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
        // Set the UserHeader component to be rendered
        setHeaderComponent(<UserHeader rootClassName="header-root-class-name2" />);
      } else {
        // Set the default Header component to be rendered
        setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
      }
    } catch (err) {
      console.error(err);
      // Handle error (e.g., display an error message or redirect)
    }
  };
  return (
    <div className="donation-container">
      <Helmet>
        <title>Donation - Pacific Dream Roleplay</title>
        <meta
          property="og:title"
          content="Donation - Pacific Dream Roleplay"
        />
      </Helmet>
      <div className="donation-container01">
        {headerComponent}
      </div>
      <h1 className="donation-text">Donation Levels</h1>
      <div className="donation-pricing">
        <div className="donation-container02">
          <div className="donation-pricing-card">
            <span className="donation-text01">
              <span>copper</span>
              <br></br>
            </span>
            <div className="donation-container03">
              <span className="donation-text04">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text07">5</span>
              <span className="donation-text08">
                <span>.00</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container04">
              <span className="donation-text11">✔ Discord Donator Role</span>
              <span className="donation-text12">
                ✔ Discord donator category
              </span>
              <span className="donation-text13">
                ✔ early access Server sneak peeks
              </span>
            </div>
            <a href="#how-to-donate" className="donation-link button">
              Learn More
            </a>
          </div>
          <div className="donation-pricing-card1">
            <span className="donation-text14">
              <span>gold</span>
              <br></br>
            </span>
            <div className="donation-container05">
              <span className="donation-text17">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text20">
                <span>20</span>
                <br></br>
              </span>
              <span className="donation-text23">
                <span>.00</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container06">
              <span className="donation-text26">
                ✔ All Features Basic Includes
              </span>
              <span className="donation-text27">
                ✔ Free Personal civilian Vehicle
              </span>
              <span className="donation-text28">✔ Donator Vehicle Menu</span>
            </div>
            <a href="#how-to-donate" className="donation-link1 button">
              Learn More
            </a>
          </div>
          <div className="donation-pricing-card2">
            <span className="donation-text29">
              <span>Platinum</span>
              <br></br>
            </span>
            <div className="donation-container07">
              <span className="donation-text32">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text35">
                <span>35</span>
                <br></br>
              </span>
              <span className="donation-text38">
                <span>.00</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container08">
              <span className="donation-text41">
                ✔ All features Premium Includes
              </span>
              <span className="donation-text42">
                <span>✔ Free Personal LEO Vehicle</span>
                <br></br>
              </span>
            </div>
            <a href="#how-to-donate" className="donation-link2 button">
              Learn More
            </a>
          </div>
          <div className="donation-pricing-card3">
            <span className="donation-text45">
              <span>Diamond</span>
              <br></br>
            </span>
            <div className="donation-container09">
              <span className="donation-text48">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text51">
                <span>65</span>
                <br></br>
              </span>
              <span className="donation-text54">
                <span>.00</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container10">
              <span className="donation-text57">
                ✔ All features Basic Includes
              </span>
              <span className="donation-text58">
                <span>
                  ✔ Personal Custom Modeled Vehicle By our developmers
                </span>
                <br></br>
              </span>
              <span className="donation-text61">✔ Donator Vehicle Menu</span>
            </div>
            <a href="#how-to-donate" className="donation-link3 button">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <h1 id="how-to-donate" className="donation-text62">
        How to Donate
      </h1>
      <span className="donation-text63">
        <span>
          Please remember to enter your discord username inside of the note on
          the payment
        </span>
        <br></br>
        <span>So that you can receive your donator benefits.</span>
        <br></br>
        <span className='refund'>Please be aware there are no refunds</span>
      </span>
      <div className="donation-container11">
        <a
          href="https://www.paypal.com/paypalme/Scopex07"
          target="_blank"
          rel="noreferrer noopener"
          className="donation-link4"
        >
          <div className="donation-pricing-card4">
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/151790f7-6583-4936-911e-8f0137220d74/88fcd8cb-c96c-41bc-bcb1-428293bb423f?org_if_sml=14915&amp;force_format=original"
              className="donation-image"
            />
            <span className="donation-text67">
              <span className="donation-text68">Paypal</span>
            </span>
          </div>
        </a>
        <a
          href="https://cash.app/$scopex07"
          target="_blank"
          rel="noreferrer noopener"
          className="donation-link5"
        >
          <div className="donation-pricing-card5">
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/151790f7-6583-4936-911e-8f0137220d74/62096b95-ddaf-4d14-aa54-2571c37f94b1?org_if_sml=114047&amp;force_format=original"
              className="donation-image1"
            />
            <span className="donation-text69">
              <span className="donation-text70">cash App</span>
            </span>
          </div>
        </a>
      </div>
      {/* <span className='disclaimer'>
        *Pinal County Roleplay has the right to revoke any donation perks from you if you are to be banned or found to be breaking the rules of the Pinal County Roleplay Server*
      </span>
      <span className='disclaimer'>
        *Donation Assets are a privilege and may be taken away by community directors at any point*
      </span> */}
      <FooterContainer rootClassName="footer-container-root-class-name1"></FooterContainer>
    </div>
  )
}

export default Donation
