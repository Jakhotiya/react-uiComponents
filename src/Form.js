import React from 'react';
import PropTypes from 'prop-types';

import Fieldset from 'Components/form/Fieldset';
import { data } from './data-structures';
import PageAction from 'layout/PageAction';

import handler from 'tasks/handler';
import {UPDATE_PRODUCT} from "./tasks/task-types";


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
    this.setState({form:{...this.state.form,...form}});
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

  save = ()=>{
      handler.addTask({
        type:UPDATE_PRODUCT,
        data:this.state.form,
        entityId:this.state.form.entity_id
      })
    this.props.history.push('/');
  }

  render() {
  
    const {attributes,groups} = this.props;
    const SortedGroups = groups.map(g=>{
      let attrs = g.attributes.map(id=>attributes.find(a=>a.id==id));
      return {...g,attributes:attrs}
    })
    return (
      <React.Fragment>
        <PageAction label="Save" handleClick={this.save}/>
        <form>
          <div>
            {SortedGroups.map(g=>{
              return (<Fieldset form={this.state.form} handleChange={this.handleChange} attributes={g.attributes} key={g._index} label={g.label}/>);
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
  groups:PropTypes.array.isRequired
}



export default Form;

