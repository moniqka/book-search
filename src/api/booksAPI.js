import Vue from "vue";
// import store from "@/store";

const api = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKey = "AIzaSyDAOl2SPL_6XN7VsSuOUrJsjQebyl0ozNc";

export default {
  searchBookByTitle(title) {
    return Vue.axios.get(`${api}${title}&key=${APIKey}`);
  }
};
