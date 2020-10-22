<template>
  <div class="container">
    <form class="form-container" @submit.prevent="">
      <label for="search-box">
        Search by:
      </label>
      <select id="phrase">
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <input
        type="search"
        name="search-box"
        v-model="title"
        autocomplete="off"
        placeholder="type in book title"
      />
      <button type="submit" @click="searchBook(title)" class="button">
        SEARCH
      </button>
    </form>
    <BooksSearchOptions
      :filterByLang="filterByLang"
      :filterByDate="filterByDate"
      :filterByAuthor="filterByAuthor"
    />
    <BooksResults :bookList="list" />
  </div>
</template>

<script>
import BooksResults from "@/components/BooksResults.vue";
import BooksSearchOptions from "@/components/BooksSearchOptions.vue";
import api from "@/api/booksAPI";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BooksSearchComponent",
  components: {
    BooksResults,
    BooksSearchOptions
  },
  data() {
    return {
      title: "",
      list: []
    };
  },
  computed: {
    ...mapGetters(["booksByTitle"])
  },
  methods: {
    ...mapActions(["searchBookByTitle"]),
    async searchBook(title) {
      try {
        const element = document.getElementById("phrase").value;
        const data =
          element === "title"
            ? await api.searchBookByTitle(title)
            : await api.searchBookByAuthor(title);
        if (data.status !== 200) {
          throw new Error();
        }
        const books = data.data.items;
        this.list = books;
        this.searchBookByTitle(books);
        console.log(books);
      } catch (e) {
        console.log("error on catch");
      }
    },
    filterByLang() {
      const element = document.getElementById("language");
      const languageName = element.value;
      const result = this.booksByTitle.filter(obj => {
        //filters results by checking if input value equals API data value
        return obj.volumeInfo.language === languageName;
      });
      this.list = result;
    },
    filterByDate() {
      const element = document.getElementById("date");
      const year = element.value.toString(); //converted as input data is a string
      const result = this.booksByTitle.filter(obj => {
        //returns only first four numbers from date and checks if it's equal to searched by date input
        return obj.volumeInfo.publishedDate.slice(0, 4) === year;
      });
      this.list = result;
    },
    filterByAuthor(name) {
      // let element = document.getElementById("name");
      const result = this.booksByTitle.filter(obj => {
        //converts arrays to string (possible 2 or more authors)
        let authorList = obj.volumeInfo.authors.toString().toLowerCase();
        //returns only records that includes typed word
        return authorList.includes(name.toLowerCase());
      });
      this.list = result;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-container {
  width: 70%;
  margin: auto;
  margin-top: 5%;
}
</style>
