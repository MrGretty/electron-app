<template>
  <div id="group-toolbar">
      <div id="wrapper-toolbar-group">
        <h1  v-show="!clicked"  @dblclick="editGroup(finishEdit)">{{finishEdit}}</h1>
        <input  v-show="clicked" type="text" class="edit tasksToolbar" v-model="edited" 
               v-group-focus="edited"
               ref="group-tollbar"
               @blur="doneEdit(edited)"
               @keyup.enter="doneEdit(edited)"
               @keyup.esc="cancelEdit()">
      </div>


  </div>
</template>

<script>
export default {
  props: ['show'],
  data: () => {
    return {
      edited: '',
      clicked: false,
      finishEdit: '',
    };
  },
  watch: {
    show: function(val, oldVal) {
      this.finishEdit = val;
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
      this.finishEdit = name.trim();
      this.clicked = false;
      if (this.finishEdit !== this.show) {
        this.$emit('changed-find', { [this.show]: this.finishEdit });
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
