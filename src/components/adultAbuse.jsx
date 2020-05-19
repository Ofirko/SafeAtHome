import React, { Component } from "react";
import QueHeader from "./que_header";
import QueOption from "./que_option";
import NextButton from "./nextButton";
class AdultAbuse extends Component {
  state = {};
  render() {
    return (
      <>
      <QueHeader question="האם קיים חשד להתעללות מצד אדם מבוגר ?" multipleAnswers={false} pageNum = {2}/>
      <form className="Options_container">
        <QueOption optionText="כן, קיים חשד "/>
        <QueOption optionText="לא מדובר בהתעללות מצד מבוגרים "/>
        <NextButton history={this.props.history} routingNext="/questionnaire/step3" routingPrevious="/questionnaire/step1" />
      </form>
    </>
    );
  }
}

export default AdultAbuse;
