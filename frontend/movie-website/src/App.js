import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import TheatreInfo from './components/TheatreInfo'
import Time from './components/Time';
import { fetchAllTheatres } from './utils/MovieApi';

// const tid = "58f3356c0ffe87bcb324454056587b67";
// const tid = "2030c64ce72b4e4605cb01f2ba405b7d";
// const tid = "af3de16703f2af385a6941de07f076a0";

function App() {

  const [search, setSearch] = React.useState('');
  const [theatres, setTheatres] = React.useState([]);
  const [currTheatre, setCurrTheatre] = React.useState('Arclight')
  const [timeNow, setTimeNow] = React.useState(new Date());

  React.useEffect(() => {
    
    const fetchTheatres = async () => {
      const fetchTheatres = await fetchAllTheatres();
      setTheatres(fetchTheatres);
    }

    const startTimer = () => {
      return window.setInterval(() => {
          setTimeNow(new Date());
      }, 1000);
    }

    startTimer();
    fetchTheatres();
  }, [])

  const clickNavTab = (theatre) => {
    console.log(theatre);
    setCurrTheatre(theatre);
    document.getElementById("search-movies-textbox").setAttribute("placeholder",`Search movies at ${theatre}`);
  } 

  return (
    <div className='content-body'>
      <img className='mooovie-logo' alt='mooovie-logo' src="https://image.shutterstock.com/image-vector/cute-cow-cartoon-character-watching-600w-1808654119.jpg"></img>
      <h1 className='title'>Mooovie</h1>
      <Time timeNow={timeNow}/>
      <input id="search-movies-textbox" className="textbox-style form-control" type="text" placeholder="Search movies at Arclight" value={search} onChange={t => setSearch(t.target.value)}></input>
      
      {/* This is for the nav bar */}
      <ul className="nav nav-tabs nav-bar-format" id="myTab" role="tablist">
        {
          theatres.map(val => {
            return (<>
              <li className="nav-item" role="presentation">
                <button className={val.name === currTheatre ? "nav-link active" : "nav-link"} id={`${val.name.toLowerCase()}-tab`} data-bs-toggle="tab" data-bs-target={`#${val.name}`} type="button" role="tab" aria-controls={`${val.name.toLowerCase()}`} aria-selected="true" onClick={() => clickNavTab(`${val.name}`)}>
                  {val.name}
                </button>
              </li>
            </>)
          })
        }
      </ul>

      {/* For displaying movies and showtimes */}
      <div className="tab-content" id="myTabContent">
        {
          theatres.map(val => {
            return (<>
              <div className={val.name === currTheatre ? "tab-pane fade show active" : "tab-pane fade"} id={`${val.name}-tab`} role="tabpanel" aria-labelledby={`${val.name}-tab`}>
                <TheatreInfo tid={`${val.id}`} search={search} currTime={timeNow}/>
              </div>
            </>)
          })
        }
      </div>
    </div>
  );
}

export default App;
