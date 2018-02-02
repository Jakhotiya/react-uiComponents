import React from 'react';

const Checkbox = props=>{
  return (
    <div className="admin__field admin__field-option">
      <input type="checkbox"
        class="admin__control-checkbox"
        checked={props.checked}
        disable={props.disabled}
        value={props.value}
        name={props.inputName}
       />

      <label className="admin__field-label" for={props.inputName}>
      {props.label || props.description}
      </label>
    </div>
  );
}

export default Checkbox;