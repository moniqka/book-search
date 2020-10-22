<template>
  <div id="app">
    <header>
      <h1 class="header">SEARCH BOOK APP</h1>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
//////////////// MAIN RULES ////////////////
*,
*::after,
*::before {
  box-sizing: border-box;
  outline: none;
}
html {
  height: 100%;
}
body {
  font-weight: normal;
  min-height: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  font-size: 60px;
  margin: 0;
  padding: 50px;
  @media screen and (max-width: 700px) {
    padding: 40px;
    font-size: 35px;
    padding-bottom: 10px;
  }
}
</style>
