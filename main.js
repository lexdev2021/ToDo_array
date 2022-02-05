const list = [ 
  { name: 'create a post', status: 'In progress', priority: 'low'  },
  { name: 'test', status: 'Done', priority: 'high'  }, 
] 

const STATUS = {
  TO_DO       : 'To Do',
  IN_PROGRESS : 'In progress',
  DONE        : 'Done',
}
const DEFAULT_STATUS = STATUS.TO_DO;
const PRIORITY = {
  HIGH : 'high',
  LOW  : 'low',
}

function addTask (task, priority) {
  task = { 
    name     : task, 
    status   : DEFAULT_STATUS, 
    priority : priority,
  };
  list.push(task);
}

function changeStatus (task, status) {
  for (let key of list) {
    if(key.name === task) {
      key.status = status;
    }    
  }
}

function deleteTask (task) {
  list.forEach((el, i, arr) => {
    if (el.name === task) {
      arr.splice(i, 1);
    }
  })
}

function showBy(argument) {

  const statusList = {
    [STATUS.TO_DO]       : '',
    [STATUS.IN_PROGRESS] : '',
    [STATUS.DONE]        : '',
  }
  let resultStatus = '';
  const priorityList = {
    [PRIORITY.HIGH] : '',
    [PRIORITY.LOW]  : '', 
  }
  let resultPriority = '';

  for (let key of list) {
    statusList[key.status]     += ` "${key.name}"\n`;
    priorityList[key.priority] += ` "${key.name}"\n`;
  }
  
  for (let key in statusList) {
    resultStatus += `${key}\n${statusList[key] || ' -\n'}`;
  }

  for (let key in priorityList) {
    resultPriority += `${key}\n${priorityList[key] || ' -\n'}`;
  }

  return argument === 'priority' ? resultPriority
  : resultStatus;
}

addTask('make a walk', 'high');
addTask('read english', 'high');
addTask('do nothing', 'low');
addTask('take a shower', 'high');
changeStatus('make a walk', 'In progress'); 
deleteTask('test'); 
deleteTask('create a post');
deleteTask('do nothing');
console.log(showBy(1));
console.log(showBy('priority'));

