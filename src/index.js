import React from "react";
import { render } from "react-dom";
import Form from "./Form";

import Grid from "./Grid";
import {data,Columns} from "./data-structures";

import "./style.css";


const App = () => (
  <div className="app-container">
    <Grid columns={Columns} {...data}/>
  </div>
);

render(<App />, document.getElementById("root"));
