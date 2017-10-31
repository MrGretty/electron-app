<template>
  <div id="title-bar">
    <div id="title-bar-btns">
      <div id="min-btn" @click="minSize">
        <i class="material-icons">remove</i>
      </div>
      <div id="max-btn" @click="maxSize">
        <i class="material-icons">add</i>
      </div>
      <div id="close-btn" @click="close">
        <i class="material-icons">close</i>
      </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    },
    maxSize() {
      this.$emit('max');
    },
    minSize() {
      this.$emit('min');
    },
  },
};
</script>
