import React from "react";
import { formatTo24h, sortTimeList, timePassed } from '../utils/TimeUtil';

const MovieCards = (props) => {

  // return movie times when given a movie id
  const showTimes = (mid) => {
    let times = [];
    const mtimes = props.tinfo.showtimes[mid];
    sortTimeList(props.tinfo.showtimes[mid])
    for (let i = 0; i < mtimes.length; i++) {
      let showingTime = formatTo24h(mtimes[i])
      if (timePassed(props.currTime, showingTime)) {
        times.push(<span className="time-text" style={{ "color": "grey"}}>{mtimes[i].replace(' ', '')}  </span>)
      }
      else {
        times.push(<span className="time-text" style={{ "color": "black"}}>{mtimes[i].replace(' ', '')}  </span>)
      }
    }
    return times;
  }

  return (<>
    <ul>
      {
        props.movies.map((val, idx) => {
          return (<>
            {/* <li>{val}</li> */}
              {/* style={{ "maxWidth": "50%"}} */}
              <div className="shadow-lg card mb-3 theatre-card-size">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={val.poster} className="card-img movie-card-img" alt={`mov-poster-for-${val.title}`}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{val.title} <b className="movie-rating">({val.rating})</b></h5>
                      <div id="times" className="movie-time-format">{showTimes(val.id)}</div>
                    </div>
                  </div>
                </div>
              </div>
          </>)
        })
      }
    </ul>
  </>);
}

export default MovieCards;