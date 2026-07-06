import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./beforefooter.css";
import AOS from "aos";
import "aos/dist/aos.css";
import vid from "../img/vid.webm";

function Beforefooter() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="beforefooter">
      <div className="bgfoot"></div>
      <div className="hook-box">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            objectFit: "cover",
          }}
        >
          <source src={vid} type="video/webm" />
        </video>
        <h3 data-aos="fade-down" data-aos-delay="300">
          Want more information?
        </h3>
        <p data-aos="fade-down" data-aos-delay="200">
          Connect to get expert advice.
        </p>
        <Link
          to="/contact"
          className="btn"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {" "}
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Beforefooter;
