import React from "react";
import { AppContext } from "../AppProvider";

import CoinHeaderGrid from "../CoinHeaderGrid";
import Image from "../Shared/Image";
import { SelectableTile } from "../Tile";

export default function SingleCoin({ coin }) {
  return (
    <AppContext.Consumer>
      {({ data }) => {
        let coinUnit = data[coin];
        // console.log(mycoin);
        return (
          <SelectableTile>
            <CoinHeaderGrid name={coinUnit.CoinName} symbol={coinUnit.Symbol} />
            <Image coin={coinUnit} />
          </SelectableTile>
        );
      }}
    </AppContext.Consumer>
  );
}
