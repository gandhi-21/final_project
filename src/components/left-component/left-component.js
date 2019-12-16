import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from "react-router-dom";

import { Row, Col } from 'react-materialize';

import sampleButton from "../../icons/sampleButton.png";
import sampleContainer from "../../icons/sampleContainer.png";
import sampleLabel from "../../icons/sampleLabel.png";
import sampleTextField from "../../icons/sampleTextfield.png";
import zoomIn from "../../icons/Zoom_In.png";
import zoomOut from "../../icons/Zoom_Out.jpg";

class LeftComponent extends Component {


    render() {

        return(
          <div>
              <Row>
                  <Row><Col><img src={zoomOut} onClick={() => {this.props.zoomOut()}} /></Col></Row>
                  <Row><Col><img src={zoomIn} onClick={() => {this.props.zoomIn()}} /></Col></Row>
                  <Row><Col><button onClick={this.props.handleSave}>Save It</button></Col></Row>
                  <Row><Col><button><Link to="/">Close</Link></button></Col></Row>
              </Row>

              <hr/>

              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customContainer", this.props.wireframe.components.length)}}>
                  <img src={sampleContainer} alt="" className="contimg"/></div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customLabel", this.props.wireframe.components.length)}}>
                  <img src={sampleLabel} alt="" className="labimg"/></div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customButton", this.props.wireframe.components.length)}}>
                  <img src={sampleButton} alt="" className="butimg"/></div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customTextField", this.props.wireframe.components.length)}}>
                  <img src={sampleTextField} alt="" className="flimg"/></div>
          </div>
        );
    }
}

export default LeftComponent;