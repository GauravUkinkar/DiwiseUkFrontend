import React, { useState } from "react";
import "../components/ServiceTemplate.css";
import FAQAccordion from "../components/FAQAccordion";
import TabbedSteps from "../components/TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "../components/Beforefooter";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

import s2_1  from '../img/icons/s2svg/1.svg'
import s2_2  from '../img/icons/s2svg/2.svg'
import s2_3  from '../img/icons/s2svg/3.svg'
import s2_4  from '../img/icons/s2svg/4.svg'
import s2_5  from '../img/icons/s2svg/5.svg'
const faqData = [
  {
    question: "What is market research? ",
    answer:
      "Market research is the systematic gathering, analysis, and interpretation of data about a market, including customer preferences, competition, and trends, to make informed business decisions.",
  },
  {
    question:
      "Why is market research necessary? ",
    answer:
      "Market research is necessary to understand customer needs, assess market viability, minimize risks, and identify opportunities, enabling businesses to make data-driven decisions.  ",
  },
  {
    question:
      "What are the types of market research? ",
    answer:
      "Types of market research include qualitative (focus groups, interviews), quantitative (surveys, data analysis), and secondary (existing data) research methods.",
  },
  {
    question:
      "How is market research conducted?",
    answer:
      "Market research is conducted through surveys, interviews, data analysis, observation, and by utilizing various tools and techniques to collect and analyze information.",
  },
  {
    question:
      "What is the cost of market research services? ",
    answer:
      "The cost of market research services varies widely based on scope, methodology, and provider. Small surveys might cost a few hundred dollars, while comprehensive studies can range from thousands to tens of thousands of dollars.",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    img: s2_1, // Add the image reference for the first tab
    title: "Data Collection",
    content: "Gather data through various methods, including surveys, interviews, observations, and data mining. Utilize both primary data (collected directly) and secondary data (existing information) sources.",
  },
  // Add image references for the rest of the tabs
  {
    img: s2_2,
    title: "Data Analysis",
    content: "Analyze the collected data to derive meaningful insights. This may involve statistical analysis, data visualization, and identifying patterns or trends.",
  },
  {
    img: s2_3,
    title: "Market Segmentation",
    content: "Divide the target market into segments based on demographics, behavior, or preferences. This helps in tailoring marketing strategies.",
  },
  {
    img: s2_4,
    title: "Competitor Analysis",
    content: "Assess the competitive landscape by studying rival businesses, their strengths, weaknesses, and strategies. This information is crucial for positioning your product or service effectively.",
  },
  {
    img: s2_5,
    title: "Report and Action",
    content: "Present the research findings in a comprehensive report, including recommendations for business decisions. Use the insights gained to refine strategies, launch new products, or make informed changes to achieve your business goals.",
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
        <title>Market Research Experts in UK | Diwise - Uncovering Insights
        </title>
        <meta name='description' content='Enhance your business strategy with the best market research professionals in the UK- DIwise. consumer behaviour, industry trends
'/>
        <meta name='keywords' content='consumer behaviour, industry trends, market research in uk, expert market research
'/>
<link rel="canonical" href="https://diwise.uk/marketresearch/" />
        
      </Helmet>
      <div className="servicetemplate">
        <div className="template-container">
          <section className="opening">
            <div className="left ">
              <h1 className="service-heading" data-aos="fade-right" data-aos-delay='200'>
           

              Searching to provide <span>excellence</span>
              </h1>
              <p className="service-content" data-aos="fade-right" data-aos-delay='400'>
              At Diwise, we're all about top-notch market research designed just for you. In today's fast-paced business world, having the right information is key for your PR, branding, social media, and website plans. We're here to give you that extra edge – helping you spot opportunities, understand what your audience wants, and run campaigns.


              </p>
            </div>
            <div className="right s2" data-aos="fade-up" data-aos-delay='200'>
              <div className="bg bg2">

              </div>
            </div>
          </section>
        </div>

        {/* section 2 starts here */}

        <section className="points">
          <div className="points-container" data-aos="fade-up" data-aos-delay='200'>
            <TabbedSteps steps={stepsData} onSelectStep={handleStepSelect} />
            <div className="tutorial-content">
              <span className="step-icon">{stepsData[selectedStep].icon}</span>
              <img alt={[selectedStep].title} src={stepsData[selectedStep].img} />
              <h2>{stepsData[selectedStep].title}</h2>
              <p>{stepsData[selectedStep].content}</p>{" "}
            </div>
          </div>
        </section>

        {/* section 3 starts here */}
        <section className="dowedo">
          <div className="dowedo-container">

            <h2 data-aos="fade-down" data-aos-delay='200'>
            Look into a solution for your company.
            </h2>
            <p className="wedo" data-aos="fade-up" data-aos-delay='400'>
            Diwise offers advanced market research solutions for your business. We leverage the latest technology, including AI and machine learning, to delve deep and provide you with valuable insights. With a keen eye on innovation and delivering up-to-date information, Diwise is your trusted partner to boost your market research and stay ahead in the game.

            </p>
          </div>

        </section>

        {/* section 4 starts here */}


        <section className="faq">
          <div className="faq-container">
            <h2 data-aos="fade-down" data-aos-delay='200'>FAQs</h2>
            <FAQAccordion faqData={faqData} />
          </div>
        </section>
      </div>
      <Beforefooter />
    </>
  );
}

export default ServiceTemplate;
