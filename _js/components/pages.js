import React, {findDOMNode} from 'react';
import { Link } from 'react-router';

let Pages = React.createClass({

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

export default Pages;
