<template>
  <div class="logo">
    <div class="top"/>
    <div class="left"/>
    <div class="right"/>
  </div>
</template>

<style lang="less">
  .logo {
    width: 4rem;
    height: 4rem;
    position: relative;


    & > div {
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 1.5rem;
      top: 1.5rem;
      transform-origin: 50% 50%;
      &:before {
        width: 1rem;
        height: 1rem;
        background-color: red;
        border-radius: 50%;
        display: block;
        content: ' ';
        transform-origin: 50% 50%;
        transform: translate(0, -.35rem);
        opacity: .75;
      }
    }

    .top {
      transform: rotate(0deg);
      &:before {
        background-color: #00ff9e;//#ffa600;
      }
    }

    .right {
      transform: rotate(120deg);
      &:before {
        background-color: #00ff9e;//#c300ff;
      }
    }

    .left {
      transform: rotate(240deg);
      &:before {
        background-color: #00ff9e;
      }
    }
  }
</style>
