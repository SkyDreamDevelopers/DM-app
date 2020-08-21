<template>
      <div>
        <div>
       <h3>Hello Analytics Reporting API V4</h3>
       <button @click="googleLogin">Get data</button>
          <section id="auth-button"></section>
          <section id="view-selector"></section>
          <section id="timeline"></section>
        </div>
       <div>
         <button @click="googleLogout">Sign out</button>
  </div>
      </div>
</template>

<script>
import { mapActions } from 'vuex'
import Google from './google'

export default {
  name: 'GoogleLogin',

  methods: {
    ...mapActions('Google', ['googleLogin', 'googleLogout'])
  }
}

</script>

<style>
.font-size-1 {
    font-size: 1.2rem;
   
}
</style>