import React, {useState} from 'react'
import "./ServicesCard.scss";
import {BsHourglassSplit} from "react-icons/bs"
import {BsArrowUpRight} from "react-icons/bs";
import Service1 from "../../img/serviceimage1.webp"
export default function ServicesCard({title, link, backgroundImg}) {
    const [ishovered, setIsHovered] = useState(false);
   
    const handleMouserOver=()=> {
        setIsHovered(true);
    };
    const handleMouserLeave=()=> { 
        setIsHovered(false);
    };
    return (
    <div  className="services-card"
    style={ishovered ? {backgroundImage:`url(${backgroundImg})`} : null}
    onMouseEnter={handleMouserOver}
    onMouseLeave={handleMouserLeave}>
        <div>
            <BsHourglassSplit size={50} fill='#214a7d' />
        </div>
        <div className='services-card-content'>
            <div className='services-card-title-div'>

            <h3 className='services-card-title'>{title}</h3>
            </div>
            <div>
                <hr />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: "10px"}}>

            <a className='service-link' href={link}>KNOW MORE</a>
            <BsArrowUpRight size={15} fill='#214a7d' />
            </div>
        </div>
    </div>
  )
}
