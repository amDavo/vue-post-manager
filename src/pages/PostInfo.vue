<template>
  <div class="divver">
    <h2>Discover this post</h2>
    <p> Post's title: <b>{{this.post[0]?.title}}</b></p>
    <p> Post's body: <b>{{this.post[0]?.body}}</b></p>
    <ui-button @click="$router.push('/posts')">Back</ui-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
post: []
    }
  },
methods: {
  async getPostInfo  () {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/',
        {
          params: {
           id: this.$route.params.id,
          }
        })
    this.post = res.data

  } catch (e) {
    console.log(e)
  }
},
},
  mounted: function () {
    this.getPostInfo()
  }
}
</script>

<style scoped>

.header {
  font-size: 30px;
}
.divver {
  display: block;
}
</style>