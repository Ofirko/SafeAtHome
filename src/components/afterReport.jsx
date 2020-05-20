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
        {/*   <div className="row">
          <div className="col-12"> */}
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

            {/*    <img className="btn-arrow" src={buttonSms} alt="" />
                <img className="btn-arrow" src={buttonCall} alt="" /> */}
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
      /*       </div>
      </div> */
    );
  }
}

export default Landing;

/* import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/landing.css";
import "../styles/result.scss";
import humans from "../images/humaaans2-copy.png";
import buttonSms from "../images/button-sms.png";
import buttonCall from "../images/button-call.png";

class Result extends Component {
  state = {};

  passToFirstPage = () => {
    this.props.history.push("/questionnaire/step2");
  };

  render() {
    return (
      <div className="container results_container">
        <div className="humaaans-copy">
          <img
            src={humans}
            alt="humans report"
            className="humaaans_supergraphic"
          />
        </div>
        <div className="rectangle-5">
          <div className="text results_text">
            <p className="mainText_emphasis">
              תודה על הערנות ועל הנכונות שלך לעזור!
            </p>
            <p className="mainText">
              לפי סימני האזהרה שסימנת אנחנו מתרשמים שהילד/ה חווה פגיעה וזקוק
              לעזרה. אנחנו ממליצים לדווח על החשש שלך למוקד הרווחה בהודעת טקסט או
              בשיחת טלפון
            </p>
            <p className="mainText_weak">(שיחת הטלפון יכולה להיות אנונימית)</p>
            <a href="tel:*118">
              <p className="saveLife">118*</p>
            </a>
            <p className="mainText_last">
              אם יש לך ספקות, חשוב לשתף אותם. באפשרותך להתקשר ולהתייעץ.
            </p>

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

export default Result;
 */
