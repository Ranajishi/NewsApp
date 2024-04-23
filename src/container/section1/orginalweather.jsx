
import React from 'react'
import "./Sectionweather.css"
import { Form } from 'react-bootstrap'
import { GrFormSearch } from 'react-icons/gr'
import Images from '../../Constant/Images'

const orginalweather = () => {

  
  return (
    <div className='weather_section_main'>
      <div className="weather_section">
        <div className="weather_section_l">
              <div className='serch_w'>
                  <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2 search_in"
                  />
                  <GrFormSearch className='ser_icon_w'/>
              </div>
              <img src={Images.clouds} alt="" className="cloud" />
              <div className="temp">{this.state.temperatureC}°<span>C</span></div>
              <div className="tmp_p">mostly Cloudy</div>

              <div className='day'>
                {/* 19-April-2024 <br/>Friday,<Clock format="HH:mm:ss" interval={1000} ticking={true} /><br/>Day */}
                <div className="current-time">
                  <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                </div>
                <div className="current-date">{dateBuilder(new Date())}</div>
              
                </div>
              <div className="locan">{this.state.city}, {this.state.country}</div>

        </div>
        <div className="weather_section_r">
          <div className="w_r">
            <div className="row1">
              <div className="detail">
              <div className='line'>

                <p className="condition">Temperature</p>
                <h2 className="value">{Math.round(weather.main.temp)}°c </h2>
                </div>
                <p className="thirdvalue">{weather.weather[0].main}</p>
              </div>
              <div className="detail">
              <div className='line'>

                <p className="condition">Humidity</p>
                <h2 className="value">{Math.round(weather.main.humidity)}%</h2>
                </div>
                {/* <p className="thirdvalue">Est</p> */}
              </div>

            </div>
            <div className="row1">
              <div className="detail">
              <div className='line'>

                <p className="condition">Visibility</p>
                <h2 className="value">{Math.round(weather.visibility)} mi</h2>
                </div>
                {/* <p className="thirdvalue"></p> */}
              </div>
              <div className="detail">
              <div className='line'>

                <p className="condition">Wind Speed</p>
                <h2 className="value">{Math.round(weather.wind.speed)} Km/h</h2>
                </div>
                <p className="thirdvalue"></p>
              </div>

            </div>
            
          </div>

        </div>

      </div>
    </div>
  )
}

export default orginalweather
