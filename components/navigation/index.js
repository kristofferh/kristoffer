import {default as React, Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

import mark from './mark.svg';
import './styles';

export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      path: this.getPath(this.props.location.pathname),
      showNav: false
    };
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick() {
    this.setState({showNav: false});
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.params);
    this.setState({
      path: this.getPath(nextProps.location.pathname),
      showNav: !!(!this.state.showNav && nextProps.location.pathname === this.props.location.pathname)
    });
  }

  getPath(path) {
    return (path === '/') ? 'index' : path.replace(/\//g, '');
  }

  render() {
    return (
      <nav className={classNames('main-nav', {[`${this.state.path}`]: this.state.path}, {'show-nav': this.state.showNav} )}>
        <span className='nav-logo'>
          <span className='nav-logo-container' dangerouslySetInnerHTML={{__html: mark}} />
        </span>
        <Link to='/portfolio/' activeClassName='active' className='nav-item'><span className='text'>{'Portfolio'}</span></Link>
        <Link to='/about/' activeClassName='active' className='nav-item'><span className='text'>{'About'}</span></Link>
        <Link to='/resume/' activeClassName='active' className='nav-item' params={{color: 'green'}}><span className='text'>{'Resume'}</span></Link>
        <span className='nav-item close' onClick={this.handleCloseClick}>
            <span className='close-btn'></span>
        </span>
      </nav>
    );
  }
}

Navigation.defaultProps = {
  location: {}
};

Navigation.propTypes = {
  location: React.PropTypes.object.isRequired
};
