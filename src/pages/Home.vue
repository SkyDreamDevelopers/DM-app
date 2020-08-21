<template>
  <q-layout>
    <div>
      <q-banner class="bg-warning text-white">
       <span class="font-size-1 center vertical-middle">Welcome</span>  <q-chip color="deep-orange" text-color="white" icon="email">
        {{ userName }}
      </q-chip>
      </q-banner>
    </div>
  </q-layout>
</template>

<script>

import { mapState, mapGetters } from "vuex";



export default {
  name: "Home",
  computed: {
      ...mapState('Auth', ["userName"])
  }
};
</script>

<style scoped>
.font-size-1 {
    font-size: 1.2rem;
   
}
</style>
