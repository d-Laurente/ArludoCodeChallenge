import React from "react";

const Time = (props) => {

    return (<>
        <p className="showtime">{props.timeNow.getDate()}/{props.timeNow.getMonth()}/{props.timeNow.getFullYear()} {props.timeNow.getHours().toString().padStart(2, "0")}:{props.timeNow.getMinutes().toString().padStart(2, "0")}:{props.timeNow.getSeconds().toString().padStart(2, "0")}</p>
    </>);
}

export default Time;