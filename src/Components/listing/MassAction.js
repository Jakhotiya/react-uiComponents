import React from "react";
import PropTypes from 'prop-types';

const actions=[
  {label:'Enable',type:'enable'},
  { label: 'Disable', type: 'disable' },
  { label: 'Delete', type: 'delete' }
];

const Action =({handleAction,label,type})=>{
  return (
    <li onClick={e=>handleAction(type)}>
      <span className="action-menu-item" >{label}</span>
    </li>
  );
}

Action.propTypes = {
  handleAction:PropTypes.func.isRequired,
  type:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired
}

class MassAction extends React.Component
{
  state={
    open:false
  }

  toggleCollapsible =(e)=>{
    this.setState({open:!this.state.open});
  }

  outerClick = e=>{
    if (this.node && !this.node.contains(e.target)){
      this.setState({ open: false });
    }
  }

  //@TODO IMPLEMENT THIS
  handleAction(type){
    console.log(type);
  }

  componentDidMount(){
    document.addEventListener('click',this.outerClick);
  } 

  componentWillUnMount(){
    document.removeEventListener('click', this.outerClick);
  }

  //@TODO find out if this.destroyed on component unmount
  ref = ele=> {
    this.node = ele;
  }

  render(){
    
    const isActive = this.state.open ? '_active':'';
    return (
      <div ref={this.ref} className={"action-select-wrap "+isActive} onClick={this.toggleCollapsible}>
        <button className="action-select" title='Select Items'>
          <span>Actions</span>
        </button>
        <div className="action-menu-items">
        <ul className={"action-menu " + isActive} >
            {actions.map(action => <Action key={action.type} handleAction={this.handleAction} {...action} />)}
        </ul>
        </div>
      </div>
    );
  }
}

export default MassAction;