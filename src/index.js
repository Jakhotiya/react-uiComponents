import React from "react";
import {render} from "react-dom";
import App from 'App';
import Wizard from 'Wizard';
import {HashRouter} from 'react-router-dom';

if(true){
  render((<HashRouter basename='/'><Wizard/></HashRouter>), document.getElementById("root"));
}else{
  render(<App/>, document.getElementById("root"));
}


