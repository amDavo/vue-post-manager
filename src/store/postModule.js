import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [
        ],
        // modalVisibility: false,
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
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((a, b) => a[state.selectedSort]?.localeCompare(b[state.selectedSort]))
        },
        foundPost(state, getters) {
            return getters.sortedPosts.filter(el => el.title.toLowerCase().includes(state.searchText.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isLoading = bool;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setPage(state, page) {
            state.page = page
        },
        setSearchText(state, searchText) {
            state.searchText = searchText
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        deletePost (state, {id}) {
            state.posts = state.posts.filter(el => el.id !== id)
        },
        addPost (state, payload) {
            state.posts.push(payload)
        }

    },
    actions: {
        async getData({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/?',
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
                commit('setLoading', false)
            } catch (e) {
                console.log(e)
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page+1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/?',
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    })
               commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch (e) {
                console.log(e)
            }
        },
        removePost({commit}, payload) {
            commit('deletePost', payload)
        },
        addPost({commit}, payload) {
            commit('addPost', payload)
        }
    },
    namespaced: true
}