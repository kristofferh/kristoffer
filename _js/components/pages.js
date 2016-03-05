import React, {findDOMNode} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

let Pages = React.createClass({

    render() {
        let { pathname } = this.props.location;
        return (
            <ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionName="page">
                 {React.cloneElement(this.props.children || <div />, { key: pathname })}
            </ReactCSSTransitionGroup>
        );
    }
});

export default Pages;
