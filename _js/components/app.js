import React from 'react/addons';
import { Link } from 'react-router';
import Navigation from './navigation';
import Pages from './pages';

let App = React.createClass({

    // Load initial state
    // getInitialState: function () {
    //     return {
    //         pages: JSON.parse(document.getElementById('data').innerHTML),
    //         loading: true
    //     };
    // },

    // Called after initial rendering.
    componentDidMount: function () {
        // if (!this.isMounted()) {
        //     return;
        // }
        // var initialProps = JSON.parse(document.getElementById('data').innerHTML);
        // console.log(initialProps);
    },

    // Called before a component is unmounted from the DOM.
    componentWillUnmount: function () {
        //ContactStore.removeChangeListener(this.updateContacts);
    },

    render: function () {
        return (
            <div>
                <Navigation {...this.props} />
                <div className="content">
                    <Pages {...this.props} />
                </div>
            </div>
        );
    }
});

export default App;
