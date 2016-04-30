import React from 'react';
import {config} from 'config';

import './styles';

const Footer = () => {
  return (
      <footer className='page-footer content-container'>
        <div className='footer-inner row'>
          <div className='col-xs-12'>
            {`${config.name}`}{' — '} <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
