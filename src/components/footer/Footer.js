import React from "react";

import "./Footer.scss";
export default function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <ul><h4>Sitemap</h4></ul>
          <ul type="none">
            <li>Home</li>
            <li>About Us</li>
            <li>Work</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul><h4>Services</h4></ul>
          <ul type="none">
            <li>Cloud Transformation</li>
            <li>Dedicated Developers</li>
            <li>Custom Software Development</li>
            <li>Product Development Services</li>
            <li>Data Analytics Services</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul><h4>Works</h4></ul>
          <ul type="none">
            <li>Under Ground Mines ERP</li>
            <li>AI Based Health Monitoring</li>
            <li>Solar Web Application</li>
            <li>Online Bidding Facilitating</li>
            <li>Material Testing & Lab Automation</li>
            <li>Farmers Connect Application</li>
            <li>Shipping Management Solution</li>
            <li>Magnum Facility Management ERP</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul><h4>Works</h4></ul>
          <ul type="none">
            <li>Digital NGO Platform</li>
            <li>Bridgit Parenting & Schooling App</li>
            <li>Profitability & Implementation Tracker</li>
            <li>Sublime Client Management System</li>
            <li>Online Laundry – Order Management System</li>
            <li>Logistics Solutions ERP</li>
            <li>Sports Ecosystem</li>
            <li>Webion Virtual Online Shopping</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@2023 Sublime Technocorp Pvt Ltd</p>
      </div>
    </footer>
  );
}
