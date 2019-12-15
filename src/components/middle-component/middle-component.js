import React, { Component} from 'react';

import CustomContainer from "../customComponents/customContainer";
import CustomLabel from "../customComponents/custom-Label";
import CustomButton from "../customComponents/customButton";
import CustomTextField from "../customComponents/customTextField";

class MiddleComponent extends Component {


    makeNewCustomContainer = (block) => {
        return <CustomContainer container={block}
                                handleSelectedItem={this.props.handleSelectedItem}
                                handleResize={this.props.handleResize}
                                handleDuplicateItem={this.props.handleDuplicateItem}
                                currentSelectedItem={this.props.currentSelectedItem}/>
    };

    makeNewCustomLabel = (block) => {
        return <CustomLabel label={block}
                            handleSelectedItem={this.props.handleSelectedItem}
                            handleResize={this.props.handleResize}
                            handleDuplicateItem={this.props.handleDuplicateItem}
                            currentSelectedItem={this.props.currentSelectedItem}/>
    };

    makeNewCustomButton = (block) => {
        return <CustomButton button={block}
                             handleSelectedItem={this.props.handleSelectedItem}
                            handleResize={this.props.handleResize}
                            handleDuplicateItem={this.props.handleDuplicateItem}
                             currentSelectedItem={this.props.currentSelectedItem}/>
    };

    makeNewCustomTextField = (block) => {
        return <CustomTextField field={block}
                                handleSelectedItem={this.props.handleSelectedItem}
                                handleResize={this.props.handleResize}
                                handleDuplicateItem={this.props.handleDuplicateItem}
                                currentSelectedItem={this.props.currentSelectedItem}/>
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

    updateSelectedItem = (e) => {
        e.stopPropagation();
        this.props.updateSelectedItem();
    };

    render() {

        console.log(this.props);

        const wireframe = this.props.wireframe;
        const components = wireframe.components;


        return(

            <div>
                Canvas
                <div>
                    {wireframe && components.map(UserComponent => this.getUserComponent(UserComponent))}
                </div>
            </div>
        );
    }
}


export default MiddleComponent;