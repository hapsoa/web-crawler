<template lang="pug">
    .root
      .links
        router-link(to="/test") Go to component
      input(type="text" placeholder="url 입력")
      .button(@click="getSiteContents") Get Site Contents!
      .viewer(v-html="siteContent")
</template>

<script>

export default {
  name: 'WebCrawler',
  data() {
    return {
      siteContent: ''
    };
  },
  methods: {
    getSiteContents() {
      this.$http.get();
    }
  }
};
</script>

<style scoped lang="sass">

</style>
