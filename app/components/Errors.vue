<template>
  <div class="errors modal-mask" v-if="opened" @click="opened = false">
    <div class="modal-wrapper">
      <div id="wrapper-error">
        <div id="error">
          <computer-error id="iconClose"></computer-error>
          <div>{{message}}</div>
        </div>
      </div>
    </div>
    </div>
</template>


<script>
import ComputerError from './assetsSvg/computerError.svg';

export default {
  data: () => {
    return {
      message: '',
      opened: false,
    };
  },
  components:{
    ComputerError,
  },
  created() {
    this.$root.$on('error-msg', el => {
      this.message = el;
      this.opened = true;
    });
  },
};
</script>