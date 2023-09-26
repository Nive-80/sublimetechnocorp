import React, {useState} from 'react'
import "./ServicesCard.scss";
import {BsHourglassSplit} from "react-icons/bs"
import Service1 from "../../img/serviceimage1.webp"
export default function ServicesCard({title, link, backgroundImg}) {
    const [ishovered, setIsHovered] = useState(false);
    const cardStyle = {
        backgroundImg: `url(${backgroundImg})`,
    }
    const handleMouserOver=()=> {
        setIsHovered(true);
    };
    const handleMouserLeave=()=> { 
        setIsHovered(false);
    };
    return (
    <div  className="services-card"
    style={cardStyle}
    onMouseEnter={handleMouserOver}
    onMouseLeave={handleMouserLeave}>
        <div>
            <BsHourglassSplit size={50} />
        </div>
        <div className='services-card-content'>
            <div className='services-card-title-div'>

            <h3 className='services-card-title'>{title}</h3>
            </div>
            <div>
                <hr />
            </div>
            <a className='service-link' href={link}>KNOW MORE</a>
        </div>
    </div>
  )
}
