exports.createPages = ({ boundActionCreators }) => {
  const { createRedirect } = boundActionCreators;

  createRedirect({
    fromPath: "/portfolio/side-projects",
    isPermanent: true,
    redirectInBrowser: true,
    toPath: "/portfolio/apps"
  });
};
