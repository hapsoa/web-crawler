<template lang="pug">
  .root
    progress-circle(v-if="isShowed")
    toast
    <!--button(type="button") show progress-->
    <!--button(type="button") toast-->
    bootstrap-custom-button(v-on:click.native="showProgress", :buttonName="'show progress'")
    bootstrap-custom-button(:buttonName="'toast'")
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isShowed: true
    };
  },
  methods: {
    showProgress() {
      console.log('aaa');
      // 버튼이 프로그레스를 켜고 끌 수 있다.
      // 프로그레스를 켜고 끄려면 display: none 을 설정해줘야 할 것이다.
      // v-if 를 true false 를 지정해주면 가능해보인다.
      this.isShowed = !this.isShowed;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
