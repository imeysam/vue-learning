import { ref } from "vue";
import { useBlog } from "./useBlog";

export function useBlogDetail() {
  const { blogs, getBlogs } = useBlog();

  const blog = ref(null);

  function fetchBlog(id) {
    getBlogs();
    blog.value = blogs.value.find((record) => record.id == id);
  }

  return {
    blog,
    fetchBlog,
  };
}
