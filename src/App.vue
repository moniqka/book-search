<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/search">Search Books</router-link>
    </div>
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
