import {default as React, Component} from 'react';

import BodyClassName from 'react-body-classname';
import DocumentTitle from 'react-document-title';
import {config} from 'config';

import './styles';

export default class Resume extends Component {
  render () {
    return (
      <DocumentTitle title={`Resume | ${config.siteTitle}`}>
        <BodyClassName className='blue'>
          <div dangerouslySetInnerHTML={{ __html: require('./_static.html').body }}/>
        </BodyClassName>
      </DocumentTitle>
    );
  }
}

Resume.propTypes = {
  route: React.PropTypes.object
};
