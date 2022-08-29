<template>
  <button class="btn">
<slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',
}
</script>

<style scoped>

.btn{
  border: 1px solid teal;
  align-self: center;
  padding: 10px 15px;
  background: none;
  color: teal;
}

</style>