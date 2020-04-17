<template>
  <div>
      <b-button>Button</b-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { BButton} from 'bootstrap-vue'
Vue.component('b-button', BButton)
export default {
  name: 'Button'
}
</script>