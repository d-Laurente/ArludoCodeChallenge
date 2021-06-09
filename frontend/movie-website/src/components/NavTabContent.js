import React from "react";
import TheatreInfo from './TheatreInfo';

// React component showing the contents of the specified nav tab
const NavTabContent = (props) => {

  return (<>
    <div className="tab-content" id="myTabContent">
      {
        props.theatres.map(val => {
          return (<>
            <div className={val.name === props.currTheatre ? "tab-pane fade show active" : "tab-pane fade"} id={`${val.name}-tab`} role="tabpanel" aria-labelledby={`${val.name}-tab`}>
              <TheatreInfo tid={`${val.id}`} search={props.search} currTime={props.timeNow}/>
            </div>
          </>)
        })
      }
    </div>
  </>);
}

export default NavTabContent;
