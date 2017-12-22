import React, { Component } from "react";
import PropTypes from "prop-types";
import BodyClassName from "react-body-classname";
import Helmet from "react-helmet";

import "./styles.scss";

export default class Resume extends Component {
  render() {
    let description = "Kristoffer Hedstrom's Resume.";
    return (
      <div>
        <Helmet
          meta={[
            { name: "description", content: description },
            { property: "og:description", content: description },
            { name: "twitter:title", content: description },
            { name: "twitter:description", content: "Cool beans." }
          ]}
          title="Resume"
        />
        <BodyClassName className="blue">
          {/*
          <div
            dangerouslySetInnerHTML={{ __html: require("./_static.html").body }}
          />
        */}
        </BodyClassName>
      </div>
    );
  }
}

Resume.propTypes = {
  route: PropTypes.object
};
