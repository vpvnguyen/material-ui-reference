import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import logo from "../../assets/logo.svg";

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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    // use spread operator to copy over properties from theme
    ...theme.mixins.toolbar, // gives a bit of height to app bar to push content below the appbar
    marginBottom: "3em", // add extra spacing to push content to offset the extra height added from the responsive units from the logo
  },
  logo: {
    height: "7em",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        {/* has a default class of position='fixed' */}
        <AppBar>
          {/* allows content to scale horizontally across the Appbar */}
          <Toolbar disableGutters>
            <img alt="company logo" className={classes.logo} src={logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
