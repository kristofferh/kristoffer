import React from 'react';
import Navigation from 'components/navigation';
import Footer from 'components/footer';

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
        <Footer />
      </div>
    );
  }
});
