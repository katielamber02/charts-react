import React from "react";
import { AppContext } from "../AppProvider";

import CoinHeaderGrid from "../CoinHeaderGrid";
import Image from "../Shared/Image";
import { SelectableTile, DeletableTile } from "../Tile";

export default function SingleCoin({ coin, favouriteSection }) {
  return (
    <AppContext.Consumer>
      {({ data }) => {
        let coinUnit = data[coin];

        let TileClass = SelectableTile;

        if (favouriteSection) {
          TileClass = DeletableTile;
        }
        return (
          <TileClass>
            <CoinHeaderGrid
              name={coinUnit.CoinName}
              symbol={coinUnit.Symbol}
              favouriteSection={favouriteSection}
            />
            <Image coin={coinUnit} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
