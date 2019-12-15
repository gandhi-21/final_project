import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from "react-router-dom";

import { Row, Col } from 'react-materialize';

class LeftComponent extends Component {


    render() {

        return(
          <div>
              <Row>
                  <Col>Zoom-Out</Col>
                  <Col>Zoom-In</Col>
                  <Col><button onClick={this.props.handleSave}><Link to="/" >Save</Link></button></Col>
                  <Col><button><Link to="/">Close</Link></button></Col>
              </Row>

              <hr/>

              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customContainer", this.props.wireframe.components.length)}}>Container Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customLabel", this.props.wireframe.components.length)}}>Label Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customButton", this.props.wireframe.components.length)}}>Button Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customTextField", this.props.wireframe.components.length)}}>Textfield Button</div>

          </div>
        );
    }
}

export default LeftComponent;