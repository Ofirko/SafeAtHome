import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/progress_bar.scss";

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className = "ProgressBar_container">
                <div className = "ProgressBar_text_container">
                    <label className="ProgressBar_text_markers">
                        <span> 
                            שאלות
                        </span>
                        <span>
                            {this.props.pageNum} מתוך 7
                        </span>
                    </label>
                </div>
                <progress className = "ProgressBar_indicator_container" value={this.props.pageNum} max="7">
                </progress>
                <div className = "ProgressBar_indicator_oval"  style={{right:this.props.pageNum * 14.29 - 2 + "%"}}>
                    <div className = "ProgressBar_indicator_ovalIris"></div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;