import React from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.userSettings(),
      setPage: this.setPage,
      setFavourite: this.setFavourite,
    };
  }

  setPage = (page) => {
    console.log("clicked");
    return this.setState({ page });
  };
  userSettings() {
    let data = JSON.parse(localStorage.getItem("dash"));
    if (!data) {
      return { page: "settings", visited: true };
    }
    return {};
  }
  setFavourite = () => {
    console.log("hello");
    this.setState({
      page: "dashboard",
      visited: true,
    });
    localStorage.setItem("dash", JSON.stringify({ test: "hello" }));
  };
  render() {
    console.log(AppContext);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
