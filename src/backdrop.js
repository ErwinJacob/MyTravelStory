import './backdrop.css'
import React from "react";
import {isMobile} from "react-device-detect";
import NavigationBar from "./NavigationBar";

function Backdrop(props){

    var style = {

    }

    if (!isMobile) {
        style = {
            backgroundImage: "url(/" + props.backgroundimage + ".jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

        }
    } else {
        style = {
            backgroundImage: "url(/" + props.backgroundimage + "_mobile.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    }

    return <div onClick={props.handleClose} className="backdrop" style={style}>
        <NavigationBar/>
        {/*<button onClick={props.handleClose}>x</button>*/}
    </div>
}

export default Backdrop;