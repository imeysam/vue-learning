import { reactive, readonly } from "vue";

export function useTodo() {
  const tasks = reactive([]);

  function toggleTask(id) {
    const record = tasks.find((item) => item.id == id);
    if (record) {
      record.done = !record.done;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask(task) {
    if (!task) {
      alert("عنوان تسک را وارد کنید");
      return;
    }
    const lastRecord = tasks[tasks.length - 1];
    const id = lastRecord ? lastRecord.id + 1 : 1;
    tasks.push({
      id: id,
      title: task,
      done: false,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(0, tasks.length, ...storedTasks);
  }

  return {
    tasks: readonly(tasks),
    toggleTask,
    removeTask,
    addTask,
    loadTasks,
  }
}
