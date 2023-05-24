import React from 'react';
import "./section.css"
import {isMobile} from 'react-device-detect';
import CountryButton from "./countryButton";

// import Popup from 'reactjs-popup';

function Section(props) {

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

    return (

        //TODO: Zamiast popup mozna wyswietlac content w bloku wybory kraju
        <div class="section" style={style}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
            </style>

            <div class="sectionBlock">

                <div className="letter">
                    {props.name}
                </div>

                <div className="lol">

                    <div className="countryContainer">
                        {props.countries.map((country) => (
                            <CountryButton backgroundimage={props.backgroundimage} country={country}/>
                        ))}
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Section;