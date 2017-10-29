<template>
  <div id="app">
    <side-bar></side-bar>
  </div>
</template>

<script>
import store from './store';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
  data: () => {
    return {
      group: {},
    };
  },
  method: {
    updateData(group) {
      this.group = group;
    },
    setSelectedGroup(group) {
      this.setSelectedGroup = group;
    },
  },
};
</script>

