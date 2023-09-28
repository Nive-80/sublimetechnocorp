import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel3D.scss";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Work1 from "../../img/work1.jpg";
import Work2 from "../../img/work2.jpg";
import Work3 from "../../img/work3.jpg";
import Work4 from "../../img/work4.jpg";
import Work5 from "../../img/work5.jpg";
import Work6 from "../../img/work6.jpg";

import Work7 from "../../img/work7.jpg";

import Work8 from "../../img/work8.webp";

import Work9 from "../../img/work9.jpg";

import Work10 from "../../img/work10.jpg";
export default function Carousel3D() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={true}
        delay={4000}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ backgroundImage: `url(${Work1})` }}>
          <a href="/works/online-laundry-order-management-system" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Online Laundry - Order Management System</h2>
                <a href="/works/online-laundry-order-management-system" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: `url(${Work2})` }}>
          <a href="/works/underground-mines-erp" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Under Ground Mines ERP</h2>
                <a href="/works/underground-mines-erp" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${Work3})` }}>
          <a href="/works/ai-based-health-monitoring-system" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>AI Based Health Monitoring</h2>
                <a href="/works/ai-based-health-monitoring-system" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${Work4})` }}>
          <a href="/works/solar-web-application" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Solar Web Application</h2>
                <a href="/works/solar-web-application" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${Work5})` }}>
          <a href="/works/online-bidding-facilitating" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Online Bidding Facilitating</h2>
                <a href="/works/online-bidding-facilitating" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${Work6})` }}>
          <a href="/works/material-testing-lab-automation" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Material Testing & Lab Automation</h2>
                <a href="/works/material-testing-lab-automation" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${Work7})` }}>
          <a href="/works/farmers-connect-application" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Farmers Connect Application</h2>
                <a href="/works/farmers-connect-application" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${Work8})` }}>
          <a href="/works/shipping-management-solution" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Shipping Management Solution</h2>
                <a href="/works/shipping-management-solution" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${Work9})` }}>
          <a href="/works/sports-ecosystem" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Sports Ecosystem</h2>
                <a href="/works/sports-ecosystem" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${Work10})` }}>
          <a href="/works/logistic-solution-erp" className="slide-link">
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ fontSize: "24px" }}>Logistics Solutions ERP</h2>
                <a href="/works/logistic-solution-erp" className="know-more">
                  VIEW PROJECT{" "}
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
