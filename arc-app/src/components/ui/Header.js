import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

// menu
import { Menu, MenuItem } from "@material-ui/core";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

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
    // smaller gap between header and content when screen is md or lower
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    // phone sizes
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    // smaller logo when screen is md or lower
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    // phone sizes
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0, // removes padding from button
    "&:hover": {
      backgroundColor: "transparent", // removes overlay when on logo hover
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue, // sets menu color theme
    color: "white",
    // sharp box corners around menu
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    // created highlighting effect
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [activeTab, setActiveTab] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState(null); // where menu will be rendered
  const [menuOpen, setMenuOpen] = useState(false); // visibility of menu
  const [selectedIndex, setSelectedIndex] = useState(0); // selected menu items

  const handleActiveTab = (e, value) => {
    setActiveTab(value);
  };

  const handleMenuOpen = (e) => {
    setMenuAnchor(e.currentTarget); // contain the element that has been clicked on
    setMenuOpen(true);
  };

  const handleMenuClose = (e) => {
    setMenuAnchor(null);
    setMenuOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setMenuAnchor(null);
    setMenuOpen(false);
    setSelectedIndex(i);
  };

  const servicesMenuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile Development", link: "/mobileapps" },
    { name: "Web Development", link: "/websites" },
  ];

  useEffect(() => {
    // keeps active tab on the correct route
    switch (window.location.pathname) {
      case "/":
        if (activeTab !== 0) setActiveTab(0);
        break;
      case "/services":
        if (activeTab !== 1) setActiveTab(1) && setSelectedIndex(0);
        break;
      case "/revolution":
        if (activeTab !== 2) setActiveTab(2);
        break;
      case "/about":
        if (activeTab !== 3) setActiveTab(3);
        break;
      case "/contact":
        if (activeTab !== 4) setActiveTab(4);
        break;
      case "/estimate":
        if (activeTab !== 5) setActiveTab(5);
        break;
      case "/customesoftware":
        if (activeTab !== 1) setActiveTab(1) && setSelectedIndex(1);
        break;
      case "/mobileapps":
        if (activeTab !== 1) setActiveTab(1) && setSelectedIndex(2);
        break;
      case "/websites":
        if (activeTab !== 1) setActiveTab(1) && setSelectedIndex(3);
        break;
      default:
        break;
    }
  }, [activeTab]); // [activeTab] pass in array of dependencies for hook

  const tabs = (
    <React.Fragment>
      <Tabs
        value={activeTab}
        onChange={handleActiveTab}
        className={classes.tabContainer}
        indicatorColor="primary" // set active indicator to the same color as the header; hiding the indicator
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          aria-owns={menuAnchor ? "simple-menu" : undefined} // set menu name when menuAnchor is true
          aria-haspopup={menuAnchor ? "true" : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(e) => handleMenuOpen(e)} // opens menu on mouseover
          label="Services"
          to="/services"
        />
        <Tab
          className={classes.tab}
          label="The Revolution"
          component={Link}
          to="revolution"
        />
        <Tab
          className={classes.tab}
          label="About Us"
          component={Link}
          to="about"
        />
        <Tab
          className={classes.tab}
          label="Contact Us"
          component={Link}
          to="contact"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="estimate"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu" // should match to tab component of aria-owns
        classes={{ paper: classes.menu }}
        anchorEl={menuAnchor}
        open={menuOpen}
        onClose={() => {
          handleMenuClose();
          setActiveTab(1);
        }}
        MenuListProps={{ onMouseLeave: handleMenuClose }} // menu will close using MenuListProps when mouse leave
        elevation={0}
      >
        {servicesMenuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setActiveTab(1);
              handleMenuClose();
            }}
            selected={i === selectedIndex && activeTab === 1} // determined selected item against the current index and check if we are on main services tab
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        {/* has a default class of position='fixed' */}
        <AppBar position="fixed">
          {/* allows content to scale horizontally across the Appbar */}
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              onClick={() => setActiveTab(0)}
              className={classes.logoContainer}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {/* if device is large or greater, show tabs */}
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
