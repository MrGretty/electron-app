<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper student-modal">
        <div class="modal-container">
            <div class="modal-header">
                <span>Add a new Student</span>
                  <div class="default-modal-close" @click="$emit('close')">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 507.2 507.2" style="enable-background:new 0 0 507.2 507.2;" xml:space="preserve">
                        <circle style="fill:#016aa8;" cx="253.6" cy="253.6" r="253.6"/>
                        <path style="fill:##074b73;" d="M147.2,368L284,504.8c115.2-13.6,206.4-104,220.8-219.2L367.2,148L147.2,368z"/>
                        <path style="fill:#FFFFFF;" d="M373.6,309.6c11.2,11.2,11.2,30.4,0,41.6l-22.4,22.4c-11.2,11.2-30.4,11.2-41.6,0l-176-176
                          c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L373.6,309.6z"/>
                        <path style="fill:#D6D6D6;" d="M280.8,216L216,280.8l93.6,92.8c11.2,11.2,30.4,11.2,41.6,0l23.2-23.2c11.2-11.2,11.2-30.4,0-41.6
                          L280.8,216z"/>
                        <path style="fill:#FFFFFF;" d="M309.6,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6L197.6,373.6
                          c-11.2,11.2-30.4,11.2-41.6,0l-22.4-22.4c-11.2-11.2-11.2-30.4,0-41.6L309.6,133.6z"/>
                        </svg>
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
                      <svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 42 42" style="enable-background:new 0 0 42 42; width:30px" xml:space="preserve">
                        <path style="fill:#23A24D;" d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21
                          s2.224,5,4.941,5H16v11.059C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"
                          />
                        </svg>  
                    </div>
                </form>
                 <ul class="errors">
                     <!-- <li v-show="!isValid">Name cannot be empty.</li> -->
                 </ul>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                 <div class="addStudentButton" @click="addStudentToGroup()">
                  Submit
                </div>
              </slot>
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

export default {
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

      total: '',
    };
  },
  props: ['nameGroup', 'updateChildData'],

  components: {
    AdditionalInfo,
  },

  created() {
    this.$on('change-additionalInfo', el => {
      this.chooseAdditionalInfo = el;
      this.opened = false;
    });
  },

  computed: {
    getTotal: function() {
      return this.lworksFirstModule + this.attendanceFirstModule;
    },
  },

  methods: {
    addStudentToGroup() {
      this.total = this.getTotal;
      store.addStudent(this.nameGroup, this.$data);
      this.$emit('update-Child-Data', this.nameGroup);
      this.$emit('close');
    },
    addAdditionalInfo() {
      if (this.chooseAdditionalInfo !== '') {
        this.$root.$emit('error-msg', 'Additional info has already been added');
      } else {
        this.opened = true;
      }
    },
  },
};
</script>
