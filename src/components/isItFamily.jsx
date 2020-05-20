import React, { Component } from "react";
import QueHeader from "./que_header";
import QueOption from "./que_option";
import NextButton from "./nextButton";
class IsItFamily extends Component {
  state = {};
  onUpdate () {this.setState({ isChosen: true })};

  render() {
    return (
      <>
      <QueHeader question="האם אתה חושד שהילד/ה חשוף ל:" multipleAnswers={false} pageNum = {3}/>
      <form className="Options_container">
        <QueOption optionText="התעללות על ידי בן משפחה "  onUpdate={this.onUpdate.bind(this)}/>
        <QueOption optionText="התעללות על ידי מבוגר מחוץ למשפחה "  onUpdate={this.onUpdate.bind(this)}/>
        <NextButton history={this.props.history} routingNext="/questionnaire/step4" routingPrevious="/questionnaire/step2" isChosen={this.state.isChosen} />
      </form>
    </>
    );
  }
}

export default IsItFamily;
