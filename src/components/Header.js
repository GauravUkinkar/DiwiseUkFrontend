import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setTimeout(() => {
      setIsActive(!isActive);
    }, 200);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      var scrollPosition = window.scrollY;
      var shouldHaveBlackBackground = scrollPosition > 70;
      console.log(isScrolled + scrollPosition);

      setIsScrolled(shouldHaveBlackBackground);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`navbar ${isScrolled ? "scrolled" : ""} `}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="navbar-container">
          <Link to="/" className={`logo interact ${isActive ? "navlogo" : ""}`}></Link>
          
        {/* <img src={logoblack} alt="" /> */}
          <div
            className={`menu interact ${isActive ? "closeicon" : ""}`}
            onClick={handleToggleNav}
          >
            <span className="interact"></span>
            <span className="interact"></span>
            <span className="interact"></span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="sidenav"
            initial={{ width: "100%", height: 0 }}
            animate={{ width: "100%", height: "100%", borderRadius: 0, x: 0 }}
            exit={{ width: "100%", height: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.ol className="links" exit={{ fontSize: "0%"}}>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}exit={{ fontSize: "0%"}}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              >
                <Link to="/" className="interact" onClick={handleToggleNav}>
                  Home 
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}exit={{ fontSize: "0%"}}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
              >
                <Link to="/about" className="interact"onClick={handleToggleNav} >
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
              >
                <Link to="/#service" className="interact"onClick={handleToggleNav} >
                  Services
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
              >
                {/* <Link to="/service" className="interact"onClick={handleToggleNav} >
                  Case Studies
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
              > */}
                <Link to="/blogs" className="interact"onClick={handleToggleNav} >
                  Blogs
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
              >
                <Link to="/contact" className="interact"onClick={handleToggleNav} >
                  Contact
                </Link>
              </motion.li>
            </motion.ol>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
