import React, { useRef, useEffect } from "react";

import Layout from "../../components/layouts";
import { Boxes } from "../../components/boxes";
import { Particles } from "./particles";

export const frontmatter = {
  title: "Lab",
  color: "orange",
  nav: "none",
};

const Lab = (props: any) => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("hi");
    const particles = new Particles();
    const {
      renderer: { domElement },
    } = particles;
    canvasContainerRef.current?.appendChild(domElement);
  }, [canvasContainerRef]);
  return (
    <Layout {...props} frontmatter={frontmatter}>
      <div className="content-container">
        <h1 className="page-title">Lab</h1>
        <p>Not much here yet.</p>
        <div
          ref={canvasContainerRef}
          className="canvas-container"
          style={{
            width: "100vw",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            left: "50%",
            right: "50%",
            position: "relative",
          }}
        />
        <div style={{ position: "relative", minHeight: 600, height: 600 }}>
          <Boxes />
        </div>
      </div>
    </Layout>
  );
};

export default Lab;
