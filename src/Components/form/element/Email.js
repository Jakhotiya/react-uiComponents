import React from 'react';

const Email = props=>{
  return (
    <input className="admin__control-text" type="email"
      value = {props.value}
      name={props.inputName}
      placeholder={props.placeholder}
      disabled={props.disabled}
     />
  );
}

export default Email;