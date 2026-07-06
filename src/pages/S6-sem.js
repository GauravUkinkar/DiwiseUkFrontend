import React, { useState } from "react";
import "../components/ServiceTemplate.css";
import FAQAccordion from "../components/FAQAccordion";
import TabbedSteps from "../components/TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "../components/Beforefooter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import s6_1 from "../img/icons/s6svg/1.svg";
import s6_2 from "../img/icons/s6svg/2.svg";
import s6_3 from "../img/icons/s6svg/3.svg"; 
import s6_4 from "../img/icons/s6svg/4.svg";
import s6_5 from "../img/icons/s6svg/5.svg";
import s6_6 from "../img/icons/s6svg/6.svg";
const faqData = [
  {
    question: "How can Diwise help my business with Search Engine Marketing? ",
    answer:
      "Diwise offers tailored SEM services, including keyword research, ad campaign      management, and ongoing optimization. We work to increase your online visibility and drive      targeted traffic to your website, ultimately boosting your leads and conversions. ",
  },
  {
    question: "How do I measure the success of my SEM campaign? ",
    answer:
      "Success in SEM is measured through key performance indicators (KPIs), such as clickthrough rates, conversion rates, and return on ad spend. Diwise provides regular reports and      analysis to track performance and make data-driven adjustments. ",
  },
  {
    question: "Can I change my SEM strategy after it's been implemented? ",
    answer:
      "Yes, SEM strategies are adaptable. Diwise offers ongoing optimization, allowing for      adjustments to keywords, ad creatives, and bidding strategies based on campaign      performance. This flexibility ensures that your SEM efforts stay aligned with your business      goals.  ",
  },
  {
    question: "What is the difference between SEO and SEM? ",
    answer:
      "SEM involves paid advertising to appear in search results, while SEO focuses on organic,      non-paid methods for better search rankings. ",
  },
  {
    question: "How does Diwise determine the budget for SEM campaigns? ",
    answer:
      "We consider your industry, competition, and marketing goals to determine the optimal      budget for SEM campaigns, ensuring cost-effective results. ",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    img: s6_1, // Add the image reference for the first tab
    title: "Keyword Research and Analysis",
    content:
      "Diwise initiates the Search Engine Marketing (SEM)    process by conducting comprehensive keyword research, identifying high-value,    relevant keywords for the client's niche and target audience. ",
  },
  // Add image references for the rest of the tabs
  {
    img: s6_2,
    title: "Ad Campaign Creation",
    content:
      "They craft compelling ad campaigns across various platforms,    such as Google Ads and Bing Ads, incorporating the chosen keywords into ad copy    and meta descriptions. ",
  },
  {
    img: s6_3,
    title: "Bid Management",
    content:
      "Diwise actively manages bidding strategies to optimize ad    placements and maintain a competitive edge, ensuring the client's budget is    efficiently utilized. ",
  },
  {
    img: s6_4,
    title: "Landing Page Optimization",
    content:
      "They offer landing page recommendations to enhance    user experience, encouraging higher conversion rates by aligning the landing page    content with the chosen keywords. ",
  },
  {
    img: s6_5,
    title: "Performance Tracking",
    content:
      "Diwise employs advanced analytics tools to monitor and    analyze SEM campaign performance, fine-tuning strategies based on critical metrics    like click-through rates (CTR), conversion rates, and return on investment (ROI).",
  },
  {
    img: s6_6,
    title: "Ongoing Optimization",
    content:
      "The process is iterative, with Diwise continuously adapting to    evolving search engine algorithms and industry trends, adjusting keywords, ad    creatives, and targeting to ensure optimal results and consistent online visibility",
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
      <title>SEM : Drive Online Success with DIwise | UK SEM Experts</title>
      <meta name='description' content='Discover the power of Search Engine Marketing (SEM) with DIwise. Our UK SEM experts offer Pay-Per-Click (PPC) advertising, Display Ads, and Remarketing,.' />
      <meta name='keywords' content='sem, search engine marketing, display ads, remarketing, advertising, pay-per-click' />
      <link rel="canonical" href="https://diwise.uk/sem/" />
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
                Diwise's Dynamic Search Engine Marketing <span> Delivers
                Impressive Results </span>
              </h1>
              <p
                className="service-content"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Diwise's Search Engine Marketing (SEM) services are a
                game-changer for businesses seeking online visibility. With a
                data-driven approach, Diwise optimizes PPC campaigns, ad copy,
                and keywords, ensuring maximum ROI. Their expertise extends to
                Google Ads, Bing Ads, and more, allowing clients to tap into
                diverse online audiences. Diwise's SEM strategies are finely
                tuned, keeping pace with search engine algorithm updates to
                maintain top positions. They continually refine their SEM
                tactics through meticulous analysis and testing to guarantee
                clients a competitive edge in the digital marketplace. Expect
                cost-effective SEM solutions and heightened online success with
                Diwise.
              </p>
            </div>
            <div className="right s6" data-aos="fade-up" data-aos-delay="200">
              <div className="bg bg6"></div>
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
            Drive digital growth with Search Engine Marketing. 
            </h2>
            <p className="wedo" data-aos="fade-up" data-aos-delay="400">
              Diwise offers comprehensive Search Engine Marketing (SEM) services to boost
              online visibility and drive targeted traffic. Our services
              encompass keyword research, ad campaign management, ad copy
              optimization, and performance analytics. We ensure maximum ROI
              through targeted ads on platforms like Google Ads and Bing Ads.
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
