<template>
  <div id="main-students">
    <div v-for="(student,key,index) in list"  :key="key" class="studetn-list-inner">
      <li class="student-info-wrapper">
        <div class="student-info">
          <span>{{index+1}}</span>
          <span v-for ="info in student" :key="info.name">
           {{info}}
          </span>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
};
</script>
