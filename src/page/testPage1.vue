<template lang="pug">
  .root
    .asdf(@click="haha") asdf
</template>

<script>
export default {
  name: 'testPage1',
  methods: {
    haha() {
      console.log('haha');
      this.$dialog.open({
        title: '데이터 삭제',
        text: '오오올 정말 데이터를 삭제하시겠습니까?',
        positive: '삭제',
        negative: '취소',
        onPositive: () => {
          console.log('postive');
        },
        onNegative: () => {
          console.log('negative');
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
