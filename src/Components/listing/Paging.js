import React from "react";
import PropTypes from 'prop-types';


const Sizes = props=>{
  return (<h4>Sizes Dropdown</h4>)
}


const Paging = props=>{
  return (
    <div className="admin__data-grid-pager-wrap">
      <Sizes/>

      <div className="admin__data-grid-pager">
        <button className="action-previous" type="button"  onClick={props.handleClick} disable="isFirst()">
           Previous Page
        </button>
        <input className="admin__control-text" type="number" id="current-page-input"  value={props.currentPage} />
        <label className="admin__control-support-text" for='current-page-input'>
           of {props.totalPages}
        </label>
        <button className="action-next" type="button" click="next" disable="isLast()" >
          Next Page
        </button>  
      </div>
    </div>
  );
}



export default Paging;