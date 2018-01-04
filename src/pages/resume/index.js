import React from "react";

import "./styles.scss";

exports.data = {
  title: "Resume",
  color: "blue",
  description: "Kristoffer Hedstrom's Resume."
};

const Resume = () => (
  <div dangerouslySetInnerHTML={{ __html: require("./_static.html").body }} />
);

export default Resume;
