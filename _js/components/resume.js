import React, {findDOMNode} from 'react';
import PagesStore from '../stores/pages';

let Resume = React.createClass({

    // Called before initial rendering.
    componentWillMount: function () {
        PagesStore.init()
        console.log('resume?', PagesStore.getPage('resume'));
        //ContactStore.init();
    },

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: PagesStore.getPage('resume').content}} />
        );
    }
});

export default Resume;
