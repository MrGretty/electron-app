<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <div class="modal-header">
                default header
            </div>
            <div class="modal-body">
                <form id="form" v-on:submit.prevent="addStudent">
                  <!-- <input type="text" v-model="groupName" placeholder="Groupname"> -->
                  <input type="submit" value="Add User">
                </form>
                 <ul class="errors">
                     <!-- <li v-show="!isValid">Name cannot be empty.</li> -->
                 </ul>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>

    </transition>
</template>

<script>
export default {};
</script>
