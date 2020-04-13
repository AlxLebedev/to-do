import Main from './Logic/Main';
import TasksCollection from './Data/TasksCollection';
import DrawUI from './UI/DrawUI';
import defaultData from './Data/DefaultData';

const tasksCollection = new TasksCollection();
const drawUI = new DrawUI();
const main = new Main();

defaultData(tasksCollection);
const tasks = tasksCollection.tasks;
export {tasks};

drawUI.draw(tasks);
main.init();
