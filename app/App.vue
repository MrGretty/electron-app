<template>
  <div id="app">
    <header-app 
    v-on:close="exit" 
    v-on:max="maxSize" 
    v-on:min="minSize"
    >
    </header-app>
    <div id="left">
      <group-side-bar :groups="groups" :countStudent="countStudent"
                v-on:group-selected="setSelectedGroup"
        ></group-side-bar>
      </div>
      <div id="middle">
        <student-wrapper-list :selected="selectedGroup" :studentsList="studentsList"
        v-on:change-processed="changeNameGroup"
        v-on:update-Child-Data="updateChildData"
        v-on:get-info-student="setSelectedStudent"
        >
        </student-wrapper-list>
      </div>
      <div id="right">
          <student-wrapper-result :selectedStudent="selectedStudent">

          </student-wrapper-result>
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
      studentsList: '',
      countStudent: [],
      selectedStudent:''
    };
  },

  created() {
    store.on('data-updated', this.updateData); // equals to  groups => this.updateData(groups)
  },

  methods: {
    updateData(groups) {
      Object.values(groups).forEach((group,index,groups) => {
        this.countStudent[index] = Object.keys(group).length;
      });
      this.groups = groups;
    },
    setSelectedGroup(group) {
      this.selectedGroup = group;
      this.studentsList = store.getChildsData(group);
    },
    setSelectedStudent(key){
      this.selectedStudent = store.getChildData(this.selectedGroup,key);
    },
    updateChildData(group) {
      this.studentsList = store.getChildsData(group);
    },
    changeNameGroup(el) {
      store.changeNameGroupsOnServer(el);
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

