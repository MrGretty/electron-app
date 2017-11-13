<template>
  <div id="main">
    <div class="middle">
      <student-list-toolbar :nameGroup="selected" @changeNameGroup="changeNameGroup" />
      <student-list 
        :list = "studentsList" 
        :nameGroup = "selected" 
        @update-child-data = "updateChilddata"
        @get-info-student = "getInfoStudent" />
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

  props: {
    selected: {
      type: String,
      required: true,
    },
    studentsList: {
      type: Object,
      required: true,
    },
  },

  methods: {
    changeNameGroup(el) {
      this.$emit('change-name-group', el);
    },
    updateChilddata(data) {
      this.$emit('update-child-data', data);
    },
    getInfoStudent(key) {
      this.$emit('get-info-student', key);
    },
  },
};
</script>
