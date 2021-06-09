import React from 'react';
import '../App.css';
import { fetchMovieInfo, fetchTheatreInfo } from '../utils/MovieApi';
import { formatTo24h, sortTimeList, timePassed } from '../utils/TimeUtil';

const TheatreInfo = (props) => {

  const [tinfo, setTInfo] = React.useState({});
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const getTInfo = async () => {
      const tid = props.tid;
      const tdata = await fetchTheatreInfo(tid);
      setTInfo(tdata);

      let mdata = [];
      for (let val in tdata.showtimes) {
        const minfo = await fetchMovieInfo(val);
        mdata.push(minfo);
      }
      setMovies(mdata);
    }
    getTInfo();
  }, [])

  React.useEffect(() => {
    console.log(`currSearch = ${props.search}`);
    const refineSearch = async () => {
      let refine = [];
      for (const val in tinfo.showtimes) {
        const minfo = await fetchMovieInfo(val);
        const mtitle = minfo.title.toLowerCase();
        if (mtitle.includes(props.search.toLowerCase())) {
          refine.push(minfo);
        }
      }
      setMovies(refine);
    }

    refineSearch();
  }, [props.search])

  // return movie times when given a movie id
  const showTimes = (mid) => {
    let times = [];
    const mtimes = tinfo.showtimes[mid];
    sortTimeList(tinfo.showtimes[mid])
    for (let i = 0; i < mtimes.length; i++) {
      let showingTime = formatTo24h(mtimes[i])
      if (timePassed(props.currTime, showingTime)) {
        times.push(<span style={{ "color": "grey"}}>{mtimes[i]} </span>)
      }
      else {
        times.push(<span style={{ "color": "black"}}>{mtimes[i]} </span>)
      }
    }
    return times;
  }
  
  return (<>
    <div className='theatre-info-content'>
      <ul>
        {
         movies.map((val, idx) => {
            return (<>
              {/* <li>{val}</li> */}
              {/* style={{ "maxWidth": "50%"}} */}
              <div className="card mb-3 w-100">
                <div className="row no-gutters w-80">
                  <div className="col-md-2">
                    {/* style={{ "maxHeight": "50%", "maxWidth": "50%" }} */}
                    <img src={val.poster} className="card-img" style={{ "maxHeight": "95%", "maxWidth": "80%", "margin": "3%" }} alt={`mov-poster-for-${val.title}`}/>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">{val.title} <b className="movie-rating">({val.rating})</b></h5>
                      <div id="times">{showTimes(val.id)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>)
          })
        }
      </ul>
    </div>
  </>)
}

export default TheatreInfo;
