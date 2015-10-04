import React, {findDOMNode} from 'react/addons';
import { Link } from 'react-router';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let Pages = React.createClass({

    render() {
        let { pathname } = this.props.location;
        return (
            <ReactCSSTransitionGroup component="div" transitionName="page">
                 {React.cloneElement(this.props.children || <div />, { key: pathname })}
            </ReactCSSTransitionGroup>
        );
    }
});

export default Pages;
