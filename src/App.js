import React, {Fragment} from "react";
import {render} from "react-dom";
import ErrorBoundary from './ErrorBoundary';
import {
  BrowserRouter as Router,
  Route,
  withRouter
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
  <ErrorBoundary>
    <PageAction  label="Add Product" handleClick={handleClick}/>
    <Grid columns={columns} {...data} />
  </ErrorBoundary>
);

const ProductForm = withRouter((props) => {

  const entityId = parseInt(props.match.params.id);
  return (
    <ErrorBoundary>
      <Form history={props.history} entityId={entityId} groups={groups} attributes={attributes}/>
    </ErrorBoundary>
  )
})

const App = (props) => (
  <Router>
    <Fragment>
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
    </Fragment>
  </Router>
);

export default App;
