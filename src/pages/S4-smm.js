import React, { useState } from "react";
import "../components/ServiceTemplate.css";
import FAQAccordion from "../components/FAQAccordion";
import TabbedSteps from "../components/TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "../components/Beforefooter";
import AOS from "aos";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";

import s4_1 from "../img/icons/s4svg/1.svg";
import s4_2 from "../img/icons/s4svg/2.svg";
import s4_3 from "../img/icons/s4svg/3.svg";
import s4_4 from "../img/icons/s4svg/4.svg";
import s4_5 from "../img/icons/s4svg/5.svg";
import s4_6 from "../img/icons/s4svg/6.svg";

const faqData = [
  {
    question:
      "What is social media marketing, and why is it important for businesses?",
    answer:
      "Social media marketing is the use of social platforms to promote products or services. It's crucial for businesses because it offers a vast, engaged audience, facilitates brand visibility, fosters customer engagement, and can lead to increased website traffic and sales. ",
  },
  {
    question:
      "How long does it take to see results from social media marketing? ",
    answer:
      "The timeline varies, but typically, it takes a few months to see noticeable results. Building a social media presence and audience engagement is a gradual process that depends on factors like strategy, industry, and platform.",
  },
  {
    question:
      "What platforms should I use for my business's social media marketing?",
    answer:
      "The choice of platforms depends on your target audience and business niche. Generally, popular choices include Facebook, Instagram, Twitter, LinkedIn, and Pinterest. Tailor your strategy to platforms most relevant to your audience.   ",
  },
  {
    question: "How much should I invest in social media marketing?",
    answer:
      "Social media marketing budgets vary, but allocating around 25-30% of your total marketing budget is a common starting point. Adjust based on goals and competition. ",
  },
  {
    question:
      "What metrics should I track to measure the success of my social media marketing  efforts?       ",
    answer:
      "Key metrics include engagement rates (likes, shares, comments), click-through rates (CTR), conversion rates, reach, and follower growth. Additionally, you can measure ROI through sales, lead generation, and customer acquisition data. These metrics help assess the effectiveness of your campaigns and strategy. ",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    img: s4_1, // Add the image reference for the first tab
    title: "Understanding Your Goals",
    content:
      "We kickstart with a detailed consultation to grasp    your business objectives, target audience, and competitive landscape. This ensures our strategy aligns perfectly with your goals. ",
  },
  // Add image references for the rest of the tabs
  {
    img: s4_2,
    title: "Knowing Your Audience",
    content:
      "Extensive research helps us identify your target audience, including    demographics, interests, and online behavior. This informs our tailored content approach. ",
  },
  {
    img: s4_3,
    title: "Crafting Content Strategy",
    content:
      "We develop a content strategy that mirrors your brand's    messaging and values. Keyword research is integrated to boost visibility and reach.",
  },
  {
    img: s4_4,
    title: "Creating Compelling Content",
    content:
      "Our expert team produces high-quality, engaging content from posts to graphics, videos, and articles. Designed to resonate with your audience, it    encourages interaction and sharing. ",
  },
  {
    img: s4_5,
    title: "Managing Social Media Presence",
    content:
      "We take charge of your social media accounts, handling everything from scheduling posts to engaging with your audience. This ensures consistent brand representation and customer engagement. ",
  },
  {
    img: s4_6,
    title: "Analyzing Performance and Enhancing",
    content:
      "Regular analysis of metrics like reach, engagement,    and conversion rates allows us to refine your social media strategy. We make adjustments to    maximize results, ensuring your brand remains competitive and visible in the ever-evolving    social media landscape. ",
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
      <title>Strategic Social Media Marketing Services | DIwise </title>
      <meta name='description' content='DIwise offers expert social media marketing services that drive engagement, boost brand visibility, and deliver results.' />
      <meta name='keyword' content='social media marketing, boost brand visibility, deliver results, media marketing, digital media marketing, advertisement' />
      <link rel="canonical" href="https://diwise.uk/socialmediamarketing/" />
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
                <span> DIwise: </span>Elevating Brands Through Social Media
                Marketing
              </h1>
              <p
                className="service-content"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                In today's digital landscape, DIwise stands at the forefront of
                social media marketing, dedicated to enhancing businesses'
                online presence and driving success. Our approach combines
                content creation, targeted audience engagement, and performance
                analysis. It all begins with a deep dive into the client's
                industry, audience, and objectives. DIwise then crafts
                captivating content infused with relevant keywords to engage the
                audience. Our skilled team manages social media accounts, tracks
                performance, and refines strategies for optimal outcomes.
                Through a fusion of creativity and data-driven insights, DIwise
                propels brands to the top of search rankings, ensuring social
                media triumph.
              </p>
            </div>
            <div className="right s4" data-aos="fade-up" data-aos-delay="200">
              <div className="bg bg4"></div>
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
            Socialize your brand Diwise
            </h2>
            <p className="wedo" data-aos="fade-up" data-aos-delay="400">
              Elevating Brands Through Social Media
              Marketing Socialize Your Brand: Diwise's Social Media Marketing
              service is a comprehensive and data-driven approach to effectively
              promote your brand on popular social platforms. Our services drive
              brand success, expand online reach, and boost engagement.
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
