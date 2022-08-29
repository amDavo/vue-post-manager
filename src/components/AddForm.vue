<template>
  <form class="container" @submit.prevent>
    <h2>Add post</h2>
    <ui-input
        v-model:modelValue="post.title"
        type="text"
        placeholder="title"
    />
    <ui-input
        v-model:modelValue="post.body"
        type="text"
        placeholder="body"
    />
    <ui-button @click="createPost">add post</ui-button>

  </form>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost () {
this.post.id = Date.now()
this.$emit('create', this.post)
      this.post =
      {
        title: '',
        body: '',
      }
    }
  }
}

</script>

<style>

.container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
  margin: 10px;
}

</style>
