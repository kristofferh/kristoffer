import React from "react";

import Layout from "../components/layouts";

const Index = (props) => (
  <Layout {...props}>
    <div className="content-container">
      <h1 className="page-title">Kristoffer Hedstrom</h1>
      <div className="page-intro">
        Kris Hedstrom is an interactive designer and developer. Currently in
        Zürich, Switzerland.
      </div>
    </div>
  </Layout>
);

export default Index;
