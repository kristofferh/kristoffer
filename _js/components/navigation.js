import React from 'react/addons';
import { History, Link } from 'react-router';
// import ContactStore from '../stores/contacts';
// import { Contacts } from './contacts';
// import Loader from './loading-screen';
// import Header from './header';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let Navigation = React.createClass({

    // Load initial state
    getInitialState: function () {
        return {
            path: this.setPath(this.props.location.pathname)
        };
    },

    // Called before initial rendering.
    componentWillMount() {
        console.log('hello?', this.props.location.pathname);
        if(this.props.location.pathname === '/') {
            console.log('hey');
        }
        //ContactStore.init();
    },

    // Called after initial rendering.
    componentDidMount() {
        //ContactStore.addChangeListener(this.updateContacts);
    },

    // Called before a component is unmounted from the DOM.
    componentWillUnmount() {
        //ContactStore.removeChangeListener(this.updateContacts);
    },

    componentWillReceiveProps(nextProps) {
        console.log('changed', nextProps.location.pathname);
        this.setState({
            path: this.setPath(nextProps.location.pathname)
        })
    },

    setPath(path) {
        return (path === '/') ? 'home' : path.replace(/\//g, '');
    },

    render() {
        console.log('render');
        return (
            <nav className={this.state.path}>
                <Link to="/about/" activeClassName="active" className="nav-item">About</Link>
                <Link to="/resume/" activeClassName="active" className="nav-item">Resume</Link>
            </nav>
        );
    }
});

export default Navigation;
