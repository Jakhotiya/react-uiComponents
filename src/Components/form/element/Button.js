import React from 'react';

const Button = props=>{
  return (
    <button type="button"
      className={props.buttonClasses}
      onClick={props.action}
      disable={props.disabled}
      >
      <span>{props.title}</span>
    </button>
  )
}

export default Button;