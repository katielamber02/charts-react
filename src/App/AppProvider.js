import React from "react";
import cc from "cryptocompare";

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
  componentDidMount() {
    this.fetchApi();
  }
  fetchApi = async () => {
    let data = (await cc.coinList()).Data;
    // console.log(data);
    this.setState({ data });
  };
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
    // console.log("hello");
    this.setState({
      page: "dashboard",
      visited: true,
    });
    localStorage.setItem("dash", JSON.stringify({ test: "hello" }));
  };
  render() {
    console.log(this.state);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
