import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Landing extends Component {
  state = {};

  passToAdult=()=>{
    this.props.history.push("/questionnaire/step2");
  }

  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}

export default Landing;
