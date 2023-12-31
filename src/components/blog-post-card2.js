import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.label}</span>
        </div>
        <h1 className="blog-post-card2-text1">{props.username}</h1>
        <span className="blog-post-card2-text2">{props.description}</span>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  profile_alt: 'profile',
  description: 'Profile Description',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  author: 'Jane Doe',
  label: 'TITLE',
  when: '3 days ago',
  username: 'Name',
  rootClassName: '',
  image_alt: 'image',
}

BlogPostCard2.propTypes = {
  image_src: PropTypes.string,
  profile_alt: PropTypes.string,
  description: PropTypes.string,
  profile_src: PropTypes.string,
  author: PropTypes.string,
  label: PropTypes.string,
  when: PropTypes.string,
  username: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard2
