<script setup>
import TodoItemComponent from "./TodoItemComponent.vue";

defineProps(["tasks"]);

const emit = defineEmits(["toggle-task"]);

function handleToggleTask(index) {
  emit("toggle-task", index);
}
</script>

<template>
  <div class="todo-app">
    <div class="todo-container">
      <ul v-if="tasks && tasks.length" class="task-list">
        <TodoItemComponent :tasks="tasks" @toggle-task="handleToggleTask" />
      </ul>
      <div v-else>هیچ تسکی نداری 👏</div>
    </div>
  </div>
</template>

<style>
.todo-app {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.task-list {
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
}

@media (max-width: 600px) {
  .todo-app {
    margin: 1rem;
  }

  .task-form {
    flex-direction: column;
  }
}
</style>
