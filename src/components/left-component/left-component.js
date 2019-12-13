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

              <div>Container Button</div>
              <div>Label Button</div>
              <div>Button Button</div>
              <div>Textfield Button</div>

          </div>
        );
    }
}

export default LeftComponent;