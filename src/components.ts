import { Components } from "gd-bs";
import { Base } from "./base";
import * as Types from "./types";

// Accordion
export class Accordion extends Base<Types.IAccordionProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixCollection(props.items, ["content"]);

        // Render the component
        Components.Accordion(props);
    }
}

// Alert
export class Alert extends Base<Types.IAlertProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixProperty(props, "content");

        // Render the component
        Components.Alert(props);
    }
}

// Badge
export class Badge extends Base<Types.IBadgeProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixProperty(props, "content");

        // Render the component
        Components.Badge(props);
    }
}

// Button
export class Button extends Base<Types.IButtonProps> {
    // Render the bootstrap component
    onRender(props) { Components.Button(props); }
}

// ButtonGroup
export class ButtonGroup extends Base<Types.IButtonGroupProps> {
    // Render the bootstrap component
    onRender(props) { Components.ButtonGroup(props); }
}

// Card
export class Card extends Base<Types.ICardProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixProperty(props.header, "content");
        Base.fixProperty(props.footer, "content");
        Base.fixCollection(props.body, ["content", "title"]);

        // Render the component
        Components.Card(props);
    }
}

// CardGroup
export class CardGroup extends Base<Types.ICardGroupProps> {
    // Render the bootstrap component
    onRender(props) { Components.CardGroup(props); }
}

// Carousel
export class Carousel extends Base<Types.ICarouselProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixCollection(props.items, ["content"]);

        // Render the component
        Components.Carousel(props);
    }
}

// Checkbox Group
export class CheckboxGroup extends Base<Types.ICheckboxGroupProps> {
    // Render the bootstrap component
    onRender(props) { Components.CheckboxGroup(props); }
}

// Collapse
export class Collapse extends Base<Types.ICollapseProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixProperty(props, "content");

        // Render the component
        Components.Collapse(props);
    }
}

// Dropdown
export class Dropdown extends Base<Types.IDropdownProps> {
    // Render the bootstrap component
    onRender(props) { Components.Dropdown(props); }
}

// Form
export class Form extends Base<Types.IFormProps> {
    // Render the bootstrap component
    onRender(props) { Components.Form(props); }
}

// Form Control
export class FormControl extends Base<Types.IFormControlProps> {
    // Render the bootstrap component
    onRender(props) { Components.FormControl(props); }
}

// Input Group
export class InputGroup extends Base<Types.IInputGroupProps> {
    // Render the bootstrap component
    onRender(props) { Components.InputGroup(props); }
}

// Jumbotron
export class Jumbotron extends Base<Types.IJumbotronProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixProperty(props, "content");

        // Render the component
        Components.Jumbotron(props);
    }
}

// ListBox
export class ListBox extends Base<Types.IListBoxProps> {
    // Render the bootstrap component
    onRender(props) { Components.ListBox(props); }
}

// ListGroup
export class ListGroup extends Base<Types.IListGroupProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixCollection(props.items, ["content"]);

        // Render the component
        Components.ListGroup(props);
    }
}

// Modal
export class Modal extends Base<Types.IModalProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixProperty(props, "body");
        Base.fixProperty(props, "footer");

        // Render the component
        Components.Modal(props);
    }
}

// Nav
export class Nav extends Base<Types.INavProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixCollection(props.items, ["tabContent"]);

        // Render the component
        Components.Nav(props);
    }
}

// Navbar
export class Navbar extends Base<Types.INavbarProps> {
    // Render the bootstrap component
    onRender(props) { Components.Navbar(props); }
}

// Pagination
export class Pagination extends Base<Types.IPaginationProps> {
    // Render the bootstrap component
    onRender(props) { Components.Pagination(props); }
}

// Popover
export class Popover extends Base<Types.IPopoverProps> {
    // Render the bootstrap component
    onRender(props) { Components.Popover(props); }
}

// Progress
export class Progress extends Base<Types.IProgressProps> {
    // Render the bootstrap component
    onRender(props) { Components.Progress(props); }
}

// Spinner
export class Spinner extends Base<Types.ISpinnerProps> {
    // Render the bootstrap component
    onRender(props) { Components.Spinner(props); }
}

// Table
export class Table extends Base<Types.ITableProps> {
    // Render the bootstrap component
    onRender(props) { Components.Table(props); }
}

// Toast
export class Toast extends Base<Types.IToastProps> {
    // Render the bootstrap component
    onRender(props) {
        // Fix the properties
        Base.fixProperty(props, "body");

        // Render the component
        Components.Toast(props);
    }
}

// Toolbar
export class Toolbar extends Base<Types.IToolbarProps> {
    // Render the bootstrap component
    onRender(props) { Components.Toolbar(props); }
}

// Tooltip
export class Tooltip extends Base<Types.ITooltipProps> {
    // Render the bootstrap component
    onRender(props) { Components.Tooltip(props); }
}