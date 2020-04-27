import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";

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
      <AppBar color="primary">
        {/* allows content to scale horizontally across the Appbar */}
        <Toolbar>
          <Typography variant="h3" color="secondary">
            Arc App
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
