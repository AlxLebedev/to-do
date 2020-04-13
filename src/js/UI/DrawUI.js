export default class DrawUI {
  constructor() {
    this.pinnedTasks = document.getElementById('pinned-tasks');
    this.allTasks = document.getElementById('all-tasks');
  }

  draw(tasks) {
    this.pinnedTasks.innerHTML = '';
    this.allTasks.innerHTML = '';

    const havePinned = tasks.some((item) => item.pinned);

    const haveTask = tasks.every((item) => item.pinned);

    if (!havePinned) {
      this.pinnedTasks.innerHTML = '<p class="no-tasks">No pinned tasks</p>';
    }

    if (haveTask) {
      this.allTasks.innerHTML = '<p class="no-tasks">No tasks</p>';
    }

    for (const task of tasks) {
      const newTask = document.createElement('div');
      newTask.className = 'item-task';
      newTask.dataset.id = task.id;
      newTask.innerHTML = `
      <p>${task.descriprion}</p>
      <div class="checked">${task.pinned ? 'V' : ''}</div>
      `;

      if (task.pinned) {
        this.pinnedTasks.appendChild(newTask);
      } else {
        this.allTasks.appendChild(newTask);
      }
    }
  }
}
