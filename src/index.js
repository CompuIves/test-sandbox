import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>Hello World</h1>
  </div>
);

render(<App />, document.getElementById("root"));
