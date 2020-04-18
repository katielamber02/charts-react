import React from "react";
import { AppContext } from "./AppProvider";

export default function Content(props) {
  return (
    <AppContext.Consumer>
      {({ data }) => {
        if (!data) return <div>Loading...</div>;
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
