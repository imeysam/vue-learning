<script setup>
    defineProps(['blog']);
</script>

<template>
  <div class="media-list">
    <!-- آیتم اول -->
    <div class="media-item">
      <img :src="blog.image" :alt="blog.title" class="media-image" />
      <div class="media-content">
        <h3 class="media-title">{{ blog.title }}</h3>
        <p class="media-description">
          توضیحات مربوط به مدیا اول اینجا قرار می‌گیرد. این متن فقط برای نمونه
          است.
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.blog-img {
  width: 100px;
}

.media-list {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.media-item {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.media-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}

.media-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  margin-left: 15px;
}

.media-content {
  flex: 1;
}

.media-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.media-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
</style>
