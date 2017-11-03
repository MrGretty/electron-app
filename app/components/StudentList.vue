<template>
  <div id="main-students">
    <div class="wrapper-students overScroll">
      <div class="wrapper-initials">
        <div v-for="(student,key,index) in list"  :key="key" class="student-list-inner" @click="ChildSelected(key)":class="{selected: selectedChild === key}">
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
       <student-modal :nameGroup = "nameGroup" v-if="opened" @close="opened = false" v-on:update-Child-Data="updateChild"></student-modal>
  </div>
</template>

<script>
import StudentModal from './StudentModal.vue';

export default {
  data: () => {
    return {
      opened: false,
      selectedChild: '',
    };
  },
  components: {
    StudentModal,
  },
  props: ['list', 'nameGroup', 'updateChildData'],
  methods: {
    updateChild(data) {
      this.$emit('update-Child-Data', data);
    },
    ChildSelected(key) {
      this.selectedChild = key;
    },
  },
};
</script>
