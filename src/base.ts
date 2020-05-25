import * as React from "react";
import { Component, createElement } from "react";
import { findDOMNode } from "react-dom";

/**
 * Base React Component
 */
interface IBase<IBaseProps> {
    // Render event
    onRender: (props: IBaseProps) => void;
}

/**
 * Base React Component
 */
export class Base<IBaseProps> extends Component<IBaseProps> implements IBase<IBaseProps> {
    // Call the render event
    componentDidMount() {
        // Render the bootstrap object to this component
        this.onRender ? this.onRender({ el: findDOMNode(this), ...this.props }) : null;
    }

    // Default onRender event
    onRender(props: IBaseProps) { }

    // Render a div element by default
    render() { return createElement("div"); }
}