import React from 'react/addons';
import { History, Link } from 'react-router';
// import ContactStore from '../stores/contacts';
// import { Contacts } from './contacts';
// import Loader from './loading-screen';
import Navigation from './navigation';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let App = React.createClass({

    mixins: [ History ],
    // Load initial state
    // getInitialState: function () {
    //     return {
    //         contacts: ContactStore.getContacts(),
    //         loading: true
    //     };
    // },

    // Called before initial rendering.
    componentWillMount: function () {
        console.log('hi?');
        //ContactStore.init();
    },

    // Called after initial rendering.
    componentDidMount: function () {
        //ContactStore.addChangeListener(this.updateContacts);
    },

    // Called before a component is unmounted from the DOM.
    componentWillUnmount: function () {
        //ContactStore.removeChangeListener(this.updateContacts);
    },

    updateContacts: function () {
        // if (!this.isMounted()) {
        //     return;
        // }

        // this.setState({
        //     contacts: ContactStore.getContacts(),
        //     loading: false
        // });
    },

    render: function () {
        return (
            <div>
                <Navigation {...this.props} />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default App;
