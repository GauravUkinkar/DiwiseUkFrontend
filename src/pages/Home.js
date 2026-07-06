import "./hero.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsQuote } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import jsonData from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// images import
import web from "../img/animated/Computer.gif";
import dhc from "../img/animated/Digital Health Check.gif";
import im from "../img/animated/Influencer Marketing.gif";
import prb from "../img/animated/LIVE.gif";
import sem from "../img/animated/SEM.gif";
import seo from "../img/animated/Search.gif";
import mr from "../img/animated/PR-Branding.gif";
import sm from "../img/animated/Social-Media-Marketing.gif";
import Beforefooter from "../components/Beforefooter";
import { Helmet } from "react-helmet";

function Home() {
  useEffect(() => {
    const hash = window.location.hash; // Get the fragment identifier from the URL

    if (hash) {
      const targetElement = document.getElementById(hash.substring(1)); // Remove the '#' character
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentData = jsonData[currentIndex];
  const handleNext = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jsonData.length);
    }, 200);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + jsonData.length) % jsonData.length
    );
  };

  return (
    <>
     <Helmet>
        <title>DIwise is a cutting-edge Digital Media Marketing Firm</title>
        <meta name="description" content="DIwise is a PR Marketing Firm with expertise in research & technology that will understand your needs and surpass your expectations." />
        <meta name="keywords" content="power of internet, journey towards success, pr and brand building, Business Ideas, Diwise UK, Market Reasearch, Web Development, Social Media Marketing, Serach Engine Optimization, Search Engine Marketing, Influencer Marketing, Digital Media Health Check " />
        <link rel="canonical" href="https://diwise.uk" />
      </Helmet>
      <section className="hero " id="help">
        <div className="hero-container">
          <div className="left">
            <div className="left-box">
              <h1
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                DIwise unlocks your <br /> <span> digital potential.</span>
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                DIwise UK, a digital marketing agency with a broad spectrum of
                services can elevate your online presence and drive business
                towards growth.
              </p>
              <div className="btns">
                <Link to={'#service'}
                  className="btn"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="500"
                >
                  Our Services
                </Link>
                <Link to={'about'}
                  className="btn-text"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="600"
                >
                  Learn More
                  <span>
                    <FiArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <div className="grid-box">
              <div className="grid-block1 grid-block"></div>
              <div className="grid-block2 grid-block"></div>
              <div className="grid-block3 grid-block"></div>
              <div className="grid-block4 grid-block"></div>
              <div className="grid-block5 grid-block"></div>
              <div className="grid-block6 grid-block"></div>
              <div className="grid-block7 grid-block"></div>
              <div className="grid-block7 grid-block"></div>
              <div className="grid-block8 grid-block"></div>
              <div className="grid-block9 grid-block"></div>
              <div className="grid-block10 grid-block"></div>
              <div className="grid-block11 grid-block"></div>
            </div>
          </div> */}
          <div className="right">
            <div className="grid-box">
              <div
                className="grid-block1 grid-block"
                data-aos="fade-right"
                data-aos-delay="700"
                data-aos-duration="600"
              ></div>
              <div
                className="grid-block2 grid-block"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="600"
              ></div>
              <div
                className="grid-block3 grid-block"
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="600"
              >
         
              </div>
              <div
                className="grid-block4 grid-block"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="600"
              ></div>
              <div
                className="grid-block5 grid-block"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="800"
              ></div>
              <div
                className="grid-block6 grid-block"
                data-aos="fade-right"
                data-aos-delay="700"
                data-aos-duration="600"
              ></div>
              <div
                className="grid-block7 grid-block"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="600"
              ></div>
              <div
                className="grid-block8 grid-block"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="900"
              ></div>
              <div
                className="grid-block9 grid-block"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="600"
              ></div>
              <div
                className="grid-block10 grid-block"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="600"
              ></div>
              <div
                className="grid-block11 grid-block"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="800"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <div className="about">
        <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
          <defs></defs>
          <path
            fill="#F3E8DC55"
            class="out-top"
            d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
          />
          <path
            fill="#FFF3E7"
            class="in-top"
            d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
          />
          <path
            fill="#f3e8dc"
            class="out-bottom"
            d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
          />
          <path
            fill="#FFF3E7"
            class="in-bottom"
            d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
          />
        </svg>

        <div className="about-container" id="about">
          <h2 data-aos="fade-down" data-aos-delay="200">
            DIwise UK keeps businesses ahead of the curve.
          </h2>
          <p data-aos="fade-up" data-aos-delay="400">
            The services encompass expert web design, cutting-edge search engine
            optimization (SEO), engaging content marketing strategies, and
            skillful social media management. Their innovative and creative
            approach, combined with a deep understanding of the digital
            landscape, guarantees the success of your business in this digital
            era. Count on DIwise UK as your reliable partner to amplify your
            online success.
          </p>
          <Link
            to="/about"
            className="btn"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Know More
          </Link>
        </div>
      </div>
      <div className="services">
        <div className="services-container">
          <h2 data-aos="fade-down" id="service">
            Our Services
          </h2>
          <div className="service-box">
            <Link
              to="/pr&branding"
              className="service"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icons">
                <img src={prb} alt="" />
              </div>
              <p>PR & Brand Building</p>
            </Link>
            <Link
              to="/marketresearch"
              className="service"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icons">
                {" "}
                <img src={mr} alt="" />
              </div>
              <p>Market Research</p>
            </Link>
            <Link
              to="/webdevelopment"
              className="service"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icons">
                <img src={web} alt="" />
              </div>
              <p>Web Development</p>
            </Link>
            <Link
              to="/socialmediamarketing"
              className="service"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icons">
                <img src={sm} alt="" />
              </div>
              <p>Social Media Marketing</p>
            </Link>
            <Link
              to="/seo"
              className="service"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="icons">
                <img src={seo} alt="" />
              </div>
              <p>Search Engine Optimisation (SEO)</p>
            </Link>
            <Link
              to="/sem"
              className="service"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="icons">
                <img src={sem} alt="" />
              </div>
              <p>Search Engine Marketing (SEM)</p>
            </Link>
            <Link
              to="/influencemarketing"
              className="service"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="icons">
                <img src={im} alt="" />
              </div>
              <p>Influencer Marketing</p>
            </Link>
            <Link
              to="/digitalmediahealthcheck"
              className="service"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="icons">
                <img src={dhc} alt="" />
              </div>
              <p>Digital Media Health Check</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="ourclients" id="client">
        <div className="ourclients-container">
          <h2 data-aos="fade-down" data-aos-delay="200">
            The Heart of Our Success: <span>Our Clients</span>
          </h2>
          <div className="clients" data-aos="fade-up" data-aos-delay="300">
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
          </div>
          <div className="testimonials" id="new">
            <div className="testimonial-content">
              <div className="quote">
                <span>
                  <BsQuote />
                </span>
                <p
                  className="quote-content"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  {currentData.content}
                </p>
                <span className="snd">
                  <BsQuote />
                </span>
              </div>

              <p className="by" data-aos="fade-up" data-aos-delay="400">
                {currentData.by}{" "}
              </p>
            </div>
            <div className="testimonial-nav">
              <p className="pagination" data-aos="fade-up" data-aos-delay="400">
                <span id="testimonialid"> 0{currentData.id}</span>/04
              </p>
              <div className="navbtn" data-aos="fade-up" data-aos-delay="500">
                <span id="back" className="Back" onClick={handlePrev}>
                  <BsArrowRight />
                </span>
                <span id="forward" onClick={handleNext}>
                  <BsArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="casestudy">
        <div className="casestudy-container">
          <h2 data-aos="fade-up">Case Study</h2>

          <div className="casestudy-box">
            <div
              className="casestudy-element"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="image"></div>
              <div className="content">
                <p className="category">CaseStudy</p>
                <p className="title">
                  Enhancing Customer Engagement: A Case Study on DIwise UK's
                  Personalized AI Chatbot Implementation
                </p>

                <button className="btn">Read More</button>
              </div>
            </div>
            <div
              className="casestudy-element"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="image"></div>
              <div className="content">
                <p className="category">CaseStudy</p>
                <p className="title">
                  Unveiling Market Insights: How DIwise UK Harnessed Data
                  Analytics for Informed Decision-Making
                </p>

                <button className="btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      <Beforefooter />
    </>
  );
}

export default Home;
