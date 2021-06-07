import React from 'react';
import '../App.css';
import { fetchMovieInfo, fetchTheatreInfo } from '../utils/MovieApi';

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

  const showTimes = (mid) => {
    let times = "";
    for (const [key, val] of Object.entries(tinfo.showtimes)) {
      if (key == mid) {
        times = val.toString().replace(',', ', ');
      }
    }
    return times;
  }
  
  return (<>
    <div>Hello from theatre info</div>
    <div className='theatre-info-content'>
      <h1>{tinfo.name}</h1>
      <ul>
        {
         movies.map((val, idx) => {
            return (<>
              {/* <li>{val}</li> */}
              <div class="card mb-3" style={{ "maxWidth": "750px" }}>
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src={val.poster} class="card-img" alt={`mov-poster-for-${val.title}`}/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <span style={{ "display": "inline-block" }}>
                        <h5 class="card-title">{val.title} <b className="movie-rating">({val.rating})</b></h5>
                      </span>
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
