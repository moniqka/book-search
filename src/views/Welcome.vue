<template>
  <div class="about">
    <p>This is an about page</p>
    <button>
      <router-link to="/search">Open app</router-link>
    </button>
  </div>
</template>
<style lang="scss" scoped>
button {
  height: 30px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  padding: 0 10px;
  text-transform: uppercase;
}
a:link,
a:visited {
  color: white;
  font-weight: 700;
  text-decoration: none;
}
</style>
