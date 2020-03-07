import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";

import { StylesProvider } from "@material-ui/core/styles";

class App extends Component {
  render() {
    return (
      <StylesProvider injectFirst>
        <Home />
      </StylesProvider>
    );
  }
}

export default App;
