import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero9-text8">Welcome to OnConf</span>
              </Fragment>
            )}
          </h1>
          <p className="hero9-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero9-text5">
                  Join the world&apos;s largest virtual conference to connect,
                  learn, and explore new opportunities.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button1">
              <span className="hero9-text3 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero9-text6">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero9-button2">
              <span className="hero9-text4 thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero9-text7">Register Now</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1599081595833-a54f00b6ed08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTQzMTU5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'OnConf Virtual Conference',
  content1: undefined,
  action1: undefined,
  action2: undefined,
  heading1: undefined,
}

Hero9.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero9
