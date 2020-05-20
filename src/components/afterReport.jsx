import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/landing.css";
import humans from "../images/pic2.png";
import buttonSms from "../images/button-sms.png";
import buttonCall from "../images/button-call.png";

class Landing extends Component {
  state = {};

  passToFirstPage = () => {
    this.props.history.push("/questionnaire/step2");
  };

  render() {
    return (
      <div
        className="container results_container"
        style={{
          height: "100vh",
          direction: "rtl",
          margin: "auto",
          width: "50%",
        }}
      >
        <div
          className="humaaans-copy"
          style={{
            margin: "auto",
            width: "100%",
            position: "relative",
            top: "0px",
          }}
        >
          <img src={humans} alt="humans report" />
        </div>
        <div className="rectangle-5">
          <div className="text results_text" style={{ height: "500px" }}>
            <p className="saveLife mainText_emphasis">
              עשית צעד חשוב שאינו מובן מאליו, כל הכבוד!
            </p>
            <p className="mainText">
              אם חלק מהשאלות גרמו לך לאי נוחות, כדאי לפנות לקבלת תמיכה מחבר/ה,
              מקרוב/ת משפחה או מגורם מקצועי
            </p>
            <p className="saveLife">הכי חשוב לא להתמודד עם זה לבד.</p>
            <p className=" mainText_weak">(שיחת הטלפון יכולה להיות אנונימית)</p>
            <p className="saveLife">*118</p>

            <a href="sms:*118">
              <img className="btn-arrow" src={buttonSms} alt="" />
            </a>
            <a href="tel:*118">
              <img className="btn-arrow" src={buttonCall} alt="" />
            </a>
          </div>

          <div
            className="saveLife"
            style={{
              backgroundColor: "white",
              lineHeight: "30px",
              fontSize: "1.5em",
            }}
          >
            תודה שבחרת להציל חיים!
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
