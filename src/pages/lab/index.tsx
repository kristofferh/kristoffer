import React from "react";

import Layout from "../../components/layouts";
import { Boxes } from "../../components/boxes";

export const frontmatter = {
  title: "Lab",
  color: "orange",
  nav: "none",
};

const Lab = (props: any) => (
  <Layout {...props} frontmatter={frontmatter}>
    <div className="content-container">
      <h1 className="page-title">Lab</h1>
      <p>Not much here yet.</p>
      <div style={{ position: "relative", minHeight: 600, height: 600 }}>
        <Boxes />
      </div>
    </div>
  </Layout>
);

export default Lab;
