import { createStore } from 'vuex';

export default createStore({
  state: {
    result: ''
  },
  mutations: {
    SET_RESULT(state, value) {
      state.result += value;
    },
    CLEAR_RESULT(state) {
      state.result = '';
    },
    CALCULATE_RESULT(state) {
      try {
        state.result = eval(state.result);
      } catch (error) {
        state.result = 'Error!';
      }
    },
  },
  actions: {
    appendToResult({ commit }, value) {
      commit('SET_RESULT', value);
    },
    clearResult({ commit }) {
      commit('CLEAR_RESULT');
    },
    calculateResult({ commit }) {
      commit('CALCULATE_RESULT');
    },
  },
  getters: {
    result: state => state.result,
  },
});
