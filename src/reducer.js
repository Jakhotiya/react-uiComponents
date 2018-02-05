import {combineReducers} from 'redux';
import {ADD_PRODUCT,UPDATE_PRODUCT} from "./tasks/task-types";

function products(state=[],action){
  if(action.type==='HYDRATE'){
    return action.products;
  }
  return state;
}


function currentProduct(state={},action){
  if(action.type==='save'){

  }
}


function tasks(state=[],action){
  if(action.type===ADD_PRODUCT){

  }
  if(action.type===UPDATE_PRODUCT){

  }
  return state;
}


const CompositeReducer  = combineReducers({products,cart,orders,uiState,isRegistered});

export default CompositeReducer;