import React from "react";
import "./weather.css";


var moment = require('moment')


const Weather=({reading})=>{
  let newDate= new Date();
  console.log(newDate)
  const weekday=reading.dt*1000;
  newDate.setTime(weekday)
  const imgUrl=`owf owf-${reading.weather[0].id}owf-5x`
return(
   
               
                  <div className="col-lg-2" id="card">
                    <h3>{moment(newDate).format('dddd')}</h3>
                    <h3>{moment(newDate).format('MMMM')}</h3>
                    <h4>{moment(newDate).format('hh:mm a')}</h4>
                    <h1>{Math.round(((reading.main.temp)-32)*5/9)}°C</h1>
                    <p>{reading.weather[0].description}</p>
                  </div>
);
}
export default Weather;