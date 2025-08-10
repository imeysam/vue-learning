<script setup>
import { ref } from "vue";

const task = ref(null);

const emit = defineEmits(["add-task"]);

const addTask = () => {
  emit("add-task", task.value);
  task.value = null;
};
</script>

<template>
  <form @submit.prevent="addTask" class="task-form">
    <input
      v-model="task"
      type="text"
      placeholder="تسک جدید را وارد کنید..."
      class="task-input"
    />
    <button type="submit" class="add-btn">اضافه کردن</button>
  </form>
</template>

<style scoped>
.task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
}

.task-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border 0.3s;
}

.task-input:focus {
  outline: none;
  border-color: #3f51b5;
}

.add-btn {
  padding: 0.75rem 1.5rem;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.add-btn:hover {
  background-color: #303f9f;
}
</style>
