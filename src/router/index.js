import Vue from 'vue';
import Router from 'vue-router';
import Test from '../page/Test';
import dialogTestPage from '../page/dialogTestPage';
import testPage1 from '../page/testPage1';
import webCrawler from '../page/WebCrawler';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: Test.name,
      component: Test
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
    },
    {
      path: '/web-crawler',
      name: webCrawler.name,
      component: webCrawler
    }
  ]
});
