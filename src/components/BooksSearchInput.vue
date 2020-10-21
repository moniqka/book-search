<template>
  <div class="container">
    <form class="container" @submit.prevent="">
      <label for="search-box">
        Title
      </label>
      <input
        type="text"
        name="search-box"
        v-model="title"
        autocomplete="off"
        placeholder="type in book title"
      />
      <button type="submit" @click="searchBookByTitle(word)" class="button">CHECK</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BooksSearchInput",
  data() {
    return {
      title: ""
    };
  },
  computed: {
    word() {
      return this.title.toLowerCase().replace(/[\W_]/g, "");
    }
  },
  methods: {
    ...mapActions(["searchBookByTitle"]),
    searchBook() {
      this.searchBookByTitle(this.title);
    }
  }
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
