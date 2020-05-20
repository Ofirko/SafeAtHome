import React, { Component } from "react";
import QueHeader from "./que_header";
import QueOption from "./que_option";
import NextButton from "./nextButton";
class AdultAbuse extends Component {
  state = {};
  onUpdate () {this.setState({ isChosen: true })};

  render() {
    return (
      <>
      <QueHeader question="האם את/ה חושד/ת שיתכן והילד/ה חשוף/ה ל: " multipleAnswers={true} pageNum = {2}/>
      <form className="Options_container">
        <QueOption optionText="שיימינג ובריונות מצד ילדים אחרים "  onUpdate={this.onUpdate.bind(this)}/>
        <QueOption optionText="התעללות או הזנחה מצד מבוגר "  onUpdate={this.onUpdate.bind(this)}/>
        <QueOption optionText="פגיעה מינית "  onUpdate={this.onUpdate.bind(this)}/>
        <QueOption optionText="פגיעה מילולית "  onUpdate={this.onUpdate.bind(this)}/>
        <QueOption optionText="פגיעה פיזית, סימני אלימות "  onUpdate={this.onUpdate.bind(this)}/>
        <NextButton history={this.props.history} routingNext="/questionnaire/step3" routingPrevious="/questionnaire/step1" isChosen={this.state.isChosen} />
      </form>
    </>
    );
  }
}

export default AdultAbuse;
