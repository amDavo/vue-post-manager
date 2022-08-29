<template>
  <select
      class="select"
  :value="modelValue"
  @change="selectOption"
  >
    <option disabled value="">Choose from list</option>
    <option
        :value="option.value"
        v-for="option in options"
        :key="option.name"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
name: 'ui-select',
  props: {
    modelValue: {
      type: String
  },
    options: {
    type: Array,
      default: () => []
    }
  },
  methods: {
    selectOption (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

.select {
  border: 1px solid teal;
  align-self: center;
  padding: 10px 15px;
  background: none;
  color: teal;
}
</style>