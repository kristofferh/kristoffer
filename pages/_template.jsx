import React from 'react';
import Navigation from 'components/navigation';

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
        <footer>
          {'hi'}
        </footer>
      </div>
    );
  }
});
