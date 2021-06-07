import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import TheatreInfo from './components/TheatreInfo'

const textboxStyle = { 
  width: '500px',
  margin: '0px auto'
}

// const tid = "58f3356c0ffe87bcb324454056587b67";
// const tid = "2030c64ce72b4e4605cb01f2ba405b7d";
// const tid = "af3de16703f2af385a6941de07f076a0";

function App() {

  const [search, setSearch] = React.useState('');

  return (
    <div className='content-body'>
      <h1 className='title'>Hello world!</h1>
      <input class="form-control" type="text" placeholder="Default input" style={textboxStyle} value={search} onChange={t => setSearch(t.target.value)}></input>
      
      {/* This is for the nav bar */}
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="arclight-tab" data-bs-toggle="tab" data-bs-target="#arclight" type="button" role="tab" aria-controls="arclight" aria-selected="true">Arclight</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pacific-theatres-tab" data-bs-toggle="tab" data-bs-target="#pacific-theatres" type="button" role="tab" aria-controls="pacific-theatres" aria-selected="false">Pacific Theatres</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="amc-tab" data-bs-toggle="tab" data-bs-target="#amc" type="button" role="tab" aria-controls="amc" aria-selected="false">AMC</button>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="arclight" role="tabpanel" aria-labelledby="arclight-tab">
          <TheatreInfo tid="2030c64ce72b4e4605cb01f2ba405b7d" search={search}/>
        </div>

        <div class="tab-pane fade" id="pacific-theatres" role="tabpanel" aria-labelledby="pacific-theatres-tab">
          <TheatreInfo tid="58f3356c0ffe87bcb324454056587b67" search={search}/>
        </div>

        <div class="tab-pane fade" id="amc" role="tabpanel" aria-labelledby="amc-tab">
          <TheatreInfo tid="af3de16703f2af385a6941de07f076a0" search={search}/>
        </div>
      </div>
    </div>
  );
}

export default App;
