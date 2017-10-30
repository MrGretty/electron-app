<template>
  <div id="groups">
    <div class="container">
          <button @click = "opened = true">Add</button>
    </div>
    <div class="content">
      <div  v-for = "(data,nameGroup) in groups" :key="data[nameGroup]">
        <span @click="groupSelected(nameGroup)":class="{selected: selectedGroup === nameGroup}">
          {{nameGroup}}
        </span>
      </div>
    </div>
    <group-modal v-if="opened" @close="opened = false"></group-modal>
  </div>
</template>

<script>
import store from '../store';
import GroupModal from './GroupModal.vue';

export default {
  data: () => {
    return {
      msg: '',
      selectedGroup: '',
      opened: false,
    };
  },
  components: {
    GroupModal,
  },

  props: ['groups'],

  methods: {
    groupSelected(group) {
      this.selectedGroup = group;
      this.$emit('group-selected', group);
    },
  },
};
</script>


