import * as React from "react";
import { Component } from "react";
/**
 * Base React Component
 */
interface IBase<IBaseProps> {
    onRender: (props: IBaseProps) => void;
}
/**
 * Base React Component
 */
export declare class Base<IBaseProps> extends Component<IBaseProps> implements IBase<IBaseProps> {
    componentDidMount(): void;
    onRender(props: IBaseProps): void;
    render(): React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}
export {};
