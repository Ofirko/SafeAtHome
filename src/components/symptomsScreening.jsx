import React, { Component } from "react";
import QueHeader from "./que_header";
import QueOption from "./que_option";
import NextButton from "./nextButton";
class SymptomsScreening extends Component {
  state = {};
  onUpdate () {this.setState({ isChosen: true })};

  render() {
    return (
      <>
      <QueHeader question="עד כמה את/ה מרגיש מודאג מהדברים הבאים? " multipleAnswers={false} pageNum = {3}/>
      <form className="Options_container">
        <QueOption optionText="שינוי קיצוני במצב הרוח של הילד "  onUpdate={this.onUpdate.bind(this)}/>
        <QueOption optionText="	שינוי קיצוני בתפקוד החברתי 
(מסוגר, בודד, לא מתקשר עם חברים) "  onUpdate={this.onUpdate.bind(this)}/>
        <QueOption optionText="שינוי קיצוני בתדירות ההגעה של הילד/ה לפעילות "  onUpdate={this.onUpdate.bind(this)}/>
        <NextButton history={this.props.history} routingNext="/questionnaire/end-questionnaire" routingPrevious="/questionnaire/step2" isChosen={this.state.isChosen} />
      </form>
    </>
    );
  }
}

export default SymptomsScreening;
