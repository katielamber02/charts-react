import styled from "styled-components";
import { AppContext } from "../AppProvider";
import React from "react";

const ButtonStyles = styled.div`
  margin: 10px;
  color: aqua;
  cursor: pointer;
`;
const Centered = styled.div`
  display: grid;
  justify-content: center;
`;
export default function() {
  return (
    <AppContext.Consumer>
      {(context) => {
        console.log(context.setFavourite);
        return (
          <Centered>
            <ButtonStyles onClick={context.setFavourite}>
              Confirm your settings
            </ButtonStyles>
          </Centered>
        );
      }}
    </AppContext.Consumer>
  );
}
