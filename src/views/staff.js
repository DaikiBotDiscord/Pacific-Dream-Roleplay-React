import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
import './staff.css'
import Header from '../components/header'
import config from './config/config'

class PFP extends Component {
  state = {
    FounderData: null,
    HeadAdminData: null,
    AdminData: null,
    jrAdminData: null,
    SeniorStaffData: null,
    StaffData: null,
    SITData: null,
  };

  fetchData = () => {
    axios.get(`${config.apiDomain}/api/staff/Founder`)
      .then(response => {
        this.setState({ FounderData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get(`${config.apiDomain}/api/staff/HeadAdmin`)
      .then(response => {
        this.setState({ HeadAdminData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get(`${config.apiDomain}/api/staff/Admin`)
      .then(response => {
        this.setState({ AdminData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get(`${config.apiDomain}/api/staff/JrAdmin`)
      .then(response => {
        this.setState({ jrAdminData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get(`${config.apiDomain}/api/staff/SeniorStaff`)
      .then(response => {
        this.setState({ SeniorStaffData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get(`${config.apiDomain}/api/staff/Staff`)
      .then(response => {
        this.setState({ StaffData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get(`${config.apiDomain}/api/staff/SIT`)
      .then(response => {
        this.setState({ SITData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
  };

  componentDidMount() {
    // Fetch data when the component mounts
    this.fetchData();
  }

  renderStaffMembers = (data, position) => {
    return data.map((member) => (
      <div key={member._id} className="staff-user-modal">
        <img
          alt="image"
          src={member.avatarUrl}
          className="staff-daiki-status-image"
        />
        <div className="staff-daiki-status-container">
          <h1 className="staff-daiki-status-container-heading">{member.nickname}</h1>
          <p>{position}</p>
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
    } = this.state;

    return (
      <div className="staff-container">
        <Helmet>
          <title>Staff - Pacific Dream Roleplay</title>
          <meta property="og:title" content="Staff - Pacific Dream Roleplay" />
        </Helmet>
        <div className="staff-container1">
          <Header rootClassName="header-root-class-name1"></Header>
        </div>
        <div className="staff-container2">
          <div className="staff-separator"></div>
          <h1 className="staff-text">
            <span>Founders</span>
            <br></br>
          </h1>
          <div className="staff-separator01"></div>
        </div>
        <div className="staff-user-container">
          {FounderData && this.renderStaffMembers(FounderData)}
        </div>
        <div className="staff-container2">
          <div className="staff-separator"></div>
          <h1 className="staff-text">
            <span>Head Admin</span>
            <br></br>
          </h1>
          <div className="staff-separator01"></div>
        </div>
        <div className="staff-user-container">
          {HeadAdminData && this.renderStaffMembers(HeadAdminData)}
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
          {AdminData && this.renderStaffMembers(AdminData)}
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
          {jrAdminData && this.renderStaffMembers(jrAdminData)}
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
          {SeniorStaffData && this.renderStaffMembers(SeniorStaffData)}
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
          {StaffData && this.renderStaffMembers(StaffData)}
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
          {SITData && this.renderStaffMembers(SITData)}
        </div>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div>
    )
  }
}

export default PFP;