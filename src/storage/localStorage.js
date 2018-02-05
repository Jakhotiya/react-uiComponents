

export const saveTask = (task)=>{
  const que = getTasks() || [];
  que.push(task);
  localStorage.setItem('tasks',JSON.stringify(que));
}

export const getTasks = ()=>{
  const tasks = localStorage.getItem('tasks');
  return JSON.parse(tasks);
}

