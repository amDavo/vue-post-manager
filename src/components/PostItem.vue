<template>
  <div class="post">
    <h3>Title: {{post.title}}</h3>
    <p>Body: {{post.body}}</p>
    <ui-button
        @click="removePost"
    >Delete</ui-button>
    <ui-button
        class="discover"
        @click="$router.push(`post/${post.id}`)"
    >Discover</ui-button>
  </div>
</template>


<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    removePost() {
      this.$emit('remove', this.post)
    }
  }
}

</script>


<style>

.post {
  border: 1px solid teal;
  margin: 0 10px 10px 10px;
  padding:10px 10px 10px;
}

p {
  margin-top: 5px;
  margin-bottom: 5px;
}

.discover {
  margin-left: 5px;
}

</style>