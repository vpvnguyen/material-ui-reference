import React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
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
  tabContainer: {
    marginLeft: "auto", // sets left most margin to extend as much as it can to push the tabs right
  },
  tab: {
    ...theme.typography.tab, // extend typography tab styling from theme
    minWidth: 10, // removes spacing between tabs
    marginLeft: "25px", // use px over rem to maintain constant spacing between tabs regardless of device size
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px", // rounds out button
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
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
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
