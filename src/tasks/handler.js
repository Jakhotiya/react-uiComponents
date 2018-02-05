import {PENDING} from './task-types';
import api from '../api/mock-api'

import {saveTask,getTasks} from '../storage/localStorage';

//@TODO what happens if network failed after task was started

const handler = {
  addTask(task) {
    saveTask(task);
  },
  getTasks() {
    return getTasks();
  },
  execute() {
    //attept to excute task only when network connection is available

      getTasks().filter(t=>t.status!=='complete' && t.status!=='failed').forEach(task => {
        if(navigator.onLine) {
          api.executeTask(task);
        }
      })


  }

}

export default handler;