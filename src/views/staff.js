import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import NavigationLinks from '../components/navigation-links';
import FooterContainer from '../components/footer-container';
import './staff.css';
import Header from '../components/header';
import UserHeader from '../components/user-header';
import config from './config/config';


class PFP extends Component {
  state = {
    FoundersData: null,
    CoOwnerData: null,
    CommunityDirectorsData: null,
    CommunityManagersData: null,
    AdminData: null,
    JuniorAdminData: null,
    SeniorModData: null,
    ModData: null,
    FoundersDataLoading: true,
    CoOwnerDataLoading: true,
    CommunityDirectorsDataLoading: true,
    CommunityManagersDataLoading: true,
    AdminDataLoading: true,
    JuniorAdminDataLoading: true,
    SeniorModDataLoading: true,
    ModDataLoading: true,
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
      FoundersDataLoading: true,
      CoOwnerDataLoading: true,
      CommunityDirectorsDataLoading: true,
      CommunityManagersDataLoading: true,
      AdminDataLoading: true,
      JuniorAdminDataLoading: true,
      SeniorModDataLoading: true,
      ModDataLoading: true,
      headerComponent: false,
    });

    axios.get(`${config.apiDomain}/api/staff/Founder`)
      .then(response => {
        this.setState({ FoundersData: response.data, FoundersDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/CoOwner`)
      .then(response => {
        this.setState({ CoOwnerData: response.data, CoOwnerDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/BoardDirectors`)
      .then(response => {
        this.setState({ CommunityDirectorsData: response.data, CommunityDirectorsDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/CommunityManagers`)
      .then(response => {
        this.setState({ CommunityManagersData: response.data, CommunityManagersDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/Admin`)
      .then(response => {
        this.setState({ AdminData: response.data, AdminDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/JuniorAdmin`)
      .then(response => {
        this.setState({ JuniorAdminData: response.data, JuniorAdminDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/SeniorMod`)
      .then(response => {
        this.setState({ SeniorModData: response.data, SeniorModDataLoading: false });
      }).catch(error => {
        console.error('API Error:', error);
      });

    axios.get(`${config.apiDomain}/api/staff/Mod`)
      .then(response => {
        this.setState({ ModData: response.data, ModDataLoading: false });
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
      FoundersData,
      CoOwnerData,
      CommunityDirectorsData,
      CommunityManagersData,
      AdminData,
      JuniorAdminData,
      SeniorModData,
      ModData,
      headerComponent,
    } = this.state;

    return (
      <div className="staff-container">

        <Helmet>
          <title>Staff - Arizona State Roleplay</title>
          <meta property="og:title" content="Staff - Arizona State Roleplay" />
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
            <span>Founders</span>
            <br></br>
          </h1>
          <div className="staff-separator01"></div>
          <div className="staff-user-container">
            {FoundersData && this.renderStaffMembers(FoundersData, 'Founder', this.state.FoundersDataLoading)}
            {CoOwnerData && this.renderStaffMembers(CoOwnerData, 'Co Owner', this.state.CoOwnerDataLoading)}
          </div>
        </div>
        <div className="staff-container3">
          <div className="staff-separator02"></div>
          <h1 className="staff-text03">
            <span>Board of Directors</span>
            <br></br>
          </h1>
          <div className="staff-separator03"></div>
        </div>
        <div className="staff-user-container">
          {CommunityDirectorsData && this.renderStaffMembers(CommunityDirectorsData, 'Administration', this.state.CommunityDirectorsDataLoading)}
        </div>
        <div className="staff-container4">
          <div className="staff-separator04"></div>
          <h1 className="staff-text06">
            <span>Community Managers</span>
            <br></br>
          </h1>
          <div className="staff-separator05"></div>
        </div>
        <div className="staff-user-container">
          {CommunityManagersData && this.renderStaffMembers(CommunityManagersData, 'Jr. Administration', this.state.CommunityManagersDataLoading)}
        </div>
        <div className="staff-container5">
          <div className="staff-separator06"></div>
          <h1 className="staff-text09">
            <span>Administrators</span>
            <br></br>
          </h1>
          <div className="staff-separator07"></div>
        </div>
        <div className="staff-user-container">
          {AdminData && this.renderStaffMembers(AdminData, 'Senior Staff', this.state.AdminDataLoading)}
        </div>
        <div className="staff-container6">
          <div className="staff-separator08"></div>
          <h1 className="staff-text12">
            <span>Junior Administrator</span>
            <br></br>
          </h1>
          <div className="staff-separator09"></div>
        </div>
        <div className="staff-user-container">
          {JuniorAdminData && this.renderStaffMembers(JuniorAdminData, 'Staff', this.state.JuniorAdminDataLoading)}
        </div>
        <div className="staff-container7">
          <div className="staff-separator10"></div>
          <h1 className="staff-text15">
            <span>Senior Moderator</span>
            <br></br>
          </h1>
          <div className="staff-separator11"></div>
        </div>
        <div className="staff-user-container">
          {SeniorModData && this.renderStaffMembers(SeniorModData, 'Staff in Training', this.state.SeniorModDataLoading)}
        </div>
        <div className="staff-container7">
          <div className="staff-separator10"></div>
          <h1 className="staff-text15">
            <span>Moderator</span>
            <br></br>
          </h1>
          <div className="staff-separator11"></div>
        </div>
        <div className="staff-user-container">
          {ModData && this.renderStaffMembers(ModData, 'Staff in Training', this.state.ModDataLoading)}
        </div>
        <a className="copyrighted-badge" title="Copyrighted.com Registered &amp; Protected" target="_blank" href="https://app.copyrighted.com/website/VdyDkIgA3GE82WWI">
          <img alt="Copyrighted.com Registered &amp; Protected" border="0" width="125" height="25" srcSet="https://static.copyrighted.com/badges/125x25/01_1_2x.png 2x" src="https://static.copyrighted.com/badges/125x25/01_1.png" />
        </a>
        <script src="https://static.copyrighted.com/badges/helper.js"></script>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div >
    )
  }
}

export default PFP;