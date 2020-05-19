import React, { Component } from "react";
import "../css/btn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

class NextButton extends Component {
  state = {};

  passNextComponent = (routing) => {
    console.log(routing);
    this.props.history.push(routing);
  };

  render() {
    const { routingNext, routingPrevious } = this.props;
    return (
      <div className="row">
        <div className="col col-md-6">
          <button className="btn btn-quest">
            <span
              className="arrow-left"
              onClick={() => this.passNextComponent(routingNext)}
            >
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </span>
            <span
              className="arrow-right"
              onClick={() => this.passNextComponent(routingPrevious)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default NextButton;
