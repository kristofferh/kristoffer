import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router";
import BodyClassName from "react-body-classname";
import Helmet from "react-helmet";

import "./styles";

export default class Navigation extends Component {
  constructor(props, context) {
    super(props, context);
    this.navItems = ["index", "about", "resume", "portfolio"]; // @todo: generate links based off of these.
    this.state = {
      path: this.getPath(props.location.pathname),
      pageTitle: this.getPageTitle(this.props),
      showNav: false
    };

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
  }

  handleCloseClick() {
    this.setState({ showNav: false });
  }

  // @todo: make this generic.
  handlePortfolioClick(e) {
    if (!this.state.showNav && this.state.path === "portfolio") {
      e.preventDefault();
      this.setState({ showNav: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged =
      nextProps.location.pathname !== this.props.location.pathname;
    this.setState({
      path: this.getPath(nextProps.location.pathname),
      pageTitle: this.getPageTitle(nextProps),
      showNav: !!(!this.state.showNav && !locationChanged)
    });

    if (locationChanged) {
      window.analytics.page();
    }
  }

  componentDidMount() {
    // Page load
    window.analytics.page();
  }

  getPath(path) {
    return path === "/" ? "index" : path.split("/")[1].replace(/\//g, " ");
  }

  getPageTitle(props) {
    return props.children.props.route.page.data.title;
  }

  render() {
    return (
      <BodyClassName
        className={classNames(this.state.path, {
          "show-nav": this.state.showNav
        })}
      >
        <nav
          className={classNames("main-nav", this.state.path, {
            "show-nav": this.state.showNav
          })}
        >
          <Helmet>
            <html
              lang="en"
              className={classNames(this.state.path, {
                "show-nav": this.state.showNav
              })}
            />
          </Helmet>
          <Link
            to="/portfolio/"
            onClick={this.handlePortfolioClick}
            activeClassName="active"
            className={classNames("nav-item", {
              active: this.state.path === "portfolio"
            })}
          >
            <span className="text">
              <span
                className={classNames("subnav-wrapper", {
                  "has-subnav":
                    this.state.path === "portfolio" &&
                    this.state.pageTitle !== "Portfolio"
                })}
              >
                <span className="subnav">
                  <span className="subnav-text section-title">
                    {"Portfolio"}
                  </span>
                </span>
                <span className="subnav">
                  {this.state.path === "portfolio" &&
                    this.state.pageTitle !== "Portfolio" && (
                      <span className="subnav-text page-title">
                        {this.state.pageTitle}
                      </span>
                    )}
                </span>
              </span>
            </span>
          </Link>
          <Link to="/about/" activeClassName="active" className="nav-item">
            <span className="text">{"About"}</span>
          </Link>
          <Link to="/resume/" activeClassName="active" className="nav-item">
            <span className="text">{"Resume"}</span>
          </Link>
          <span className="nav-item close" onClick={this.handleCloseClick}>
            <span className="close-btn" />
          </span>
        </nav>
      </BodyClassName>
    );
  }
}

Navigation.defaultProps = {
  location: {}
};

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
};

Navigation.contextTypes = {
  router: PropTypes.object
};
