import React from "react";
import { AppContext } from "../AppProvider";

import CoinHeaderGrid from "../CoinHeaderGrid";
import Image from "../Shared/Image";
import { SelectableTile, DeletableTile, DisabledTile } from "../Tile";

function clickCoinHandler(topSection, name, addCoin, removeCoin) {
  // console.log("added:", topSection);
  return topSection
    ? () => {
        removeCoin(name);
      }
    : () => {
        addCoin(name);
      };
}
export default function SingleCoin({ coin, favouriteSection }) {
  return (
    <AppContext.Consumer>
      {({ data, addCoin, removeCoin, isInFavorites }) => {
        let coinUnit = data[coin];
        // console.log(addCoin, removeCoin, coinUnit, favouriteSection);

        let TileClass = SelectableTile;

        if (favouriteSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinUnit.Name)) {
          TileClass = DisabledTile;
        }
        return (
          <TileClass
            onClick={clickCoinHandler(
              favouriteSection,
              coinUnit.Name,
              addCoin,
              removeCoin
            )}
          >
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
