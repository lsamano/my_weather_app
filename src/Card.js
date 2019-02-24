import React from 'react';
var moment = require('moment');

class Card extends React.Component {
  // Props: day, key(index)

  render() {
    let newDate = new Date();
    const weekday = this.props.day.dt * 1000
    newDate.setTime(weekday)

    return (
      <div className="col-sm-3">
        <div className="card">
          <img src="https://cdn3.iconfinder.com/data/icons/picons-weather/57/15_heavy_rain-512.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{moment(newDate).format('MMMM Do YYYY, h:mm a')}</h5>
            <p className="card-text">{this.props.day.weather[0].description}</p>
            <button className="btn btn-secondary">See Hourly Forecast</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
