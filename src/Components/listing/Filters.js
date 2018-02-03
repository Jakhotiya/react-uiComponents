import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import Input from 'Components/form/element/Input';
import Chips from 'Components/listing/Chips';

//remove this
import {chips} from 'data-structures';





//@TODO add htmlFor attribute to all form fields

const Range = props => {
  return (
    <fieldset className="admin__form-field">
      <legend className="admin__form-field-legend">
        <span>{props.label}</span>
      </legend>

      <div className="admin__form-field">
        <label className="admin__form-field-label" >
          <span>from</span>
        </label>
        <div className="admin__form-field-control">
          <input className="admin__control-text" type="text"
            onChange={props.handleChange}
            value={props.value}
          />
        </div>
      </div>

      <div className="admin__form-field">
        <label className="admin__form-field-label" >
          <span>to</span>
        </label>
        <div className="admin__form-field-control">
          <input className="admin__control-text" type="text"
            onChange={props.handleChange}
            value={props.value}
          />
        </div>
      </div>     
    </fieldset>
  );
}


const Field = props=>(
  <div className="admin__form-field">
    <label className="admin__form-field-label" >
      <span>{props.label}</span>
    </label>
    <div className="admin__form-field-control">
      <input className="admin__control-text" type="text"
        onChange={props.handleChange}
        value={props.value}
      />
    </div>
  </div>
);

class Filters extends Component {

  state = {
    open: false
  }

  hasVisible = () => {
    //@TODO implement this
    if(this.props.visibleCols.length>0)
       return true;
    return false;   
  }

  expandFilters = () => {
    this.setState({ open: true });
  }

  cancel = () => {
    this.closeFilters();
  }

  apply = () => {
    this.closeFilters();
  }

  clearFilter = ()=>{

  }

  clearAll = ()=>{

  }

  closeFilters = () => {
    this.setState({ open: false });
  }

  render() {
    const isActive = this.state.open ? '_active' : '';
    const show = this.hasVisible() && this.state.open ? '_show' : '';

    const ranges = this.props.visibleCols.filter(col => col.isRange);
    const plainFields = this.props.visibleCols.filter(col => !col.isRange)
    
    return (
      <Fragment>
        <div className="data-grid-filters-actions-wrap">
          <div className="data-grid-filters-action-wrap">
            <button className={"action-default " + isActive}
              onClick={this.expandFilters} disabled={!this.hasVisible()}>
              Filters
            </button>
          </div>
        </div>

        <Chips clearAll={this.clearAll} previews={chips} clearFilter={this.clearFilter} />

        <div className={"admin__data-grid-filters-wrap " + show}>
          <fieldset className="admin__fieldset admin__data-grid-filters">
            <legend className="admin__filters-legend">
              <span>Advanced filter</span>
            </legend>
            {ranges.map(col => <Range key={col.index} label={col.label} />)}
            {plainFields.map(col=><Field key={col.index} label={col.label}/>)}
            
          </fieldset>

          <div className="admin__data-grid-filters-footer">
            <div className="admin__footer-main-actions">
              <button className="action-tertiary" type="button" onClick={this.cancel}>
                <span>Cancel</span>
              </button>
              <button className="action-secondary" type="button" onClick={this.apply}>
                <span>Apply Filters</span>
              </button>
            </div>
          </div>
        </div>
      </Fragment>


    );
  }
}

export default Filters;