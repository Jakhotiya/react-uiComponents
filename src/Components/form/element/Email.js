import React from 'react';

const Email = props=>{
  return (
    <input class="admin__control-text" type="email" 
      hasFocus={props.focused}
      value = {props.value}
      name={props.inputName}
      placeholder={props.placeholder}
      ariaDescribedby={props.noticeId}
      disabled={props.disabled}
     />
  );
}

export default Email;