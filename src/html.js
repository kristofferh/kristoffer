import React from "react";
import PropTypes from "prop-types";
import BodyClassName from "react-body-classname";
import Helmet from "react-helmet";

import { siteMetadata as config } from "../gatsby-config";

const HTML = ({ color, favicon, body, headComponents, postBodyComponents }) => {
  let head = Helmet.rewind();

  if (!color) {
    color = BodyClassName.rewind() || "green";
  }

  // Sorry, this is gross.
  let analytics;
  if (process.env.NODE_ENV === "production") {
    analytics =
      "!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error('Segment snippet included twice.');else{analytics.invoked=!0;analytics.methods=['trackSubmit','trackClick','trackLink','trackForm','pageview','identify','reset','group','track','ready','alias','page','once','off','on'];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement('script');e.type='text/javascript';e.async=!0;e.src=('https:'===document.location.protocol?'https://':'http://')+'cdn.segment.com/analytics.js/v1/'+t+'/analytics.min.js';var n=document.getElementsByTagName('script')[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION='3.1.0';";
    analytics += `analytics.load("${config.segment}");`;
    analytics += "}}();";
  }
  const htmlAttrs = head.htmlAttributes.toComponent();

  return (
    <html {...htmlAttrs}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0, viewport-fit=cover"
        />
        {headComponents}
        {head.meta.toComponent()}
        {head.title.toComponent()}
        <link rel="shortcut icon" href={favicon} />
        <script dangerouslySetInnerHTML={{ __html: analytics }} />
      </head>
      <body className={color}>
        <div
          id="___gatsby"
          className="page-wrapper"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
};

HTML.propTypes = {
  body: PropTypes.any,
  color: PropTypes.string,
  favicon: PropTypes.string,
  headComponents: PropTypes.any,
  postBodyComponents: PropTypes.any
};

export default HTML;
