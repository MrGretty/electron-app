<template>
  <div id="app">
    <header-app 
      @close="exit" 
      @max="maxSize" 
      @min="minSize" />
    <div id="left">
      <group-side-bar 
        :groups="groups" 
        :countStudent="countStudent" 
        @group-selected="setSelectedGroup" />
    </div>
    <div id="middle">
      <student-wrapper-list 
        :selected="selectedGroup" 
        :studentsList="studentsList" 
        @change-name-group="changeNameGroup" 
        @update-child-data="updateChildData" 
        @get-info-student="setSelectedStudent"/>
    </div>
    <div id="right">
      <student-wrapper-result :selectedStudent="selectedStudent"/>
    </div>
    <errors></errors>
  </div>
</template>

<script>
import store from './store';
import GroupSideBar from './components/GroupSideBar.vue';
import StudentWrapperList from './components/StudentWrapperList.vue';
import HeaderApp from './components/HeaderApp.vue';
import StudentWrapperResult from './components/StudentWrapperResult.vue';
import Errors from './components/Errors.vue';

export default {
  components: {
    GroupSideBar,
    StudentWrapperList,
    HeaderApp,
    StudentWrapperResult,
    Errors,
  },
  data: () => {
    return {
      groups: {},
      selectedGroup: '',
      changedNameGroup: '',
      studentsList: {},
      countStudent: [],
      selectedStudent: '',
    };
  },

  created() {
    store.on('data-updated', this.updateData); // equals to  groups => this.updateData(groups)
  },

  methods: {
    updateData(groups) {
      Object.values(groups).forEach((group, index, groups) => {
        this.countStudent[index] = Object.keys(group).length;
      });
      this.groups = groups;
    },
    setSelectedGroup(group) {
      this.selectedGroup = group;
      this.studentsList = store.getChildsData(group);
    },
    setSelectedStudent(key) {
      this.selectedStudent = store.getChildData(this.selectedGroup, key);
    },
    updateChildData(group) {
      this.studentsList = store.getChildsData(group);
    },
    changeNameGroup(el) {
      store.changeNameGroup(el);
      this.setSelectedGroup(...Object.values(el));
    },
    exit() {
      store.exit();
    },
    maxSize() {
      store.max();
    },
    minSize() {
      store.min();
    },
  },
};
</script>

