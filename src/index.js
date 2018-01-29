import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Grid from "./Grid";
import Form from './Form';
import {data,Columns} from "./data-structures";

import "./style.css";

const columns = Object.values(Columns);


const GridView = (props) => (<Grid columns={columns} {...data} />);

const App = () => (
  <div className="app-container">
  <Router>
    <React.Fragment>
        <Route exact path="/" component={GridView} />
        <Route path="/product/edit/:id" component={Form} />
    </React.Fragment>
  </Router>
    
  </div>
);

render(<App />, document.getElementById("root"));
