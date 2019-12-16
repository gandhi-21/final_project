import React, { Component} from 'react';

import CustomContainer from "../customComponents/customContainer";
import CustomLabel from "../customComponents/custom-Label";
import CustomButton from "../customComponents/customButton";
import CustomTextField from "../customComponents/customTextField";

class MiddleComponent extends Component {


    activateCtrlD = () => {
        document.addEventListener('keypress', (event) => {
            this.props.handleDuplicateComponent(event);
        });
    };

    activateDelete = () => {
        document.addEventListener('keydown', (event) => {
            this.props.handleDeleteComponent(event, this.props.wireframe);
        })
    };

    componentDidMount() {
        this.activateCtrlD();
        this.activateDelete();
    };

    componentWillUnmount() {
        document.removeEventListener('keydown',(event) => {this.props.handleDuplicateComponent(event)});
        document.removeEventListener('keydown',(event) => {this.props.handleDeleteComponent(event)})
    };


    makeNewCustomContainer = (block) => {
        return <CustomContainer container={block}
                                handleSelectedItem={this.props.handleSelectedItem}
                                handleResize={this.props.handleResize}
                                handleDuplicateItem={this.props.handleDuplicateItem}
                                currentSelectedItem={this.props.currentSelectedItem}
                                scale={this.props.scale}/>
    };

    makeNewCustomLabel = (block) => {
        return <CustomLabel label={block}
                            handleSelectedItem={this.props.handleSelectedItem}
                            handleResize={this.props.handleResize}
                            handleDuplicateItem={this.props.handleDuplicateItem}
                            currentSelectedItem={this.props.currentSelectedItem}
        scale={this.props.scale}/>
    };

    makeNewCustomButton = (block) => {
        return <CustomButton button={block}
                             handleSelectedItem={this.props.handleSelectedItem}
                            handleResize={this.props.handleResize}
                            handleDuplicateItem={this.props.handleDuplicateItem}
                             currentSelectedItem={this.props.currentSelectedItem}
        scale={this.props.scale}/>
    };

    makeNewCustomTextField = (block) => {
        return <CustomTextField field={block}
                                handleSelectedItem={this.props.handleSelectedItem}
                                handleResize={this.props.handleResize}
                                handleDuplicateItem={this.props.handleDuplicateItem}
                                currentSelectedItem={this.props.currentSelectedItem}
        scale={this.props.scale}/>
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

            <div style={{transform: "scale(" + (this.props.wireframe.zoomPercent) + ")"}}>
                <div>
                    {wireframe && components.map(UserComponent => this.getUserComponent(UserComponent))}
                </div>
            </div>
        );
    }
}


export default MiddleComponent;