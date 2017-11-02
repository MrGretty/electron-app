<template>
  <div id="app">
    <header-app v-on:close="exit" v-on:max="maxSize" v-on:min="minSize"></header-app>
    <div id="left">
      <group-side-bar :groups="groups" 
                v-on:group-selected="setSelectedGroup"
                :countStudent="countStudent"
        ></group-side-bar>
      </div>
      <div id="middle">
        <student-wrapper-list :selected="selectedGroup" 
        v-on:change-processed="changeNameGroup"
        :studentsList="studentsList">
        </student-wrapper-list>
      </div>
      <div id="right">
          <student-wrapper-result>

          </student-wrapper-result>
        </div>
  </div>
</template>

<script>
import store from './store';
import GroupSideBar from './components/GroupSideBar.vue';
import StudentWrapperList from './components/StudentWrapperList.vue';
import HeaderApp from './components/HeaderApp.vue';
import StudentWrapperResult from './components/StudentWrapperResult.vue';

export default {
  components: {
    GroupSideBar,
    StudentWrapperList,
    HeaderApp,
    StudentWrapperResult,
  },
  data: () => {
    return {
      groups: {},
      selectedGroup: '',
      changedNameGroup: '',
      studentsList: '',
      countStudent: [],
    };
  },

  created() {
    // console.log('Created=', this.groups);
    store.on('data-updated', this.updateData); // equals to  groups => this.updateData(groups)
  },

  methods: {
    updateData(groups) {
      console.log('updated');
      Object.values(groups).forEach(group => {
        this.countStudent.push(Object.keys(group).length);
      });
      this.groups = groups;
    },
    setSelectedGroup(group) {
      this.selectedGroup = group;
      this.studentsList = store.getChildData(group);
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

