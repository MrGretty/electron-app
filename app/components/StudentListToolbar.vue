<template>
  <div id="group-toolbar">
    <div id="wrapper-toolbar-group">
      <h1 v-show="!clicked" @dblclick="editGroup(newNameGroup)">{{newNameGroup}}</h1>
      <input 
        v-show="clicked" 
        type="text" 
        class="edit tasksToolbar" 
        v-model="edited" 
        v-group-focus="edited" 
        @blur="doneEdit(edited)" 
        @keyup.enter="doneEdit(edited)" 
        @keyup.esc="cancelEdit()">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nameGroup: {
      type: String,
      required: true,
      default: '',
    },
  },
  data: () => {
    return {
      edited: '',
      clicked: false,
      newNameGroup: '',
    };
  },
  watch: {
    nameGroup: function(val, oldVal) {
      this.newNameGroup = val;
    },
  },

  methods: {
    editGroup(name) {
      this.edited = name;
      this.clicked = true;
    },
    doneEdit(name) {
      if (!this.edited) {
        return;
      }
      this.edited = null;
      this.newNameGroup = name.trim();
      this.clicked = false;
      if (this.newNameGroup !== this.nameGroup) {
        this.$emit('changeNameGroup', { [this.nameGroup]: this.newNameGroup });
      }
    },
    cancelEdit() {
      this.edited = null;
      this.clicked = false;
    },
  },
  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // took this diective (todo-focus)  from vue docs
  directives: {
    'group-focus': el => {
      el.focus();
    },
  },
};
</script>
