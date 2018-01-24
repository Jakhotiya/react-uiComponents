import React from 'react';


const Input = props=>{
  return (
    <input class="admin__control-text" type="text"
      onChange={props.userChanges}
     
  value={props.value}
  hasFocus={props.focused}
    name={props.inputName}
    placeholder={props.placeholder}
    ariaDescribedby={props.noticeId}
    disabled={props.disabled}
  />
  );
}


export default Input;