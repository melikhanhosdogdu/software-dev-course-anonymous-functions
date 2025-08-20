const todos = [
  { task: "Wash the dishes", completed: false, priority: 3 },
  { task: "Write a blog post", completed: true, priority: 1 },
  { task: "Buy groceries", completed: false, priority: 2 },
  { task: "Study JavaScript", completed: true, priority: 1 },
  { task: "Walk the dog", completed: false, priority: 2 },
];

const incompleteTasks = todos.filter(function (todo) {
  return !todo.completed;
});

const sortedByPriority = todos.slice().sort(function (a, b) {
  return a.priority - b.priority;
});

const allCompleted = todos.map(function (todo) {
  return { ...todo, completed: true };
});

const sortedIncomplete = todos
  .filter(function (todo) {
    return !todo.completed;
  })
  .sort(function (a, b) {
    return a.priority - b.priority;
  });

console.log("Incomplete Tasks:", incompleteTasks);
console.log("Sorted by Priority:", sortedByPriority);
console.log("All Tasks Completed:", allCompleted);
console.log("Sorted Incomplete Tasks:", sortedIncomplete);
