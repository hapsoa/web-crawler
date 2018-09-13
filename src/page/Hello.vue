<template lang="pug">
  progress-circle
</template>

<script>

import { store } from '../vuex/store';

export default {
  name: 'HelloWorld',
  store,
  data() {
    return {
      msg: 'Welcome to Hanu Vue Template',
      posX: 0,
      posY: 0
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    getPosition() {
      return {
        left: `${this.posX}px`,
        top: `${this.posY}px`
      };
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment', { inc: 1 });
    },
    decrement() {
      this.$store.commit('increment', { inc: -1 });
    },
    async mousemoved() {
      console.log(this);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
