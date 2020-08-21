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
  setToken(state, value) {
    state.TOKEN = value;
  }
};

const getters = {};

const actions = {
  googleLogin({}, payload) {
  
    console.log("1");

    gapi.analytics.ready(function() {
      // Step 3: Authorize the user.
      gapi.analytics.auth.authorize({
        container: "auth-button",
        clientid: state.CLIENT_ID
      });

      // Step 4: Create the view selector.
      var viewSelector = new gapi.analytics.ViewSelector({
        container: "view-selector"
      });
     
      // Step 5: Create the timeline chart.
      var timeline = new gapi.analytics.googleCharts.DataChart({
        reportType: "ga",
        query: {
          dimensions: "ga:date",
          metrics: "ga:sessions",
          "start-date": "30daysAgo",
          "end-date": "yesterday"
        },
        chart: {
          type: "LINE",
          container: "timeline"
        }
      });

      // Step 6: Hook up the components to work together.
      gapi.analytics.auth.on("success", function(response) {
        Loading.show();
        console.log(response);
        viewSelector.execute();
        
      });
      
      viewSelector.on("change", function(ids) {
        
        var newIds = {
          query: {
            ids: ids
          }
        };
        timeline.set(newIds).execute();
        setTimeout(function(){
          Loading.hide();
        }, 2000)
      });
      
    });
    
  },

  googleLogout() {
    gapi.analytics.auth.signOut();
    LocalStorage.set("googleLoggedIn", false);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
