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

              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customContainer")}}>Container Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customLabel")}}>Label Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customButton")}}>Button Button</div>
              <div className="left-component-button" onClick={() => {this.props.makeNewComponent("customTextField")}}>Textfield Button</div>

          </div>
        );
    }
}

export default LeftComponent;