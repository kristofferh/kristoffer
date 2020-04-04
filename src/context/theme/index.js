import PropTypes from "prop-types";
import React from "react";

const defaultState = {
  theme: "dark",
  toggleTheme: () => {},
};

export const ThemeContext = React.createContext(defaultState);

export class ThemeProvider extends React.Component {
  state = defaultState;

  static propTypes = {
    children: PropTypes.any,
  };

  darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  handleToggleTheme = () => {
    let theme = this.state.theme === "dark" ? "light" : "dark";
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
    this.setState({ theme });
    this.stopListeneningForChanges();
  };

  supportsDarkMode = () => {
    return this.darkMediaQuery.matches === true;
  };

  listenForChanges() {
    try {
      // Chrome & Firefox
      this.darkMediaQuery.addEventListener("change", this.setDefaultTheme);
    } catch (e1) {
      try {
        // Safari
        this.darkMediaQuery.addListener(this.setDefaultTheme);
      } catch (e2) {
        console.error(e2);
      }
    }
  }

  stopListeneningForChanges() {
    try {
      // Chrome & Firefox
      this.darkMediaQuery.removeEventListener("change", this.setDefaultTheme);
    } catch (e1) {
      try {
        // Safari
        this.darkMediaQuery.removeListener(this.setDefaultTheme);
      } catch (e2) {
        console.error(e2);
      }
    }
  }

  componentWillUnmount() {
    this.stopListeneningForChanges();
  }

  setDefaultTheme = () => {
    this.setState({
      theme: this.supportsDarkMode() ? "dark" : "light",
    });
  };

  componentDidMount() {
    // Getting dark mode value from localStorage.
    const savedTheme =
      typeof window !== "undefined" && localStorage.getItem("theme");
    if (savedTheme) {
      this.setState({ theme: savedTheme });
    } else {
      this.setState({
        theme: this.supportsDarkMode() ? "dark" : "light",
      });
      this.listenForChanges();
    }
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.handleToggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
