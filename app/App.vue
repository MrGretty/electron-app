<template>
  <div id="app">
    <side-bar :groups="groups"
              v-on:group-selected="setSelectedGroup"
      ></side-bar>
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
      selectedGroup: '',
    };
  },

  created() {
    store.on('data-updated', this.updateData); // equals to  groups => this.updateData(groups)
  },

  methods: {
    updateData(groups) {
      this.groups = groups;
    },
    setSelectedGroup(group) {
      this.selectedGroup = group;
    },
  },
};
</script>

