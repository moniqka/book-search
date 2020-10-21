<template>
  <div class="container">
    <h1>RESULTS</h1>
    <ul>
      <li v-for="(book, key) in bookList" :key="key">
        <img :src="bookCover(book)" />
        <p>{{ book.volumeInfo && book.volumeInfo.title }}</p>
        <span>
          {{ book.volumeInfo && book.volumeInfo.description }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "BooksSearchInput",
  data() {
    return {
      title: ""
    };
  },
  props: {
    bookList: {
      type: Array,
      defoult: []
    }
  },
  computed: {
    // ...mapGetters(["booksByTitle"]),
  },
  methods: {
    bookCover(book) {
      return book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail ||
            book.volumeInfo.imageLinks.smallThumbnail
        : null;
    }
  }
};
</script>
