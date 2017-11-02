<template>
  <div id="main-students">
    <div class="wrapper-students">
      <div class="wrapper-initials">
        <div v-for="(student,key,index) in list"  :key="key" class="student-list-inner">
          <li class="student-info-wrapper">
            <div class="student-info">
              <span>{{index+1}}</span>
              <span v-for ="info in student" :key="info.name">
              {{info}}
              </span>
            </div>
          </li>
        </div>
        <div class="studentList-addStudent">
              <button @click = "opened = true">
                <span>+</span>
              </button>
          </div>
      </div>
    </div>
       <student-modal v-if="opened" @close="opened = false"></student-modal>
  </div>
</template>

<script>
import StudentModal from './StudentModal.vue';

export default {
  data: () => {
    return {
      opened: false,
    };
  },
  components: {
    StudentModal,
  },
  props: ['list'],
};
</script>
