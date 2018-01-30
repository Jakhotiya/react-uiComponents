import React from 'react';

const TextArea = props => {
  return (
    <textarea class="admin__control-textarea"
      name={props.inputName}
      value={props.value}
      cols={props.cols}
      rows={props.rows}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  );
}

export default TextArea;