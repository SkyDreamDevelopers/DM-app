<template>
<div>
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="insert_chart_outlined" color="deep-orange-6" /><span class="font-size-1 center vertical-middle q-pl-sm">Welcome to Google Analytics</span>
      </template> 
    </q-banner>
    <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
</div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
import { mapActions, mapState } from "vuex";


export default {
  name: "GoogleLogin",
  directives: {
    GoogleSignInButton
  },
  data(){
    return {
      clientId: '1014647776074-ejb2h81ibhdc17sf5ejgocu53o56fapi.apps.googleusercontent.com'
    }
  },
  mounted: {
    init() {
  window.gapi.load('auth2', function(response) {
    
  });
}
  },
  computed: {},
  methods: {
     OnGoogleAuthSuccess (idToken) {
     console.log(idToken);
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
};
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.font-size-1 {
  font-size: 1.2rem;
}
#auth-button {
  cursor: pointer;
}
#view-selector {
  display: flex;
}
</style>
