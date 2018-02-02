import React from 'react';

const TextArea = props => {
  return (
    <textarea className="admin__control-textarea"
      name={props.name}
      value={props.value}
      cols={props.cols}
      rows={props.rows}
      onChange={e=>props.handleChange(props.name,e.target.value)}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  );
}

export default TextArea;