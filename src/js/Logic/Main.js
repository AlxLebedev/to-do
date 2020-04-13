/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-cycle */
import TasksCollection from '../Data/TasksCollection';
import DrawUI from '../UI/DrawUI';
// import defaultData from '../Data/DefaultData';
import tasks from '../app';

const tasksCollection = new TasksCollection();
const drawUI = new DrawUI();

export default class Main {
  constructor() {
    this.pinnedTasks = document.getElementById('pinned-tasks');
    this.allTasks = document.getElementById('all-tasks');
    this.inputForm = document.getElementById('input-form');
    this.inputField = document.getElementById('input-field');
    this.errorField = document.querySelector('.error');
  }

  init() {
    // defaultData(tasksCollection);
    tasksCollection.tasks = tasks;
    // drawUI.redrawUI(tasksCollection.tasks);
    // drawUI.redrawUI(tasks);

    this.startLogic();
  }

  startLogic() {
    this.inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const elementValue = this.inputField.value;

      if (elementValue === '') {
        this.errorField.classList.remove('hidden');
        return;
      }

      if (!this.errorField.classList.contains('hidden')) {
        this.errorField.classList.add('hidden');
      }

      tasksCollection.addTask(this.inputField.value);
      this.inputField.value = '';
      this.tasksFiltering(this.inputField.value);
    });

    this.inputField.addEventListener('input', () => {
      if (!this.errorField.classList.contains('hidden')) {
        this.errorField.classList.add('hidden');
      }
      this.tasksFiltering(this.inputField.value);
    });

    this.pinnedTasks.addEventListener('click', (event) => {
      if (event.target.className === 'checked') {
        const taskId = event.target.closest('.item-task').dataset.id;
        this.moveTask(taskId, false);
      }
    });

    this.allTasks.addEventListener('click', (event) => {
      if (event.target.className === 'checked') {
        const taskId = event.target.closest('.item-task').dataset.id;
        this.moveTask(taskId, true);
      }
    });

    this.errorField.addEventListener('click', (event) => {
      if (event.target.className === 'close-error') {
        this.errorField.classList.add('hidden');
      }
    });
  }

  tasksFiltering(value) {
    const filteredTasks = tasksCollection.tasks.filter((item) => {
      const valueToLowerCase = value.trim().toLowerCase();
      const trueName = item.descriprion.toLowerCase().includes(valueToLowerCase);
      return trueName || item.pinned;
    });
    drawUI.draw(filteredTasks);
  }

  moveTask(itemIdTask, pinned) {
    const idTask = tasksCollection.tasks.findIndex((item) => item.id === Number(itemIdTask));
    tasksCollection.tasks[idTask].pinned = pinned;
    this.tasksFiltering(this.inputField.value);
  }
}
