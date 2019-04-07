<template>
  <div id="app">
    <div id="nav">
      <div class="nav-inner">
        <div class="drag-area">
          <img src="./assets/master.svg" height="32" width="20">
          <span class="app-title">优化大师</span>
          <span class="space-holder"></span>
        </div>
        <div class="control">
          <img class="mini" src="./assets/mini.svg"
            @mousemove="miniHover($event)"
            @mouseleave="miniLeave($event)"
            @click="miniClick">
        </div>
      </div>
    </div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<script>
const {ipcRenderer: ipc} = require('electron');
const _assets_mini_svg = require('./assets/mini.svg')
const _assets_mini_hover_svg = require('./assets/mini_hover.svg')

export default {
  methods: {
    miniHover(e) {
      e.target.src =  _assets_mini_hover_svg
    },
    miniLeave(e) {
      e.target.src = _assets_mini_svg
    },
    miniClick() {
      ipc.send('mini')
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  -webkit-user-select: none;
  font-family: "Noto Sans CJK SC";
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-inner {
    display: flex;
    width: 100%;
    box-sizing: padding-box;
    padding-top: 3px;
    padding-left: 5px;
    padding-right: 15px;
    .drag-area {
      display: flex;
      align-items: center;
      -webkit-app-region: drag;
      width: calc(100% - 80px);
      .app-title {
        margin-left: 5px;
        color: #2c3e50;
      }
      .space-holder {
        width: calc(100% - 127px);
      }
    }
    .control {
      padding-top: 2px;
      img:hover {
        color: red;
      }
    }
  }
}
</style>
