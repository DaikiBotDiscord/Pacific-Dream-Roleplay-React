import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
import './staff.css'
import Header from '../components/header'

class PFP extends Component {
  state = {
    FounderData: null,
    HeadAdminData: null,
    SeniorAdminData: null,
    AdminData: null,
    StaffData: null,
    ModData: null,
  };

  fetchData = () => {
    axios.get('https://api.pacificdreamrp.com/api/staff/Founder')
      .then(response => {
        this.setState({ FounderData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get('https://api.pacificdreamrp.com/api/staff/HeadAdmin')
      .then(response => {
        this.setState({ HeadAdminData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get('https://api.pacificdreamrp.com/api/staff/SeniorAdmin')
      .then(response => {
        this.setState({ SeniorAdminData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get('https://api.pacificdreamrp.com/api/staff/Admin')
      .then(response => {
        this.setState({ AdminData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get('https://api.pacificdreamrp.com/api/staff/Staff')
      .then(response => {
        this.setState({ StaffData: response.data });
      }).catch(error => {
        console.error('API Error:', error);
      });
    axios.get('https://api.pacificdreamrp.com/api/staff/Mod')
      .then(response => {
        this.setState({ ModData: response.data });
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
      SeniorAdminData,
      AdminData,
      StaffData,
      ModData,
    } = this.state;

    return (
      <div className="staff-container">
        <Helmet>
          <title>Staff - Pacific Dream Roleplay</title>
          <meta property="og:title" content="Staff - Pacific Dream Roleplay" />
        </Helmet>
        <div className="staff-container1">
          <Header />
        </div>
        <div className="staff-container2">
          <div className="staff-separator02"></div>
          <h1 className="staff-text03">
            <span>Founders</span>
            <br></br>
          </h1>
          <div className="staff-separator02"></div>
        </div>
        <div className="staff-user-container">
          {FounderData && this.renderStaffMembers(FounderData)}
        </div>
        <div className="staff-container3">
          <div className="staff-separator02"></div>
          <h1 className="staff-text06">
            <span>Head Admin</span>
            <br></br>
          </h1>
          <div className="staff-separator03"></div>
        </div>
        <div className="staff-user-container">
          {HeadAdminData && this.renderStaffMembers(HeadAdminData)}
        </div>
        <div className="staff-container4">
          <div className="staff-separator04"></div>
          <h1 className="staff-text09">
            <span>Senior Administration</span>
            <br></br>
          </h1>
          <div className="staff-separator05"></div>
        </div>
        <div className="staff-user-container">
          {SeniorAdminData && this.renderStaffMembers(SeniorAdminData)}
        </div>
        <div className="staff-container5">
          <div className="staff-separator06"></div>
          <h1 className="staff-text12">
            <span>Administration</span>
            <br></br>
          </h1>
          <div className="staff-separator07"></div>
        </div>
        <div className="staff-user-container">
          {AdminData && this.renderStaffMembers(AdminData)}
        </div>
        <div className="staff-container6">
          <div className="staff-separator08"></div>
          <h1 className="staff-text15">
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
          <h1 className="staff-text18">
            <span>Moderation</span>
            <br></br>
          </h1>
          <div className="staff-separator11"></div>
        </div>
        <div className="staff-user-container">
          {ModData && this.renderStaffMembers(ModData)}
        </div>
        <FooterContainer />
      </div>
    )
  }
}

export default PFP;