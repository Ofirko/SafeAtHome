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
      <QueHeader question="האם חלק מהסימנים הבאים הקשורים בהתנהגות או בהופעה של הילד מטרידים אותך? " multipleAnswers={false} pageNum = {4}/>
      <form className="Options_container">
        <QueOption optionText="התעללות על ידי בן משפחה "  onUpdate={this.onUpdate.bind(this)}/>
        <QueOption optionText="התעללות על ידי מבוגר מחוץ למשפחה "  onUpdate={this.onUpdate.bind(this)}/>
        <NextButton history={this.props.history} routingNext="/questionnaire/end-questionnaire" routingPrevious="/questionnaire/step3" isChosen={this.state.isChosen} />
      </form>
    </>
    );
  }
}

export default SymptomsScreening;
