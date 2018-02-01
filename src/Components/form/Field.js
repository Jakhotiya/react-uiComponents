import React from 'react';
import PropTypes from 'prop-types';
import Input from 'Components/form/element/Input';
import TextArea from 'Components/form/element/TextArea';
import Checkbox from 'Components/form/element/Checkbox';
import Switcher from 'Components/form/element/Switcher';

//@magento file : Magento_Ui/view/base/web/templates/form/field.html
//@TODO add Tooltip component


const getField = (attr)=>{
  let Component = ()=>{};
  switch (attr.type){
    case 'checkbox':
      Component=Checkbox;
      break;
    case 'select':
      Component = Switcher;
       break;  
    case 'textarea':
      Component=TextArea;
      break;
    case 'text':
    default :
      Component = Input;
  }
  return Component;
}

const Field = ({value,handleChange,attr})=>{
  const Component = getField(attr);
  return (
    <div class="admin__field">
      <label class="admin__field-label">
        <span>{attr.label}</span>
      </label>
      <div class="admin__field-control admin__control-fields"
        css="'_with-tooltip': $data.tooltip, '_with-reset': $data.showFallbackReset && $data.isDifferedFromDefault">
        <Component handleChange={handleChange}
          name={attr.name} 
          value={value} />
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