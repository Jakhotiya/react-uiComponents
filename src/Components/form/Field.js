import React from 'react';
import PropTypes from 'prop-types';
import Input from 'Components/form/element/Input';
import TextArea from 'Components/form/element/TextArea';
import Checkbox from 'Components/form/element/Checkbox';
import Switcher from 'Components/form/element/Switcher';
import Price from 'Components/form/element/Price';
import Select from 'Components/form/element/Select';

//@magento file : Magento_Ui/view/base/web/templates/form/field.html
//@TODO add Tooltip component

const fieldTypes={
  checkbox:Checkbox,
  switch:Switcher,
  select:Select,
  textarea:TextArea,
  price:Price,
  text:Input
}


const createField = ({handleChange,value,attr})=>{
  let Component = fieldTypes[attr.type] || Input;

  return <Component handleChange={handleChange} value={value} {...attr}/>;
}

const Field = (props)=>{
  return (
    <div className="admin__field">
      <label className="admin__field-label">
        <span>{props.attr.label}</span>
      </label>
      <div className="admin__field-control admin__control-fields">
        {createField(props)}
      </div>
    </div>
  );
}

Field.propTypes = {
  value:PropTypes.string,
  attr:PropTypes.object.isRequired,
  handleChange:PropTypes.func.isRequired,
}

export default Field;