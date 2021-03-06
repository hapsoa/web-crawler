<template lang="pug">
  section.loaders(v-if="active")
    span.loader.loader-quart
    |  {{ loadingMessage }}

</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'loading-progress',
  props: {
    loadingMessage: {
      type: String,
      default: 'Loading...'
    }
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    open(options) {
      if (_.isNil(options)) { return; }

      this.active = true;
      this.loadingMessage = options.loadingMessage;
    },
    close() {
      this.active = false;
    }
  }
};
</script>

<style scoped lang="scss">
  // $Var
  $bg-color-1: #fff;
  $bg-color-2: #2d95bf;
  $bg-color-3: #f15a5a;
  $bg-color-4: #955ba5;
  $color: #4eba6f;

  // $Mixin
  @mixin size($width , $height: $width ) {
    width: $width;
    height: $height;
  }

  @mixin fontsize($size: 24, $base: 16) {
    font-size: $size + px;
    font-size: ($size / $base) * 1rem;
  }

  @mixin absPosition ($top: auto, $right: auto, $bottom: auto, $left: auto) {
    position: absolute;
    top: $top;
    right: $right;
    bottom: $bottom;
    left: $left;
  }

  @mixin opacity($opacity) {
    opacity: $opacity;
    $opacityIE: $opacity * 100;
    filter: alpha(opacity=$opacityIE);
  }

  @mixin animation($animation...) {
    -o-animation: $animation;
    -moz-animation: $animation;
    -webkit-animation: $animation;
    animation: $animation;
  }
  /* $Base */
  body {
    font-family: sans-serif;
    @include fontsize(40);
    color: $color;
    text-align: center;
  }

  .loaders {
    height: 300px;
    line-height: 300px;
    background-color: $bg-color-1;
  }

  .loaders-bg-2 {
    background-color: $bg-color-2;
  }
  .loaders-bg-3 {
    background-color: $bg-color-3;
  }
  .loaders-bg-4 {
    background-color: $bg-color-4;
  }

  .loader {
    display: inline-block;
    position: relative;
    @include size(50px);
    vertical-align: middle;
  }

  /*$Loader Quadrant*/
  .loader-quart {
    border-radius: 50px;
    border: 6px solid rgba(0, 255, 0, 0.4);
    &:after {
      content: "";
      @include absPosition(-6px, -6px, -6px, -6px);
      border-radius: 50px;
      border: 6px solid transparent;
      border-top-color: $color;
      @include animation(spin 1s linear infinite);
    }
  }

  /*$Loader Double circle*/
  .loader-double {
    border-radius: 50px;
    border: 6px solid transparent;
    border-top-color: $color;
    border-bottom-color: $color;
    @include animation(spin 1.5s linear infinite);
    &:before,
    &:after {
      content: "";
      @include absPosition(5px, 5px, 5px, 5px);
      border-radius: 50px;
      border: 6px solid transparent;
      border-top-color: $color;
      border-bottom-color: $color;
      @include opacity(0.6);
      @include animation(spinreverse 2s linear infinite);
    }
    &:before {
      top: 13px;
      left: 13px;
      bottom: 13px;
      right: 13px;
      @include animation(spinreverse 3s linear infinite);
    }
  }

  /*$Loader Multiple circle*/

  .loader-circles {
    border-radius: 50px;
    border: 3px solid transparent;
    border-top-color: #fff;
    @include animation(spin 1s linear infinite);
    &:before,
    &:after {
      content: "";
      @include absPosition(5px, 5px, 5px, 5px);
      border-radius: 50px;
      border: 3px solid transparent;
      border-top-color: $color;
      @include opacity(0.8);
      @include animation(spinreverse 5s linear infinite);
    }
    &:before {
      top: 12px;
      left: 12px;
      bottom: 12px;
      right: 12px;
      @include animation(spinreverse 10s linear infinite);
    }
  }

  /*$Loader Bars*/

  .loader-bars:before,
  .loader-bars:after,
  .loader-bars span {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    @include size(10px, 30px);
    background-color: $color;
    @include animation(grow 1.5s linear infinite);
  }

  .loader-bars:after {
    left: 15px;
    @include animation(grow 1.5s linear -0.5s infinite);
  }

  .loader-bars span {
    left: 30px;
    @include animation(grow 1.5s linear -1s infinite);
  }

  @-webkit-keyframes grow {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      opacity: 0;
    }
    50% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      opacity: 0;
    }
  }

  @keyframes grow {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      opacity: 0;
    }
    50% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      opacity: 0;
    }
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      tranform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      tranform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      tranform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      tranform: rotate(360deg);
    }
  }

  @-webkit-keyframes spinreverse {
    0% {
      -webkit-transform: rotate(0deg);
      tranform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      tranform: rotate(-360deg);
    }
  }

  @keyframes spinreverse {
    0% {
      -webkit-transform: rotate(0deg);
      tranform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      tranform: rotate(-360deg);
    }
  }

</style>
