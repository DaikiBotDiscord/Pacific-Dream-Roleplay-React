import React from 'react'

import PropTypes from 'prop-types'

import './user-modal.css'

const UserModal = (props) => {
  return (
    <div className="user-modal-user-modal">
      <img
        alt={props.Daiki_Status_Image_alt}
        src={props.Daiki_Status_Image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="user-modal-daiki-status-image"
      />
      <div className="user-modal-daiki-status-container">
        <h1 className="user-modal-daiki-status-container-heading">
          {props.Daiki_Status_Container_Heading}
        </h1>
      </div>
    </div>
  )
}

UserModal.defaultProps = {
  Daiki_Status_Image_alt: 'image',
  Daiki_Status_Container_Heading: 'Nickname',
  Daiki_Status_Image_src:
    'https://www.daiki-bot.xyz/playground_assets/Daiki4.png',
}

UserModal.propTypes = {
  Daiki_Status_Image_alt: PropTypes.string,
  Daiki_Status_Container_Heading: PropTypes.string,
  Daiki_Status_Image_src: PropTypes.string,
}

export default UserModal
