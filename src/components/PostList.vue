<template>
  <transition-group name="list">
  <post-item
      :post="post"
      v-for="post in posts"
      v-bind:key="post.id"
      @remove="$emit('remove', post)"/>
  </transition-group>
</template>


<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    },
  },
}
</script>


<style>
.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px)
}
.list-move {
  transition: transform 0.8s ease;
}


</style>