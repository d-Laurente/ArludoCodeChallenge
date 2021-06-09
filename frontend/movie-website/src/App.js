import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Time from './components/Time';
import { fetchAllTheatres } from './utils/MovieApi';
import NavTabContent from './components/NavTabContent';

function App() {

  // State variables
  const [search, setSearch] = React.useState('');
  const [theatres, setTheatres] = React.useState([]);
  const [currTheatre, setCurrTheatre] = React.useState('Arclight')
  const [timeNow, setTimeNow] = React.useState(new Date());

  // Effect hook that initialises the timer and gets all theatres
  // from the backend
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

  // Sets currTheatre to the latest theatre tab the user clicked on
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
      <Navbar theatres={theatres} currTheatre={currTheatre} clickNavTab={(theatre) => clickNavTab(theatre)}/>
      <NavTabContent theatres={theatres} currTheatre={currTheatre} search={search} timeNow={timeNow}/>
    </div>
  );
}

export default App;
