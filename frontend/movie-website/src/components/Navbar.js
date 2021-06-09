import React from "react";

// React component that shows the navbar
const Navbar = (props) => {

  return (<>
    <ul className="nav nav-pills nav-bar-format" id="theatre-tab" role="tablist">
      {
        props.theatres.map((val, i) => {
          return (<>
            <li className="nav-item tab-format" role="presentation" key={i}>
              <button className={val.name === props.currTheatre ? "nav-link active" : "nav-link"} id={`${val.name.toLowerCase()}-tab`} data-bs-toggle="tab" data-bs-target={`#${val.name}`} type="button" role="tab" aria-controls={`${val.name.toLowerCase()}`} aria-selected="true" onClick={() => props.clickNavTab(`${val.name}`)}>
                {val.name}
              </button>
            </li>
          </>)
        })
      }
    </ul>
  </>);
}

export default Navbar;
