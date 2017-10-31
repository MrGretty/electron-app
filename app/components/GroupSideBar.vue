<template>
  <div id="groups">
    <div class="sidebar-header">
        
    </div>
    <div class="sidebar-content">
      <ul  class="lists">
        <div v-for = "(data,nameGroup,index) in groups" :key="data[nameGroup]"class="wrapper-list" >
          <li class="listItem" @click="groupSelected(nameGroup)":class="{selected: selectedGroup === nameGroup}">
            <div class="listItem-inner">
               <span class="listItem-icon ">
                 <i class="icon">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M19 8h-9c-.553 0-1-.448-1-1s.447-1 1-1h9c.553 0 1 .448 1 1s-.447 1-1 1m0 5h-9c-.553 0-1-.448-1-1s.447-1 1-1h9c.553 0 1 .448 1 1s-.447 1-1 1m0 5h-9c-.553 0-1-.448-1-1s.447-1 1-1h9c.553 0 1 .448 1 1s-.447 1-1 1M7 17c0 .829-.671 1.5-1.5 1.5S4 17.829 4 17s.671-1.5 1.5-1.5S7 16.171 7 17m0-5c0 .829-.671 1.5-1.5 1.5S4 12.829 4 12s.671-1.5 1.5-1.5S7 11.171 7 12m0-5c0 .829-.671 1.5-1.5 1.5S4 7.829 4 7s.671-1.5 1.5-1.5S7 6.171 7 7">
                      </path>
                    </svg>
                  </i>
                </span>
               <span class="listItem-title">{{nameGroup}}</span>
               <span class="listItem-count">0</span>
            </div>
          </li>
        </div>
      </ul>
      <div class="sidebar-addGroup">
          <button @click = "opened = true">Add</button>
      </div>
    </div>
    <group-modal v-if="opened" @close="opened = false"></group-modal>
  </div>
</template>

<script>
import GroupModal from './GroupModal.vue';

export default {
  data: () => {
    return {
      msg: '',
      selectedGroup: '',
      opened: false,
      activeList: '',
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
  setActiveIndex(index) {
    this.activeList = index;
  },
};
</script>


