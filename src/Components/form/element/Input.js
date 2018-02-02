import React from 'react';


const Input = props => {
  return (
    <input className="admin__control-text" type="text"
      onChange={e=>props.handleChange(props.name,e.target.value)}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  );
}


export default Input;