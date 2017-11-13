<template>
  <div id="groups">
    <div class="sidebar-header">
      <span>Mydiary | MrGretty </span>
    </div>
    <div class="sidebar-myDay">
      <div class="sun">
        <sun />
      </div>
      <span>My Day</span>
    </div>
    <div class="sidebar-content overScroll">
      <ul class="lists">
        <div v-for="(data,nameGroup,index) in groups" :key="data[nameGroup]" class="wrapper-list">
          <li class="listItem" @click="groupSelected(nameGroup)" :class="{selected: selectedGroup === nameGroup}">
            <div class="listItem-inner">
              <span class="listItem-icon ">
                <i class="icon">
                  <gamburger />
                </i>
              </span>
              <span class="listItem-title">{{nameGroup}}</span>
              <span class="listItem-count">{{countStudent[index]}}</span>
            </div>
          </li>
        </div>
      </ul>
      <div class="sidebar-addGroup">
        <button @click="opened = true">
          <span>+</span>
        </button>
      </div>
    </div>
    <group-modal v-if="opened" @close="opened = false"></group-modal>
  </div>
</template>

<script>
import GroupModal from './GroupModal.vue';
import sun from './assetsSvg/sun.svg';
import gamburger from './assetsSvg/gamburger.svg';

export default {
  data: () => {
    return {
      selectedGroup: '',
      opened: false,
    };
  },
  components: {
    GroupModal,
    sun,
    gamburger,
  },

  props: {
    groups: {
      type: Object,
      required: true,
    },
    countStudent: {
      type: Array,
      required: true,
    },
  },

  methods: {
    groupSelected(group) {
      this.selectedGroup = group;
      this.$emit('group-selected', group);
    },
  },
};
</script>


