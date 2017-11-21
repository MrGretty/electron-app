<template>
  <div id="main-students">
    <div class="wrapper-students overScroll">
      <div class="wrapper-initials">
        <div class="student-list-inner" v-for="(student,key,index) in filterStudent|| list " 
          :key="key" 
          :class="{selected: selectedChild === key}" 
          @click="childSelected(key)">
          <student :student="student" :list="filterStudent || list " :index="index" />
        </div>
        <div class="studentList-addStudent">
          <button @click="opened = true">
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
    <student-modal v-if="opened" 
      :nameGroup="nameGroup" 
      @close="opened = false" 
      @update-child-data="updateChild" />
  </div>
</template>

<script>
import StudentModal from './StudentModal.vue';
import Student from './Student.vue';
import filter from '../filter';

export default {
  data: () => {
    return {
      opened: false,
      selectedChild: '',
      search: '',
    };
  },
  components: {
    StudentModal,
    Student,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
    nameGroup: {
      type: String,
      required: true,
    },
  },
  computed: {
    filterStudent: function() {
      if (!!this.search.trim()) return filter(this.list, this.search);
    },
  },
  created() {
    this.$root.$on('search', data => {
      this.search = data;
    });
  },
  methods: {
    updateChild(data) {
      this.$emit('update-child-data', data);
    },
    childSelected(key) {
      this.selectedChild = key;
      this.$emit('get-info-student', key);
    },
  },
};
</script>
