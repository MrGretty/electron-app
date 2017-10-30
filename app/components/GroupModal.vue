<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <div class="modal-header">
                default header
            </div>
            <div class="modal-body">
                <form id="form" v-on:submit.prevent="addGroup">
                  <input type="text" v-model="groupName" placeholder="Groupname">
                  <input type="submit" value="Add User">
                </form>
                 <ul class="errors">
                     <li v-show="!isValid">Name cannot be empty.</li>
                 </ul>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>

    </transition>
</template>


<script>
import store from '../store';
export default {
  data: () => {
    return {
      groupName: '',
    };
  },
  props: ['opened'],
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
      }
    },
  },
};
</script>
