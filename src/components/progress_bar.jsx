import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/progress_bar.scss";
import icon from "../images/icon-question.png";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ProgressBar_container">
        <img
          className="btn-question"
          src={icon}
          alt=""
          style={{ width: "20px", position: "relative", bottom: "45px" }}
        />
        <div className="ProgressBar_text_container">
          <label className="ProgressBar_text_markers">
            <span>שאלות</span>
            <span>{this.props.pageNum} מתוך 15</span>
          </label>
        </div>
        <progress
          className="ProgressBar_indicator_container"
          value={this.props.pageNum}
          max="15"
        ></progress>
        <div
          className="ProgressBar_indicator_oval"
          style={{ right: this.props.pageNum * 6.67 - 2 + "%" }}
        >
          <div className="ProgressBar_indicator_ovalIris"></div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
