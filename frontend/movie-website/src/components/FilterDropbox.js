import React from "react";
import '../App.css'

const FilterDropbox = ({changeRatingFilter}) => {


//   const changeRatingFilte = (e) => {
//     console.log(e.target.value);
//   }

  return (<>
    <div className="rating-filter-dropbox">
      <label htmlFor="rating">
        Choose a rating to filter:

        <select name="rating" onChange={(e) => {changeRatingFilter(e.target.value)}}>
          <option defaultValue="All Movies">All Movies</option>
          <option value="G">G</option>
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
          <option value="NC-17">NC-17</option>
        </select>
      </label>
    </div>
  </>);
}

export default FilterDropbox;