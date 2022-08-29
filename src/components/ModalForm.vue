<template>
<div
    class="window"
    v-if="show"
    @click="showStatus"
>
  <div
      @click.stop
      class="content">
    <slot></slot>
  </div>
</div>
</template>


<script>

import toggleMixin from "@/mixins/toggleMixin";

export default {
mixins: [toggleMixin]
}
</script>


<style>
.window {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba( 0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.content {
  margin: auto;
  background: white;
  border-radius: 12px;
  width: 500px;
  height: 300px;
  padding: 10px;
}

</style>