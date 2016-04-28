import {default as React, Component} from 'react';
import DocumentTitle from 'react-document-title';
import {config} from 'config';
import BodyClassName from 'react-body-classname';

export default class HTMLWrapper extends Component {
  render () {
    const post = this.props.route.page.data;
    let color = post.color || 'green';
    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <BodyClassName className={color}>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </BodyClassName>
      </DocumentTitle>
    );
  }
}

HTMLWrapper.propTypes = {
  route: React.PropTypes.object
};
