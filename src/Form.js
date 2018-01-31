import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/form/element/Button';
import Fieldset from 'Components/form/Fieldset';
import { data } from './data-structures';

//@TODO clearly describe and document handler APIs
import Handler from './field-handlers';

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
    if (Handler.hasOwnProperty(name) &&
      typeof Handler[name] === 'function') {
      obj = Handler[name].call(null, value);
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
    this.setState({ product: data.items[entityId] });
  }

  render() {
    let props = { handleChange: this.handleChange, ...this.state };
    const {attributes,groups} = this.props;
    return (
      <React.Fragment>
        <div>
          <p>You are editing <strong>{this.state.product.name}</strong></p>
        </div>
        <form>
          <div>
            {groups.map(g=>{
              let attrs = attributes.filter(value=>(g.attributes.indexOf(value.id)!==-1)); 
              return (<Fieldset attributes={attrs} key={g._index} label={g.label}/>);
            })}
          </div>
        </form>
      </React.Fragment>
    );
  }

}

Form.propTypes = {
  entityId: PropTypes.number.isRequired,
  attributes:PropTypes.array.isRequired,
  groups:PropTypes.object.isRequired
}

export { registerComponent };

export default Form;

