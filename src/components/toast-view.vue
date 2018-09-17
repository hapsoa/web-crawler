<template lang="pug">
  .container
    #snackbar.show(v-for="(toast, index) in toasts"
         v-bind:color="toast.color" v-bind:key="index") {{ toast.content }}
</template>

<script>
import _ from 'lodash';

export default {
  name: 'toast-view',
  data() {
    return {
      toasts: []
    };
  },
  methods: {
    generateToast(options) {
      const toast = {
        content: options.toastContent
      };

      if (_.isNil(options.color)) {
        toast.color = 'black';
      } else {
        toast.color = options.color;
      }

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts.shift();
      }, 2000);
    }
  }
};
</script>

<style scoped lang="sass">
.container
  position: fixed
  /* Sit on top of the screen
  z-index: 1
  /* Add a z-index if needed
  left: 50%
  /* Center the snackbar
  bottom: 30px
  /* 30px from the bottom

/* The snackbar - position it at the bottom and in the middle of the screen

#snackbar
  visibility: hidden
  /* Hidden by default. Visible on click
  min-width: 250px
  /* Set a default minimum width
  max-width: 250px
  margin-left: -125px
  /* Divide value of min-width by 2
  background-color: #333
  /* Black background color
  color: #fff
  /* White text color
  text-align: center
  /* Centered text
  border-radius: 2px
  /* Rounded borders
  padding: 16px
  /* Padding
  margin-top: 10px
  &.show
    visibility: visible
    /* Show the snackbar
    /*     Add animation: Take 0.5 seconds to fade in and out the snackbar.
     * However, delay the fade out process for 2.5 seconds
    -webkit-animation: fadein 0.5s
    animation: fadein 0.5s
  &[color="red"]
    background-color: red
  &[color="green"]
    background-color: green

/* Show the snackbar when clicking on a button (class added with JavaScript)

/* Animations to fade the snackbar in and out
@-webkit-keyframes fadein
  from
    bottom: 0
    opacity: 0
  to
    bottom: 30px
    opacity: 1


@keyframes fadein
  from
    bottom: 0
    opacity: 0
  to
    bottom: 30px
    opacity: 1


@-webkit-keyframes fadeout
  from
    bottom: 30px
    opacity: 1
  to
    bottom: 0
    opacity: 0


@keyframes fadeout
  from
    bottom: 30px
    opacity: 1
  to
    bottom: 0
    opacity: 0
</style>
