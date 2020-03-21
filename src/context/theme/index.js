import PropTypes from "prop-types";
import React from "react";

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const defaultState = {
  theme: supportsDarkMode() ? "dark" : "light",
  toggleDark: () => {}
};

export const ThemeContext = React.createContext(defaultState);

export class ThemeProvider extends React.Component {
  state = defaultState;

  static propTypes = {
    children: PropTypes.any
  };

  toggleTheme = () => {
    let dark = this.state.theme === "dark";
    localStorage.setItem("theme", JSON.stringify(dark));
    this.setState({ theme: dark ? "dark" : "light" });
  };

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      this.setState({ theme });
    }
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
