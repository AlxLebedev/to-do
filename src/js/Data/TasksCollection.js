import TaskConstructor from './TaskConstructor';

export default class TaskCollection {
  constructor() {
    this.tasks = [];
  }

  addTask(descriprion) {
    const taskId = this.tasks.length;
    const newTask = new TaskConstructor(taskId, descriprion);
    this.tasks.push(newTask);
  }
}
