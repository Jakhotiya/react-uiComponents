import React from "react";
import { render } from "react-dom";
import Form from "./Form";

import Grid from "./Grid";
import {GridData} from "./data-structures";

import "./style.css";

const rows = [];

for(let key in GridData.items){
  rows.push(GridData.items[key]);
}

const App = () => (
  <div className="app-container">
    <Form />
    <Grid rows={rows} visibleCols={GridData.visibleCols}/>
  </div>
);

render(<App />, document.getElementById("root"));
