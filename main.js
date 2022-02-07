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
  let findTask = list.find(el => el.name === task);
  if(!findTask) {
    list.push({
      name     : task, 
      status   : DEFAULT_STATUS, 
      priority : priority,
    });
  }
}

function changeStatus (task, status) {
  let taskChangeStatus = list.find(el => el.name === task); 
  if(taskChangeStatus) {
    taskChangeStatus.status = status;
  }
}

function deleteTask (task) {
  let taskIndexDelete = list.findIndex(el => el.name === task);
  if(taskIndexDelete > -1) {
    list.splice(taskIndexDelete, 1);
  }
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
    resultStatus += `${key}\n${statusList[key] || ' -\n'}\n`;
  }

  for (let key in priorityList) {
    resultPriority += `${key}\n${priorityList[key] || ' -\n'}\n`;
  }

  return argument === 'priority' ? resultPriority
  : resultStatus;
}

addTask('make a walk', 'high');
addTask('make a walk', 'high');
addTask('read english', 'high');
addTask('do nothing', 'low');
addTask('take a shower', 'high');
changeStatus('create post', 'In progress'); 
changeStatus('create a post', 'Done');
deleteTask('create  post'); 
deleteTask('create a post');
deleteTask('test');
changeStatus('read english', 'In progress' )
deleteTask('do nothing');
console.log(showBy(1));
console.log(showBy('priority'));

