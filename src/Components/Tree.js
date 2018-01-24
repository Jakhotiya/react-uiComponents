import React from 'react';

const Node = props=>{
  if(props.childNodes.length>0){
    return (
      <div className='node' style={{marginLeft:props.level+'em'}}>
        <input type='checkbox' />
        <label>{props.label}</label>
        {props.childNodes.map((node,index) => (<Node key={'level-'+props.level+'-'+index} {...node} level={props.level+1} />))}
      </div>
    )
  }else{
    return (
      <Leaf label={props.label} level={props.level}/>
    )
  }
}

const Leaf = (props)=>{
  return (
    <div className='leaf' style={{ marginLeft: props.level + 'em' }}>
      <input type='checkbox' />
      <label>{props.label}</label>
    </div>
  );
}


const Tree= (props)=>{
  return (<Node {...props} level={1}/>);
}

export default Tree;