<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useBlogDetail } from "@/composables/useBlogDetail";

const route = useRoute();

const {blog, fetchBlog} = useBlogDetail();

onMounted(() => {
  fetchBlog(route.params.id);
});
</script>

<template>
  <div v-if="blog">
    <img class="blog-img" :src="blog.image" :alt="blog.title">
    <div>
      {{ blog.title }}
    </div>
  </div>
  <div v-else>
    رکورد پیدا نشد.
  </div>
</template>

<style scoped>
.blog-img{
  width: 200px;
}
</style>
