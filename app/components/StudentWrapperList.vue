<template>
  <div id="main">
      <student-list-toolbar :show="selected" v-on:changed-find="changeMove"></student-list-toolbar>
      <student-list :list="studentsList"></student-list>
  </div>
</template>

<script>
import StudentListToolbar from './StudentListToolbar.vue';
import StudentList from './StudentList.vue';

export default {
  components: {
    StudentList,
    StudentListToolbar,
  },

  props: ['groups', 'selected', 'studentsList'],

  methods: {
    changeMove(el) {
      this.$emit('change-processed', el);
    },
  },
};
</script>
