import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import TheatreInfo from './components/TheatreInfo'
import Time from './components/Time';

const textboxStyle = { 
  width: '500px',
  margin: '0px auto'
}

// const tid = "58f3356c0ffe87bcb324454056587b67";
// const tid = "2030c64ce72b4e4605cb01f2ba405b7d";
// const tid = "af3de16703f2af385a6941de07f076a0";

function App() {

  const [search, setSearch] = React.useState('');
  const [timeNow, setTimeNow] = React.useState(new Date());

  React.useEffect(() => {
    return window.setInterval(() => {
        setTimeNow(new Date());
    }, 1000);
  }, [])

  const clickArclightNav = () => {
    // setCurrNav('Arclight');
    document.getElementById("search-movies-textbox").setAttribute("placeholder","Search movies at Arclight");
  }

  const clickPacificNav = () => {
    // setCurrNav('Pacific Theatres');
    document.getElementById("search-movies-textbox").setAttribute("placeholder","Search movies at Pacific Theatres");
  }

  const clickAmcNav = () => {
    // setCurrNav('AMC');
    document.getElementById("search-movies-textbox").setAttribute("placeholder","Search movies at AMC");
  }

  return (
    <div className='content-body'>
      <img className='mooovie-logo' alt='mooovie-logo' src="https://image.shutterstock.com/image-vector/cute-cow-cartoon-character-watching-600w-1808654119.jpg"></img>
      <h1 className='title'>Mooovie</h1>
      <Time timeNow={timeNow}/>
      <input id="search-movies-textbox" class="form-control" type="text" placeholder="Search movies at Arclight" style={textboxStyle} value={search} onChange={t => setSearch(t.target.value)}></input>
      
      {/* This is for the nav bar */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="arclight-tab" data-bs-toggle="tab" data-bs-target="#arclight" type="button" role="tab" aria-controls="arclight" aria-selected="true" onClick={clickArclightNav}>Arclight</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pacific-theatres-tab" data-bs-toggle="tab" data-bs-target="#pacific-theatres" type="button" role="tab" aria-controls="pacific-theatres" aria-selected="false" onClick={clickPacificNav}>Pacific Theatres</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="amc-tab" data-bs-toggle="tab" data-bs-target="#amc" type="button" role="tab" aria-controls="amc" aria-selected="false" onClick={clickAmcNav}>AMC</button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="arclight" role="tabpanel" aria-labelledby="arclight-tab">
          <TheatreInfo tid="2030c64ce72b4e4605cb01f2ba405b7d" search={search} currTime={timeNow}/>
        </div>

        <div className="tab-pane fade" id="pacific-theatres" role="tabpanel" aria-labelledby="pacific-theatres-tab">
          <TheatreInfo tid="58f3356c0ffe87bcb324454056587b67" search={search} currTime={timeNow}/>
        </div>

        <div className="tab-pane fade" id="amc" role="tabpanel" aria-labelledby="amc-tab">
          <TheatreInfo tid="af3de16703f2af385a6941de07f076a0" search={search} currTime={timeNow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
