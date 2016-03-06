import {default as React, Component} from 'react';
import DocumentTitle from 'react-document-title';
import {config} from 'config';

import 'styles/base';

export default class Index extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle} />
    );
  }
}

Index.propTypes = {
  route: React.PropTypes.object
};
