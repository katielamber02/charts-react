import React from "react";
import { AppContext } from "../AppProvider";

export default function WelcomeMessage({ visited }) {
  return (
    <AppContext.Consumer>
      {({ visited }) =>
        visited ? <div>"please, select the coin to begin"</div> : null
      }
    </AppContext.Consumer>
  );
}
