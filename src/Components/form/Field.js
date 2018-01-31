import React from 'react';
import PropTypes from 'prop-types';
import Input from 'Components/form/element/Input';

//@magento file : Magento_Ui/view/base/web/templates/form/field.html
//@TODO add Tooltip component

const Field = props=>{

  return (
    <div class="admin__field">
      <label class="admin__field-label">
        <span>{props.label}</span>
      </label>
      <div class="admin__field-control admin__control-fields"
        css="'_with-tooltip': $data.tooltip, '_with-reset': $data.showFallbackReset && $data.isDifferedFromDefault">
        <Input userChanges={props.handleChange}
          name={props.name} 
         value={props.value} />
      </div>
    </div>
  );
}

Field.propTypes = {
  label:PropTypes.string.isRequired,
  value:PropTypes.string,
  handleChange:PropTypes.func.isRequired,
  name :PropTypes.string
}

export default Field;