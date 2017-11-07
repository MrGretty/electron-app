<template>
  <div id="result-student-info">
    <div class="information-about-student">
      <div class="firsModule">
        <span>Laborotory works - {{selectedStudent.lworksFirstModule}}</span>
        <span>Attendens - {{selectedStudent.attendanceFirstModule}}</span>
        <span>Module test - {{selectedStudent.controlFirstTest}}</span>
      </div>
      <div class="secondModule">
        <span>Laborotory works - {{selectedStudent.lworksSecondModule}}</span>
        <span>Attendens - {{selectedStudent.attendanceSecondModule}}</span>
        <span>Module test - {{selectedStudent.controlSecondTest}}</span>
      </div>
      <div class="additionalInfoStudent">
        <span v-if="selectedStudent.courseProject!==''">Course project - {{selectedStudent.courseProject}}</span>
        <span v-if="selectedStudent.controlWork!==''">Control work - {{selectedStudent.controlWork}}</span>
      </div>
      <div class="wrapper-results">
        <div class="results">
          <span>{{firstModule}}</span>
          <span>{{secondModule}}</span>
          <span>{{total}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>{
    return {
      firstModule:'',
      secondModule:'',
      total:'',
    }
  },
  props:['selectedStudent'],
  computed:{
    firstModuleResults:function() {
      this.firstModule =
        this.selectedStudent.lworksFirstModule +
        this.selectedStudent.attendanceFirstModule +
        this.selectedStudent.controlFirstTest;
    },
    firstModuleResults:function() {
      this.secondModule =
        this.selectedStudent.lworksSecondModule +
        this.selectedStudent.attendanceSecondModule +
        this.selectedStudent.controlSecondTest;
    },
    totalResult:function () {
      this.total = (firstModuleResults + secondModuleResults) / 2;
    },
  },
};
</script>
