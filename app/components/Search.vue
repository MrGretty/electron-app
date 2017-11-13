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
};
</script>