import React from 'react';
import PageAction from 'layout/PageAction';

class Settings extends React.Component
{

  handleClick = e=>{
    console.log(this.state)
  }

  render(){
    return (
      <React.Fragment>
        <PageAction label="Save" handleClick={this.handleClick}/>
      </React.Fragment>
    );
  }
}

export default Settings