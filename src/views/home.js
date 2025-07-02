import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SectionNumeral from '../components/section-numeral'
import Speaker from '../components/speaker'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>OnConf template</title>
        <meta property="og:title" content="OnConf template" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background1">
          <img
            alt="image"
            src="/circle-background.svg"
            className="home-image10"
          />
          <img
            alt="image"
            src="/line-background.svg"
            className="home-image11"
          />
        </div>
        <header className="home-header10">
          <header data-thq="thq-navbar" className="home-navbar">
            <h2 className="home-text10">BUDA PEST MEETUP - CONFERENCE</h2>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <button className="button">
                <span>Sign up now</span>
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container11">
                  <h2 className="home-text12">OnConf</h2>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon14">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="navLink home-text13">About</span>
                  <span className="navLink home-text14">Features</span>
                  <span className="navLink home-text15">Pricing</span>
                  <span className="navLink home-text16">Team</span>
                  <span className="navLink home-text17">Blog</span>
                </nav>
                <div className="home-button-container">
                  <button className="home-login button">Login</button>
                  <button className="button home-register2">Register</button>
                </div>
                <div className="home-icon-group">
                  <div className="home-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon16"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon18"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon20"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="home-background2"
              />
            </div>
          </header>
        </header>
        <div className="home-hero-content">
          <h1 className="home-text18">
            Largest Virtual Conference in the World
          </h1>
          <div className="home-caption10">
            <button className="button-style-1 button home-register3">
              <span className="home-text19">Sign up now</span>
            </button>
            <p className="home-caption11">
              November 1, 2025 / OnConf Event Template
            </p>
          </div>
        </div>
      </section>
      <section className="home-notes">
        <div className="home-first">
          <div data-aos="fade-up-right" className="home-content10">
            <h2 className="home-header11">
              Experience a world-class online conference like no other
            </h2>
            <div className="home-list1">
              <div className="home-note1">
                <div className="home-point10"></div>
                <p className="home-text20">
                  Plan your conference schedule ahead of time to make the most
                  out of OnConf. With a variety of sessions, workshops, and
                  networking opportunities available, you can customize your
                  experience to suit your interests and goals. Stay organized
                  and maximize your learning and networking potential by
                  scheduling your sessions in advance.
                </p>
              </div>
              <div className="home-note2">
                <div className="home-point11"></div>
                <p className="home-text21">
                  Experience the world&apos;s largest online conference where
                  professionals gather to connect, learn, and discover new
                  opportunities. Featuring renowned speakers, networking
                  sessions, and valuable learning experiences, join OnConf on
                  November 1, 2025 for an enriching virtual event.
                </p>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/notes-1-1400w.png"
            className="home-image12 image-notes"
          />
        </div>
        <div className="home-second">
          <div data-aos="fade-up-left" className="home-content11">
            <h2 className="home-header12">
              Join the world&apos;s largest online conference for professionals
              to connect, learn, and discover opportunities.
            </h2>
            <button className="button button-style-2 home-register4">
              <span>Sign up now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon22">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img alt="image" src="/notes-2-1400w.png" className="image-notes" />
        </div>
      </section>
      <section className="home-quote10">
        <div className="home-content12">
          <h2 className="home-quoted">
            I am thrilled to be part of this amazing community where
            professionals come together to connect, learn, and explore new
            opportunities.
          </h2>
          <div className="home-author10">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
              className="home-icon24"
            />
            <div className="home-details10">
              <span className="home-name10">Andy Smith</span>
              <span className="home-from">(Founder OnConf)</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/quote-background.svg"
          className="home-background3"
        />
        <img
          alt="image"
          src="/quote-background.svg"
          className="home-background4"
        />
      </section>
      <section className="home-speakers">
        <div className="home-header13">
          <SectionNumeral></SectionNumeral>
          <div data-aos="fade-right" className="home-heading1">
            <h2 className="home-title10">Presenters</h2>
            <p className="home-caption12">
              Join us at OnConf, the premier virtual conference where
              professionals come together to connect, learn, and explore new
              opportunities. Mark your calendars for November 1, 2025 to engage
              with top speakers, participate in networking sessions, and gain
              valuable insights.
            </p>
          </div>
        </div>
        <div className="home-list2">
          <div className="home-row10">
            <div className="speaker">
              <Speaker rootClassName="speakerroot-class-name"></Speaker>
              <Speaker
                image="/speakers-2-1500w.png"
                rootClassName="speakerroot-class-name3"
              ></Speaker>
            </div>
            <div className="home-row12 speaker">
              <Speaker
                image="/speakers-3-1500w.png"
                rootClassName="speakerroot-class-name2"
              ></Speaker>
              <Speaker
                image="/speakers-4-1500w.png"
                rootClassName="speakerroot-class-name1"
              ></Speaker>
            </div>
          </div>
          <div className="home-row13">
            <div className="home-row14 speaker">
              <Speaker
                image="/speakers-4-1500w.png"
                rootClassName="speakerroot-class-name13"
              ></Speaker>
              <Speaker
                image="/speakers-3-1500w.png"
                rootClassName="speakerroot-class-name12"
              ></Speaker>
            </div>
            <div className="home-row15 speaker">
              <Speaker rootClassName="speakerroot-class-name10"></Speaker>
              <Speaker
                image="/speakers-2-1500w.png"
                rootClassName="speakerroot-class-name11"
              ></Speaker>
            </div>
          </div>
          <div className="home-row16">
            <div className="home-row17 speaker">
              <Speaker
                image="/speakers-2-1500w.png"
                rootClassName="speakerroot-class-name15"
              ></Speaker>
              <Speaker rootClassName="speakerroot-class-name14"></Speaker>
            </div>
            <div className="home-row18 speaker"></div>
          </div>
        </div>
      </section>
      <section className="home-watch">
        <div className="home-content13">
          <h2 className="home-header14">Check out our OnConf 2022 trailer</h2>
          <div className="home-video1">
            <video
              src
              poster="/quotes-1-1400w.png"
              className="home-video2"
            ></video>
            <img alt="image" src="/play.svg" className="home-image14" />
          </div>
          <button className="button home-register5">
            <span>Sign up now</span>
            <svg viewBox="0 0 1024 1024" className="home-icon25">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </button>
        </div>
        <img
          alt="image"
          src="/trailer-background.svg"
          className="home-image15"
        />
      </section>
      <section className="home-schedule">
        <div className="home-content14">
          <div className="home-header15">
            <div className="home-section-numeral1">
              <div className="home-divide1"></div>
              <p className="home-text24">02</p>
            </div>
            <div data-aos="fade-right" className="home-heading2">
              <h2 className="home-title11">Agenda</h2>
              <p className="home-caption13">
                Join us at OnConf, the world&apos;s largest virtual conference
                where professionals come together to connect, learn, and explore
                new opportunities. Mark your calendars for November 1, 2025 to
                engage with top speakers, participate in networking sessions,
                and gain valuable insights.
              </p>
            </div>
          </div>
          <div className="home-main10">
            <div className="home-tab-selector">
              <div
                data-role="schedule-select"
                className="tab-active tab home-tab1"
              >
                <span className="home-text25">Friday, Nov 04</span>
              </div>
              <div data-role="schedule-select" className="tab home-tab2">
                <span className="home-text26">Saturday, Nov 05</span>
              </div>
              <div data-role="schedule-select" className="tab home-tab3">
                <span className="home-text27">Sunday, Nov 06</span>
              </div>
            </div>
            <div className="home-lists">
              <section data-role="schedule-content" className="home-list3">
                <div className="home-element10">
                  <div className="home-main11">
                    <span className="home-time10">
                      8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                      time (6 Hours)
                    </span>
                    <h3 className="home-title12">Pre-event networking</h3>
                    <div className="home-author11">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon27"
                      />
                      <div className="home-details11">
                        <span className="home-name11">Andy Smith</span>
                        <div className="home-point12"></div>
                        <span className="home-caption14">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button10">
                    Connect to chat room
                  </button>
                </div>
                <div className="home-element11">
                  <div className="home-main12">
                    <span className="home-time11">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title13">Conference timings</h3>
                    <div className="home-author12">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon28"
                      />
                      <div className="home-details12">
                        <span className="home-name12">Samantha Johnson</span>
                        <div className="home-point13"></div>
                        <span className="home-caption15">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button11">
                    <span>
                      <span>Different option: Watch live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element12">
                  <div className="home-main13">
                    <span className="home-time12">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title14">Schedule Now</h3>
                    <div className="home-author13">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon29"
                      />
                      <div className="home-details13">
                        <span className="home-name13">Samantha Johnson</span>
                        <div className="home-point14"></div>
                        <span className="home-caption16">
                          Chief Executive Officer, Opary
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button12">
                    <span>
                      <span>Different option: Watch live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element13">
                  <div className="home-main14">
                    <span className="home-time13">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title15">Schedule Your Conference</h3>
                    <div className="home-author14">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon30"
                      />
                      <div className="home-details14">
                        <span className="home-name14">Samantha Johnson</span>
                        <div className="home-point15"></div>
                        <span className="home-caption17">
                          Chief Executive Officer, Opary
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button13">
                    <span>
                      <span>Different option: Watch live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element14">
                  <div className="home-main15">
                    <span className="home-time14">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title16">Explore OnConf</h3>
                    <div className="home-author15">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon31"
                      />
                      <div className="home-details15">
                        <span className="home-name15">Samantha Johnson</span>
                        <div className="home-point16"></div>
                        <span className="home-caption18">
                          Chief Executive Officer, Opary
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button14">
                    <span>
                      <span>Different option: Watch live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element15">
                  <div className="home-main16">
                    <span className="home-time15">
                      8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your local
                      time (2 Hours)
                    </span>
                    <h3 className="home-title17">Networking after the event</h3>
                    <div className="home-author16">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon32"
                      />
                      <div className="home-details16">
                        <span className="home-name16">Samantha Johnson</span>
                        <div className="home-point17"></div>
                        <span className="home-caption19">
                          Chief Executive Officer, Opary
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button15">
                    <span>
                      <span>Engage in chat room</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </section>
              <section data-role="schedule-content" className="home-list4">
                <div className="home-element16">
                  <div className="home-main17">
                    <span className="home-time16">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title18">Lorem Ipsum Guide.</h3>
                    <div className="home-author17">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon33"
                      />
                      <div className="home-details17">
                        <span className="home-name17">Samantha Johnson</span>
                        <div className="home-point18"></div>
                        <span className="home-caption20">
                          Chief Executive Officer, Opary
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button16">
                    <span>
                      <span>Watch live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element17">
                  <div className="home-main18">
                    <span className="home-time17">
                      8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                      time (6 Hours)
                    </span>
                    <h3 className="home-title19">
                      Networking before the event starts
                    </h3>
                    <div className="home-author18">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon34"
                      />
                      <div className="home-details18">
                        <span className="home-name18">Andy Smith</span>
                        <div className="home-point19"></div>
                        <span className="home-caption21">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button17">
                    Connect to chat room
                  </button>
                </div>
                <div className="home-element18">
                  <div className="home-main19">
                    <span className="home-time18">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title20">How to Use Lorem Ipsum.</h3>
                    <div className="home-author19">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon35"
                      />
                      <div className="home-details19">
                        <span className="home-name19">Samantha Johnson</span>
                        <div className="home-point20"></div>
                        <span className="home-caption22">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button18">
                    <span>
                      <span>Watch live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </section>
              <section data-role="schedule-content" className="home-list5">
                <div className="home-element19">
                  <div className="home-main20">
                    <span className="home-time19">
                      8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                      time (6 Hours)
                    </span>
                    <h3 className="home-title21">Pre-event Socializing</h3>
                    <div className="home-author20">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon36"
                      />
                      <div className="home-details20">
                        <span className="home-name20">Andy Smith</span>
                        <div className="home-point21"></div>
                        <span className="home-caption23">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button19">
                    Connect to chat room
                  </button>
                </div>
                <div className="home-element20">
                  <div className="home-main21">
                    <span className="home-time20">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title22">
                      How to Utilize Lorem Ipsum.
                    </h3>
                    <div className="home-author21">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon37"
                      />
                      <div className="home-details21">
                        <span className="home-name21">Samantha Johnson</span>
                        <div className="home-point22"></div>
                        <span className="home-caption24">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button20">
                    <span>
                      <span>Watch live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element21">
                  <div className="home-main22">
                    <span className="home-time21">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title23">How to Apply Lorem Ipsum.</h3>
                    <div className="home-author22">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon38"
                      />
                      <div className="home-details22">
                        <span className="home-name22">Samantha Johnson</span>
                        <div className="home-point23"></div>
                        <span className="home-caption25">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button21">
                    <span>
                      <span>Watch live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element22">
                  <div className="home-main23">
                    <span className="home-time22">
                      8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your local
                      time (2 Hours)
                    </span>
                    <h3 className="home-title24">Post-event networking</h3>
                    <div className="home-author23">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon39"
                      />
                      <div className="home-details23">
                        <span className="home-name23">Samantha Johnson</span>
                        <div className="home-point24"></div>
                        <span className="home-caption26">
                          Chief Executive Officer, Opary
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button22">
                    <span>
                      <span>Join chat room</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </section>
            </div>
            <div>
              <div className="home-container13">
                <Script
                  html={`<script>
// Get all tab buttons
const tabButtons = document.querySelectorAll('[data-role="schedule-select"]');
// Get all tab contents
const tabContents = document.querySelectorAll('[data-role="schedule-content"]');

// Add "tab-active" class to the first tab button
tabButtons[0].classList.add("tab-active");
// Show the first tab content
tabContents[0].style.display = "block";

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    // Remove "tab-active" class from all tab buttons
    tabButtons.forEach((button) => {
      button.classList.remove("tab-active");
    });
    // Add "tab-active" class to the current tab button
    tabButton.classList.add("tab-active");
    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });
    // Show the tab content for the current tab button
    tabContents[index].style.display = "block";
  });
});
</script>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-sponsors">
        <div className="home-header16">
          <div className="home-section-numeral2">
            <div className="home-divide2"></div>
            <p className="home-text58">03</p>
          </div>
          <div data-aos="fade-right" className="home-heading3">
            <h2 className="home-title25">Partners</h2>
            <p className="home-caption27">
              Join OnConf, the premier virtual conference where professionals
              come together to connect, learn, and discover new opportunities.
              Engage with top speakers, network with peers, and gain valuable
              insights at this world-class online event.
            </p>
          </div>
        </div>
        <div className="home-brands1">
          <div className="brand">
            <img alt="image" src="/brand-1.svg" className="home-image16" />
          </div>
          <div className="brand home-brand2">
            <img alt="image" src="/brand-2.svg" className="home-image17" />
          </div>
          <div className="brand home-brand3">
            <img alt="image" src="/brand-3.svg" className="home-image18" />
          </div>
          <div className="home-brand4 brand">
            <img alt="image" src="/brand-4.svg" className="home-image19" />
          </div>
          <div className="home-brand5 brand">
            <img alt="image" src="/brand-5.svg" className="home-image20" />
          </div>
          <div className="home-brand6 brand">
            <img alt="image" src="/brand-6.svg" className="home-image21" />
          </div>
          <div className="home-brand7 brand">
            <img alt="image" src="/brand-7.svg" className="home-image22" />
          </div>
          <div className="home-brand8 brand">
            <img alt="image" src="/brand-8.svg" className="home-image23" />
          </div>
        </div>
      </section>
      <section className="home-why">
        <div className="home-header17">
          <div className="home-section-numeral3">
            <div className="home-divide3"></div>
            <p className="home-text59">04</p>
          </div>
          <div data-aos="fade-right" className="home-heading4">
            <h2 className="home-title26">What is OnConf</h2>
            <p className="home-caption28">
              Experience the world&apos;s largest virtual conference where
              professionals gather to connect, learn, and explore new
              opportunities. Engage with top speakers, participate in networking
              sessions, and gain valuable insights at OnConf. Join us for a
              world-class online experience with renowned speakers and valuable
              learning experiences.
            </p>
          </div>
        </div>
        <div className="home-brands2">
          <div className="home-row19">
            <div className="home-item1">
              <img alt="image" src="/why-1.svg" className="home-image24" />
              <div className="home-details24">
                <h3 className="home-title27">Connecting</h3>
                <p className="home-description1">
                  Join OnConf, the world&apos;s largest virtual conference where
                  professionals gather to connect, learn, and explore new
                  opportunities. Engage with top speakers, participate in
                  networking sessions, and gain valuable insights. Experience a
                  world-class online event with renowned speakers and valuable
                  learning experiences.
                </p>
              </div>
            </div>
            <div className="home-item2">
              <img alt="image" src="/why-2.svg" className="home-image25" />
              <div className="home-details25">
                <h3 className="home-title28">Education</h3>
                <p className="home-description2">
                  Welcome to OnConf, the premier virtual conference where
                  professionals come together to connect, learn, and discover
                  new opportunities. Join us to interact with top speakers, take
                  part in networking sessions, and acquire valuable insights.
                  Experience a top-notch online event with renowned speakers and
                  enriching learning opportunities.
                </p>
              </div>
            </div>
            <div className="home-item3">
              <img alt="image" src="/why-3.svg" className="home-image26" />
              <div className="home-details26">
                <h3 className="home-title29">Progressing</h3>
                <p className="home-description3">
                  Join OnConf, the world&apos;s largest virtual conference where
                  professionals come together to connect, learn, and discover
                  new opportunities. Engage with top speakers, participate in
                  networking sessions, and gain valuable insights. Experience a
                  world-class online event with renowned speakers and enriching
                  learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-black">
        <img alt="image" src="/black-vector.svg" className="home-image27" />
        <section className="home-quotes1">
          <div className="home-row20">
            <img
              alt="image"
              src="/quotes-1-1400w.png"
              className="home-image28"
            />
            <div className="home-row21">
              <div className="home-details27"></div>
              <img
                alt="image"
                src="/quotes-2-700w.png"
                className="home-image29"
              />
            </div>
          </div>
          <div className="home-row22">
            <div className="home-details28">
              <p className="home-quote11">
                “There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain...&quot;
              </p>
              <span className="home-author24">Financial Times</span>
            </div>
            <img
              alt="image"
              src="/quotes-3-1400w.png"
              className="home-image30"
            />
            <div className="home-details29">
              <span className="home-author25">Within the Business</span>
            </div>
          </div>
        </section>
        <section className="home-testimonials">
          <div className="home-header18">
            <div className="home-section-numeral4">
              <div className="home-divide4"></div>
              <p className="home-text60">05</p>
            </div>
            <div data-aos="fade-right" className="home-heading5">
              <h2 className="home-title30">
                Don&apos;t just take our word for it. See what previous
                participants have to share:
              </h2>
            </div>
          </div>
          <div id="scrollbar" className="home-quotes2">
            <div className="home-quote12">
              <div className="home-author26">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image31"
                />
                <div className="home-details30">
                  <span className="home-name24">Samantha Johnson</span>
                  <span className="home-handle1">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote13">
                Experience the world&apos;s largest virtual conference where
                professionals come together to connect, learn, and discover new
                opportunities. Engage with top speakers, network with industry
                peers, and gain valuable insights at OnConf. Join us for a
                world-class online event featuring renowned speakers and
                exceptional learning opportunities.
              </p>
            </div>
            <div className="home-quote14">
              <div className="home-author27">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image32"
                />
                <div className="home-details31">
                  <span className="home-name25">Samantha Johnson</span>
                  <span className="home-handle2">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote15">
                Experience the world&apos;s largest virtual conference where
                professionals come together to connect, learn, and discover new
                opportunities. Engage with top speakers, participate in
                networking sessions, and gain valuable insights at OnConf. This
                conference offers a premier online experience with renowned
                speakers and exceptional learning opportunities.
              </p>
            </div>
            <div className="home-quote16">
              <div className="home-author28">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image33"
                />
                <div className="home-details32">
                  <span className="home-name26">Samantha Johnson</span>
                  <span className="home-handle3">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote17">
                Join us at OnConf, the world&apos;s largest virtual conference
                where professionals come together to connect, learn, and
                discover new opportunities. Engage with top speakers, network
                with peers, and gain valuable insights at this premier online
                event taking place on November 1 2025.
              </p>
            </div>
            <div className="home-quote18">
              <div className="home-author29">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image34"
                />
                <div className="home-details33">
                  <span className="home-name27">Samantha Johnson</span>
                  <span className="home-handle4">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote19">
                Join us at OnConf, the world&apos;s largest virtual conference
                where professionals come together to connect, learn, and
                discover new opportunities. Engage with top speakers, network
                with peers, and gain valuable insights at this premier online
                event taking place on November 1, 2025.
              </p>
            </div>
            <div className="home-quote20">
              <div className="home-author30">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image35"
                />
                <div className="home-details34">
                  <span className="home-name28">Samantha Johnson</span>
                  <span className="home-handle5">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote21">
                Join us at OnConf, the world&apos;s largest virtual conference
                where professionals come together to connect, learn, and
                discover new opportunities. Engage with top speakers, network
                with peers, and gain valuable insights at this premier online
                event taking place on November 1, 2025
              </p>
            </div>
          </div>
        </section>
        <section className="home-join">
          <h2 className="home-title31">
            Be a part of OnConf on November 1, 2025
          </h2>
          <button className="home-button23 button">
            <span>
              <span>Enroll now</span>
              <br></br>
            </span>
          </button>
        </section>
        <section className="home-more">
          <div className="home-header19">
            <div className="home-section-numeral5">
              <div className="home-divide5"></div>
              <p className="home-text64">06</p>
            </div>
            <div data-aos="fade-right" className="home-heading6">
              <h2 className="home-title32">
                Learn more about pricing, accessibility, or what is included in
                this year&apos;s event
              </h2>
            </div>
          </div>
          <div className="home-accordions">
            <div className="home-accordion1">
              <div className="home-header20">
                <div className="home-divide6"></div>
                <h3 className="home-title33">Event information</h3>
              </div>
              <div className="home-items1">
                <div
                  data-role="accordion-container"
                  className="home-element23 accordion"
                >
                  <div className="home-content15">
                    <span
                      data-role="accordion-content"
                      className="home-description4"
                    >
                      Welcome to  budapest meetup, the world&apos;s largest
                      virtual conference where professionals come together to
                      connect, learn, and explore new opportunities. Engage with
                      top speakers, network with peers, and gain valuable
                      insights at this premier online event taking place on
                      November 1, 2025.
                    </span>
                  </div>
                  <div className="home-icon-container1">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon40"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon42"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element24 accordion"
                >
                  <div className="home-content16">
                    <span className="home-header21">
                      Exhibition booths &amp; sponsor showcases
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description5"
                    >
                      Showcase your brand to a high-value audience of
                      professionals, innovators, and decision-makers.
                      Sponsorship slots include booth space, speaking
                      opportunities, and digital branding.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container2">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon44"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon46"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element25 accordion"
                >
                  <div className="home-content17">
                    <span className="home-header22">
                      Panel discussions with thought leaders
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description6"
                    >
                      <span>
                        Where leaders, innovators, and industry experts come
                        together to share ideas, spark connections, and shape
                        the future.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <div className="home-icon-container3">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon48"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon50"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-accordion2">
              <div className="home-header23">
                <div className="home-divide7"></div>
                <h3 className="home-title34">Event information</h3>
              </div>
              <div className="home-items2">
                <div
                  data-role="accordion-container"
                  className="home-element26 accordion"
                >
                  <div className="home-content18"></div>
                  <div className="home-icon-container4">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon52"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon54"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element27 accordion"
                >
                  <div className="home-content19">
                    <span className="home-header24">
                      Whether you&apos;re here to learn from experts, connect
                      with peers, or showcase your solutions
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description7"
                    >
                      <span>✔️ Gain exclusive industry insights</span>
                      <br></br>
                      <span>✔️ Meet top leaders &amp; innovators</span>
                      <br></br>
                      <span>✔️ Discover new tools &amp; technology</span>
                      <br></br>
                      <span>✔️ Participate in hands-on sessions</span>
                      <br></br>
                      <span>✔️ Earn certificates (optional)</span>
                      <br></br>
                      <span>
                        ✔️ Expand your professional network
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <div className="home-icon-container5">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon56"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon58"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element28 accordion"
                >
                  <div className="home-content20">
                    <span className="home-header25"> Who Should Attend?</span>
                    <span
                      data-role="accordion-content"
                      className="home-description8"
                    >
                      <span>This event is ideal for:</span>
                      <br></br>
                      <br></br>
                      <span>Business Professionals &amp; Executives</span>
                      <br></br>
                      <br></br>
                      <span>Researchers &amp; Academicians</span>
                      <br></br>
                      <br></br>
                      <span>Startups &amp; Entrepreneurs</span>
                      <br></br>
                      <br></br>
                      <span>Government &amp; Policy Makers</span>
                      <br></br>
                      <br></br>
                      <span>Developers &amp; Engineers</span>
                      <br></br>
                      <br></br>
                      <span>
                        Students &amp; Young Leaders
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <div className="home-icon-container6">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon60"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon62"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="home-container15">
                <Script
                  html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="home-subscribe">
        <div className="home-main24">
          <h2 className="home-header26">
            Sign up for our newsletter to receive the latest OnConf updates
          </h2>
          <div className="home-content21">
            <div className="home-inputs">
              <input
                type="text"
                required
                placeholder="Name *"
                autoComplete="name"
                className="home-textinput1 input"
              />
              <input
                type="email"
                required
                placeholder="Email *"
                autoComplete="email"
                className="home-textinput2 input"
              />
            </div>
            <span className="home-text99">
              By signing up, you agree to receive email communications from
              OnConf, including upcoming promotions and discounted tickets,
              news, and access to exclusive invite-only events.
            </span>
            <button className="home-button24 button">
              <span>
                <span>Subscribe to our newsletter</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-content22">
          <div className="home-details35">
            <h2 className="home-title35">OnConf</h2>
            <p className="home-description9">
              Product Calgary unites professionals to network, share insights,
              discover opportunities, and recruit talent. Originating as a
              meetup, we have evolved into Alberta&apos;s premier Product
              Management community.
            </p>
          </div>
          <span className="home-copyright">
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <Link to="/terms-and-conditions" className="home-navlink">
              Terms &amp; Conditions
            </Link>
            <span> — Budapest Meetup. All Rights Reserved</span>
          </span>
        </div>
      </footer>
      <div>
        <div className="home-container17">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container19">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
