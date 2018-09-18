<template lang="pug">
    .root
      <!--.links-->
        <!--router-link(to="/test") Go to component-->
      .search-zone
        input(v-model="findingUrl" placeholder="url 입력")
        input(type="text" v-model="findingClass" placeholder="클래스 이름")
        bootstrap-button(:buttonName="'Get Site Contents!'" @click.native="getSiteContents")
      .viewer
        .text-view(v-for="content in siteContentArray") {{ content }}
      .a-tags
        a(v-for="link in linkArray" v-bind:href="link") {{ link }}
</template>

<script>
import cheerioModule from '../components/cheerio-module';

export default {
  name: 'WebCrawler',
  data() {
    return {
      findingUrl: '',
      findingClass: '',
      siteContentArray: [],
      linkArray: []
    };
  },
  methods: {
    async getSiteContents() {
      const result = await this.$http.get(`http://127.0.0.1:3000/site-content/${encodeURIComponent(this.findingUrl)}`);

      // this.siteContent = result.data;
      cheerioModule.setRoot({
        rootHtml: result.data,
        findingClass: this.findingClass
      });

      this.siteContentArray = cheerioModule.findText();
      // this.linkArray =
      this.linkArray = cheerioModule.findATags();

      // console.log()
    }
  }
};
</script>

<style scoped lang="sass">
.root
  >.search-zone
    margin: 10px 0
    input
      margin: 0 10px
  >.viewer
    width: 100%
    min-height: 200px
    border: 1px solid #333
    >.text-view
      margin: 5px 0
  a
    display: block
</style>
