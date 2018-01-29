import React from "react";
import PropTypes from 'prop-types';


class Collapsible extends React.Component{

  state = {
    open:false
  }

  toggleCollapsible = (e)=>{
    this.setState({open:!this.state.open});
  }

  render(){
    const active = this.state.open ? '_active' : '';
    const keys = Object.keys(this.props.actions);
    const {actions} = this.props;
    return (
      <div class="action-select-wrap ">
        <button class="action-select" onClick={this.toggleCollapsible}>Select</button>
        <ul class={"action-menu "+ active}>
          {keys.map(action=>{
          return (
            <li key={action}>
              <a class="action-menu-item" href={actions[action].href}>{actions[action].label}</a>
            </li>
          );
        })}
          
        </ul>
      </div>
    );
  }
}

const Action = ({actions})=>{
  const keys = Object.keys(actions);
  if (keys.length===1){
     const action = actions[keys[0]];
    return (
      <a
        class="action-menu-item"
        href={action.href}>
        {action.label}
        </a>
    );
  }

  return (
    <Collapsible actions={actions}/> 
  );
}

Action.propTypes={
  actions:PropTypes.object.isRequired
}

export default Action;