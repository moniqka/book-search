<template>
  <div class="container">
    <h1 v-if="bookList">RESULTS</h1>
    <ul class="book-list">
      <li v-for="(book, key) in bookList" :key="key" class="book-container">
        <figure class="book-container__image-container">
          <img
            :src="bookCover(book)"
            class="book-container__image"
            :alt="book.volumeInfo.title"
          />
        </figure>
        <span>
          <h3>{{ book.volumeInfo && book.volumeInfo.title }}</h3>
          <p class="book-container__description">
            {{ book.volumeInfo && book.volumeInfo.description }}
          </p>
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
  // computed: {
  //   ...mapGetters(["booksByTitle"]),
  // },
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

<style lang="scss" scoped>
.book-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // flex-direction: column;
  width: 75%;
  margin: auto;
  padding: 0;
}
.book-container {
  display: flex;
  flex-basis: 45%;
  height: 200px;
  padding: 20px;
  // &:not(:first-child):not(:nth-child(2)) {
  //   border-top: 2px solid gainsboro;
  // }
  &:nth-child() {
    figure {
      border-left: 2px solid gainsboro;
    }
  }
  // padding-left: 0;
  &__image-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    margin: 0 10px;
    border-left: 2px solid gainsboro;
  }
  &__image {
    max-height: 100%;
    width: auto;
    &:hover {
      transform: scale(1.2);
      cursor: zoom-in;
    }
  }
  h3 {
    text-align: left;
  }
  &__description {
    display: -webkit-box;
    // max-height: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-align: left;
  }
}
</style>
