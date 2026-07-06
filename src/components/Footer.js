import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../img/logowhite.svg";

function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer-container">
        <div className="footer-top">
          <div className="col1 col">
            <Link className="logo">
              <img src={logo} alt="" />
            </Link>
            <a href="tel:+447398814161"> +44 7398 814161</a>
            <a href="mailto:contact@diwise.uk"> contact@diwise.uk</a>
          </div>
          <div className="col2 col">
            <p className="title">Services</p>
            <Link to="/pr&branding">PR Branding</Link>
            <Link to="/marketresearch">Marketing</Link>
            <Link to="/webdevelopment">Web Development</Link>
            <Link to="/seo">SEO</Link>
            <Link to="/socialmediamarketing">Social Media Marketing</Link>
            <Link to="/sem">Search Engine Marketing</Link>
            <Link to="/influencemarketing">Influencer Marketing</Link>
            <Link to="/digitalmediahealthcheck">
              Digital Media Health Check
            </Link>
          </div>
          <div className="col3 col">
            <p className="title">Company</p>
            <Link to="/about">About</Link>
            {/* <Link>Career</Link> */}
            <Link to="/blogs">Blogs</Link>
            <Link to="contact">Contact</Link>
          </div>
          <div className="col4 col">
            <p className="title">Legal</p>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms_and_conditions"> T&Cs</Link>
            <Link to="/discliamer">Disclaimer</Link>
            <Link to="/cookies">Cookies Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copy">
            Copyright @ {new Date().getFullYear()} All Rights Reserved | <a href="https://diwise.uk/" target="_blank">DIwise</a>
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/DIwiseLtd" target="_blank">
              <FaFacebookF />
            </Link>

            <Link to="https://www.instagram.com/diwiseltd/" target="_blank">
              <BsInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/diwiseltd"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://twitter.com/i/flow/login?redirect_after_login=%2FDIwiseLtd"
              target="_blank"
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
