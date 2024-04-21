import { createStore } from "vuex";
import axios from "axios";

const API_KEY =
  "w8pmhthc8az3k0ay144ghvfzy8cyx8hbq7c1eptdxp5ur6aawuk2kvfdlyob5ggwbhghsg";

export default createStore({
  state: {
    loading: false,
    error: null,
    data: [],
    cache: {},
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, error) {
      state.error = error;
    },
    setData(state, data) {
      state.data = data;
    },
    addToCache(state, { key, response }) {
      state.cache[key] = response;
    },
  },
  actions: {
    async fetchData({ commit, state }, { type, url }) {
      const cacheKey = `${type}-${url}`;

      commit("setLoading", true);
      commit("setError", null);

      if (state.cache[cacheKey]) {
        commit("setData", state.cache[cacheKey]);
        commit("setLoading", false);
        return;
      }

      try {
        const response = await axios.get(
          `https://www.who-hosts-this.com/API/${
            type === "Hosting Data" ? "Host" : "Tech"
          }?key=${API_KEY}&url=${url}`,
        );
        if (response.status === 200 && response.data.result.code === 200) {
          commit("setData", response.data.results);
          commit("addToCache", {
            key: cacheKey,
            response: response.data.results,
          });
        } else {
          commit(
            "setError",
            `Error ${response.data.result.code}: ${response.data.result.msg}`,
          );
        }
      } catch (error) {
        commit("setError", error.message);
      }
      commit("setLoading", false);
    },
  },
  modules: {},
});
