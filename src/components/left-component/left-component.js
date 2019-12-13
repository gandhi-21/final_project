import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Row, Col } from 'react-materialize';

class LeftComponent extends Component {


    render() {

        return(
          <div>
              <Row>
                  <Col>Zoom-Out</Col>
                  <Col>Zoom-In</Col>
                  <Col>Save</Col>
                  <Col>Close</Col>
              </Row>

              <hr/>

              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("Container")}}>Container Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("Label")}}>Label Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("Button")}}>Button Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("Textfield")}}>Textfield Button</div>

          </div>
        );
    }
}

export default LeftComponent;