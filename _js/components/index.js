import React from 'react';
import PagesStore from '../stores/pages';

let Index = React.createClass({

    // Called before initial rendering.
    componentWillMount: function () {
        PagesStore.init();
    },

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: PagesStore.getPage('index').content}} />
        );
    }

});

export default Index;
