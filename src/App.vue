<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import progressCircle from './components/progress-circle';
import { store } from './vuex/store';

Vue.component(progressCircle.name, progressCircle);

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
