<template>
  <div id="wrapper-search">
    <input type="text" class="edit searchInput" placeholder="Search..." v-model="query">
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      query: '',
    };
  },
  watch: {
    query: function(val, oldVal) {
      this.$root.$emit('search', val);
    },
  },
};
</script>