<script setup>
import { inject } from "vue";

defineProps(["tasks"]);

const emit = defineEmits(["toggle-task"]);

const emitRemoveTask = inject("removeTask");
</script>

<template>
  <li v-for="(record, index) in tasks" :key="index" class="task-item">
    <span
      @click="emit('toggle-task', record.id)"
      class="task-text"
      :class="{ 'task-done': record.done }"
      >{{ record.title }}</span
    >

    <button @click="emitRemoveTask(index)" class="delete-btn">حذف</button>
  </li>
</template>

<style scoped>
.task-done {
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: #302928;
  color: #888;
  transition: all 0.3s ease;
}

span {
  cursor: pointer;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  transition: all 0.3s;
}

.task-item:hover {
  background-color: #f0f0f0;
  transform: translateX(-5px);
}

.task-text {
  /* flex: 1; */
  margin-left: 1rem;
}

.delete-btn {
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #d32f2f;
}
</style>
