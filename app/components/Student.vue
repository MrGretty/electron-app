<template>
  <div class="student-component">
    <li class="student-info-wrapper">
      <div class="student-info">
        <span>{{index+1}}</span>
        <span v-if="list.data">{{list.data}}</span>
        <span>
          {{student.surname}}
        </span>
        <span>
          {{student.name}}
        </span>
        <span>
          {{student.patronymic}}
        </span>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
    student: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

