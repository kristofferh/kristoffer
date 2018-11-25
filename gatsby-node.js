exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "/portfolio/side-projects",
    isPermanent: true,
    redirectInBrowser: true,
    toPath: "/portfolio/apps"
  });
};
