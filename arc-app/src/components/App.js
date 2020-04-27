import React from "react";

// components
import Header from "../components/ui/Header";

// material ui
import { ThemeProvider } from "@material-ui/styles";

import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Add content here
    </ThemeProvider>
  );
}

export default App;
