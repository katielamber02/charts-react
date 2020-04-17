import React from "react";
import styled, { css } from "styled-components";

const Bar = styled.div`
  display: grid;
  background-color: rgb(59, 0, 168);
  grid-template-columns: 100px auto 120px 120px;
  font-size: 20px;
`;
const MyLogo = styled.div`
  font-size: 1.5em;
`;
const ControlledButton = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `};
`;

function ButtonToBeControlled({ name, active }) {
  return <ControlledButton active={active}>{name}</ControlledButton>;
}
export default function() {
  return (
    <Bar>
      <MyLogo>CryptoDash</MyLogo>
      <div />
      <ButtonToBeControlled active name="Dashboard" />
      <ButtonToBeControlled name="Settings" />
    </Bar>
  );
}
