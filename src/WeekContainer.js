import React from 'react';
import Card from './Card';

const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?id=5128638&APPID=b5dd3702f6bc36a4fbeb45b3ab927dd8&cnt=7"

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
      <div>
      {this.formatCards()}
      </div>
    )
  }
}

export default WeekContainer
