import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";

// adds subtle effect where header will lift when the page is scrolled
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
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
