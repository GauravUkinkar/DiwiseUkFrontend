import React, { useState } from "react";
import "../components/ServiceTemplate.css";
import FAQAccordion from "../components/FAQAccordion";
import TabbedSteps from "../components/TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "../components/Beforefooter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import s7_1 from "../img/icons/s7svg/1.svg";
import s7_2 from "../img/icons/s7svg/2.svg";
import s7_3 from "../img/icons/s7svg/3.svg";
import s7_4 from "../img/icons/s7svg/4.svg";
import s7_5 from "../img/icons/s7svg/5.svg";
import s7_6 from "../img/icons/s7svg/6.svg";
const faqData = [
  {
    question: "What is influencer marketing, and why should businesses use it?",
    answer:
      "Influencer marketing is when businesses work with popular people on social media to      promote their products. It's important because influencers have a big, loyal audience.",
  },
  {
    question: "How do I find the right influencers for my brand?",
    answer:
      "Look for influencers whose audience matches your target customers, and check if their      values align with your brand. ",
  },
  {
    question: "How much should I pay influencers? ",
    answer:
      " Payments vary, but it depends on the influencer's reach and engagement. Smaller      influencers may charge less, while celebrities cost more.    ",
  },
  {
    question:
      "How can I measure the success of influencer marketing campaigns? ",
    answer:
      "Track metrics like likes, comments, shares, and sales generated through the influencer's      posts to see if it's working. ",
  },
  {
    question: "What are the legal guidelines for influencer marketing? ",
    answer:
      "Make sure influencers disclose their partnerships and follow the FTC guidelines to      maintain transparency and avoid legal issues. ",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    img: s7_1, // Add the image reference for the first tab
    title: "Data-Driven Influencer Selection",
    content:
      "Diwise employs advanced data analytics to identify    and select influencers who align perfectly with a brand's target audience and values.    They assess influencers' demographics, engagement metrics, and previous campaign    performance. ",
  },
  // Add image references for the rest of the tabs
  {
    img: s7_2,
    title: "Campaign Strategy and Planning",
    content:
      "Diwise collaborates closely with clients to create an    influencer marketing strategy. They consider campaign objectives, content types, and    optimal posting schedules to ensure maximum impact.     ",
  },
  {
    img: s7_3,
    title: "Content Creation Guidance",
    content:
      "Diwise guides influencers in crafting authentic, brandaligned content. Their insights help influencers produce content that resonates with    the brand's message while maintaining their unique style. ",
  },
  {
    img: s7_4,
    title: ". Performance Tracking and Analytics",
    content:
      "Diwise continuously monitors influencer    campaign performance, utilizing real-time analytics to assess engagement, reach,    and conversion rates. This data-driven approach allows for agile adjustments during    the campaign.",
  },
  {
    img: s7_5,
    title: "Optimization and ROI Maximization",
    content:
      "Diwise leverages its data analysis to fine-tune    the campaign in real-time. By optimizing ad spending and influencer partnerships,    they ensure clients receive the best possible return on investment.",
  },
  {
    img: s7_6,
    title: "Comprehensive Reporting",
    content:
      "Diwise provides clients detailed post-campaign reports    outlining key metrics and results. This transparency allows brands to evaluate the    success of their influencer marketing efforts and make informed decisions for future    campaigns. ",
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
      <title>Influencer Marketing in the UK | with Top Influencers</title>
      <meta name='description' content="Unlock the power of Influencer Marketing in the UK. Our agency connects your brand with social media influencers to boost visibility, credibility,&amp; engagement" />
      <meta name='keyword' content="credibility, engagement, boost visibility, influencer marketing " />
      <link rel="canonical" href="https://diwise.uk/influencemarketing/" />
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
                <span>Diwise Revolutionizes Influencer Marketing </span>with
                Data-Driven Solutions
              </h1>
              <p
                className="service-content"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                In the dynamic world of influencer marketing, Diwise offers
                efficient services that leverage the power of data to boost
                influencer campaigns. With their expertise, Diwise helps brands
                identify the most relevant influencers, track campaign
                performance, and optimize strategies for maximum ROI. By
                combining creativity with data-driven decision-making, Diwise
                empowers businesses to make informed choices, ensuring their
                influencer marketing efforts are practical and efficient in
                reaching their target audience.
              </p>
            </div>
            <div className="right s7" data-aos="fade-up" data-aos-delay="200">
              <div className="bg bg7"></div>
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
              Harness the Power of Influencer Marketing in the Digital Era.
            </h2>
            <p className="wedo" data-aos="fade-up" data-aos-delay="400">
              Diwise specializes in influencer marketing services, facilitating
              impactful collaborations between brands and influential
              personalities. Through meticulous research and strategic planning,
              Diwise identifies the ideal influencers to reach your target
              audience. They oversee entire campaigns, from initial concept to
              performance analysis, ensuring a seamless and measurable
              influencer partnership. Diwise excels in creating genuine content
              that resonates with the influencer's followers, driving
              engagement, trust, and brand loyalty. By leveraging these
              partnerships, Diwise helps brands elevate their market presence,
              enhance credibility, and ultimately achieve their marketing goals,
              all while adapting to the ever-evolving landscape of influencer
              marketing.
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
