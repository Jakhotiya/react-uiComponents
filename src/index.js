import React from "react";
import {render} from "react-dom";
import App from 'App';
import Wizard from 'Wizard';

if(true){
  render(<Wizard/>, document.getElementById("root"));
}else{
  render(<App/>, document.getElementById("root"));
}


