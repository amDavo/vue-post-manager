<template>
  <h2 class="header">Let's add post</h2>
  <div class="actions">
    <ui-button v-focus @click="modalVisibility = true">Add post</ui-button>
    <ui-input
        v-focus
        placeholder="Find a post"
        type="text"
        :model-value="searchText"
        @update:model-value="setSearchText"
    />
    <ui-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
// import PagePagination from "@/components/PagePagination";
import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'

export default {
  components: {AddForm, PostList, ModalForm},
  name: 'App',
  data () {
    return {
      modalVisibility: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchText: 'post/setSearchText',
      setSelectedSort: 'post/setSelectedSort',
      setPosts: 'post/setPosts',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      getData: 'post/getData',
      removePost: 'post/removePost',
      addPost: 'post/addPost'
    }),
    createPost(post) {
      this.addPost(post)
      this.modalVisibility = false
    },
    showChange() {
      this.show = false
    },
  },
  mounted: function () {
    this.getData()
   },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isLoading: state => state.post.isLoading,
      selectedSort: state => state.post.selectedSort,
      searchText: state => state.post.searchText,
      page: state => state.post.page,
      totalPages: state => state.post.totalPages,
      options: state => state.post.options,
      limit: state => state.post.limit,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      foundPost: 'post/foundPost',
    }),
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
