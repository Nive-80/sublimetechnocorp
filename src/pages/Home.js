import React from "react";
import "./Home.scss";
import Navbar from "../components/navbar/Navbar";
import SublimeVideo from "../img/Y2Mate.mp4";
import WelcomeImg from "../img/wel.jpg";
import { ServicesCardData } from "../components/home/ServicesCardData";
import ServicesCard from "../components/home/ServicesCard";
import { BsRecordCircleFill } from "react-icons/bs";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
import Swiper from "react-id-swiper";
import "../../node_modules/swiper/swiper.scss";
import Carousel3D from "../components/home/Carousel3D";

export default function Home() {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="home-video">
          <video autoPlay loop muted className="video-element">
            <source src={SublimeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-overlay">
            <h1 style={{ fontSize: "50px" }}>Sublime Technocorp Pvt Ltd</h1>
            <p style={{ fontSize: "22px" }}>
              WE ARE YOUR ALLIES IN LEADING TECHNOLOGICAL FORAYS
            </p>
          </div>
        </div>
        <div className="welcome-container">
          <div className="welcome-content-container">
            <div>
              <h5 style={{ color: "#696969" }}>
                WE AT, SUBLIME TECHNOCORP PVT LTD
              </h5>
            </div>
            <div
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                lineHeight: "70px",
              }}
            >
              Building Your Future Organisations Through Technology And
              Automation Aids
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "#000000c4",
                marginTop: "20px",
                fontWeight: "400",
              }}
            >
              We are a Technology company, and work passionately towards
              creating solutions of tomorrow. We are driven by the purpose of
              making work easier for our clients though streamlining, automation
              and other efficient technological contributions. We aspire to work
              on assignments and challenges that have not been addressed before
              and develop effective, timely and economic solution.
            </div>
          </div>
          <div className="welcome-image">
            <img src={WelcomeImg} alt="Welcome Image" className="welcomeimg" />
          </div>
        </div>
        <div className="how-we-work-container">
          <div className="how-we-work-title">
            <h3>How do we do it?</h3>
          </div>
          <div className="how-we-work-content">
            <p
              style={{
                fontSize: "22px",
                color: "#000000c4",
                marginTop: "20px",
                fontWeight: "400",
              }}
            >
              We develop global custom software development services for
              start-ups, SMEs MSMEs, and Corporates businesses.
              <br /> We work on an agile system, an end-to-end product lifecycle
              management model that encompasses conceptualization, front-end and
              back-end coding, deployment, and QA.
            </p>
          </div>
        </div>
        <div className="what-we-provide-container">
          <div className="line-shape">
            <p className="section-title">WHAT WE PROVIDE</p>
          </div>
          <div className="title-block-lg">
            <h3>OUR SERVICES</h3>
          </div>
        </div>
        <div className="services-container">
          <div className="services-div">
            <div className="services">
              {ServicesCardData.map((service) => (
                <ServicesCard
                  title={service.title}
                  subtitle={service.subtitle}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="we-ensure-container">
          <div className="we-ensure-title">
            <span
              style={{
                fontSize: "44px",
                letterSpacing: "4px",
                fontWeight: "600",
              }}
            >
              We ensure
            </span>
          </div>
          <div className="we-ensure-list">
            <ul type="none" className="we-ensure-list-ul">
              <li className="we-ensure-list-li">
                <BsRecordCircleFill />
                Real-time project mapping and deliveries
              </li>
              <li className="we-ensure-list-li">
                <BsRecordCircleFill />
                Developing scalable solutions
              </li>
              <li className="we-ensure-list-li">
                <BsRecordCircleFill />
                System integration & support
              </li>
            </ul>
          </div>
        </div>
        <div className="working-on-what-matters-containers">
          <div className="matters-content">
            <div className="matters-title">
              <span
                style={{
                  fontSize: "44px",
                  letterSpacing: "4px",
                  fontWeight: "500",
                }}
              >
                Working on what matters
              </span>
              <p
                style={{
                  fontSize: "20px",
                  letterSpacing: "2px",
                  lineHeight: "30px",
                  color: "#000000c4",
                }}
              >
                We build digital experiences and brands that people fall in love
                with. When I hear the buzz of the little world among the stalks,
                and grow familiar with the countless indescribable.
              </p>
            </div>
          </div>
          <div className="matters-list">
            <ul type="none" style={{ marginLeft: "30px" }}>
              <li className="matters-list-li">
                <div className="matters-list-li-icon">
                  <IoChevronForwardCircleSharp size={40} />
                </div>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "bolder" }}>
                    Backend
                  </div>
                  <p style={{ color: "#000000c4", lineHeight: "30px" }}>
                    Laravel, CodeIgniter, Yii, Django, Nodejs
                  </p>
                </div>
              </li>
              <li className="matters-list-li">
                <div className="matters-list-li-icon">
                  <IoChevronForwardCircleSharp size={40} />
                </div>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "bolder" }}>
                    Frontend
                  </div>
                  <p style={{ color: "#000000c4", lineHeight: "30px" }}>
                    HTML5, CSS3, Angular, Bootstrap, JavaScript, ReactJS, Vuejs,
                    ExpressJS, THREEjs
                  </p>
                </div>
              </li>
              <li className="matters-list-li">
                <div className="matters-list-li-icon">
                  <IoChevronForwardCircleSharp size={40} />
                </div>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "bolder" }}>
                    Mobile
                  </div>
                  <p style={{ color: "#000000c4", lineHeight: "30px" }}>
                    Java, Kotlin, Swift, Flutter, React native
                  </p>
                </div>
              </li>
              <li className="matters-list-li">
                <div className="matters-list-li-icon">
                  <IoChevronForwardCircleSharp size={40} />
                </div>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "bolder" }}>
                    Data Science
                  </div>
                  <p style={{ color: "#000000c4", lineHeight: "30px" }}>
                    Python, Panda, TensorFlow, Tableau, Power BI
                  </p>
                </div>
              </li>
              <li className="matters-list-li">
                <div className="matters-list-li-icon">
                  <IoChevronForwardCircleSharp size={40} />
                </div>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "bolder" }}>
                    Database
                  </div>
                  <p style={{ color: "#000000c4", lineHeight: "30px" }}>
                    MySQL, MS SQL, MongoDB, Oracle, NoSQL, Bigdata
                  </p>
                </div>
              </li>
              <li className="matters-list-li">
                <div className="matters-list-li-icon">
                  <IoChevronForwardCircleSharp size={40} />
                </div>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "bolder" }}>
                    Microsoft .net framework
                  </div>
                  <p style={{ color: "#000000c4", lineHeight: "30px" }}>
                    C#, Asp.Net, MVC, CORE
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="why-us-container">
          <div style={{ marginTop: "200px" }}>
            <div className="why-us-div">
              <div className="why-us-content">
                <h2
                  style={{
                    fontSize: "44px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                  }}
                >
                  WHY US ?
                </h2>
                <p
                  style={{
                    fontSize: "22px",
                    lineHeight: "30px",
                    color: "#000000c4",
                    letterSpacing: "1.5px",
                  }}
                >
                  We deliver end-to-end software development services across
                  various industries developing solutions that are dynamic,
                  comprehensive, and designed around subject-matter expertise.
                </p>
                <div>
                  <ul type="none">
                    <li className="why-us-li">
                      <span>
                        <BsCheckLg size={25} />
                      </span>
                      We have developed pioneering solutions for clients across
                      their unique needs
                    </li>
                    <hr />
                    <li className="why-us-li">
                      <span>
                        <BsCheckLg size={25} />
                      </span>
                      We are at the forefront of technology and adapt the latest
                    </li>
                    <hr />
                    <li className="why-us-li">
                      <span>
                        <BsCheckLg size={25} />
                      </span>
                      We are the trusted technology and resource partners for
                      number of companies
                    </li>
                    <hr />
                    <li className="why-us-li">
                      <span>
                        <BsCheckLg size={25} />
                      </span>
                      Delivering on time and within budget
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-works-container">
          <div className="our-works-title">
            <p style={{ fontSize: "16px", letterSpacing: "1.8px" }}>
              FIND WHAT FACINATES YOU
            </p>
            <span
              style={{
                fontSize: "44px",
                fontWeight: "bolder",
                letterSpacing: "2px",
              }}
            >
              OUR WORKS
            </span>
          </div>

          <div  style={{ display:"flex" , justifySelf: "center" , margin: "100px auto"  , width: "100%" , height: "20%"}}>
            <Carousel3D />
          </div>
          <div className="our-partners-container">
            <div className="our-partners-div">
              <p style={{ fontSize: "16px", letterSpacing: "4px" }}>
                OUR PARTNERS
              </p>
              <h3
                style={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  lineHeight: "50px"
                }}
              >
                YOUR SUCCESS, <br/>OUR REPUTATION
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
