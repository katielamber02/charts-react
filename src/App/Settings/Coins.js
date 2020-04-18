import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
export default function Coins() {
  return (
    <AppContext.Consumer>
      {({ data }) => (
        <StyledGrid>
          {Object.keys(data).map((coin) => (
            <div key={coin}>{coin}</div>
          ))}
        </StyledGrid>
      )}
    </AppContext.Consumer>
  );
}
