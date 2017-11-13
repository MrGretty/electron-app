<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <span>Add a new group</span>
            <div class="default-modal-close" @click="$emit('close')">
              <close />
            </div>
          </div>
          <div class="modal-body">
            <form id="form">
              <input type="text" v-model="groupName" placeholder="enter the group name...">
              <div class="submit" @click="addGroup">
                <done />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import close from './assetsSvg/close.svg';
import done from './assetsSvg/done.svg';

import store from '../store';
export default {
  data: () => {
    return {
      groupName: '',
    };
  },

  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    close,
    done,
  },
  computed: {
    isValid: function() {
      return !!this.groupName.trim();
    },
  },
  methods: {
    addGroup() {
      if (this.isValid) {
        store.addGroup(this.groupName);
        this.groupName = '';
        this.$emit('close');
      } else {
        this.$root.$emit('error-msg', "the group's name  can not be empty");
      }
    },
  },
};
</script>
