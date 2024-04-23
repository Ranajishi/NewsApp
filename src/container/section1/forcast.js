import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./Sectionweather.css"
import apiKeys from "../section1/ApiKeys";
import ReactAnimatedWeather from "react-animated-weather";
import { Form } from "react-bootstrap";
import { GrFormSearch } from "react-icons/gr";
import "./Sectionweather.css"


function Forcast(props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  const search = (city) => {
    axios
      .get(
        `${apiKeys.base}weather?q=${
          city != "[object Object]" ? city : query
        }&units=metric&APPID=${apiKeys.key}`
      )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
      })
      .catch(function (error) {
        console.log(error);
        setWeather("");
        setQuery("");
        setError({ message: "Not Found", query: query });
      });
  };
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  const defaults = {
    color: "white",
    size: 112,
    animate: true,
  };

  useEffect(() => {
    search("Delhi");
  }, []);

  return (
    <div className="weather_section_r">
      
      <div className="today-weather">
      <div className="cloud1">
        <ReactAnimatedWeather
          icon={props.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
          className="cloud"
        />
      </div>
        <h3 className="wether_ty">{props.weather}</h3>
        <div className='serch_w'>
                  <Form.Control
                      type="text"
                      placeholder="Search any city"
                      className=" mr-sm-2 search_in_w"
                      onChange={(e) => setQuery(e.target.value)}
                      value={query}
                  />
                  <GrFormSearch className='ser_icon_w' onClick={search}/>
              </div>
        <div>
          {typeof weather.main != "undefined" ? (
            <div>
              {" "}
              <div className="cityHead">
                <h5 style={{color: "white"}}>
                  {weather.name}, {weather.sys.country}
                </h5>
                {/* <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                /> */}
              </div>
              <div className="row1">
              <div className="detail">
              <div className='line'>

                <p className="condition">Temperature</p>
                <h2 className="value">{Math.round(weather.main.temp)}°c  <span>-{weather.weather[0].main}</span></h2>
                </div>
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
          ) : (
            <div>
              {error.query} {error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Forcast;
