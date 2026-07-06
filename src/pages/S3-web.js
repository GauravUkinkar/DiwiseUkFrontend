import React, { useState } from "react";
import "../components/ServiceTemplate.css";
import FAQAccordion from "../components/FAQAccordion";
import TabbedSteps from "../components/TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "../components/Beforefooter";
import AOS from "aos";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";

import s3_1 from "../img/icons/s3svg/1.svg";
import s3_2 from "../img/icons/s3svg/2.svg";
import s3_3 from "../img/icons/s3svg/3.svg";
import s3_4 from "../img/icons/s3svg/4.svg";
import s3_5 from "../img/icons/s3svg/5.svg";


const faqData = [
  {
    question: "What makes Diwise's web development approach innovative?",
    answer:
      "Diwise focuses on creating customized web solutions, leveraging advanced technologies, and avoiding generic templates to provide a unique and tailored online experience. ",
  },
  {
    question: "How do you ensure SEO friendliness in your websites?",
    answer:
      "We implement SEO optimization strategies to enhance search engine visibility, ensuring that our websites are designed to be search engine-friendly and attract organic traffic.",
  },
  {
    question: "What sets Diwise apart from other web development services?",
    answer:
      "Our key differentiators include our emphasis on bespoke development, prioritising the client's exact requirements, and a commitment to avoiding the use of generic templates.   ",
  },
  {
    question:
      "Can you explain how you enhance user experiences on websites and web apps?",
    answer:
      "We achieve enhanced user experiences through the implementation of dynamic content that adapts to user behavior, creating highly personalized and engaging teractions on our websites and web applications.  ",
  },
  {
    question:
      "What types of businesses can benefit from Diwise's web development services?",
    answer:
      "Our services are suitable for a wide range of businesses, from e-commerce platforms to interactive web apps, looking to thrive in the ever-evolving digital landscape and elevate their online presence.",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    img: s3_1, // Add the image reference for the first tab
    title: "Web Design",
    content:
      "Crafting visually appealing and user-friendly website layouts with modern frameworks and responsive design to ensure an engaging online presence.",
  },
  // Add image references for the rest of the tabs
  {
    img: s3_2,
    title: "SEO Optimization",
    content:
      "Implementing strategies to enhance search engine visibility and drive organic traffic, ensuring SEO-friendly websites for improved online discoverability. ",
  },
  {
    img: s3_3,
    title: "Web Development",
    content:
      "Building fast, secure, and modern web applications using expert coding techniques, resulting in highly functional and user-centric digital solutions. ",
  },
  {
    img: s3_4,
    title: "User Experience Enhancement",
    content:
      "Leveraging AI and data analytics to create dynamic content that adapts to user behavior, providing exceptional and personalized user experiences. ",
  },
  {
    img: s3_5,
    title: "Digital Innovation",
    content:
      "Embracing cutting-edge technologies to revolutionize web development, fostering a smarter and more responsive digital landscape for businesses to thrive.",
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
      <title>Expert Web Development Services | DIwise - Crafting Digital Excellence</title>
      <meta name='description' content='DIwise offers top-tier web development services tailored to your business needs. Our websites are visually , user-friendly, and designed to drive results.'/>
      <meta name='keywords' content='web development, website development, app development, user-friendly website, website design, website in uk' />
      <link rel="canonical" href="https://diwise.uk/webdevelopment/" />
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
                <span>Experience the Future</span> with Diwise Web Development
              </h1>
              <p
                className="service-content"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Diwise is revolutionising web development with our cutting-edge
                approach. We focus on seamlessly integrating advanced
                technologies to craft personalized, efficient, and userfriendly
                websites and web applications. Using modern frameworks and
                expert coding, we create responsive, SEO-friendly, fast, and
                secure web solutions. Our method ensures dynamic content that
                adapts to user behavior, providing exceptional user experiences.
                This forward-thinking approach represents the future of web
                development, shaping a smarter and more responsive digital
                landscape. With Diwise's Web Development Services, businesses
                can thrive and stay ahead in today's ever-evolving digital
                world.
              </p>
            </div>
            <div className="right s3" data-aos="fade-up" data-aos-delay="200">
              <div className="bg bg3"></div>
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
              Tailored Web Solutions
            </h2>
            <p className="wedo" data-aos="fade-up" data-aos-delay="400">
              At Diwise, we stand out because we specialise in crafting bespoke
              and customised web applications and websites. Our approach is
              unique as we prioritize the client's exact requirements, ensuring
              no generic templates are used. We pride ourselves on delivering
              truly personalized and one-of-a-kind digital solutions that align
              perfectly with your vision, making us the ideal choice for those
              seeking a tailored online presence.
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
