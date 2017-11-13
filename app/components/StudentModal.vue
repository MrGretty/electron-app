<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper student-modal">
        <div class="modal-container">
          <div class="modal-header">
            <span>Add a new Student</span>
            <div class="default-modal-close" @click="$emit('close')">
              <close></close>
            </div>
          </div>
          <div class="modal-body student-modal">
            <form id="form" v-on:submit.prevent="addStudentToGroup">
              <div class="fullname">
                <input type="text" v-model.trim="name" placeholder="name">
                <input type="text" v-model.trim="surname" placeholder="surname">
                <input type="text" v-model.trim="patronymic" placeholder="patronymic">
              </div>
              <div class="modules">
                <div class="module_1">
                  <span>First Module:</span>
                  <input type="number" v-model.number="lworksFirstModule" placeholder="lab. works">
                  <input type="number" v-model.number="attendanceFirstModule" placeholder="attendance">
                  <input type="number" v-model.number="controlFirstTest" placeholder="test">
                </div>
                <div class="separator"></div>
                <div class="module_2">
                  <span>Second Module:</span>
                  <input type="number" v-model.number="lworksSecondModule" placeholder="lab. works">
                  <input type="number" v-model.number="attendanceSecondModule" placeholder="attendance">
                  <input type="number" v-model.number="controlSecondTest" placeholder="test">
                </div>
                <div class="additionalInfoCourse additionalInfo" v-if="chooseAdditionalInfo === 'CourseProject'">
                  <span>CourseProject: </span>
                  <input type="number" v-model.number="courseProject" placeholder="courseProject">
                </div>
                <div class="additionalInfoControl additionalInfo" v-if="chooseAdditionalInfo === 'ControlWork'">
                  <span>ControlWork: </span>
                  <input type="number" v-model.number="controlWork" placeholder="ControlWork">
                </div>
              </div>
              <div class="addinfo" @click="addAdditionalInfo">
                <plus></plus>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="addStudentButton" @click="addStudentToGroup()">
              Submit
            </div>
          </div>
        </div>
      </div>
      <additional-info v-if="opened" @close-addInfo="opened = false"></additional-info>
    </div>
  </transition>
</template>

<script>
import store from '../store';
import AdditionalInfo from './AdditionalInfo.vue';
import close from './assetsSvg/close.svg';
import plus from './assetsSvg/plus.svg';

export default {
  props: {
    nameGroup: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      opened: false,
      chooseAdditionalInfo: '',

      name: '',
      surname: '',
      patronymic: '',

      courseProject: '',
      controlWork: '',

      lworksFirstModule: '',
      attendanceFirstModule: '',
      controlFirstTest: '',

      lworksSecondModule: '',
      attendanceSecondModule: '',
      controlSecondTest: '',

      firstModule: '',
      secondModule: '',
      total: '',
    };
  },

  components: {
    AdditionalInfo,
    close,
    plus,
  },

  created() {
    this.$on('change-additionalInfo', el => {
      this.chooseAdditionalInfo = el;
      this.opened = false;
    });
  },

  methods: {
    addStudentToGroup() {
      this.calculateResult();
      store.addStudent(this.nameGroup, this.$data);
      this.$emit('update-child-data', this.nameGroup);
      this.$emit('close');
    },
    addAdditionalInfo() {
      if (this.chooseAdditionalInfo !== '') {
        this.$root.$emit('error-msg', 'Additional info has already been added');
      } else {
        this.opened = true;
      }
    },
    calculateResult() {
      this.firstModule =
        this.controlFirstTest +
        this.lworksFirstModule +
        this.attendanceFirstModule;
      this.secondModule =
        this.controlSecondTest +
        this.lworksSecondModule +
        this.attendanceSecondModule;
      this.total = (this.firstModule + this.secondModule) / 2;
    },
  },
};
</script>
