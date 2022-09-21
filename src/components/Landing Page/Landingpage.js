import React from 'react'
// import heroBg from "../../assets/images/hero-bg.png"
import herobg2 from "../../assets/images/herobg2.jpeg"

const landingpage = () => {
  return (
    <div className="hero-section d-flex justify-content-between">
      <div>
        <h1 className="header-text">
          Easy scheduling <br />
          <span className="span-header-text"> ahead</span>
        </h1>
        <p height="auto" className="hero-bg-sub-text">
          Calendly is your hub for scheduling meetings professionally and
          efficiently, eliminating the hassle of back-and-forth emails so you
          can get back to work.
        </p>
      </div>

      <img src={herobg2} alt="calsy-logo" className="hero-bg-img" />
    </div>
  );
}

export default landingpage