<template lang="pug">
    .root
      .links
        router-link(to="/test") Go to component
      input(v-model="findingUrl" placeholder="url 입력")
      .button(@click="getSiteContents") Get Site Contents!
      .viewer(v-html="siteContent")
</template>

<script>

export default {
  name: 'WebCrawler',
  data() {
    return {
      findingUrl: '',
      siteContent: ''
    };
  },
  methods: {
    async getSiteContents() {
      const result = await this.$http.get(`http://127.0.0.1:3000/site-content/${encodeURIComponent(this.findingUrl)}`);
      this.siteContent = result.data;
    }
  }
};
</script>

<style scoped lang="sass">

</style>
