import React, { Component} from 'react';

import CustomContainer from "../customComponents/customContainer";
import CustomLabel from "../customComponents/custom-Label";
import CustomButton from "../customComponents/customButton";
import CustomTextField from "../customComponents/customTextField";

class MiddleComponent extends Component {


    makeNewCustomContainer = (block) => {
        return <CustomContainer container={block}
                                handleSelectedItem={this.props.handleSelectedItem}
                                handleResize={this.props.handleResize}/>
    };

    makeNewCustomLabel = (block) => {
        return <CustomLabel label={block}
                            handleSelectedItem={this.props.handleSelectedItem}/>
    };

    makeNewCustomButton = (block) => {
        return <CustomButton button={block}
                             handleSelectedItem={this.props.handleSelectedItem}/>
    };

    makeNewCustomTextField = (block) => {
        return <CustomTextField field={block}
                                handleSelectedItem={this.props.handleSelectedItem}/>
    };

    getUserComponent = (block) => {
        switch(block.type) {
            case 'customContainer':
                return this.makeNewCustomContainer(block);
            case 'customLabel':
                return this.makeNewCustomLabel(block);
            case 'customButton':
                return this.makeNewCustomButton(block);
            case 'customTextField':
                return this.makeNewCustomTextField(block);
            default:
                return <div>Nothing</div>
        }
    };

    render() {

        console.log(this.props);

        const wireframe = this.props.wireframe;
        const components = wireframe.components;


        return(
            <div>
                {wireframe && components.map(UserComponent => this.getUserComponent(UserComponent))}
            </div>
        );
    }
}


export default MiddleComponent;