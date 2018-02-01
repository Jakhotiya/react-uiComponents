import React from 'react';



const Switcher = props=>{
  return (

  <div className="admin__actions-switch">
    <input className="admin__actions-switch-checkbox"
      type="checkbox"
      name={props.name}
      checked={props.value}
      readOnly
    />
    <label onClick={e => props.handleChange(props.name,!props.value)}
     className="admin__actions-switch-label">
          <span className="admin__actions-switch-text">{props.value ? 'Yes' : 'No'}</span>
      </label>
      </div>
    );
}

export default Switcher;