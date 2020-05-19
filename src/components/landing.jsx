import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/landing.scss";
import QueHeader from "./que_header";
import QueOption from "./que_option";
class Landing extends Component {
  state = {};

  passToAdult=()=>{
    this.props.history.push("/questionnaire/step2");
  }

  render() {
    return (
      <>
        <QueHeader question="למה נכנסת לאפליקציה?" multipleAnswers={true} />
        <form className="Options_container">
          <QueOption optionText="ילד/ה שיתף/ה אותי במידע על פגיעה שחווה/תה "/>
          <QueOption optionText="ראיתי משהו שהדאיג אותי לגבי ילד/ה "/>
          <QueOption optionText="שיתפו אותי במידע לגבי ילד/ה אחר/ת שייתכן ועבר/ה פגיעה "/>
        </form>
      </>
    );
  }
}

export default Landing;
