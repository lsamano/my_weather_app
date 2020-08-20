import React from 'react';

const Search = ({degreeType, updateForecastDegree}) => {
  return (
    <React.Fragment>
      <span className="switch">
      <input type="checkbox" className="slider" id="switch-id"/>
      </span>

      <span className="switch">
  <input type="checkbox" className="switch" id="switch-id"/>
  <label for="switch-id">Small switch</label>
</span>


      <div class="form-check form-check-inline">
        <input
        class="form-check-input"
        type="radio"
        name="degree-type"
        id="celsius"
        value="metric"
        checked={degreeType === "metric"}
        onChange={event => updateForecastDegree(event.target.value)}/>
        <label class="form-check-label" for="celsius">Celsius</label>
      </div>
      <div class="form-check form-check-inline">
        <input
        class="form-check-input"
        type="radio"
        name="degree-type"
        id="farenheit"
        value="imperial"
        checked={degreeType === "imperial"}
        onChange={event => updateForecastDegree(event.target.value)}/>
        <label class="form-check-label" for="farenheit">Farenheit</label>
      </div>
    </React.Fragment>
  )
}

export default Search;
