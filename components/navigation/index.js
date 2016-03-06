import React from 'react';
import { Link } from 'react-router';

import './styles';

let Navigation = React.createClass({

    // Load initial state
    getInitialState() {
        return {
            path: this.getPath(this.props.location.pathname),
            showNav: false
        };
    },

    handleCloseClick(event) {
        this.setState({showNav: false});
    },

    componentWillReceiveProps(nextProps) {
        this.setState({
            path: this.getPath(nextProps.location.pathname),
            showNav: !!(!this.state.showNav && nextProps.location.pathname === this.props.location.pathname)
        });
    },

    getPath(path) {
        return (path === '/') ? 'index' : path.replace(/\//g, '');
    },

    render() {
        return (
            <nav className={'main-nav ' + this.state.path + ' ' + ((this.state.showNav) ? 'show-nav' : '')}>
                <Link to='/portfolio/' activeClassName='active' className='nav-item'><span className='text'>Portfolio</span></Link>
                <Link to='/about/' activeClassName='active' className='nav-item'><span className='text'>About</span></Link>
                <Link to='/resume/' activeClassName='active' className='nav-item'><span className='text'>Resume</span></Link>
                <span className='nav-item close' onClick={this.handleCloseClick}>
                    <span className='close-btn'></span>
                </span>
            </nav>
        );
    }
});

export default Navigation;
