import React, { useState } from "react";
import "./ServiceTemplate.css";
import FAQAccordion from "./FAQAccordion";
import TabbedSteps from "./TabbedSteps";
import { AiFillCar } from "react-icons/ai";
import Beforefooter from "./Beforefooter";
import AOS from "aos";
import "aos/dist/aos.css";


const faqData = [
  {
    question: "What types of web applications can DIwise develop?",
    answer:
      "DIwise is capable of developing a wide range of web applications, from e-commerce platforms and corporate websites to interactive web apps and more.",
  },
  {
    question:
      "How does DIwise ensure the security of web applications it develops?",
    answer:
      "DIwise places a strong emphasis on security during development, conducting thorough security checks and following best practices to safeguard web applications from potential threats.",
  },
  {
    question:
      "Is ongoing support provided after the web application is launched?",
    answer:
      "Yes, DIwise offers ongoing support and updates to ensure the web application remains up-to-date and responsive to evolving user needs.",
  },
  {
    question:
      "Can DIwise integrate its web solutions with existing systems or technologies?",
    answer:
      "Absolutely, DIwise is experienced in integrating its web solutions with a wide array of existing systems and technologies to meet the unique needs of each client.",
  },
  // Add more FAQ items here
];

const stepsData = [
  {
    icon: <AiFillCar />,
    title: "Design and User Experience",
    content:
      "A focus on user-centric design is paramount. DIwise creates intuitive, visually appealing designs that ensure a seamless user experience, with responsive layouts for various devices.",
  },
  {
    title: "Development and Integration",
    content:
      "Leveraging AI and data intelligence, the development team builds the web solution, integrating smart features and algorithms to enhance personalization and functionality.",
  },
  {
    title: "Testing and Quality Assurance",
    content:
      "Rigorous testing is conducted to ensure the web application functions flawlessly. This includes performance testing, security checks, and user testing for a bug-free experience.",
  },
  {
    title: "Deployment and Optimization",
    content:
      "Once the web solution is perfected, it is deployed to live servers, and continuous monitoring and optimization are carried out to maintain peak performance and adaptability.",
  },
  {
    title: "Post-launch Support",
    content:
      "DIwise offers ongoing support and updates to keep the web application current and in line with evolving user needs, ensuring long-term success and user satisfaction.",
  },
];

function ServiceTemplate() {
  const [selectedStep, setSelectedStep] = useState(0);

  const handleStepSelect = (stepIndex) => {
    setSelectedStep(stepIndex);
  };

  return (
    <>
      <div className="servicetemplate">
        <div className="template-container">
          <section className="opening">
            <div className="left ">
              <h1 className="service-heading"   data-aos="fade-right" data-aos-delay='200'>
                Revolutionizing Web Development: Unleashing the Power of DIwise
              </h1>
              <p className="service-content"  data-aos="fade-right" data-aos-delay='400'>
                Web Development by DIwise is an innovative, cutting-edge
                approach to development, emphasizing a deep integration of
                artificial intelligence and data intelligence. This method
                {/* harnesses AI algorithms and data analytics to create highly
                personalized, efficient, and user-centric web applications. By
                leveraging DIwise, web developers can build websites and web
                apps that adapt to user behavior, offer dynamic content, and
                enhance user experiences. This transformative approach
                represents the future of web development, fostering a smarter
                and more responsive digital landscape. DIwise Web Development
                Services heralds a new era of digital innovation. Our team
                leverages AI, data intelligence, and technologies to craft
                dynamic, responsive, and highly personalized web solutions. From */}
                e-commerce platforms to interactive web apps, we create digital
                experiences that adapt to user behavior and exceed expectations.
                By seamlessly integrating intelligence into web development,
                DIwise empowers businesses to thrive in the ever-evolving
                digital landscape. Elevate your online presence and stay ahead
                with DIwise's transformative web development service.
              </p>
            </div>
            <div className="right"  data-aos="fade-up" data-aos-delay='200'></div>
          </section>
        </div>

        {/* section 2 starts here */}

        <section className="points">
          <div className="points-container"  data-aos="fade-up" data-aos-delay='200'>
            <TabbedSteps steps={stepsData} onSelectStep={handleStepSelect} />
            <div className="tutorial-content">
              <span className="step-icon">{stepsData[selectedStep].icon}</span>
              <h2>{stepsData[selectedStep].title}</h2>
              <p>{stepsData[selectedStep].content}</p>{" "}
            </div>
          </div>
        </section>

        {/* section 3 starts here */}

        <section className="dowedo">
          <div className="dowedo-container">
         
            <h2  data-aos="fade-down" data-aos-delay='200'>
              Lorem ipsum dolor sit,  Amet,
              adipisci!
            </h2>
            <p className="wedo"  data-aos="fade-up" data-aos-delay='400'>
              Our services encompass in-depth analysis, user-centric design,
              smart development, rigorous testing, and continuous optimization.
              With a focus on user experience and adaptability, DIwise delivers
              web applications that exceed expectations. We also offer ongoing
              support to ensure our clients' digital presence remains at the
              forefront of technological innovation.DIwise redefines web
              development, utilizing artificial intelligence and data
              intelligence for personalized, responsive, and efficient web
              solutions. Our comprehensive services include strategic analysis,
              user-centric design, AI-powered development, rigorous testing, and
              continuous optimization, ensuring peak performance and
              adaptability. We prioritize user experience, offering ongoing
              support to keep clients' digital presence innovative .
            </p>
          </div>
       
        </section>

        {/* section 4 starts here */}


        <section className="faq">
         <div className="faq-container">
          <h2  data-aos="fade-down" data-aos-delay='200'>FAQs</h2>
         <FAQAccordion faqData={faqData} />
         </div>
        </section>
      </div>
      <Beforefooter/>
    </>
  );
}

export default ServiceTemplate;
