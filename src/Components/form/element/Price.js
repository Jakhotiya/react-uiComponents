import React from 'react';


const Price = props => {
  return (
    <div className="admin__control-addon">
    <input className="admin__control-text" type="text"
      onChange={e=>props.handleChange(props.name,e.target.value)}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
      <label className="admin__addon-prefix" ><span>$</span></label>
    </div>
  );
}


export default Price;