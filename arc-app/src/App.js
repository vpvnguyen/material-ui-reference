import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// material ui
import { ThemeProvider } from "@material-ui/styles";

// components
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CustomSoftwarePage from "./pages/CustomSoftwarePage";
import MobileAppsPage from "./pages/MobileAppsPage";
import WebsitesPage from "./pages/WebsitesPage";
import RevolutionPage from "./pages/RevolutionPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EstimatePage from "./pages/EstimatePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/services" component={() => <ServicesPage />} />
          <Route
            exact
            path="/customsoftware"
            component={() => <CustomSoftwarePage />}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <MobileAppsPage />}
          />
          <Route exact path="/websites" component={() => <WebsitesPage />} />
          <Route
            exact
            path="/revolution"
            component={() => <RevolutionPage />}
          />
          <Route exact path="/about" component={() => <AboutPage />} />
          <Route exact path="/contact" component={() => <ContactPage />} />
          <Route exact path="/estimate" component={() => <EstimatePage />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
