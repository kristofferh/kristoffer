import PropTypes from "prop-types";
import React from "react";
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
    analytics = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${config.segment}";analytics.SNIPPET_VERSION="4.13.2";`;
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wdth,wght@50..200,500&display=swap"
          rel="stylesheet"
        />
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
  postBodyComponents: PropTypes.any,
};

export default HTML;
