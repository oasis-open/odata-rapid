import React from "react";
import {Component} from 'react';
import Request from './Request.js';

class TemplateRequest extends Component {
  render() {
    return (
      <div>
        <p><strong>Template:</strong></p>
        <Request command={this.props.command} query={this.props.query}/>
      </div>
    );
  }
}

export default TemplateRequest;