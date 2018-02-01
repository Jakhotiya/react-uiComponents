import React from 'react';
import PropTypes from 'prop-types';

import Fieldset from 'Components/form/Fieldset';
import { data } from './data-structures';

//@TODO clearly describe and document handler APIs
import Handler from './field-handlers';

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      product: {},
      attributeSet: {},
      form:{}
    }

    props.attributes.forEach(attr => {
      this.state[attr.name] = '';
    });
  }


  handleClick = e => {
    console.log(this.state);
  }

  handleChange = (name, value) => {
    let form = {};
    if (Handler.hasOwnProperty(name) &&
      typeof Handler[name] === 'function') {
      form = Handler[name].call(null, value);
    } else {
      form[name] = value;
    }
    this.setState({form});
  }

  /**
   * fetch product from local data
   * if it does not exist then attempt to download
   * if that fails then display warning
   */
  componentWillMount() {
    const entityId = this.props.entityId;
    const product  = data.items[entityId];
    this.setState({form:product});
  }

  render() {
  
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
              return (<Fieldset form={this.state.form} handleChange={this.handleChange} attributes={attrs} key={g._index} label={g.label}/>);
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

export default Form;

