import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import dialogTestPage from '../page/dialogTestPage';
import testPage1 from '../page/testPage1';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dialogTest',
      name: dialogTestPage.name,
      component: dialogTestPage
    },
    {
      path: '/testpage1',
      name: testPage1.name,
      component: testPage1
    }
  ]
});
