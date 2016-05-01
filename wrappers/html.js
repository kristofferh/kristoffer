import {default as React, Component} from 'react';
import BodyClassName from 'react-body-classname';

export default class HTMLWrapper extends Component {
  render () {
    const post = this.props.route.page.data;
    let color = post.color || 'green';
    return (
      <BodyClassName className={color}>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </BodyClassName>
    );
  }
}

HTMLWrapper.propTypes = {
  route: React.PropTypes.object
};
