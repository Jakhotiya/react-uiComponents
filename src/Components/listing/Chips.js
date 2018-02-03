import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';


const Chip = ({ label, index, value,...props }) => {

  let text = '';

  if (typeof value === 'object') {
    text = (value.from || '...') + ' - ' + (value.to || '...')
  } else {
    text = value;
  }

  return (
    <li>
      <span>{label} :</span>
      <span>{text}</span>
      <button className="action-remove" type="button"
        onClick={(e) => props.clearFilter(index)}>
        <span>Remove</span>
      </button>
    </li>
  );

}

Chip.propTypes = {
  index: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.object,
  clearFilter:PropTypes.func.isRequired
}

//previews is just magento term for active filters

const Chips = ({ previews, clearAll,clearFilter }) => {

  const show = previews.length > 0 ? '_show' : '';
  return (
    <div className={"admin__data-grid-filters-current " + show}>
      <div className="admin__current-filters-title-wrap">
        <span className="admin__current-filters-title">
          Active filters :
        </span>
      </div>
      <div className="admin__current-filters-list-wrap">
        <ul className="admin__current-filters-list">
          {previews.map(prev => <Chip key={prev.index} clearFilter={clearFilter} {...prev} />)}
        </ul>
      </div>
      <div className="admin__current-filters-actions-wrap">
        <button className="action-tertiary action-clear" type="button"
          onClick={clearAll}>
          Clear all
          </button>
      </div>
    </div>
  );
}

Chips.propTypes = {
  previews: PropTypes.array,
  clearAll: PropTypes.func.isRequired
}

export default Chips;