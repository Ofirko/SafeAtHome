import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/landing.scss";
import QueHeader from "./que_header";
import QueOption from "./que_option";
import NextButton from "./nextButton";
class FilterQuestion extends Component {
  state = {};

  render() {
    return (
      <>
        <QueHeader question="למה נכנסת לאפליקציה?" multipleAnswers={false} pageNum = {1} />
        <form className="Options_container">
          <QueOption optionText="ילד/ה שיתף/ה אותי במידע על פגיעה שחווה/תה "/>
          <QueOption optionText="ראיתי משהו שהדאיג אותי לגבי ילד/ה "/>
          <QueOption optionText="שיתפו אותי במידע לגבי ילד/ה אחר/ת שייתכן ועבר/ה פגיעה "/>
          <NextButton history={this.props.history} routingNext="/questionnaire/step2" routingPrevious="/questionnaire" />
        </form>
      </>
    );
  }
}

export default FilterQuestion;
