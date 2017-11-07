<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click="$emit('close-addInfo')">
      <div id="wrapper-additionalInfo">
        <div class="additionalInfoData">
          <div @click="setAdditionalData('CourseProject')">Course Project</div>
          <div @click="setAdditionalData('ControlWork')">Control Work</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setAdditionalData(data) {
      this.$parent.$emit('change-additionalInfo', data);
    },
  },
};
</script>
