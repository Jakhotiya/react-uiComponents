import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/form/element/Button';
import Fieldset from './Components/form/Fieldset';
import { data } from './data-structures';

const ErrorComp = (props) => {
  return (<div>Oops! No such compoent of type {props.type}</div>)
}

let components = {};

function registerComponent(componentType, component) {
  //checks for valid components
  components[componentType] = component;
}

//create form field HOC
const createField = (props) => {

  return function (attr, index) {
    let Component = components.hasOwnProperty(attr.type)
      ? components[attr.type] : ErrorComp;

    return (<Component key={attr.id}
      handleChange={(e) => props.handleChange(attr.name, e.target.value)}
      value={props[attr.name]}
    />);
  }

}


const setSku = value => {
  return { name: value, sku: value.toUpperCase() };
}

const transformer = {
  name: setSku
}


class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      product: {},
      attributeSet: {}
    }

    props.attributes.forEach(attr => {
      this.state[attr.name] = '';
    });
  }


  handleClick = e => {
    console.log(this.state);
  }

  handleChange = (name, value) => {
    let obj = {};
    if (transformer.hasOwnProperty(name) &&
      typeof transformer[name] === 'function') {
      obj = transformer[name].call(null, value);
    } else {
      obj[name] = value;
    }
    this.setState(obj);
  }

  /**
   * fetch product from local data
   * if it does not exist then attempt to download
   * if that fails then display warning
   */
  componentWillMount() {
    const entityId = this.props.entityId;
    console.log(entityId);

    this.setState({ product: data.items[entityId] });
  }

  render() {
    let props = { handleChange: this.handleChange, ...this.state };
    return (
      <React.Fragment>
        <div>
          <h1> Magento Product Form</h1>
          <p>You are editing <strong>{this.state.product.name}</strong></p>
        </div>
        <form>
          <div>
            <Fieldset label="Product Details"/>
            <Fieldset label="Content" />
            <Fieldset label="Configurations" />
            <Fieldset label="Images and Videos" />
            <Fieldset label="Search Engine Optimisations" />
            <Fieldset label="Related Products, Up-Sells and Cross-Sells" />
            <Fieldset label="Customizable Options" />
            <Fieldset label="Products in Websites" />
            <Fieldset label="Design" />
            <Fieldset label="Schedule Design Update" />
            <Fieldset label="Gift Options" />
            <Fieldset label="Downloadable Information" />
          </div>
        </form>
      </React.Fragment>
    );
  }

}

Form.propTypes = {
  entityId: PropTypes.number.isRequired
}

export { registerComponent };

export default Form;

