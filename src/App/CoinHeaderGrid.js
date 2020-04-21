import React from "react";
import styled from "styled-components";
// import { DeletableTile } from "./Styles";
import { Tile } from "./Tile";

export const CoinHeaderGridStyled = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;

  padding: 10px;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export default function({ name, symbol }) {
  return (
    <CoinHeaderGridStyled>
      <Tile>{name}</Tile>
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinHeaderGridStyled>
  );
}
