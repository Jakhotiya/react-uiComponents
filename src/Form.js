import React from 'react';

import Button from './Components/form/element/Button';
import {data} from './data-structures';


class Form extends React.Component 
{
  state:{
    fetching:true,
    product:{},
    attributeSet:{}
  }

  /**
   * fetch product from local data
   * if it does not exist then attempt to download
   * if that fails then display warning
   */
  componentWillMount(){
    const productId = this.props.match.params.id;

    this.setState({ product: data.items[productId]});
  }

  render(){
    
    return (
      <div>
        <div>
          <h1> Magento Product Form</h1>
          <p>You are editing <strong>{this.state.product.name}</strong></p>
        </div> 
      </div>
    )
  }
}


export default Form;
