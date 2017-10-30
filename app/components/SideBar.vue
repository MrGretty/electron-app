<template>
  <div id="groups">
    <div class="container">
      <input type="text" v-model="msg">
          <button @click = "addGroup">Add</button>
    </div>
    <div class="content" v-for = "name in groups" :key="name[0]">
        {{name}}
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  data: () => {
    return {
      msg: '',
    };
  },
  props: ['groups'],

  methods: {
    addGroup() {
      store.addGroup(this.msg);
      store.addStudent(this.msg, 'test test test');
    },
  },
};
</script>


