import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
import ServiceTemplate from "./components/ServiceTemplate";
import pr from "./pages/S1-pr";
import mr from "./pages/S2-mr";
import Web from "./pages/S3-web";
import smm from "./pages/S4-smm";
import seo from "./pages/S5-seo";
import sem from "./pages/S6-sem";
import im from "./pages/S7-im";
import smhc from "./pages/S8-smhc";
import ScrollToTop from "./pages/ScrollToTop";
import c1 from "./pages/C1";
import BlogLayout from "./components/BlogLayout";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Cookies from "./pages/Cookies";
import { Helmet } from "react-helmet";
import Terms_and_conditions from "./pages/Terms_and_conditions";
import PageNotFound from "./pages/PageNotFound";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
    useEffect(() => {
      ReactGA.initialize("G-XE168XP185"); // Initialize Google Analytics
      ReactGA.send({ hitType: "pageview", page: window.location.pathname }); // Send initial page view
    }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Helmet>
          <title>
            Mastering: Strategies for Successful Brand Development in UK
          </title>
          <meta
            name="description"
            content="DIwise is a research and technology PR marketing firm in the UK. Our expertise includes social media marketing, web development, SEO, and advertising.
"
          />
          <meta
            name="keywords"
            content="Web development, social media marketing, SEO, SEM, advertising, 
"
          />
        </Helmet>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/servicetemp" Component={ServiceTemplate} />
          <Route path="/pr&branding" Component={pr} />
          <Route path="/marketresearch" Component={mr} />
          <Route path="/webdevelopment" Component={Web} />
          <Route path="/socialmediamarketing" Component={smm} />
          <Route path="/seo" Component={seo} />
          <Route path="/sem" Component={sem} />
          <Route path="/influencemarketing" Component={im} />
          <Route path="/digitalmediahealthcheck" Component={smhc} />
          <Route path="/casestudy1" Component={c1} />
          <Route path="/blogs/:blog_id" Component={BlogLayout} />
          <Route path="/privacy" Component={Privacy} />
          <Route path="/discliamer" Component={Disclaimer} />
          <Route path="/cookies" Component={Cookies} />
          <Route path="*" Component={PageNotFound} />
          <Route
            path="/terms_and_conditions"
            Component={Terms_and_conditions}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
