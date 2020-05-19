import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/landing.css";
import humans from "../images/humaaans2-copy.png";
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
        className="container"
        style={{
          height: "100vh",
          direction: "rtl",
          margin: "auto",
          width: "50%",
        }}
      >
        <div className="row">
          <div className="col-12">
            <div
              className="humaaans-copy"
              style={{ margin: "auto", width: "100%" }}
            >
              <img src={humans} alt="humans report" />
            </div>
            <div className="rectangle-5">
              <div className="text">
                <p className="saveLife">
                  תודה על הערנות ועל הנכונות שלך לעזור!
                </p>
                <p className="mainText">
                  תודה על הערנות ועל הנכונות שלך לעזור! לפי סימני האזהרה שסימנת
                  אנחנו מתרשמים שהילד/ה חווה פגיעה וזקוק לעזרה. אנחנו ממליצים
                  לדווח על החשש שלך למוקד הרווחה בהודעת טקסט או בשיחת טלפון
                  (שיחת הטלפון יכולה להיות אנונימית)
                </p>
                <p className="saveLife" style={{ fontSize: "2em" }}>
                  *118
                </p>
                <p className="mainText">
                  אם יש לך ספקות, חשוב לשתף אותם. באפשרותך להתקשר ולהתייעץ.
                </p>

                <img className="btn-arrow" src={buttonSms} alt="" />
                <img className="btn-arrow" src={buttonCall} alt="" />
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
        </div>
      </div>
    );
  }
}

export default Landing;
