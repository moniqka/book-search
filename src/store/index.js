import Vue from "vue";
import Vuex from "vuex";
// import api from "@/api/booksAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksByTitle: []
  },
  getters: {
    booksByTitle: state => state.booksByTitle
  },
  mutations: {
    SEARCH_BY_TITLE(state, list) {
      state.booksByTitle = list;
    }
  },
  actions: {
    searchBookByTitle({ commit }, list) {
      // try {
      //   const data = await api.searchBookByTitle(list);
      //   if (data.status !== 200) {
      //     throw new Error();
      //   }
      //   const books = data.data.items;
      //   console.log(books);
      commit("SEARCH_BY_TITLE", list);
      // } catch (e) {
      //   console.log("error on catch");
      // }
    }
  },
  modules: {}
});
