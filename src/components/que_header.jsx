import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/que_header.scss";
import ProgressBar from "./progress_bar";
class QueHeader extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="QueHeader__wrapper">
                <h2>
                    {this.props.question }
                </h2>
                     {this.props.multipleAnswers ? <h3>(בחר את התשובות שנכונות עבורך)</h3> : null }
                <ProgressBar />
            </div>
        );
    }
}


export default QueHeader;