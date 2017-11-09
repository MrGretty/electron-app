<template>
  <div id="result-student-info" class="overScroll">
    <div class="information-about-student" v-if="selectedStudent !== ''">
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
          <span>First module result - {{selectedStudent.firstModule}}</span>
          <span>Second module result -{{selectedStudent.secondModule}}</span>
          <span>total - {{selectedStudent.total}}</span>
        </div>
      </div>
    </div>
    <div class="information-about-student" v-else>No Data</div>
  </div>
</template>

<script>
export default {
  props:['selectedStudent'],
};
</script>
