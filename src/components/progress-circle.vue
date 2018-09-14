<template>
  <div class="loader" v-if="isShowed">
    <div class="inner one"></div>
    <div class="inner two"></div>
    <div class="inner three"></div>
  </div>
</template>

<script>
export default {
  name: 'progress-circle',
  data() {
    return {
      isShowed: true
    };
  },
  methods: {
    showProgress() {
      // 버튼이 프로그레스를 켜고 끌 수 있다.
      // 프로그레스를 켜고 끄려면 display: none 을 설정해줘야 할 것이다.
      // v-if 를 true false 를 지정해주면 가능해보인다.
      this.isShowed = true;
    },
    closeProgress() {
      this.isShowed = false;
    }
  }
};
</script>

<style scoped>
  html {
    height: 100%;
  }

  .loader {
    position: absolute;
    top: calc(50% - 32px);
    left: calc(50% - 32px);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    perspective: 800px;
  }

  .inner {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .inner.one {
    left: 0%;
    top: 0%;
    animation: rotate-one 1s linear infinite;
    border-bottom: 3px solid #333;
  }

  .inner.two {
    right: 0%;
    top: 0%;
    animation: rotate-two 1s linear infinite;
    border-right: 3px solid #333;
  }

  .inner.three {
    right: 0%;
    bottom: 0%;
    animation: rotate-three 1s linear infinite;
    border-top: 3px solid #333;
  }

  @keyframes rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
</style>
