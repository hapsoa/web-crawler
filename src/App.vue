<template lang="pug">
  <div id="app">
    ui-dialog(ref="defaultDialog2")
    loading-progress(ref="loading")
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import progressCircle from './components/progress-circle';
import toast from './components/toast';
import toast2 from './components/toast2';
import button from './components/bootstrapButton';
import bootstrapCustomButton from './components/bootstrapCustomButton';
import dialog from './components/ui-dialog';
import loadingProgress from './components/loading-progress';
import { store } from './vuex/store';

Vue.component(progressCircle.name, progressCircle);
Vue.component(toast.name, toast);
Vue.component(toast2.name, toast2);
Vue.component(button.name, button);
Vue.component(bootstrapCustomButton.name, bootstrapCustomButton);
Vue.component(dialog.name, dialog);
Vue.component(loadingProgress.name, loadingProgress);

export default {
  name: 'App',
  store,
  methods: {},
  mounted() {
    Vue.prototype.$dialog = this.$refs.defaultDialog2;
    Vue.prototype.$loading = this.$refs.loading;
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
