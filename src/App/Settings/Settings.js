import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import Confirmation from "./Confirmation";
import Coins from "./Coins";

export default function Settings() {
  return (
    <>
      <Coins favouriteSection={true} />
      <WelcomeMessage />

      <Confirmation />
      <Coins />
    </>
  );
}
