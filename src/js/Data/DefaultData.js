export default function DefaultData(tasksCollection) {
  tasksCollection.addTask('Call to Steve');
  tasksCollection.addTask('By gift to her');
  tasksCollection.addTask('Call to Mia');
  tasksCollection.addTask('Home work 4: fix errors');
  tasksCollection.addTask('By some drink to evening');
  tasksCollection.addTask('Home work 3: git push');
  tasksCollection.addTask('Clear memory...');

  const [...rest] = tasksCollection.tasks;
  rest[2].pinned = true;
  rest[6].pinned = true;
}
