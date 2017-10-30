<template>
  <div id="app">
    <side-bar :groups="groups"></side-bar>
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
      groups: {},
    };
  },

  created() {
    store.on('data-updated', this.updateData); // equals to  groups => this.updateData(groups)
  },

  methods: {
    updateData(groups) {
      this.groups = groups;
      debugger;
    },
    setSelectedGroup(group) {
      this.setSelectedGroup = group;
    },
  },
};
</script>

