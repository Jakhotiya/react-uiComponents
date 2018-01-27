import React from "react";
import { render } from "react-dom";

import Grid from "./Grid";
import {data,Columns} from "./data-structures";

import "./style.css";

const columns = Object.values(Columns);

const App = () => (
  <div className="app-container">
    <Grid columns={columns} {...data}/>
  </div>
);

render(<App />, document.getElementById("root"));
