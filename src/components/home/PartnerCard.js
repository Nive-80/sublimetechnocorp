import React, { useState } from "react";
import "./PartnerCard.scss";

export default function PartnerCard({ img, title }) {
  const [ishovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        className={`partner-card ${ishovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {ishovered ? (
          <div className="text">{title}</div>
        ) : (
          <>
            <div className="image-container">
              <img className="image" src={img} alt="Image" />
            </div>
            {/* <div className="overlay"></div> */}
          </>
        )}
      </div>
    </>
  );
}
