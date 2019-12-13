import React, { Component } from 'react';

import { Row, Col } from 'react-materialize';

class RightComponent extends Component {

    render() {
        return(
            <div>
                <div>Properties</div>
                <div>Text Values</div>
                <div>Font Size</div>
                <div>Background</div>
                <div>Border-Color</div>
                <div>Border-Thickness</div>
                <div>Border-Radius</div>
            </div>
        );
    }
}

export default RightComponent;