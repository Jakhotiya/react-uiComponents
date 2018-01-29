import React from "react";
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';


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
      <div className="action-select-wrap ">
        <button className="action-select" onClick={this.toggleCollapsible}>Select</button>
        <ul className={"action-menu "+ active}>
          {keys.map(action=>{
          return (
            <li key={action}>
              <a className="action-menu-item" href={actions[action].href}>{actions[action].label}</a>
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
      <Link
        className="action-menu-item"
        to={action.href}>
        {action.label}
        </Link>
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