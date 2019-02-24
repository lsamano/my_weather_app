import React from 'react';
import Card from './Card';
import apiConfig from './apiKeys';

const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?id=5128638&cnt=7&APPID=" + apiConfig.openWeatherMapKey

class WeekContainer extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => this.setState({days: data.list}, console.log("Data List Loaded", data.list)))
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="container">
      <h1 className="display-1">5-Day Forecast.</h1>
        <div className="row">

          {this.formatCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer
