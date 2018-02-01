import React from 'react';


const Input = props => {
  return (
    <input class="admin__control-text" type="text"
      onChange={e=>props.handleChange(props.name,e.target.value)}
      value={props.value}
      hasFocus={props.focused}
      name={props.name}
      placeholder={props.placeholder}
      ariaDescribedby={props.noticeId}
      disabled={props.disabled}
    />
  );
}


export default Input;