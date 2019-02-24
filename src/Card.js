import React from 'react';

class Card extends React.Component {
  // Props: day, key(index)

  render() {
    return (
      <div>
      {this.props.day.weather[0].main}
      </div>
    )
  }
}

export default Card
