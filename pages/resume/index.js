import {default as React, Component} from 'react';

import DocumentTitle from 'react-document-title';
import {config} from 'config';

export default class Resume extends Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div dangerouslySetInnerHTML={{ __html: require('./_static.html') }}/>
      </DocumentTitle>
    );
  }
}

Resume.propTypes = {
  route: React.PropTypes.object
};
