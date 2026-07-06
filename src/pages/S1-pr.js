import React, { useState } from "react";
import "../components/ServiceTemplate.css";
import FAQAccordion from "../components/FAQAccordion";
import TabbedSteps from "../components/TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "../components/Beforefooter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import s1_1  from '../img/icons/s1svg/1.svg'
import s1_2  from '../img/icons/s1svg/2.svg'
import s1_3  from '../img/icons/s1svg/3.svg'
import s1_4  from '../img/icons/s1svg/4.svg'
import s1_5  from '../img/icons/s1svg/5.svg'
import s1_6  from '../img/icons/s1svg/6.svg'
const faqData = [
  
  {
    question: "What sets PR apart from Branding?",
    answer:
      "Public Relations (PR) primarily focuses on building relationships with the public, while Branding centers on creating a distinct image or identity for a product or company.",
  },
  {
    question:
      "What is the Significance of Brand Consistency in PR?",
    answer:
      "Brand consistency in PR ensures that your messaging, visuals, and actions align, reinforcing a strong and recognizable brand, which helps build trust and recognition among your target audience.",
  },
  {
    question:
      "How Can PR strengthen Brand Reputation?",
    answer:
      "PR can strengthen brand reputation by managing public perception through positive media coverage, strategic communication, and addressing issues transparently.   ",
  },
  {
    question:
      "Effective PR Strategies for Startups?",
    answer:
      "Effective PR strategies for startups include identifying target audiences, crafting compelling stories, leveraging social media, and building relationships with key influencers. ",
  },
  {
    question:
      "What is the Role of Crisis Management in Branding?",
    answer:
      "Crisis management in branding involves responding promptly and transparently to crises, protecting brand reputation, and rebuilding trust through strategic communication and actions.",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    img: s1_1, // Add the image reference for the first tab
    title: "Client Discovery",
    content: "Diwise understands the client's goals, target audience, and current brand perception.",
  },
  // Add image references for the rest of the tabs
  {
    img: s1_2,
    title: "Strategic Planning",
    content: "Diwise develops a customized PR branding strategy, outlining key messaging and channels.",
  },
  {
    img: s1_3,
    title: "Content Creation",
    content: "Diwise crafts compelling narratives, press releases, and digital content to convey the desired brand image.",
  },
  {
    img: s1_4,
    title: "Media Outreach",
    content: "Diwise develops relationships with media outlets and influencers for effective brand exposure.",
  },
  {
    img: s1_5,
    title: "Campaign Execution",
    content: "Diwise implements the PR branding strategy, including media placements, social media engagement, and events.",
  },
  {
    img: s1_6,
    title: "Monitoring and Adaptation",
    content: "Diwise continuously assesses results, adjusts strategies, and refines the brand image to maintain a positive reputation.",
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
        <title>PR &amp; Brand Building Services by DIwise in the UK
        </title>
        <meta name='description' content='DIwise offers expert PR Brand Building services to help you craft a unique brand identity, establish trust, and stand out in competitive markets.
'/>
        <meta name='keywords' content='brand identity, competitive markets, diwise, brand building , client discovery, strategic planning
'/>
        <link rel="canonical" href="https://diwise.uk/pr&branding/" />
      </Helmet>
      <div className="servicetemplate">
        <div className="template-container">
          <section className="opening">
            <div className="left ">
              <h1 className="service-heading" data-aos="fade-right" data-aos-delay='200'>
           

                <span> Unlock Your Brand's Potential </span>with DIwise PR Branding Excellence
              </h1>
              <p className="service-content" data-aos="fade-right" data-aos-delay='400'>
              PR branding is about managing how people perceive a brand. It involves telling engaging stories, building trust, and maintaining a presence both online and offline. By using a blend of traditional and modern PR techniques, it creates a positive and consistent image. For businesses and individuals, PR branding is crucial for connecting with audiences, gaining trust, and standing out. A well-executed PR branding plan builds strong relationships and a unique brand identity, which is key for success in today's connected world.


              </p>
            </div>
            <div className="right s1" data-aos="fade-up" data-aos-delay='200'>
              <div className="bg bg1">

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
            Uniting through authentic PR Branding.
            </h2>
            <p className="wedo" data-aos="fade-up" data-aos-delay='400'>
            At Diwise, we excel at PR branding. We handle everything from understanding your needs, making plans, creating content, reaching out to the media, and running campaigns. Our team is dedicated to ensuring that your brand looks great and connects effectively with your audience. We customize our strategies to precisely fit your needs.
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
