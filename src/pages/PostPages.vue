<template>
  <h2 class="header">Let's add post</h2>
  <div class="actions">
    <ui-button v-focus @click="modalVisibility = true">Add post</ui-button>
    <ui-input
        v-focus
        placeholder="Find a post"
        type="text"
        v-model="searchText"
    />
    <ui-select
        v-model="selectedSort"
        :options="options"
    />
  </div>
  <modal-form v-model:show="modalVisibility">
    <add-form
        @create="createPost"
    />
  </modal-form>
  <div v-if="posts.length > 0">
    <h2 class="header">All posts</h2>

    <post-list
        :posts="foundPost"
        @remove="removePost"
    />


    <!--<page-pagination-->
    <!--    :getData="getData"-->
    <!--    :totalPages="totalPages"-->
    <!--    v-model:page="page"-->
    <!--/>-->
  </div>

  <h2 class="noPosts" v-else-if="isLoading">
    Loading...
  </h2>
  <h2 class="noPosts" v-else>
    Oops...No posts
  </h2>
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import AddForm from "@/components/AddForm";
import PostList from "@/components/PostList";
import ModalForm from "@/components/ModalForm";
import axios from "axios";
// import PagePagination from "@/components/PagePagination";

export default {
  components: {AddForm, PostList, ModalForm},
  name: 'App',
  data () {
    return {
      posts: [
      ],
      modalVisibility: false,
      isLoading: true,
      selectedSort: '',
      options: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By body'},
      ],
      searchText: '',
      page: 1,
      limit: 10,
      totalPages: 0
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.modalVisibility = false
    },
    removePost(post) {
      this.posts = this.posts.filter(el => el.id !== post.id)
    },
    showChange() {
      this.show = false
    },
    async getData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/?',
            {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
        this.isLoading = false
      } catch (e) {
        console.log(e)
      }
    },
    async loadMorePosts() {
      try {
        this.page +=1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/?',
            {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        console.log(e)
      }

    },

  },
  mounted: function () {
    this.getData()
   },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    },
    foundPost() {
      return this.sortedPosts.filter(el => el.title.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  },
}

</script>

<style>

.noPosts {
  display:flex;
  justify-content:center;
  color: teal;
  font-size: 30px;
}

.actions {
  display: flex;
  justify-content: space-between;
}

.header {
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
