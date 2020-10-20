<template>
  <div class="container">
    <form class="container" @submit.prevent="">
      <label for="search-box">
        Title
      </label>
      <input
        type="text"
        name="search-box"
        @focus="clearText"
        autocomplete="off"
        placeholder="type in book title"
      />
      <button type="submit" class="button">CHECK</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "BooksSearchInput"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
