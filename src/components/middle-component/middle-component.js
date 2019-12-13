import React, { Component} from 'react';

import CustomContainer from "../customComponents/customContainer";
import CustomLabel from "../customComponents/custom-Label";
import CustomButton from "../customComponents/customButton";
import CustomTextField from "../customComponents/customTextField";

class MiddleComponent extends Component {


    makeNewCustomContainer = (block) => {
        return <CustomContainer container={block}/>
    };

    makeNewCustomLabel = (block) => {
        return <CustomLabel label={block}/>
    };

    makeNewCustomButton = (block) => {
        return <CustomButton button={block}/>
    };

    makeNewCustomTextField = (block) => {
        return <CustomTextField field={block}/>
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