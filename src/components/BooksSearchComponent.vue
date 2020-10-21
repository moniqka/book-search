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
      <button type="submit" @click="searchBook(title)" class="button">CHECK</button>
    </form>
    <BooksResults :bookList="list" />
  </div>
</template>

<script>
import BooksResults from "@/components/BooksResults.vue";
import api from "@/api/booksAPI";
// import { mapActions } from "vuex";

export default {
  name: "BooksSearchComponent",
  components: {
    BooksResults
  },
  data() {
    return {
      title: "",
      list: []
    };
  },
  computed: {
    word() {
      return this.title.toLowerCase().replace(/[\W_]/g, "");
    }
  },
  methods: {
    // ...mapActions(["searchBookByTitle"]),
    async searchBook(title) {
      try {
        const data = await api.searchBookByTitle(title);
        if (data.status !== 200) {
          throw new Error();
        }
        const books = data.data.items;
        this.list = books;
        console.log(books);
      } catch (e) {
        console.log("error on catch");
      }
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
