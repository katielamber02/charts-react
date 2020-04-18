import React from "react";
import { AppContext } from "../AppProvider";
import { SelectableTile } from "../Tile";
import CoinHeaderGrid from "../CoinHeaderGrid";

export default function SingleCoin({ coin }) {
  return (
    <AppContext.Consumer>
      {({ data }) => {
        let mycoin = data[coin];
        // console.log(mycoin);
        return (
          <SelectableTile>
            <CoinHeaderGrid name={mycoin.CoinName} symbol={mycoin.Symbol} />
          </SelectableTile>
        );
      }}
    </AppContext.Consumer>
  );
}
