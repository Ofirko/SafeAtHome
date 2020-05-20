import React, { Component } from "react";
import "../css/btn.css";
import BackIcon from "../assets/button-back.svg";
import NextIconDisabled from "../assets/button-arrow.svg";
import NextIconEnabled from "../assets/button-arrow-enabled.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
//   faArrowCircleLeft,
// } from "@fortawesome/free-solid-svg-icons";

class NextButton extends Component {
  state = {
    matchClass: "",
  };

  passNextComponent = (routing) => {
    this.props.history.push(routing);
  };

  render() {
    const { routingNext, routingPrevious } = this.props;
    return (
          <button
            className={this.props.isChosen ? "btn btn-quest" : "btn btn-false"}
          >
            <span
              className="arrow-left"
              onClick={() => this.passNextComponent(routingPrevious)}
            >
              <img src={BackIcon} />
            </span>
            <span
              className="arrow-right"
              onClick={() => this.passNextComponent(routingNext)}
            >
            <img src={this.props.isChosen ? NextIconEnabled : NextIconDisabled} />
            </span>
          </button>
    );
  }
}

export default NextButton;
