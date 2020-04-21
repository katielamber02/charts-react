import styled from "styled-components";
import { AppContext } from "../AppProvider";
import React from "react";
import { fontSize1, greenBoxShadow, color3 } from "../Shared/Styles";

const ButtonStyles = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1};
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;
const Centered = styled.div`
  display: grid;
  justify-content: center;
`;
export default function() {
  return (
    <AppContext.Consumer>
      {(context) => {
        //console.log(context.setFavourite);
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
