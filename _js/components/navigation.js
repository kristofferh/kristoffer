import React from 'react/addons';
import { Lifecycle, History, Link } from 'react-router';
// import ContactStore from '../stores/contacts';
// import { Contacts } from './contacts';
// import Loader from './loading-screen';
// import Header from './header';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let Navigation = React.createClass({

    // Load initial state
    getInitialState() {
        return {
            path: this.setPath(this.props.location.pathname),
            showNav: false
        };
    },

    // Called before initial rendering.
    componentWillMount() {
        if(this.props.location.pathname === '/') {
            console.log('hey');
        }
    },

    componentWillReceiveProps(nextProps) {
        this.setState({
            path: this.setPath(nextProps.location.pathname),
            showNav: !!(!this.state.showNav && nextProps.location.pathname === this.props.location.pathname)
        })
    },

    setPath(path) {
        return (path === '/') ? 'home' : path.replace(/\//g, '');
    },

    render() {
        return (
            <nav className={'main-nav ' + this.state.path + ' ' + ((this.state.showNav) ? 'show-nav' : '')}>
                <Link to="/portfolio/" activeClassName="active" className="nav-item"><span className="text">Portfolio</span></Link>
                <Link to="/about/" activeClassName="active" className="nav-item"><span className="text">About</span></Link>
                <Link to="/resume/" activeClassName="active" className="nav-item"><span className="text">Resume</span></Link>
            </nav>
        );
    }
});

export default Navigation;
