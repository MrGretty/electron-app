<template>
  <div id="main-students">
    <div class="wrapper-students overScroll">
      <div class="wrapper-initials">
        <div class="student-list-inner" v-for="(student,key,index) in list " 
          :key="key" 
          :class="{selected: selectedChild === key}" 
          @click="childSelected(key)">
          <student :student="student" :list="list" :index="index" />
        </div>
        <div class="studentList-addStudent">
          <button @click="opened = true">
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
    <student-modal v-if="opened" 
      :nameGroup="nameGroup" 
      @close="opened = false" 
      @update-child-data="updateChild" />
  </div>
</template>

<script>
import StudentModal from './StudentModal.vue';
import Student from './Student.vue';

export default {
  data: () => {
    return {
      opened: false,
      selectedChild: '',
    };
  },
  components: {
    StudentModal,
    Student,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
    nameGroup: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateChild(data) {
      this.$emit('update-child-data', data);
    },
    childSelected(key) {
      this.selectedChild = key;
      this.$emit('get-info-student', key);
    },
  },
};
</script>
