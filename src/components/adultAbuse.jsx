import React, { Component } from "react";

class AdultAbuse extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2>האם קיים חשד להתעללות מצד אדם מבוגר ?</h2>
          <button className="col-12 col-xs-12 col-md-6">כן, קיים חשד</button>
          <button className="col-12 col-xs-12 col-md-6">
            לא מדובר בהתעללות מצד מבוגרים
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default AdultAbuse;
