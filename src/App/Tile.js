import styled from "styled-components";
import {} from "./Shared/Styles";

export const Tile = styled.div`
  padding: 2px;
`;

export const SelectableTile = styled(Tile)`
  background-color: darkblue;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 2px #5fff17;
  }
`;
