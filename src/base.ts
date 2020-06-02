import * as React from "react";
import { render } from "react-dom";
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

    // Static method to fix the element properties
    static fixCollection(items: Array<any> = [], propNames: Array<string>) {
        // Parse the items
        for (let i = 0; i < items.length; i++) {
            // Parse the property names
            for (let j = 0; j < propNames.length; j++) {
                // Fix the property
                this.fixProperty(items[i], propNames[j]);
            }
        }
    }

    // Static method to fix the element properties
    static fixProperty(props: any, name: string) {
        let value = props ? props[name] : null;

        // See if this is a react component
        if (value && value.$$typeof) {
            // Create an element to render the react element to
            let el = document.createElement("div");
            render(value, el);

            // Update the property to be this element
            props[name] = el;
        }
    }

    // Default onRender event
    onRender(props: IBaseProps) { }

    // Render a div element by default
    render() { return createElement("div"); }
}