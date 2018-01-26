import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import Input from 'Components/form/element/Input';


const Chips = props => {
  return (<div><small>You are running this application in <b>{process.env.NODE_PATH}</b> mode.</small></div>);
}


const filters = [
  { attribute: 'entity_id', range: true, type: 'text' }
];


const Range = props => {
  return (
    <Fragment>
      <legend class="admin__form-field-legend">
        <span>props.label</span>
      </legend>
      <div class="admin__form-field">
        {props.elements.map(ele=>{

        })}
      </div>
    </Fragment>
  );
}

class Filters extends Component {

  state = {
    open: false
  }

  hasVisible = () => {
    //@TODO implement this
    return true;
  }

  expandFilters = () => {

  }

  cancel = () => {
    this.closeFilters();
  }

  apply = () => {
    this.closeFilters();
  }

  closeFilters = () => {
    this.setState({ open: false });
  }

  render() {
    const isActive = this.state.open ? '_active' : '';
    const show = this.hasVisible() && this.state.open ? '_show' : '';

    return (
      <Fragment>
        <div className="data-grid-filters-actions-wrap">
          <div className="data-grid-filters-action-wrap">
            <button className={"action-default " + isActive} data-action="grid-filter-expand" disabled={this.hasVisible()}> 
              Filters
            </button>
          </div>
        </div>

        <Chips />

        <div className={"admin__data-grid-filters-wrap " + show} data-part="filter-form">
          <fieldset className="admin__fieldset admin__data-grid-filters">
            <legend className="admin__filters-legend">
              <span translate="'Advanced filter'" />
            </legend>
            <fieldset className="admin__form-field" outereach="getRanges()" visible="$parent.isFilterVisible($data)" render="" />
            <div className="admin__form-field" outereach="getPlain()" visible="$parent.isFilterVisible($data)" render="" />
          </fieldset>

          <div className="admin__data-grid-filters-footer">
            <div className="admin__footer-main-actions">
              <button className="action-tertiary" type="button" onClick={this.cancel}>
                <span translate="'Cancel'" />
              </button>
              <button className="action-secondary" type="button" onClick={this.apply}>
                <span translate="'Apply Filters'" />
              </button>
            </div>
          </div>
        </div>
      </Fragment>


    );
  }
}

export default Filters;