import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
import SingleCoin from "./SingleCoin";
import { Tile } from "../Tile";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4px;
  margin-top: 40px;
`;

export default function Coins({ favouriteSection }) {
  function displayData(data, favouriteSection, favourites) {
    console.log(favourites);
    return favouriteSection ? favourites : Object.keys(data).slice(0, 30);
    // return Object.keys(data).slice(0, favouriteSection ? 10 : 30);
  }
  return (
    <AppContext.Consumer>
      {({ data, favourites }) => (
        <StyledGrid>
          {displayData(data, favouriteSection, favourites).map((coin) => (
            <Tile key={coin}>
              <SingleCoin coin={coin} favouriteSection={favouriteSection} />
            </Tile>
          ))}
        </StyledGrid>
      )}
    </AppContext.Consumer>
  );
}
