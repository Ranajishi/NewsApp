import React from 'react'
import "./Homepage.css"
import Images from '../../Constant/Images'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Link to={"/news"}>
      <div className='banner_main'>
        <img src={Images.newimg1} alt="" className='banner'/>
        <div className="banner_content">
          <div className="category">weather</div>
          <div className="headline_home">UAE witnesses largest amount of rainfall in 75 years</div>
          <div className="last_update">Last Update: 20-04-2024
            <span><div className='start'>Start Reading</div></span>
          </div>
          
        </div>
      </div>
      </Link>
      
    </div>
  )
}

export default Homepage
