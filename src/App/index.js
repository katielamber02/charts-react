import React, { Component } from "react";
import "./App.css";
import Settings from "./Settings/Settings";
import styled from "styled-components";
import Layout from "./Layout";
import Bar from "./Bar";
import { AppProvider } from "./AppProvider";

const MyButton = styled.button`
  border-radius: 2px;
  color: green;
  font-size: 2em;
  border: 4px solid ${(props) => props.myprop};
  color: ${(props) => (props.primary ? "yellow" : null)};
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;
class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <AppProvider>
            <Bar />
            <Settings />
            <MyButton>button demo1 </MyButton>
            <MyButton primary>button demo 2</MyButton>
            <MyButton myprop>button demo 3</MyButton>
            <Button>demo 4</Button>
            <TomatoButton primary>demo 5</TomatoButton>
          </AppProvider>
        </Layout>
      </>
    );
  }
}

export default App;
