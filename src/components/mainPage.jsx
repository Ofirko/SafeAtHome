import React, { Component } from 'react';
import "../styles/main_page.scss";
import humans from "../images/humaaans2-copy.png";

class MainPage extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container Main_container">
                <p className="mainText">
                    אפשר למצוא סיבות רבות לא לדווח, 
                    אבל דווקא הסיבה לדווח חשובה מכולן.
                </p>
                <p className="mainText_emphasis">
                    הדיווח שלך יכול להציל חיים
                </p>
                <div className="humaaans-copy">
                    <img
                        src={humans}
                        alt="humans report"
                        className="humaaans_supergraphic"
                    />
                </div>
                <button className="Main_Button Main_ButtonPrimary">אני רוצה לדווח</button>
                <button className="Main_Button Main_ButtonSecondary rebecca">אפשר גם להתייעץ</button>
                <button className="Main_Button Main_ButtonSecondary blue">לקרוא עוד מידע</button>
                <button className="Main_Button Main_ButtonSecondary coral">מה הם סימני האזהרה</button>
            </div>
        );
    }
}


export default MainPage;