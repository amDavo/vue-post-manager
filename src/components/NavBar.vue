<template>
  <div class="container">
    <h3 class="logo" @click="$router.push('/')">PostER</h3>
    <div class="btns">
    <ui-button class="btn" @click="$router.push('/about')">About</ui-button>
    <ui-button @click="$router.push('/posts')">Posts</ui-button>
      <ui-button @click="$router.push('/store')">Store</ui-button>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  background-color: #002d2d;
  height: 50px;
  width: 100%;
  display: flex;
  margin: 0 0 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

  .logo {
    color: white;
  }

  .btn {
    margin-right: 5px;
  }
</style>