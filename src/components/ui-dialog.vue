<template lang="pug">
  .dialog-field(v-if="active")
    .dialog-contents
      .title {{ title }}
      .text {{ text }}
      .commands-group
        .flex-empty
        .command.negative(@click="clickNegative") {{ negative }}
        .command.negative(@click="clickPositive") {{ positive }}
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'ui-dialog',
  props: {},
  data() {
    return {
      active: false,
      title: '',
      text: '',
      positive: '',
      negative: '',
      onPositive: null,
      onNegative: null
    };
  },
  methods: {
    clickPositive() {
      this.active = false;
      if (_.isFunction(this.onPositive)) this.onPositive();
    },
    clickNegative() {
      this.active = false;
      if (_.isFunction(this.onNegative)) this.onNegative();
    },
    /**
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.text
     * @param {String} options.positive
     * @param {String} options.negative
     * @param {Function} options.onPositive
     * @param {Function} options.onNegative
     */
    open(options) {
      if (_.isNil(options)) {
        return;
      }

      this.title = options.title;
      this.text = options.text;
      this.positive = options.positive;
      this.negative = options.negative;
      this.onPositive = options.onPositive;
      this.onNegative = options.onNegative;

      this.active = true;
    }
  }
};
</script>

<style scoped lang="sass">
.dialog-field
  position: fixed
  top: 0
  left: 0
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100vh
  background-color: rgba(0, 0, 0, 0.6)
  > .dialog-contents
    width: 300px
    min-height: 150px
    background-color: white
    padding: 10px
    > .title
      font-weight: 800
    > .text
      font-weight: 400
    > .commands-group
      display: flex
      > .flex-empty
        flex: 1
      > .command
        margin-left: 10px
</style>
