import React from "react";

import Layout from "../../components/layouts";

export const frontmatter = {
  title: "Oops. Not Found.",
  color: "orange",
  nav: "none"
};

const FourOhFour = props => (
  <Layout {...props}>
    <div className="content-container">
      <h1 className="page-title">{"Not Found"}</h1>
      <p>{"Oops, can’t find that page."}</p>
      <p>
        {
          "We did some redecorating lately and we probably moved that page. You can go back to the "
        }
        <a href="/">{"Index"}</a>
        {" or take a look at the "}
        <a href="http://2008.k-create.com">{"old site"}</a>
        {"."}
      </p>
    </div>
  </Layout>
);

export default FourOhFour;
