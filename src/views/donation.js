import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
import './donation.css'
import Header from '../components/header'
import config from './config/config'
import UserHeader from '../components/user-header'

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
    <div>
      <Helmet>
        <title>Donation - Arizona State Roleplay</title>
        <meta property="og:title" content="Donation - Arizona State Roleplay" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/151790f7-6583-4936-911e-8f0137220d74/b871f600-3969-4903-b609-41571670b9e4?org_if_sml=1&amp;force_format=original"
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
              <span className="donation-text07">
                <span>4</span>
                <br></br>
              </span>
              <span className="donation-text10">
                <span>.99</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container04">
              <span className="donation-text13">✔ Discord Donator Role</span>
              <span className="donation-text14">
                ✔ Discord donator category
              </span>
              <span className="donation-text15">
                ✔ early access Server sneak peeks
              </span>
            </div>
            <a
              href="https://shop.azsrp.com/package/6395421"
              className="donation-link button"
            >
              Learn More
            </a>
          </div>
          <div className="donation-pricing-card1">
            <span className="donation-text16">
              <span>gold</span>
              <br></br>
            </span>
            <div className="donation-container05">
              <span className="donation-text19">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text22">
                <span>24</span>
                <br></br>
              </span>
              <span className="donation-text25">
                <span>99</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container06">
              <span className="donation-text28">
                ✔ All Features Basic Includes
              </span>
              <span className="donation-text29">
                ✔ Free Personal civilian Vehicle
              </span>
              <span className="donation-text30">✔ Donator Vehicle Menu</span>
            </div>
            <a
              href="https://shop.azsrp.com/package/6395421"
              className="donation-link1 button"
            >
              Learn More
            </a>
          </div>
          <div className="donation-pricing-card2">
            <span className="donation-text31">
              <span>Diamond</span>
              <br></br>
            </span>
            <div className="donation-container07">
              <span className="donation-text34">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text37">
                <span>59</span>
                <br></br>
              </span>
              <span className="donation-text40">
                <span>.99</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container08">
              <span className="donation-text43">
                ✔ All features Basic Includes
              </span>
              <span className="donation-text44">
                <span>
                  ✔ Personal Custom Modeled Vehicle By our developmers
                </span>
                <br></br>
              </span>
              <span className="donation-text47">✔ Donator Vehicle Menu</span>
            </div>
            <a
              href="https://shop.azsrp.com/package/6395437"
              className="donation-link2 button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <h1 id="how-to-donate" className="donation-text48">
        How to Donate
      </h1>
      <span className="donation-text49">
        <span>
          Please remember to enter your discord username inside of the note on
          the payment
        </span>
        <br></br>
        <span>So that you can receive your donator benefits </span>
      </span>
      <h1 className="donation-text53">please be aware there are no refunds</h1>
      <div className="donation-container09">
        <a
          href="https://shop.azsrp.com/category/store"
          className="donation-link3"
        >
          <div className="donation-pricing-card3">
            <img
              alt="pastedImage"
              src="/external/pastedimage-hlvh-200h.webp"
              className="donation-pasted-image"
            />
            <span className="donation-text54">
              <span className="donation-text55">Tebex</span>
              <br></br>
            </span>
          </div>
        </a>
      </div>
      <h1 className="donation-text57">
        <span className="donation-text58">
          *Arizona State Roleplay has the right to revoke any donation perks
          from you if you are to be banned or found to be breaking the rules of
          the Arizona State Roleplay Server*
        </span>
        <br></br>
        <span>
          *Your personals will have a script to lock them only to you and you
          may give access to other users*
        </span>
        <br></br>
        <span>
          *Donation assets are a privilege and may be taken away by community
          directors at any point*
        </span>
        <br></br>
      </h1>
      <FooterContainer rootClassName="footer-container-root-class-name1"></FooterContainer>
    </div >
  )
}

export default Donation
