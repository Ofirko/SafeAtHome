import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/landing.scss";
import QueHeader from "./que_header";
import QueOption from "./que_option";
import NextButton from "./nextButton";
class FilterQuestion extends Component {
  constructor (props) {
    super(props)
    this.state = { isChosen: false }
  }
    onUpdate () {this.setState({ isChosen: true })};

  render() {
    return (
      <>
        <QueHeader question="על מה את/ה רוצה להתייעץ? " multipleAnswers={false} pageNum = {1} />
        <form className="Options_container">
          <QueOption optionText="ילד/ה שיתף/ה אותי במידע על פגיעה שחווה/תה " onUpdate={this.onUpdate.bind(this)} />
          <QueOption optionText="ראיתי משהו שהדאיג אותי לגבי ילד/ה " onUpdate={this.onUpdate.bind(this)} />
          <QueOption optionText="שיתפו אותי במידע לגבי ילד/ה אחר/ת שייתכן ועבר/ה פגיעה " onUpdate={this.onUpdate.bind(this)} />
          <NextButton history={this.props.history} routingNext="/questionnaire/step2" routingPrevious="/questionnaire" isChosen={this.state.isChosen} />
        </form>
      </>
    );
  }
}

export default FilterQuestion;
