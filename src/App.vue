<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import progressCircle from './components/progress-circle';
import toast from './components/toast';
// import button from './components/bootstrapButton';
import bootstrapCustomButton from './components/bootstrapCustomButton';
import { store } from './vuex/store';

Vue.component(progressCircle.name, progressCircle);
Vue.component(toast.name, toast);
// Vue.component(button.name, button);
Vue.component(bootstrapCustomButton.name, bootstrapCustomButton);

export default {
  name: 'App',
  store,
  methods: {}
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
