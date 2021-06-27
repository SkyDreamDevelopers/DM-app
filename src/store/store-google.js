import { LocalStorage, Loading } from "quasar";
import { showErrorMessage } from "src/functions/function-errors";

const state = {
  googleLoggedIn: false,
  CLIENT_ID:
    "1014647776074-ejb2h81ibhdc17sf5ejgocu53o56fapi.apps.googleusercontent.com",
    TOKEN: ''
};

const mutations = {
  setGoogleLoggedIn(state, value) {
    state.googleLoggedIn = value;
  },
};

const getters = {

}

const actions = {

}
  


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
