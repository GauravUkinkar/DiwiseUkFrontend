import React, { useState } from "react";
import "../components/ServiceTemplate.css";
import FAQAccordion from "../components/FAQAccordion";
import TabbedSteps from "../components/TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "../components/Beforefooter";
import AOS from "aos";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";

import s5_1 from "../img/icons/s5svg/1.svg";
import s5_2 from "../img/icons/s5svg/2.svg";
import s5_3 from "../img/icons/s5svg/3.svg";
import s5_4 from "../img/icons/s5svg/4.svg";
import s5_5 from "../img/icons/s5svg/5.svg";
import s5_6 from "../img/icons/s5svg/6.svg";
const faqData = [
  {
    question:
      "How long does it take to see results from Diwise's SEO services? ",
    answer:
      "SEO is a gradual process, and the timeline for results varies based on factors like competition, keywords, and the current state of your website. Typically, noticeable      improvements can be observed within 4-6 months",
  },
  {
    question: "What is the cost of Diwise's SEO services?",
    answer:
      "Our pricing is tailored to each client's specific needs and objectives. We offer customized      packages, and pricing depends on the service level and your SEO project's scope. Please get      in touch with us for a personalized quote. ",
  },
  {
    question: " Do I need to make a contract for Diwise's SEO services? ",
    answer:
      "No, we offer flexibility. While SEO is most effective as an ongoing strategy, we don't require      long-term contracts. We provide short-term and long-term options; you can adjust your plan      as needed.   ",
  },
  {
    question: "What industries does Diwise specialize in for SEO services? ",
    answer:
      "Diwise provides SEO services for a wide range of industries. We have experience working      with businesses in healthcare, e-commerce, finance, technology, and many others. Our      strategies are adaptable to suit diverse industries. ",
  },
  {
    question: "How does Diwise measure the success of an SEO campaign?",
    answer:
      "We measure success through key performance indicators (KPIs) such as keyword rankings,      organic traffic, conversion rates, and ROI. Our monthly reports provide a transparent      overview of your campaign's progress, allowing you to track improvements effectively. ",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    img: s5_1, // Add the image reference for the first tab
    title: "Keyword Research",
    content:
      "We kickstart our SEO process with thorough keyword research,    pinpointing high-traffic and relevant keywords for your industry to optimize your website's    content effectively. ",
  },
  // Add image references for the rest of the tabs
  {
    img: s5_2,
    title: "On-Page Optimization",
    content:
      " We fine-tune your website's on-page elements, including meta tags,    headers, and content, ensuring search engines recognize and rank your site for the chosen    keywords. ",
  },
  {
    img: s5_3,
    title: "Content Creation",
    content:
      " Our expert team generates engaging, informative, and keyword-rich    content that draws in visitors and strengthens your website's authority in your niche. ",
  },
  {
    img: s5_4,
    title: "Off-Page SEO",
    content:
      "Diwise places emphasis on off-page SEO by securing high-quality backlinks    from authoritative websites, boosting your site's credibility and increasing its chances of    ranking higher in search results. ",
  },
  {
    img: s5_5,
    title: "Technical SEO",
    content:
      "We conduct thorough technical SEO audits to address factors like site speed,    mobile-friendliness, and indexability, ensuring your site meets search engine standards. ",
  },
  {
    img: s5_6,
    title: "Monthly Reporting",
    content:
      "We provide regular performance reports highlighting key metrics such as    keyword rankings, organic traffic, and conversions, enabling you to track the ffectiveness of    our SEO services. ",
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
      <title>Effective SEO Strategies for UK Businesses | DIwise</title>
      <meta name='description' content='Discover powerful SEO strategies tailored for UK businesses. From keyword optimization to local SEO,' />
      <meta name='keyword' content='search engine optimization, seo, seo stategies, website seo, seo in uk, powerfull seo, seo for uk business' />
      <link rel="canonical" href="https://diwise.uk/seo/" />
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
                <span>Shine Online: </span>Unleashing Diwise SEO Expertise
              </h1>
              <p
                className="service-content"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Boost Your Online Visibility DIwise offers advanced SEO services
                to take your online presence to the next level. Our skilled team
                employs a strategic mix of on-page and off-page optimization
                techniques to improve your website's search engine rankings.
                Whether you're a small business or a large corporation, our
                customized solutions drive organic traffic, increase
                conversions, and maximize your ROI. With DIwise, you're not just
                getting SEO services; you're gaining a competitive edge in the
                digital world.
              </p>
            </div>
            <div className="right s5" data-aos="fade-up" data-aos-delay="200">
              <div className="bg bg5"></div>
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
            Navigating Success: The Diwise SEO Advantage
            </h2>
            <p className="wedo" data-aos="fade-up" data-aos-delay="400">
              SEO Experts Making Your Website Shine Diwise is a trusted provider
              of SEO services committed to enhancing your online presence and
              elevating your visibility in search engine results. Our
              comprehensive approach to SEO encompasses various strategies to
              help businesses of all sizes improve their digital footprint.
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
