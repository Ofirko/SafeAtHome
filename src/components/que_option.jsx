import React, { Component } from "react";
import "../styles/que_option.scss";

class QueOption extends Component {
  update () {
    this.props.onUpdate({chosen: true})
  }
  render() {
    return (
      <div
        className={`Button_wrapper col-12 col-md-5 col-lg-3 col-xl-3 ${
          this.selected ? "selected" : null
        }`}
        onClick={this.update.bind(this)}
      >
        <input className="Button_input" type="radio" name="radioform" />
        <div className="Button_fakecontainer" />
        <div className="Button_radio">
          <div className="Button_radioIris" />
        </div>
        <div className="Button_text">{this.props.optionText}</div>
      </div>
    );
  }
}

export default QueOption;
