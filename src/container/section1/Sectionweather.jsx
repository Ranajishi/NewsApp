import React from "react";
import apiKeys from "../section1/ApiKeys";
import Clock from "react-live-clock";
import Forcast from "../section1/forcast";
// import loader from "./images/WeatherIcons.gif";
import ReactAnimatedWeather from "react-animated-weather";
import "./Sectionweather.css"


import "./Sectionweather.css"
import Images from "../../Constant/Images";
const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};
const defaults = {
  color: "white",
  size: 112,
  animate: true,
};
class Sectionweather extends React.Component {
  state = {
    lat: undefined,
    lon: undefined,
    errorMessage: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: "CLEAR_DAY",
    sunrise: undefined,
    sunset: undefined,
    errorMsg: undefined,
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        //If user allow location service then will fetch data & send it to get-weather function.
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
          this.getWeather(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
        });
    } else {
      alert("Geolocation not available");
    }

    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // tick = () => {
  //   this.getPosition()
  //   .then((position) => {
  //     this.getWeather(position.coords.latitude, position.coords.longitude)
  //   })
  //   .catch((err) => {
  //     this.setState({ errorMessage: err.message });
  //   });
  // }

  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
  getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      country: data.sys.country,
      // sunrise: this.getTimeFromUnixTimeStamp(data.sys.sunrise),

      // sunset: this.getTimeFromUnixTimeStamp(data.sys.sunset),
    });
    switch (this.state.main) {
      case "Haze":
        this.setState({ icon: "CLEAR_DAY" });
        break;
      case "Clouds":
        this.setState({ icon: "CLOUDY" });
        break;
      case "Rain":
        this.setState({ icon: "RAIN" });
        break;
      case "Snow":
        this.setState({ icon: "SNOW" });
        break;
      case "Dust":
        this.setState({ icon: "WIND" });
        break;
      case "Drizzle":
        this.setState({ icon: "SLEET" });
        break;
      case "Fog":
        this.setState({ icon: "FOG" });
        break;
      case "Smoke":
        this.setState({ icon: "FOG" });
        break;
      case "Tornado":
        this.setState({ icon: "WIND" });
        break;
      default:
        this.setState({ icon: "CLEAR_DAY" });
    }
  };

  render() {
    if (this.state.temperatureC) {
      return (
        <React.Fragment>
          <div className="weather_section">
            <div className="weather_section_l">
              
            <img src={Images.clouds} alt="" className="cloud" />

              <div className="temp">
                  
                    {this.state.temperatureC}°<span>C </span>
                    </div>
                    <div className="tmp_p">{this.state.main}</div>

                  

                  {/* <span className="slash">/</span>
                  {this.state.temperatureF} &deg;F */}
              <div className="date-time">
                <div className="dmy">
                  <div id="txt"></div>
                  <div className="current-time">
                    <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                  </div>
                  <div className="current-date">{dateBuilder(new Date())}</div>
                </div>
                
                <div className="locan">
                  {this.state.city}, {this.state.country}
                </div>
              </div>
            </div>
            <Forcast icon={this.state.icon} weather={this.state.main} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {/* <ReactAnimatedWeather/> */}
          <img src={Images.logo} style={{ width: "60px", WebkitUserDrag: "none" , marginTop: "100px" }} />
          <h3 style={{ color: "black", fontSize: "20px", fontWeight: "600" }}>
            Detecting your location
          </h3>
          <h3 style={{ color: "black",fontSize: "20px", marginTop: "10px" }}>
            Your current location wil be displayed on the App <br></br> & used
            for calculating Real time weather.
          </h3>
        </React.Fragment>
      );
    }
  }
}

export default Sectionweather;
