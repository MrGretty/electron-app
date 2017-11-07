<template>
  <div id="result-student">
    <search></search>
    <div id="header-result">Results</div>
    <student-result :selectedStudent="selectedStudent"></student-result>
  </div>
</template>


<script>
import Search from "./Search.vue";
import StudentResult from "./StudentResult.vue";
export default {
  components:{
    Search,
    StudentResult
  },
  props:['selectedStudent']
};
</script>
