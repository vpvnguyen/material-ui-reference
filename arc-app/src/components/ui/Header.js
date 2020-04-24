import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

export default function Header(props) {
  return (
    // has a default class of position='fixed'
    <AppBar>
      {/* allows content to scale horizontally across the Appbar */}
      <Toolbar>Arc App</Toolbar>
    </AppBar>
  );
}
