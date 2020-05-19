import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/landing.css";
import humans from "../images/humaaans-copy.png";
import button from "../images/button-arrow.png";

class Landing extends Component {
  state = {};

  passToFirstPage = () => {
    this.props.history.push("/questionnaire/step1");
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
                <p className="mainText">
                  ביקשת להתייעץ. <br />
                  אנחנו נשאל כמה שאלות קצרות ובעזרת התשובות שלך נוכל לכוון אותך,
                  מה נכון לעשות.
                </p>
                <p className="saveLife">הדיווח שלך יכול להציל חיים</p>

                <img
                  className="btn-arrow"
                  src={button}
                  alt=""
                  onClick={this.passToFirstPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      /*    <div className="container">
        <div className="row">
          <button className="col-12 col-md-5 col-lg-3 col-xl-3 btn-primary" onClick={this.passToAdult}>
            ?האם הילד דיווח
          </button>
          <button className="col-12 col-md-5 col-lg-3 col-xl-3">
            האם ילד אחר דיווח על התעללות בילד ?
          </button>
          <button className="col-12 col-md-5 col-lg-3 col-xl-3">
            האם ראית סימנים מעידים להתעללות בעצמך ?
          </button>
        </div>
      </div>  */
    );
  }
}

export default Landing;
