import React, { useEffect } from "react";
import "./about.css";
import { GrLinkedinOption } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import Beforefooter from "../components/Beforefooter";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// images import
import web from "../img/animated/Computer.gif";
import dhc from "../img/animated/Digital Health Check.gif";
import im from "../img/animated/Influencer Marketing.gif";
import prb from "../img/animated/LIVE.gif";
import sem from "../img/animated/SEM.gif";
import seo from "../img/animated/Search.gif";
import mr from "../img/animated/PR-Branding.gif";
import sm from "../img/animated/Social-Media-Marketing.gif";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>About: Cultivating Your Brand: Expert Development Services

        </title>
        <meta name='description' content='Learn more about DIwise, a research and technology PR marketing firm in the UK, that provides comprehensive PR marketing firm in the UK.

'/>
        <meta name='keywords' content='PR marketing firm, marketing firm in uk, Research and technology, Prajakta Marwaha, Prashant Patil, Rajveer Patil, Market Reasearch, Web Development, Social Media Marketing, Serach Engine Optimization, Search Engine Marketing, Influencer Marketing, Digital Media Health Check
'/>

      </Helmet>
      <div className="about-hero parent">
        <div className="about-container container">
          <h1
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Welcome to Diwise,
            <br />{" "}
            <span>
              {" "}
              your trusted catalyst in the realm of Digital Marketing.
            </span>
          </h1>
        </div>
      </div>

      <div className="journey">
        <div className="journey-container">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h2>
              Our <span>Journey</span>{" "}
            </h2>
            <p>
              Diwise began its digital journey with the mission of empowering
              businesses to succeed online through ethical and effective
              strategies. Each step was carefully planned, and our growth
              reflects the deliberate efforts we've made.
            </p>
          </div>
          <div
            className="right"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="right-box"></div>
          </div>
        </div>
      </div>

      <div className="leadership">
        <div className="leadership-conatiner">
          <div className="leader-top">
            <h2
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Meet Our <span>Exceptional Leadership</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              At Diwise, we take pride in our dedicated team of digital
              marketing experts, each bringing a wealth of experience and a
              range of skills. Together, our goal is to turn businesses into
              success stories with the power of Diwise.
            </p>
          </div>
          <div className="leader-bottom">
            <div
              className="leader-box"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <div className="leaderimg">
                <div className="leader"></div>
              </div>
              <div className="leader-content">
                <div className="head">
                  <h3>Prajakta Marwaha</h3>
                  <h5> &#40; Founder and Managing Director &#41;</h5>
                </div>
                <div className="divider"></div>
                <p>
                  Prajakta Marwaha, our visionary leader, possesses deep
                  insights and a talent for implementing effective digital
                  marketing strategies. Her extensive experience and expertise
                  serve as a guiding force for our digital marketing team.
                </p>
                <button className="linkedin">
                  <a href="https://www.linkedin.com/in/prajakta-marwaha-507b6410a?" target="_blank">
                    <span>Let's Connect!</span>
                    <span className="linkin-icon">
                      <GrLinkedinOption />
                    </span>
                  </a>
                </button>
              </div>
            </div>
            <div
              className="leader-box"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <div className="leaderimg">
                <div className="leader"></div>
              </div>
              <div className="leader-content">
                <div className="head">
                  <h3>Prashant Patil</h3>
                  <h5> &#40; Director &#41; </h5>
                </div>
                <div className="divider"></div>
                <p>
                  Mr. Prashant Patil brings a wealth of knowledge from the
                  banking and Fintech industry, specializing in product
                  development and business transformation. His experience plays
                  a vital role in guiding the Diwise team.
                </p>
                <button className="linkedin">
                <a href="https://www.linkedin.com/in/prash-patil/" target="_blank">
                    <span>Let's Connect!</span>
                    <span className="linkin-icon">
                      <GrLinkedinOption />
                    </span>
                  </a>
                </button>
              </div>
            </div>
            <div
              className="leader-box"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="leaderimg">
                <div className="leader"></div>
              </div>
              <div className="leader-content">
                <div className="head">
                  <h3>Rajveer Patil</h3>
                  <h5> &#40; Director &#41; </h5>
                </div>
                <div className="divider"></div>
                <p>
                  As a dynamic and enthusiastic Director, Rajveer Patil
                  motivates our team to give their best to Diwise, ensuring our
                  clients receive top-notch services.
                </p>
                <button className="linkedin">
                <a href="https://www.linkedin.com/in/rajveer-patil-347535271?" target="_blank">
                    <span>Let's Connect!</span>
                    <span className="linkin-icon">
                      <GrLinkedinOption />
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="expertise">
        <div className="expertise-container">
          <h2 data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"   >Our Expertise</h2>
          <p className="des" data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"   >
            Diwise specializes in a range of digital marketing services that can
            propel businesses into the realm of successful digital marketers.
          </p>
          <div className="service-list">
            <Link data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500" to="/pr&branding" className="service-item">
              <div className="icon">
                <img src={prb} alt="" />
              </div>
              <p>PR & Band Building</p>
            </Link>
            <Link data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500" to="/marketresearch" className="service-item">
              <div className="icon">
                <img src={mr} alt="" />
              </div>
              <p>Market Research</p>
            </Link>
            <Link data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500" to="/webdevelopment" className="service-item">
              <div className="icon">
                <img src={web} alt="" />
              </div>
              <p>Web Development</p>
            </Link>
            <Link data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500" to="/socialmediamarketing" className="service-item">
              <div className="icon">
                <img src={sm} alt="" />
              </div>
              <p>Social Media Marketing</p>
            </Link>
            <Link data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500" to="/seo" className="service-item">
              <div className="icon">
                <img src={seo} alt="" />
              </div>
              <p>Search Engine Optimization</p>
            </Link>
            <Link data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500" to="/sem" className="service-item">
              <div className="icon">
                <img src={sem} alt="" />
              </div>
              <p>Search Engine Marketing</p>
            </Link>
            <Link data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500" to="/influencemarketing" className="service-item">
              <div className="icon">
                <img src={im} alt="" />
              </div>
              <p>Influencer Marketing</p>
            </Link>
            <Link data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500" to="/digitalmediahealthcheck" className="service-item">
              <div className="icon">
                <img src={dhc} alt="" />
              </div>
              <p>Digital Media Health Check</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="last-section">
        <div className="last-section-container">
          <div className="last-section-left" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500">
            <h3>
              Our <span> Distinct Culture</span>
            </h3>
            <p>
              The Diwise family thrives on the principles of teamwork,
              innovation, creativity, and unwavering commitment. Our reputation
              for meeting deadlines reflects our unparalleled work culture that
              fosters continuous learning and growth.
            </p>
          </div>
          <div className="last-section-right">
            <div className="last-section-right-top"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500">
              <h3>
                Our <span>Mission</span>
              </h3>
              <p>
                Our mission is to lead the way in dynamic and evolving digital
                marketing strategies, consistently delivering outstanding
                results.
              </p>
            </div>
            <div className="last-section-right-bottom" data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500">
              <h3>
                Our <span>Vision</span>
              </h3>
              <p>
                Empowering Businesses Through Innovative Digital Solutions: At
                Diwise, we envision a future where businesses thrive in the
                digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Beforefooter />
    </>
  );
};

export default About;
