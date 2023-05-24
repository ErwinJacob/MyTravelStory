import React, { useState } from "react";
import "./countryButton.css"
import Backdrop from "./backdrop";
import Popup from "./Popup";

function CountryButton(props){

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return <div>
        <div onClick={togglePopup} className="countrySection" >

            <div className="countryName">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
                </style>

                {props.country}
            </div>

            <div className="dowiedzSieWiecej">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap');
                </style>
                    Dowiedz się więcej
            </div>

        </div>
        {isOpen && <Popup country={props.country} handleClose={togglePopup}/>}
        {isOpen && <Backdrop backgroundimage={props.backgroundimage} handleClose={togglePopup}/>}

    </div>

}

export default CountryButton;