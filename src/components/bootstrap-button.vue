<template lang="pug">
  b-button(:size="size" :variant="variant") {{ buttonName }}
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

export default {
  name: 'bootstrap-button',
  props: {
    buttonName: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary'
    }
  }
};
</script>

<style scoped>
</style>
