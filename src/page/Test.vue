<template lang="pug">
  .root
    .loading-zone
      input(type=text v-model="loadingMessage" placeholder="로딩 텍스트")
      bootstrap-button(v-on:click.native="openLoading", :buttonName="'show progress'")
      bootstrap-button(v-on:click.native="closeLoading", :buttonName="'close progress'")
    .toast-manage-zone
      input(type="text" v-model="toastContent" placeholder="토스트 메세지")
      bootstrap-button(v-on:click.native="generateToast", :buttonName="'generate toast'")
    .dialog-zone
      input(type="text" v-model="dialogTitle" placeholder="제목")
      input(type="text" v-model="dialogText" placeholder="내용")
      input(type="text" v-model="dialogConfirm" placeholder="확인")
      input(type="text" v-model="dialogCancel" placeholder="취소")
      bootstrap-button(v-on:click.native="openDialog", :buttonName="'open dialog'")
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      loadingMessage: '',
      toastContent: '',
      dialogTitle: '',
      dialogText: '',
      dialogConfirm: '',
      dialogCancel: ''
    };
  },
  methods: {
    openLoading() {
      this.$loading.open({
        loadingMessage: this.loadingMessage
      });
    },
    closeLoading() {
      this.$loading.close();
    },
    generateToast() {
      this.$toast.generateToast({
        toastContent: this.toastContent
      });
    },
    openDialog() {
      this.$dialog.open({
        title: this.dialogTitle,
        text: this.dialogText,
        positive: this.dialogConfirm,
        negative: this.dialogCancel,
        onPositive: () => {
        },
        onNegative: () => {
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
