import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
import SingleCoin from "./SingleCoin";
import { Tile } from "../Tile";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4px;
`;
// box - shadow: 0px 0px 5px 1px;
// background - color: #061a44;
export default function Coins() {
  function displayData(data) {
    return Object.keys(data).slice(0, 30);
  }
  return (
    <AppContext.Consumer>
      {({ data }) => (
        <StyledGrid>
          {displayData(data).map((coin) => (
            <Tile key={coin}>
              <SingleCoin coin={coin} />
            </Tile>
          ))}
        </StyledGrid>
      )}
    </AppContext.Consumer>
  );
}
