import React from 'react';

import mark from './mark.svg'

let Logo = React.createClass({
    render() {
        return (
            <div className='home-mark'>
                <span dangerouslySetInnerHTML={{__html: mark}} />
            </div>
        );
    }
});

export default Logo;
