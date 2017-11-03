<template>
  <div id="main">
    <div class="middle">
      <student-list-toolbar :show="selected" v-on:changed-find="changeMove"></student-list-toolbar>
      <student-list :list="studentsList" :nameGroup = "selected" v-on:update-Child-Data="updateChilddata"></student-list>
     </div>
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

  props: ['groups', 'selected', 'studentsList', 'updateChildData'],

  methods: {
    changeMove(el) {
      this.$emit('change-processed', el);
    },
    updateChilddata(data) {
      this.$emit('update-Child-Data', data);
    },
  },
};
</script>
