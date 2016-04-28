import React from 'react';
import Navigation from 'components/navigation';
import {config} from 'config';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any
    };
  },
  render () {
    return (
      <div>
        <Navigation {...this.props} />
        <section className='content-wrapper'>
          {this.props.children}
        </section>
        <footer className='footer-wrapper'>
          <div className='footer-inner content-container'>
            {`${config.name}`}{' — '} <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
        </footer>
      </div>
    );
  }
});
