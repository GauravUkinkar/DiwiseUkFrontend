import React, { useEffect, useState } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

function Contact() {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PORT_BACKEND}contact/addcontact`,
        contactData
      );
      alert("Form Submitted Successfully");
      window.location.reload();
    } catch (error) {
      alert("Something Wrong");
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact DIwise - Brand Building Agency in UK</title>
        <meta
          name="description"
          content="Contact us for queries related to PR and brand building, market research, social media marketing, web development, search engine optimization, and advertising."
        />
        <meta
          name="keyword"
          content="contact diwise, query for diwise, branding related query"
        />
        <link rel="canonical" href="https://diwise.uk/contact/" />
      </Helmet>
      <div className="contact">
        <div className="contact-container">
          <div className="contact-box">
            <div
              className="box1 box"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <form action="#" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="firstName"
                  value={contactData.firstName}
                  placeholder="First Name"
                  id="fname"
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      firstName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="lastName"
                  value={contactData.lastName}
                  placeholder="Last Name"
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      lastName: e.target.value,
                    })
                  }
                />
                <input
                  type="mail"
                  name="email"
                  value={contactData.email}
                  placeholder="Email"
                  id="mail"
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  type="tel"
                  name="contact"
                  value={contactData.contact}
                  placeholder="Phone"
                  id="phone"
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      contact: e.target.value,
                    })
                  }
                />
                <textarea
                  name="message"
                  id="mssg"
                  value={contactData.message}
                  cols="30"
                  placeholder="Type Your Message here...."
                  rows="10"
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      message: e.target.value,
                    })
                  }
                ></textarea>
                <input type="submit" id="subbtn" value="Send" className="btn" />
              </form>
            </div>
            <div
              className="box2 box "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <h2>
                {" "}
                <span>Contact</span> us
              </h2>
            </div>
            <div
              className="box3 box"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <a href="tel:+447398814161" className="contact-details">
                <div className="contact-icons">
                  <FaPhoneAlt />
                </div>
                <p>+44 7398 814161</p>
              </a>
              <a href="mailto:contact@diwise.uk" className="contact-details">
                <div className="contact-icons">
                  <HiMail />
                </div>
                <p>contact@diwise.uk</p>
              </a>
              <a
                href="https://www.google.com/maps/place/20+Tiller+Rd,+London+E14+8NN,+UK/@51.496442,-0.023376,325m/data=!3m1!1e3!4m6!3m5!1s0x487602c07cb69a7d:0x5c3397ee8d9f133f!8m2!3d51.496442!4d-0.023376!16s%2Fg%2F11cscvky_g?hl=en&entry=ttu"
                target="_blank"
                className="contact-details"
              >
                <div className="contact-icons">
                  <ImLocation />
                </div>
                <p>
                  Docklands Business Centre, Suite 12/3D 10-16 Tiller Road,
                  London, England E14 8PX
                </p>
              </a>
            </div>
            <a
              className="box4 box"
              data-aos="fade-up"
              data-aos-delay="1000"
              href="https://www.facebook.com/DIwiseLtd"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              className="box5 box"
              data-aos="fade-up"
              data-aos-delay="1000"
              href="https://www.instagram.com/diwiseltd/"
              target="_blank"
            >
              <GrInstagram />
            </a>
            <a
              className="box6 box"
              data-aos="fade-up"
              data-aos-delay="1000"
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FDIwiseLtd"
              target="_blank"
            >
              <FaXTwitter />
            </a>
            <a
              className="box7 box"
              data-aos="fade-up"
              data-aos-delay="1000"
              href="https://www.linkedin.com/company/diwiseltd"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
