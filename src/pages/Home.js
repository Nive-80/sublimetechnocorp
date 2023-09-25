import React from "react";
import "./Home.scss";
import Navbar from "../components/navbar/Navbar";
import SublimeVideo from "../img/Y2Mate.mp4";
import WelcomeImg from "../img/wel.jpg";
export default function Home() {
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
                color: ": #696969",
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
                color: ": #696969",
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
      </div>
    </>
  );
}
