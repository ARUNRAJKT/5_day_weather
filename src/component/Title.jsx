import React,{useState} from "react";
import "./Title.css";

import Weather from "./weather/Weather";
class Title extends React.Component{
    
    state={
        setWeather:[],
        dateData:[],
        timeData:[]

    }

 componentDidMount=()=>{
            fetch (`http://api.openweathermap.org/data/2.5/forecast?zip=673571,IN&appid=4f35aa6018a7c52c068ab9fb74cf1576`)
          .then((res)=>res.json())
          .then(data=>{
              console.log("-----------Full data----------"+data)
              const dailyData=data.list.filter((reading)=>
              reading.dt_txt.includes("06:00:00")
              );
              let newDate=new Date();
              const date=`${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
              const time=`${newDate.getHours()}:${newDate.getMinutes()}`;
              this.setState(
                  {
                    setWeather:dailyData,
                    dateData:date,
                    timeData:time
                  },()=>console.log(this.state)
              );
            
          });
        }

 formatCard=()=>{
       return this.state.setWeather.map((reading,index)=>
       <Weather reading={reading} key={index}/>)
   }

  


 

render(){
   return (
    <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <div className="maindiv"><center><br />
                  <div className="title">
                      5 DAY WEATHER
                  </div>
                <div className="today">
                Today <br />
                {this.state.dateData} <br />
                {this.state.timeData}
                </div><br />
                <b id="spot">CALICUT, IN</b> 
                </center>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div> 
        <div className="row"><center>
        {this.formatCard()}
        </center>
                </div>
    </div>
);
}
}
export default Title;





