import styled from "styled-components";
import { greenBoxShadow, redBoxShadow } from "./Shared/Styles";

export const Tile = styled.div`
  padding: 2px;
`;

export const SelectableTile = styled(Tile)`
  background-color: darkblue;
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
export const DeletableTile = styled(SelectableTile)`
  &:hover {
    color: red;
    cursor: pointer;
    ${redBoxShadow}
  }
`;
