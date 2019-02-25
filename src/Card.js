import React from 'react';
import './Card.css';
var moment = require('moment');

class Card extends React.Component {
  // Props: day, key(index)

  render() {
    let newDate = new Date();
    const weekday = this.props.day.dt * 1000
    newDate.setTime(weekday)

    const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x red"

    const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32


    return (
      <div className="col-auto">
        <div className="card">
          <h5 className="card-title">{moment(newDate).format('MMMM Do, h:mm a')}</h5>
          <i className={imgURL}></i>
          <h2>{Math.floor(farenheit)} °F</h2>
          <div className="card-body">
            <p className="card-text">{this.props.day.weather[0].description}</p>
            <button className="btn btn-dark btn-outline-light">See Hourly Forecast</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
