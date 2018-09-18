<template lang="pug">
  .yes
    .asdf asdf
    ui-dialog(ref="defaultDialog")
</template>

<script>
import Vue from 'vue';

export default {
  name: 'dialogTestPage',
  async mounted() {
    setTimeout(() => {
      this.$refs.defaultDialog.open({
        title: '데이터 삭제',
        text: '정말 데이터를 삭제하시겠습니까?',
        positive: '삭제',
        negative: '취소',
        onPositive: () => {
          // console.log('postive');
        },
        onNegative: () => {
          // console.log('negative');
        }
      });
    }, 2000);


    Vue.prototype.$dialog = this.$refs.defaultDialog;
  }
};
</script>

<style scoped lang="sass">

</style>
