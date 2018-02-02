import React from "react";
import {render} from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Grid from "./Grid";
import {data, Columns} from "./data-structures";
import Form from './Form';
import mage from './magento-attrs';
import Sidenav from 'layout/Sidenav';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import PageAction from 'layout/PageAction';
import Settings from 'Settings';



let attributes = mage.items.map(d => {
  return {
    id: d.attribute_id,
    name: d.attribute_code,
    label: d.default_frontend_label,
    type: d.frontend_input,
    options: d.options
  };
})


const columns = Object.values(Columns);

const groups = Object.values(mage.groups);

const handleClick = (e)=>console.log('Caught the click');

const GridView = (props) => (
  <React.Fragment>
    <PageAction label="Add Product" handleClick={handleClick}/>
    <Grid columns={columns} {...data} />
  </React.Fragment>
);

const ProductForm = (props) => {

  const entityId = parseInt(props.match.params.id);
  return (
    <React.Fragment>
    <PageAction label="Save" handleClick={handleClick}/>
    <Form entityId={entityId} groups={groups} attributes={attributes}/>
    </React.Fragment>
  )
}

const App = (props) => (
  <Router>
    <React.Fragment>
      <Sidenav/>
      <div className='page-wrapper'>
        <Header/>
        <main className="page-content">
          <Route exact path="/" component={GridView}/>
          <Route path="/product/edit/:id" component={ProductForm}/>
          <Route path="/settings" component={Settings}/>
        </main>
        <Footer/>
      </div>
    </React.Fragment>
  </Router>
);

export default App;

render(<App/>, document.getElementById("root"));
