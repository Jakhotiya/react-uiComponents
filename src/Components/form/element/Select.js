import React from 'react';

const Select  = props=>{
  return (
    <select class="admin__control-select"
            name={props.name}
            value={props.value}
            onChange={e=>props.handleChange(props.name,e.target.value)}
            disabled={props.disabled}
    >
      {props.options.map(opt=>(
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}

export default Select;