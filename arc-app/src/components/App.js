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
      {/* placeholder to show scrolling effect */}
      {[...new Array(120)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join("\n")}
    </ThemeProvider>
  );
}

export default App;
