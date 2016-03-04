import React from 'react/addons';
import { Lifecycle, History, Link } from 'react-router';

import PagesStore from '../stores/pages';

import Logo from './logo';

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

    // Called before initial rendering.
    componentWillMount() {
        PagesStore.init();
    },

    componentWillReceiveProps(nextProps) {
        this.setState({
            path: this.getPath(nextProps.location.pathname),
            showNav: !!(!this.state.showNav && nextProps.location.pathname === this.props.location.pathname)
        });

        if (nextProps.location.pathname !== this.props.location.pathname) {
            let page = PagesStore.getPage(this.getPath(nextProps.location.pathname));
            this.updateTitle(page.title || '');
            this.updateDescriptions(page.description || '');
        }
    },

    updateTitle(title) {
        let baseTitle = 'Kristoffer Hedstrom | k-create';
        if (title) {
            title += ' - ' + baseTitle;
        } else {
            title = baseTitle;
        }
        document.title = title;
    },

    updateDescriptions(description) {
        if (!description) {
            return;
        }

        let metaDescriptions = [];
        metaDescriptions.push(document.querySelector('meta[name="description"]'));
        metaDescriptions.push(document.querySelector('meta[property="og:description"]'));

        for (let meta of metaDescriptions) {
            meta.setAttribute('content', description);
        }

    },

    getPath(path) {
        return (path === '/') ? 'index' : path.replace(/\//g, '');
    },

    render() {
        return (
            <nav className={'main-nav ' + this.state.path + ' ' + ((this.state.showNav) ? 'show-nav' : '')}>
                <Logo/>
                <Link to="/portfolio/" activeClassName="active" className="nav-item"><span className="text">Portfolio</span></Link>
                <Link to="/about/" activeClassName="active" className="nav-item"><span className="text">About</span></Link>
                <Link to="/resume/" activeClassName="active" className="nav-item"><span className="text">Resume</span></Link>
                <span className="nav-item close" onClick={this.handleCloseClick}>
                    <span className="close-btn"></span>
                </span>
            </nav>
        );
    }
});

export default Navigation;
