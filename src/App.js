import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY="ca63205ec6d3fbf9c6d4d6f2813ecb5b";

class App extends React.Component{

  state={
    temprature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
 
  getWeather=async(e) =>{ 
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data=await api_call.json();

    if(city && country)
    {   
    console.log(data);
    this.setState({
          temprature:data.main.temp, 
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:""
    });
    }  
    else{
      this.setState({
        temprature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please enter the value"
      });
    }
  }

  render(){
    return(
      
      <div>
        <div className="wrapper">
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 title-container">
                          <Titles/>
                        </div>
                        <div className="col-md-6 form-container">
                          <Form getWeather={this.getWeather}/> 
                          <Weather
                             temprature={this.state.temprature}
                             city={this.state.city}
                             country={this.state.country}
                             humidity={this.state.humidity}
                             description={this.state.description}
                             error={this.state.error}
                             />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};




export default App;