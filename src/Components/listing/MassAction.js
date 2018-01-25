import React from "react";
import PropTypes from 'prop-types';

const actions=[
  {label:'Enable',type:'enable'},
  { label: 'Disable', type: 'disable' },
  { label: 'Delete', type: 'delete' }
];

const Action = props=>{
  return (
    <li onClick={e=>props.handleAction(props.type)}>
      <span className="action-menu-item" >{props.label}</span>
    </li>
  );
}

class MassAction extends React.Component
{
  state={
    open:false
  }

  toggleCollapsible =(e)=>{
    this.setState({open:!this.state.open});
  } 

  render(){
    const isActive = this.state.open ? '_active':'';
    return (
      <div className={"action-select-wrap "+isActive} onClick={this.toggleCollapsible}>
        <button className="action-select" title='Select Items'>
          <span>Actions</span>
        </button>
        <div class="action-menu-items">
        <ul className={"action-menu " + isActive} >
          {actions.map(action => <Action key={action.type} {...action} />)}
        </ul>
        </div>
      </div>
    );
  }
}

export default MassAction;