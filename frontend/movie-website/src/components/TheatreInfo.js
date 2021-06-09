import React from 'react';
import '../App.css';
import { fetchMovieInfo, fetchTheatreInfo } from '../utils/MovieApi';
import FilterDropbox from './FilterDropbox'
import MovieCards from './MovieCards';

const TheatreInfo = (props) => {

  const [tinfo, setTInfo] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [ratingFilter, setFilterRating] = React.useState('All Movies');

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
        if (mtitle.includes(props.search.toLowerCase()) && (ratingFilter === minfo.rating || ratingFilter === "All Movies")) {
          refine.push(minfo);
        }
        else {
          console.log("inside");
          console.log(ratingFilter);
        }
      }
      setMovies(refine);
    }

    refineSearch();
  }, [props.search, ratingFilter])

  return (<>
    <div className='theatre-info-content'>
      <FilterDropbox changeRatingFilter={(val) => {setFilterRating(val)}}/>
      <MovieCards tinfo={tinfo} movies={movies} currTime={props.currTime}></MovieCards>
    </div>
  </>)
}

export default TheatreInfo;
