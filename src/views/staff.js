import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import NavigationLinks from '../components/navigation-links';
import FooterContainer from '../components/footer-container';
import './staff.css';
import Header from '../components/header';
import UserHeader from '../components/user-header';
import config from './config/config';
import Analytics from '@vercel/analytics'


class PFP extends Component {
  state = {
    FounderData: null,
    HeadAdminData: null,
    AdminData: null,
    jrAdminData: null,
    SeniorStaffData: null,
    StaffData: null,
    SITData: null,
    FounderDataLoading: true,
    HeadAdminDataLoading: true,
    AdminDataLoading: true,
    jrAdminDataLoading: true,
    SeniorStaffDataLoading: true,
    StaffDataLoading: true,
    SITDataLoading: true,
    headerComponent: false,
  };

  checkTokenRepeat = async () => {

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
        this.setState({ headerComponent: <Header rootClassName="header-root-class-name2" /> });
      } else if (data.status === 'active') {
        // Set the UserHeader component to be rendered
        this.setState({ headerComponent: <UserHeader rootClassName="header-root-class-name2" /> });
      } else {
        // Set the default Header component to be rendered
        this.setState({ headerComponent: <Header rootClassName="header-root-class-name2" /> });
      }
    } catch (err) {
      console.error(err);
      // Handle error (e.g., display an error message or redirect)
    }
  };

  fetchData = () => {
    this.setState({
      FounderDataLoading: true,
      HeadAdminDataLoading: true,
      AdminDataLoading: true,
      jrAdminDataLoading: true,
      SeniorStaffDataLoading: true,
      StaffDataLoading: true,
      SITDataLoading: true,
      headerComponent: false,
    });

    axios.get(`${config.apiDomain}/api/staff/Founder`)
      .then(response => {
        this.setState({ FounderData: response.data, FounderDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/HeadAdmin`)
      .then(response => {
        this.setState({ HeadAdminData: response.data, HeadAdminDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/Admin`)
      .then(response => {
        this.setState({ AdminData: response.data, AdminDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/JrAdmin`)
      .then(response => {
        this.setState({ jrAdminData: response.data, jrAdminDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/SeniorStaff`)
      .then(response => {
        this.setState({ SeniorStaffData: response.data, SeniorStaffDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/Staff`)
      .then(response => {
        this.setState({ StaffData: response.data, StaffDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/SIT`)
      .then(response => {
        this.setState({ SITData: response.data, SITDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });
  };

  componentDidMount() {
    // Fetch data when the component mounts
    this.fetchData();
    this.checkTokenRepeat();
  }

  renderStaffMembers = (data, position) => {
    const loading = this.state[`${position}DataLoading`];

    if (loading) {
      return (
        <div>
          <h1 className='staff-daiki-status-container-heading'>Loading...</h1>
        </div>
      )
    }

    return data.map((member) => (
      <div key={member._id} className="staff-user-modal">
        <img
          alt="image"
          src={member.avatarUrl}
          className="staff-daiki-status-image"
        />
        <div className="staff-daiki-status-container">
          <h1 className="staff-daiki-status-container-heading">{member.nickname}</h1>
        </div>
      </div>
    ));
  };

  render() {
    const {
      FounderData,
      HeadAdminData,
      AdminData,
      jrAdminData,
      SeniorStaffData,
      StaffData,
      SITData,
      headerComponent
    } = this.state;

    return (
      <div className="staff-container">
        <Analytics />
        <Helmet>
          <title>Staff - Pinal County Roleplay</title>
          <meta property="og:title" content="Staff - Pinal County Roleplay" />
        </Helmet>
        <div className="staff-container1">
          {headerComponent}
        </div>
        {/* <h3 className="not-found-text2" style={{ textAlign: "center", fontWeight: '400', color: "black" }}>OOPS! PAGE NOT AVAILABLE</h3>
        <div className="not-found-container1" style={{ display: 'flex', position: "relative", alignItems: 'center', flexDirection: "column", justifyContent: 'center' }}>
          <h1 className="not-found-text1">503</h1>
        </div>
        <div className="not-found-container2" style={{ width: "421px", display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="not-found-text2" style={{ textAlign: "center", fontWeight: '400', color: "black" }}>
            WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
          </h2>
        </div> */}
        <div className="staff-container2">
          <div className="staff-separator"></div>
          <h1 className="staff-text">
            <span>Community Administration</span>
            <br></br>
          </h1>
          <div className="staff-separator01"></div>
        </div>
        <div className="staff-user-container">
          {FounderData && this.renderStaffMembers(FounderData, 'Founder', this.state.FounderDataLoading)}
        </div>
        <div className="staff-user-container">
          {HeadAdminData && this.renderStaffMembers(HeadAdminData, 'Head Admin', this.state.HeadAdminDataLoading)}
        </div>
        <div className="staff-container3">
          <div className="staff-separator02"></div>
          <h1 className="staff-text03">
            <span>Administration</span>
            <br></br>
          </h1>
          <div className="staff-separator03"></div>
        </div>
        <div className="staff-user-container">
          {AdminData && this.renderStaffMembers(AdminData, 'Administration', this.state.AdminDataLoading)}
        </div>
        <div className="staff-container4">
          <div className="staff-separator04"></div>
          <h1 className="staff-text06">
            <span>Jr. Administration</span>
            <br></br>
          </h1>
          <div className="staff-separator05"></div>
        </div>
        <div className="staff-user-container">
          {jrAdminData && this.renderStaffMembers(jrAdminData, 'Jr. Administration', this.state.jrAdminDataLoading)}
        </div>
        <div className="staff-container5">
          <div className="staff-separator06"></div>
          <h1 className="staff-text09">
            <span>Senior Staff</span>
            <br></br>
          </h1>
          <div className="staff-separator07"></div>
        </div>
        <div className="staff-user-container">
          {SeniorStaffData && this.renderStaffMembers(SeniorStaffData, 'Senior Staff', this.state.SeniorStaffDataLoading)}
        </div>
        <div className="staff-container6">
          <div className="staff-separator08"></div>
          <h1 className="staff-text12">
            <span>Staff</span>
            <br></br>
          </h1>
          <div className="staff-separator09"></div>
        </div>
        <div className="staff-user-container">
          {StaffData && this.renderStaffMembers(StaffData, 'Staff', this.state.StaffDataLoading)}
        </div>
        <div className="staff-container7">
          <div className="staff-separator10"></div>
          <h1 className="staff-text15">
            <span>Staff in Training</span>
            <br></br>
          </h1>
          <div className="staff-separator11"></div>
        </div>
        <div className="staff-user-container">
          {SITData && this.renderStaffMembers(SITData, 'Staff in Training', this.state.SITDataLoading)}
        </div>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div >
    )
  }
}

export default PFP;