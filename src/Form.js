import React from 'react';

import Tree from './Components/Tree';
import Button from './Components/form/element/Button';
import {TreeData} from './data-structures';


class Form extends React.Component 
{

  render(){
    return (
      <div class='showcase'>
        <div>
          <h4>1) Magento Category Tree</h4>
          <Tree {...TreeData} />
        </div>
        <div>
          <h4>Magento Buttons</h4>
          <Button title='Click me' />
        </div>
      </div>
    )
  }
}


export default Form;
