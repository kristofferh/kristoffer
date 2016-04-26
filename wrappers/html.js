import {default as React, Component} from 'react';

export default class HTMLWrapper extends Component {
  render () {
    const post = this.props.route.page.data;
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.body }}/>
      </div>
    );
  }
}

HTMLWrapper.propTypes = {
  route: React.PropTypes.object
};
