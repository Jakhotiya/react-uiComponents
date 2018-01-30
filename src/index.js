import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Grid from "./Grid";
import {data,Columns} from "./data-structures";
import Form,{registerComponent} from './Form';
import mage from './magento-attrs';

import Input from 'Components/form/element/Input';



let attributes = mage.items.map(d => {
  return {
    id: d.attribute_id,
    name: d.attribute_code,
    label: d.default_frontend_label,
    type: d.frontend_input,
    options: d.options
  };
})

const fields = {
  text: Input,
  price: Input,
  //select: SelectInput,
  //radio: RadioGroup,
  textarea: Input,
  boolean: Input
}


for (let key in fields) {
  registerComponent(key, fields[key]);
}

const columns = Object.values(Columns);

const GridView = (props) => (<Grid columns={columns} {...data} />);

const ProductForm = (props) => <Form entityId={props.match.params.id} attributes={attributes}/>

const App = () => (
  <div className="app-container">
  <Router>
    <React.Fragment>
        <Route exact path="/" component={GridView} />
        <Route path="/product/edit/:id" component={ProductForm} />
    </React.Fragment>
  </Router>
    
  </div>
);

render(<App />, document.getElementById("root"));
