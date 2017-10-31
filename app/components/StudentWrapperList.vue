<template>
  <div id="main">
      <group-toolbar :show="selected" v-on:changed-find="changeMove"></group-toolbar>
      <student-list></student-list>
  </div>
</template>

<script>
import GroupToolbar from './GroupToolbar.vue';
import StudentList from './StudentList.vue';

export default {
  components: {
    GroupToolbar,
    StudentList,
  },

  props: ['groups', 'selected'],

  methods: {
    changeMove(el) {
      console.log(el);
      this.$emit('change-processed', el);
    },
  },
};
</script>
