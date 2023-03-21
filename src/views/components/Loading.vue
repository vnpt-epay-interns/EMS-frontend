<template>
  <div class="loading_container">
    <!-- <span class="loader"></span> -->
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loading_container {
  // position: fixed;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // z-index: 999;
  // background: red;
  background: #000000b5;
  z-index: 1001;
  // background: red;

  // .loader {
  //     width: 48px;
  //     height: 48px;
  //     border: 5px solid #FFF;
  //     border-bottom-color: transparent;
  //     border-radius: 50%;
  //     animation: rotation 1s linear infinite;
  //     z-index: 1000;
  // }

  // @keyframes rotation {
  //     0% {
  //         transform: rotate(0deg);
  //     }

  //     100% {
  //         transform: rotate(360deg);
  //     }
  // }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
}
</style>
