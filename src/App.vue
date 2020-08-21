<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex"

export default {
  name: 'App',
  methods: {
    ...mapActions('Auth', ['handleAuthStateChange'])
  },
  mounted(){
    this.handleAuthStateChange()
  }
}
</script>
