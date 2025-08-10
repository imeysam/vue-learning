import { ref } from "vue";
import blogsRecords from "/db/blogs.json";

export function useBlog() {
  const blogs = ref(null);
  function getBlogs() {
    blogs.value = blogsRecords;
  }

  return {
    blogs,
    getBlogs,
  };
}
