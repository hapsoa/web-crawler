<template lang="pug">
  <div id="app">
    ui-dialog(ref="defaultDialog2")
    loading-progress(ref="loading")
    toast-view(ref="toast")
    router-view
  </div>
</template>

<script>
/* eslint-disable linebreak-style */

import Vue from 'vue';
import axios from 'axios';

import toastView from './components/toast-view';
import bootstrapButton from './components/bootstrap-button';
import dialog from './components/ui-dialog';
import loadingProgress from './components/loading-progress';

import { store } from './vuex/store';

Vue.prototype.$http = axios;

Vue.component(toastView.name, toastView);
Vue.component(bootstrapButton.name, bootstrapButton);
Vue.component(dialog.name, dialog);
Vue.component(loadingProgress.name, loadingProgress);

export default {
  name: 'App',
  store,
  methods: {},
  mounted() {
    Vue.prototype.$dialog = this.$refs.defaultDialog2;
    Vue.prototype.$loading = this.$refs.loading;
    Vue.prototype.$toast = this.$refs.toast;
  }
};
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  /*margin-top: 60px;*/
  margin: 0
  padding: 0
*
  box-sizing: border-box
</style>
