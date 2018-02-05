const {ipcRenderer} = require('electron');

function generateRandomStatus(){
  const status = ['pending','processing','complete','failed'];
  let index = Math.floor(Math.random()*3);
  return status[index];
}

const api = {
  executeTask(task){

    let status = generateRandomStatus();

    task.status=status;

    if(task.status==='pending'){
      console.log('trying execute task for '+task.entityId);
    }
    if(task.status==='processing'){
      console.log('task for '+task.entityId+' is in process');
    }
    if(task.status==='complete'){
      ipcRenderer.send('task', `${task.data.name} saved successfully.`);
    }
    if(task.status==='failed'){
      ipcRenderer.send('task', `Failed to save ${task.data.name}.`);
    }

  }
}

export default  api;