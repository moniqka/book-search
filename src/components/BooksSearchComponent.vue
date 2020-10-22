<template>
  <div class="container">
    <form class="search-panel" @submit.prevent="">
      <label for="search-box">
        Search by:
      </label>
      <select id="phrase" class="search-panel__box">
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <input
        type="search"
        name="search-box"
        v-model="text"
        autocomplete="off"
        placeholder="type in title/author"
        class="search-panel__input"
      />
      <button
        type="submit"
        @click="searchBook(title)"
        class="search-panel__button"
      >
        SEARCH
      </button>
      <button @click="filtersOn = !filtersOn" class="search-panel__filter">
        {{ filterButtonText }}
      </button>
    </form>
    <BooksSearchFilters
      v-show="filtersOn"
      :filterByLang="filterByLang"
      :filterByDate="filterByDate"
      :filterByAuthor="filterByAuthor"
    />
    <BooksResults :bookList="list" />
  </div>
</template>

<script>
import BooksResults from "@/components/BooksResults.vue";
import BooksSearchFilters from "@/components/BooksSearchFilters.vue";
import api from "@/api/booksAPI";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BooksSearchComponent",
  components: {
    BooksResults,
    BooksSearchFilters
  },
  data() {
    return {
      text: "",
      list: [],
      filtersOn: false
    };
  },
  computed: {
    ...mapGetters(["booksByTitle"]),
    filterButtonText() {
      return this.filtersOn ? "Hide filters" : "Show filters";
    }
  },
  methods: {
    ...mapActions(["searchBookByTitle"]),
    async searchBook(text) {
      if (this.text) {
        try {
          const element = document.getElementById("phrase").value;
          const data =
            element === "title"
              ? await api.searchBookByTitle(text)
              : await api.searchBookByAuthor(text);
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
<style lang="scss" scoped>
.search-panel {
  width: 70%;
  margin: auto;
  margin-top: 5%;
  label {
    font-weight: 700;
  }
  &__box {
    height: 30px;
    border-radius: 5px;
    border: 1px solid gainsboro;
  }
  &__input {
    margin: 0 10px;
    padding: 5px;
    width: 20vw;
    height: 30px;
    border-radius: 5px;
    border: 1px solid gainsboro;
  }
  &__button {
    height: 30px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    background-color: #42b983;
    color: white;
    padding: 0 10px;
  }
  &__filter {
    margin-left: 20px;
    font-size: 14px;
    height: 30px;
    width: 95px;
    border-radius: 5px;
    border: 1px solid gainsboro;
    background-color: white;
  }
}
select {
  margin-left: 10px;
}
</style>
