import React from 'react';
import "./ContentContainter.css"
import Section from "./section";
import NavigationBar from "./NavigationBar";
import "./NavigationBar.css"
function ContentContainer(props) {

    var aCountries = ["Albania", "Argentyna", "Aruba", "Australia"]
    var bCountries = ["Bahamy", "Brazylia", "Bułgaria"]
    var cCountries = ["Chiny","Chorwacja", "Cypr"]
    var dCountries = ["Dominikana"]
    var eCountries = ["Egipt"]
    var fCountries = ["Filipiny", "Finlandia", "Francja"]
    var gCountries = ["Grecja"]
    var hCountries = ["Haiti", "Hiszpania", "Hongkong"]
    var iCountries = ["Indie", "Indonezja", "Islandia", "Izrael"]
    var jCountries = ["Jamajka", "Japonia", "Jordania"]

    return (
        <div className="container">
            <Section countries={aCountries} name="A" backgroundimage="australia"/>
            <Section countries={bCountries} name="B" backgroundimage="brazylia"/>
            <Section countries={cCountries} name="C" backgroundimage="chiny"/>
            <Section countries={dCountries} name="D" backgroundimage="dominikana"/>
            <Section countries={eCountries} name="E" backgroundimage="egipt"/>
            <Section countries={fCountries} name="F" backgroundimage="filipiny"/>
            <Section countries={gCountries} name="G" backgroundimage="grecja"/>
            <Section countries={hCountries} name="H" backgroundimage="hongkong"/>
            <Section countries={iCountries} name="I" backgroundimage="indonezja"/>
            <Section countries={jCountries} name="J" backgroundimage="japan"/>

        </div>
    );
}

export default ContentContainer;