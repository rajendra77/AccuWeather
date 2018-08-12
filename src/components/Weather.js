import React from "react";
class Weather extends React.Component{
  render(){
    return(
        <div className="weather__info">
         
         <span className="weather__key"> {this.props.city && this.props.country && <p>Loacation={this.props.city},{this.props.country}</p>} </span>     
         <span className="weather__key">{this.props.temprature && <p>Temprature={this.props.temprature}</p>}</span>  
         <span className="weather__key">{this.props.humidity && <p>Humidity={this.props.humidity}</p>}</span>     
         <span className="weather__key"> {this.props.description && <p>Conditions={this.props.description}</p>}</span>     
         <span className="weather__error"> {this.props.error && <p>{this.props.error}</p>}</span>     
          
        </div>
    );
  }
};

export default Weather;