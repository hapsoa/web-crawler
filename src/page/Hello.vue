<template lang="pug">
  .root
    bootstrap-custom-button(v-on:click.native="showProgress", :buttonName="'show progress'")
    bootstrap-custom-button(v-on:click.native="closeProgress", :buttonName="'close progress'")
    input(type="text" v-model="toastContent")
    bootstrap-custom-button(v-on:click.native="generateToast", :buttonName="'generate toast'")
    progress-circle(ref="progressCircle")
    //toast
    toast2(ref="toast2")
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      toastContent: ''
    };
  },
  methods: {
    showProgress() {
      this.$refs.progressCircle.showProgress();
    },
    closeProgress() {
      this.$refs.progressCircle.closeProgress();
    },
    generateToast() {
      this.$refs.toast2.generateToast(this.toastContent);
      console.log(this.toastContent);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
