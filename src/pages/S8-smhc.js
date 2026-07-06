import React, { useState } from "react";
import "../components/ServiceTemplate.css";
import FAQAccordion from "../components/FAQAccordion";
import TabbedSteps from "../components/TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "../components/Beforefooter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import s8_1 from "../img/icons/s8svg/1.svg";
import s8_2 from "../img/icons/s8svg/2.svg";
import s8_3 from "../img/icons/s8svg/3.svg";
import s8_4 from "../img/icons/s8svg/4.svg";
import s8_5 from "../img/icons/s8svg/5.svg";
import s8_6 from "../img/icons/s8svg/6.svg";
const faqData = [
  {
    question: "What is a Digital Media Health Check, and why do I need it? ",
    answer:
      "A Digital Media Health Check is a comprehensive assessment of your online presence. It      helps you identify areas for improvement in your digital strategy, such as website      performance and content quality. ",
  },
  {
    question:
      "How long does the Digital Media Health Check process take?       ",
    answer:
      "The time can vary depending on the complexity of your digital presence. Typically, it takes      a few weeks to complete the assessment and provide actionable recommendations for      improvement.",
  },
  {
    question:
      "What aspects of my digital presence will be evaluated in the health check?",
    answer:
      "The Digital Media Health Check includes an analysis of your website performance, social      media engagement, content quality, keyword optimization, and competitive analysis to      understand how you stack up against your competitors.    ",
  },
  {
    question:
      "What happens after I receive the recommendations from the health check?       ",
    answer:
      "Diwise will provide a detailed report of the findings and actionable recommendations. You      can implement these recommendations independently, or Diwise can further assist in      optimizing your digital strategy.  ",
  },
  {
    question:
      "How often should I get a Digital Media Health Check for my business??",
    answer:
      "Getting a Digital Media Health Check at least once a year is advisable to stay up-to-date      with the ever-evolving digital landscape. However, the frequency may vary depending on      your business goals and industry changes. ",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    img: s8_1, // Add the image reference for the first tab
    title: "Audit and Analysis",
    content:
      "Diwise thoroughly audits the client's website and social media    platforms to identify strengths and weaknesses. ",
  },
  // Add image references for the rest of the tabs
  {
    img: s8_2,
    title: "Performance Metrics",
    content:
      "The service assesses vital performance metrics, including    website speed, user engagement, and content quality. ",
  },
  {
    img: s8_3,
    title: "Competitive Analysis",
    content:
      "Diwise analyzes the digital landscape to understand how    clients compare to their competitors. ",
  },
  {
    img: s8_4,
    title: "Keyword Optimization",
    content:
      "Diwise improves search engine rankings and visibility by    researching and optimizing relevant keywords. ",
  },
  {
    img: s8_5,
    title: "Content Strategy",
    content:
      "The service offers content recommendations to enhance user    engagement and relevance. ",
  },
  {
    img: s8_6,
    title: "Actionable Recommendations",
    content:
      "Diwise provides clients with a clear roadmap, including actionable recommendations to boost online isibility and drive success in    the digital sphere. ",
  },
];

function ServiceTemplate() {
  const [selectedStep, setSelectedStep] = useState(0);

  const handleStepSelect = (stepIndex) => {
    setSelectedStep(stepIndex);
  };

  return (
    <>
    <Helmet>
      <title>Digital Media Health Check for Your UK Online Presence</title>
      <meta name='description' content="Boost your online performance with our Digital Media Health Check service in the UK. We analyze your website and social media accounts." />
      <meta name='keywords' content='social media health, digital media health, website health, digital media health check service, website analyze' />
      <link rel="canonical" href="https://diwise.uk/digitalmediahealthcheck/" />
    </Helmet>
      <div className="servicetemplate">
        <div className="template-container">
          <section className="opening">
            <div className="left ">
              <h1
                className="service-heading"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <span>
                  {" "}
                  Diwise Launches Cutting-Edge Digital Media Health Checks{" "}
                </span>
                to Boost Online Visibility and Engagement
              </h1>
              <p
                className="service-content"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Diwise introduces a groundbreaking Digital Media Health Checks
                service to optimize online presence. By conducting in-depth
                assessments of website performance, social media engagement, and
                content quality, Diwise empowers businesses to enhance their
                digital footprint. With data-driven insights and actionable
                recommendations, this service ensures improved search engine
                rankings, increased user engagement, and overall online success.
                Stay ahead in the digital realm with Diwise's Digital Media
                Health Checks.
              </p>
            </div>
            <div className="right s8" data-aos="fade-up" data-aos-delay="200">
              <div className="bg bg8"></div>
            </div>
          </section>
        </div>

        {/* section 2 starts here */}

        <section className="points">
          <div
            className="points-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <TabbedSteps steps={stepsData} onSelectStep={handleStepSelect} />
            <div className="tutorial-content">
              <span className="step-icon">{stepsData[selectedStep].icon}</span>
              <img
                alt={[selectedStep].title}
                src={stepsData[selectedStep].img}
              />
              <h2>{stepsData[selectedStep].title}</h2>
              <p>{stepsData[selectedStep].content}</p>{" "}
            </div>
          </div>
        </section>

        {/* section 3 starts here */}
        <section className="dowedo">
          <div className="dowedo-container">
            <h2 data-aos="fade-down" data-aos-delay="200">
            Diwise: Revitalize Your Digital Presence with Media Health Checks.
            </h2>
            <p className="wedo" data-aos="fade-up" data-aos-delay="400">
              Digital wellbeing checks Diwise's Digital Media Health Checks
              service is a holistic approach that equips businesses with the
              tools to thrive in the digital landscape. Diwise offers a
              comprehensive Digital Media Health Check service, ensuring online
              content's vitality. Through automated analysis, it assesses
              website performance, social media engagement, SEO optimization,
              and overall digital presence. Diwise's tool scans for issues,
              identifying areas for improvement and growth opportunities. By
              delivering actionable insights and real- time monitoring, it
              empowers businesses to enhance their online presence and adapt to
              evolving digital landscapes, fostering healthier, more effective
              digital media strategies.
            </p>
          </div>
        </section>

        {/* section 4 starts here */}

        <section className="faq">
          <div className="faq-container">
            <h2 data-aos="fade-down" data-aos-delay="200">
              FAQs
            </h2>
            <FAQAccordion faqData={faqData} />
          </div>
        </section>
      </div>
      <Beforefooter />
    </>
  );
}

export default ServiceTemplate;
