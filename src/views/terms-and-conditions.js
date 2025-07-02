import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero9 from '../components/hero9'
import ContentList4 from '../components/content-list4'
import Contact3 from '../components/contact3'
import './terms-and-conditions.css'

const TermsAndConditions = (props) => {
  return (
    <div className="terms-and-conditions-container1">
      <Helmet>
        <title>Terms-and-Conditions - OnConf template</title>
        <meta
          property="og:title"
          content="Terms-and-Conditions - OnConf template"
        />
      </Helmet>
      <header className="terms-and-conditions-header">
        <header data-thq="thq-navbar" className="terms-and-conditions-navbar">
          <h2 className="terms-and-conditions-text100">OnConf Event</h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="terms-and-conditions-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="terms-and-conditions-nav1"
            >
              <span className="navLink">Presenters</span>
              <span className="navLink">Agenda</span>
              <span className="navLink">Partners</span>
              <span className="navLink">Helpful</span>
            </nav>
            <button className="button">
              <span>Sign up now</span>
              <svg
                viewBox="0 0 1024 1024"
                className="terms-and-conditions-icon10"
              >
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="terms-and-conditions-burger-menu"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="terms-and-conditions-icon12"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="terms-and-conditions-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="terms-and-conditions-nav2"
            >
              <div className="terms-and-conditions-container2">
                <h2 className="terms-and-conditions-text102">OnConf</h2>
                <div
                  data-thq="thq-close-menu"
                  className="terms-and-conditions-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="terms-and-conditions-icon14"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="terms-and-conditions-nav3"
              >
                <span className="navLink terms-and-conditions-text103">
                  About
                </span>
                <span className="navLink terms-and-conditions-text104">
                  Features
                </span>
                <span className="navLink terms-and-conditions-text105">
                  Pricing
                </span>
                <span className="navLink terms-and-conditions-text106">
                  Team
                </span>
                <span className="navLink terms-and-conditions-text107">
                  Blog
                </span>
              </nav>
              <div className="terms-and-conditions-button-container">
                <button className="terms-and-conditions-login button">
                  Login
                </button>
                <button className="button terms-and-conditions-register2">
                  Register
                </button>
              </div>
              <div className="terms-and-conditions-icon-group">
                <div className="terms-and-conditions-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="terms-and-conditions-icon16"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="terms-and-conditions-icon18"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="terms-and-conditions-icon20"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="terms-and-conditions-background"
            />
          </div>
        </header>
      </header>
      <Hero9
        action1={
          <Fragment>
            <span className="terms-and-conditions-text108">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="terms-and-conditions-text109">Register Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="terms-and-conditions-text110">
              Join the world&apos;s largest virtual conference to connect,
              learn, and explore new opportunities.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-and-conditions-text111">
              Welcome to Budapest Meetup
            </span>
          </Fragment>
        }
      ></Hero9>
      <ContentList4
        content1={
          <Fragment>
            <span className="terms-and-conditions-text112">
              Join us for an immersive online experience filled with top
              speakers, networking opportunities, and valuable insights.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="terms-and-conditions-text113">
              Connect with industry experts and thought leaders who will share
              their knowledge and expertise.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="terms-and-conditions-text114">
              Participate in interactive networking sessions to expand your
              professional connections and build relationships.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="terms-and-conditions-text115">
              Gain valuable insights and stay ahead of industry trends through
              engaging discussions and informative sessions.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="terms-and-conditions-text116">
              Expand your knowledge, skills, and expertise through a diverse
              range of topics and workshops.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="terms-and-conditions-text117">
              Discover new opportunities for growth, collaboration, and career
              advancement in a dynamic virtual environment.
            </span>
          </Fragment>
        }
        content7={
          <Fragment>
            <span className="terms-and-conditions-text118">
              Participate in hands-on workshops and activities designed to
              enhance your learning and skill development.
            </span>
          </Fragment>
        }
        content9={
          <Fragment>
            <span className="terms-and-conditions-text119">
              Experience the latest in virtual conference technology for a
              seamless and engaging event.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-and-conditions-text120">
              Welcome to Budapest Meetup - The World&apos;s Largest Virtual
              Conference
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="terms-and-conditions-text121">
              Engage with Renowned Speakers
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="terms-and-conditions-text122">
              Networking Sessions
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="terms-and-conditions-text123">
              Valuable Insights
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="terms-and-conditions-text124">
              Enhance Your Learning Experiences
            </span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="terms-and-conditions-text125">
              Explore New Opportunities
            </span>
          </Fragment>
        }
        heading7={
          <Fragment>
            <span className="terms-and-conditions-text126">
              Budapest Meetup
            </span>
          </Fragment>
        }
        heading8={
          <Fragment>
            <span className="terms-and-conditions-text127">Global Reach</span>
          </Fragment>
        }
        heading9={
          <Fragment>
            <span className="terms-and-conditions-text128">
              Cutting-Edge Technology
            </span>
          </Fragment>
        }
        content10={
          <Fragment>
            <span className="terms-and-conditions-text129">
              Secure your spot at OnConf and unlock a world of opportunities for
              learning, networking, and growth.
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="terms-and-conditions-text130">
              <span>Effective Date: November 1, 2025</span>
              <br></br>
              <span>
                Location: Budapest Congress Center, Jagelló út 1-3, 1123
                Budapest, Hungary
              </span>
              <br></br>
              <span>Organizer: Mr. James Stephen</span>
              <br></br>
              <br></br>
              <span>
                By registering for and participating in the Budapest Meetup, you
                agree to the following Terms and Conditions. These terms apply
                to all attendees, sponsors, speakers, volunteers, and guests and
                are subject to change without notice.
              </span>
              <br></br>
              <br></br>
              <span>1. Registration and Payment</span>
              <br></br>
              <span>
                All participants must complete official registration through the
                Budapest Meetup website or approved partners.
              </span>
              <br></br>
              <br></br>
              <span>
                Registration is confirmed only upon full payment of applicable
                fees.
              </span>
              <br></br>
              <br></br>
              <span>
                Discounted rates (student, early bird, group) must be applied
                during checkout. No post-registration adjustments will be made.
              </span>
              <br></br>
              <br></br>
              <span>
                Tickets are non-transferable unless approved by the organizer in
                writing.
              </span>
              <br></br>
              <br></br>
              <span>2. Cancellation and Refund Policy</span>
              <br></br>
              <span>Cancellation by Attendee:</span>
              <br></br>
              <br></br>
              <span>
                Written cancellation must be submitted to
                info@budapestmeetup.com
              </span>
              <br></br>
              <br></br>
              <span>Refunds are processed as follows:</span>
              <br></br>
              <br></br>
              <span>100% refund if cancelled before October 1, 2025</span>
              <br></br>
              <br></br>
              <span>50% refund if cancelled between October 1–15, 2025</span>
              <br></br>
              <br></br>
              <span>No refund if cancelled after October 15, 2025</span>
              <br></br>
              <br></br>
              <span>Cancellation by Organizer:</span>
              <br></br>
              <span>
                If the event is cancelled or rescheduled due to force majeure
                (natural disaster, government restriction, etc.), registered
                attendees will be offered a full refund or the option to
                transfer registration to a future event.
              </span>
              <br></br>
              <br></br>
              <span>3. Venue Access</span>
              <br></br>
              <span>
                Only registered individuals will be granted access to Budapest
                Congress Center on event days.
              </span>
              <br></br>
              <br></br>
              <span>
                Attendees must wear visible conference credentials at all times
                inside the venue.
              </span>
              <br></br>
              <br></br>
              <span>
                The organizer reserves the right to refuse or revoke access for
                disorderly conduct or non-compliance with rules.
              </span>
              <br></br>
              <br></br>
              <span>4. Code of Conduct</span>
              <br></br>
              <span>
                All attendees must uphold a professional and respectful
                environment.
              </span>
              <br></br>
              <br></br>
              <span>Prohibited conduct includes:</span>
              <br></br>
              <br></br>
              <span>Harassment or discrimination of any kind</span>
              <br></br>
              <br></br>
              <span>Disruptive or unsafe behavior</span>
              <br></br>
              <br></br>
              <span>Unauthorized use of recording equipment</span>
              <br></br>
              <br></br>
              <span>
                Violators may be removed without refund and barred from future
                events.
              </span>
              <br></br>
              <br></br>
              <span>5. Privacy Policy</span>
              <br></br>
              <span>
                By registering, attendees agree to the collection and use of
                their personal data for conference operations (badges, access,
                communication).
              </span>
              <br></br>
              <br></br>
              <span>
                Photos/videos may be taken during the event and used for future
                promotional materials.
              </span>
              <br></br>
              <br></br>
              <span>
                Data is stored securely and not shared with third-party
                marketers.
              </span>
              <br></br>
              <br></br>
              <span>6. Health &amp; Safety</span>
              <br></br>
              <span>
                Health measures, if required by Hungarian authorities, will be
                enforced (e.g., masks, distancing, sanitization).
              </span>
              <br></br>
              <br></br>
              <span>
                Anyone feeling unwell is encouraged not to attend and should
                contact the organizer immediately.
              </span>
              <br></br>
              <br></br>
              <span>7. Intellectual Property</span>
              <br></br>
              <span>
                All sessions, presentations, and materials remain the
                intellectual property of their respective authors or the
                organizer.
              </span>
              <br></br>
              <br></br>
              <span>
                Recording, distributing, or republishing any conference content
                without permission is strictly prohibited.
              </span>
              <br></br>
              <br></br>
              <span>8. Limitation of Liability</span>
              <br></br>
              <span>
                The organizer (Mr. James Stephen) and venue (Budapest Congress
                Center) are not responsible for any lost items, personal injury,
                or travel-related issues.
              </span>
              <br></br>
              <br></br>
              <span>
                Attendees are encouraged to maintain personal insurance and
                secure valuables.
              </span>
              <br></br>
              <br></br>
              <span>9. Governing Law</span>
              <br></br>
              <span>
                These terms are governed by the laws of Hungary. Any disputes
                will be resolved under the jurisdiction of Budapest courts.
              </span>
              <br></br>
              <br></br>
              <span>10. Contact Information</span>
              <br></br>
              <span>For inquiries or concerns, please contact:</span>
              <br></br>
              <br></br>
              <span>Mr. James Stephen</span>
              <br></br>
              <span>📧 Email: info@budapestmeetup.com</span>
              <br></br>
              <span>📞 Phone: +36 1 234 5678</span>
            </span>
          </Fragment>
        }
        heading10={
          <Fragment>
            <span className="terms-and-conditions-text261">
              Terms And Conditions - Budapest Meetup 
            </span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="terms-and-conditions-text262">General</span>
          </Fragment>
        }
      ></ContentList4>
      <Contact3
        email1={
          <Fragment>
            <span className="terms-and-conditions-text263">
              info@onconf.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="terms-and-conditions-text264">
              +1-123-456-7890
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="terms-and-conditions-text265">
              123 Virtual Conference Street, Online City, World
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="terms-and-conditions-text266">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="terms-and-conditions-text267">
              Get in touch with us today!
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="terms-and-conditions-text268">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="terms-and-conditions-text269">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="terms-and-conditions-text270">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-and-conditions-text271">Contact Us</span>
          </Fragment>
        }
      ></Contact3>
      <footer className="terms-and-conditions-footer">
        <div className="terms-and-conditions-content">
          <div className="terms-and-conditions-details">
            <h2 className="terms-and-conditions-title">OnConf</h2>
            <p className="terms-and-conditions-description">
              Product Calgary unites professionals to network, share insights,
              discover opportunities, and recruit talent. Originating as a
              meetup, we have evolved into Alberta&apos;s premier Product
              Management community.
            </p>
          </div>
          <div className="terms-and-conditions-socials">
            <img alt="image" src="/linkedin.svg" className="social" />
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="terms-and-conditions-link5"
            >
              <img
                alt="image"
                src="/instagram.svg"
                className="terms-and-conditions-image2 social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="terms-and-conditions-link6"
            >
              <img
                alt="image"
                src="/twitter.svg"
                className="terms-and-conditions-image3 social"
              />
            </a>
          </div>
          <span className="terms-and-conditions-copyright">
            Privacy Policy — Terms &amp; Conditions — Code of Conduct © 2022
            OnConf. All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  )
}

export default TermsAndConditions
