import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list4.css'

const ContentList4 = (props) => {
  return (
    <div className="content-list4-container thq-section-padding">
      <div className="content-list4-max-width thq-section-max-width thq-flex-column">
        <div className="content-list4-content12 thq-flex-column">
          <ul className="content-list4-ul1 thq-flex-column">
            <li className="content-list4-li10 thq-flex-column list-item">
              <h2 className="content-list4-heading7 thq-heading-2">
                {props.heading7 ?? (
                  <Fragment>
                    <span className="content-list4-text10">
                      Interactive Workshops
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list4-content7 thq-body-small">
                {props.content7 ?? (
                  <Fragment>
                    <span className="content-list4-text22">
                      Participate in hands-on workshops and activities designed
                      to enhance your learning and skill development.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list4-ul2 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading8 ?? (
                      <Fragment>
                        <span className="content-list4-text19">
                          Global Reach
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list4-text18">
                          Connect with industry experts and thought leaders who
                          will share their knowledge and expertise.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading9 ?? (
                      <Fragment>
                        <span className="content-list4-text14">
                          Cutting-Edge Technology
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content9 ?? (
                      <Fragment>
                        <span className="content-list4-text17">
                          Experience the latest in virtual conference technology
                          for a seamless and engaging event.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list4-content13 thq-flex-column">
          <ul className="content-list4-ul3 thq-flex-column">
            <li className="content-list4-li13 thq-flex-column list-item">
              <h2 className="content-list4-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list4-text16">
                      Welcome to OnConf - The World&apos;s Largest Virtual
                      Conference
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list4-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list4-text27">
                      Join us for an immersive online experience filled with top
                      speakers, networking opportunities, and valuable insights.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list4-ul4 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="content-list4-text29">
                          Engage with Renowned Speakers
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list4-text18">
                          Connect with industry experts and thought leaders who
                          will share their knowledge and expertise.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="content-list4-text12">
                          Networking Sessions
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="content-list4-text21">
                          Participate in interactive networking sessions to
                          expand your professional connections and build
                          relationships.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="content-list4-text28">
                          Valuable Insights
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content4 ?? (
                      <Fragment>
                        <span className="content-list4-text24">
                          Gain valuable insights and stay ahead of industry
                          trends through engaging discussions and informative
                          sessions.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="content-list4-text23">
                          Enhance Your Learning Experiences
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="content-list4-text15">
                          Expand your knowledge, skills, and expertise through a
                          diverse range of topics and workshops.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="content-list4-text13">
                          Explore New Opportunities
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content6 ?? (
                      <Fragment>
                        <span className="content-list4-text30">
                          Discover new opportunities for growth, collaboration,
                          and career advancement in a dynamic virtual
                          environment.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list4-content14 thq-flex-column">
          <ul className="content-list4-ul5 thq-flex-column">
            <li className="content-list4-li19 thq-flex-column list-item">
              <h2 className="content-list4-heading10 thq-heading-2">
                {props.heading10 ?? (
                  <Fragment>
                    <span className="content-list4-text25">Register Now</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list4-content10 thq-body-small">
                {props.content10 ?? (
                  <Fragment>
                    <span className="content-list4-text26">
                      Secure your spot at OnConf and unlock a world of
                      opportunities for learning, networking, and growth.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list4-ul6 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading11 ?? (
                      <Fragment>
                        <span className="content-list4-text11">General</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content11 ?? (
                      <Fragment>
                        <span className="content-list4-text20">
                          Lorem ipsum dolor sit amet. Nam nihil facilis sit
                          consequuntur internos qui minima rerum ut molestias
                          laudantium aut iusto deserunt. Aut voluptatibus
                          excepturi qui officia laudantium est repellendus
                          tempore hic sunt debitis. Ut galisum tempore in enim
                          fugit eum pariatur possimus est tenetur nemo et sint
                          sint et dolores Quis. Aut illum perspiciatis rem
                          architecto culpa et fuga aliquid. Est omnis
                          praesentium ut nisi internos rem quod totam et
                          similique quis. Est tempore cumque aut recusandae
                          labore qui error molestiae et possimus quia! Eum Quis
                          asperiores non nihil tempora qui quia voluptatem aut
                          aspernatur aspernatur aut asperiores labore et
                          sapiente quaerat qui suscipit quia. Ea nesciunt iste
                          aut temporibus culpa sit dignissimos quaerat eum
                          architecto voluptatum et nemo velit At harum harum.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList4.defaultProps = {
  heading7: undefined,
  heading11: undefined,
  heading3: undefined,
  heading6: undefined,
  heading9: undefined,
  content5: undefined,
  heading1: undefined,
  content9: undefined,
  content2: undefined,
  heading8: undefined,
  content11: undefined,
  content3: undefined,
  content7: undefined,
  heading5: undefined,
  content4: undefined,
  heading10: undefined,
  content10: undefined,
  content1: undefined,
  heading4: undefined,
  heading2: undefined,
  content6: undefined,
}

ContentList4.propTypes = {
  heading7: PropTypes.element,
  heading11: PropTypes.element,
  heading3: PropTypes.element,
  heading6: PropTypes.element,
  heading9: PropTypes.element,
  content5: PropTypes.element,
  heading1: PropTypes.element,
  content9: PropTypes.element,
  content2: PropTypes.element,
  heading8: PropTypes.element,
  content11: PropTypes.element,
  content3: PropTypes.element,
  content7: PropTypes.element,
  heading5: PropTypes.element,
  content4: PropTypes.element,
  heading10: PropTypes.element,
  content10: PropTypes.element,
  content1: PropTypes.element,
  heading4: PropTypes.element,
  heading2: PropTypes.element,
  content6: PropTypes.element,
}

export default ContentList4
