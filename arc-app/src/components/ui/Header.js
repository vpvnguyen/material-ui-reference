import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";

// adds subtle effect where header will lift when the page is scrolled
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0, // listener when to trigger the effect
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  return (
    <ElevationScroll>
      {/* has a default class of position='fixed' */}
      <AppBar>
        {/* allows content to scale horizontally across the Appbar */}
        <Toolbar>Arc App</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
