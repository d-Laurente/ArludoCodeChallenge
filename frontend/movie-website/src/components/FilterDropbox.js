import React from "react";
import '../App.css'

// React component that filters movies by value from dropbox
const FilterDropbox = ({changeRatingFilter}) => {

  // Passes to parent component function the value from the drop box
  return (<>
    <div className="rating-filter-dropbox">
      <label className="dropbox-label" htmlFor="rating">Choose a rating to filter:</label>

      <select className="form-select rating-dropbox" name="rating" onChange={(e) => {changeRatingFilter(e.target.value)}}>
        <option defaultValue="All Movies">All Movies</option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="NC-17">NC-17</option>
      </select>
    </div>
  </>);

}

export default FilterDropbox;
