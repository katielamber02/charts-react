import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
import SingleCoin from "./SingleCoin";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`;

export default function Coins() {
  function displayData(data) {
    return Object.keys(data).slice(0, 50);
  }
  return (
    <AppContext.Consumer>
      {({ data }) => (
        <StyledGrid>
          {displayData(data).map((coin) => (
            <div key={coin}>
              <SingleCoin coin={coin} />
            </div>
          ))}
        </StyledGrid>
      )}
    </AppContext.Consumer>
  );
}
