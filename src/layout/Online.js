import React from 'react';
const {ipcRenderer} = require('electron');

class Online extends React.Component
{
  state = {
    online:navigator.onLine
  }

  componentWillMount(){
    window.addEventListener('online',()=>{
      ipcRenderer.send('online','We are Online! Catalog updates will start');
      this.setState({online:true});
    });

    window.addEventListener('offline',()=>{
      this.setState({online:false});
    })

  }

  render(){
    if(!this.state.online){
      return <p>You are offline. Updates will be pushed to server when you go online again</p>
    }
    return null;
  }
}

export default Online;