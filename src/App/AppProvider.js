import React from "react";
import cc from "cryptocompare";
import _ from "lodash";
export const AppContext = React.createContext();
const MAX_FAVORITES = 10;
export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.userSettings(),
      favourites: ["BTC", "ETH", "XMR", "DOGE", "SUP"],
      setPage: this.setPage,
      setFavourite: this.setFavourite,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
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
  addCoin = (coinName) => {
    let favourites = [...this.state.favourites];
    console.log("favor add:", favourites);
    if (favourites.length < MAX_FAVORITES) {
      favourites.push(coinName);
      this.setState({ favourites });
    }
  };

  removeCoin = (coinName) => {
    let favourites = [...this.state.favourites];
    console.log("favor remove:", favourites);
    this.setState({ favourites: _.pull(favourites, coinName) });
  };
  isInFavorites = (coinName) => _.includes(this.state.favourites, coinName);

  render() {
    console.log(this.state);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
