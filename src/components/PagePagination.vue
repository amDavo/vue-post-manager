<template>
  <div class="container">
  <div class="item"
       v-for="pageNumber in totalPages"
       :key="pageNumber"
       :class="{
         'current-page': page === pageNumber
         }"
       @click="movePage(pageNumber)"
  >
      {{pageNumber}}

  </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
    },
    page: {
      type: Number
    },
    // getData: {
    //   type: Function
    // }
  },
  methods: {
    movePage (pageNumber) {
      this.$emit('update:page', pageNumber)
    }
  },
  watch: {
    page() {
      this.getData()
    }
  }
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.item {
  font-size: 18px;
  padding: 10px;
  width: 15px;
  cursor: pointer;
}

.item{

}

.current-page {
border-bottom: 3px solid teal;
}

</style>