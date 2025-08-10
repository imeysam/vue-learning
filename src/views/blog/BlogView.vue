<script setup>
import { onMounted } from "vue";
import { useBlog } from "@/composables/useBlog";
import BlogListItemComponent from "@/components/blog/BlogListItemComponent.vue";

const { blogs, getBlogs } = useBlog();

onMounted(() => {
  getBlogs();
});
</script>

<template>
  <RouterLink
    class="media-link"
    v-for="(blog, index) in blogs"
    :key="index"
    :to="{ name: 'BlogDetailView', params: { id: blog.id } }"
  >
    <BlogListItemComponent :blog="blog" />
  </RouterLink>
</template>

<style scoped>
.media-link {
  text-decoration: none;
}
</style>
