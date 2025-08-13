<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import TodoAddComponent from "@/components/todo/TodoAddComponent.vue";
import TodoListComponent from "@/components/todo/TodoListComponent.vue";
import { useTodo } from "@/composables/useTodo";
import { onMounted, provide } from "vue";

const {tasks, toggleTask, removeTask, addTask, loadTasks} = useTodo();

provide("removeTask", (payload) => removeTask(payload));

onMounted(loadTasks);
</script>

<template>
  <TitleComponent title="تسک‌های من" />

  <TodoListComponent
    :tasks="tasks"
    @toggle-task="toggleTask"
    @remove-task="removeTask"
  />

  <TodoAddComponent @add-task="addTask" />
</template>

<style scoped></style>
